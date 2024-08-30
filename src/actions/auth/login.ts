"use server";
import { lucia } from "@/lib/auth";
import { db } from "../../../../../db";
import {
  loginSchema,
  LoginValues,
} from "../../../../lib/validations/authValidations";
import { verify } from "@node-rs/argon2";
import { isRedirectError } from "next/dist/client/components/redirect";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { users } from "../../../../../db/schema";
import { eq, or } from "drizzle-orm";

export async function login(credentials: LoginValues) {
  let isError = false;
  try {
    const { usernameOrEmail, password } = loginSchema.parse(credentials);

    const existingUser = await db
      .select()
      .from(users)
      .where(
        or(eq(users.name, usernameOrEmail), eq(users.email, usernameOrEmail)),
      );
    if (
      !existingUser.length ||
      !existingUser[0].password ||
      !existingUser[0].email
    ) {
      throw new Error("Incorrect username or email or password");
    }
    const validPassword = verify(existingUser[0].password, password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });
    if (!validPassword)
      return { error: "Incorrect username or email or password" };
    const session = await lucia.createSession(existingUser[0].id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );
  } catch (error) {
    isError = true;
    if (isRedirectError(error)) throw new Error("redirect error");
    console.error(error);
    throw error;
  } finally {
    if (isError === false) return redirect("/");
  }
}
