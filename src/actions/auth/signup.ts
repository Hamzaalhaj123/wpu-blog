"use server";
import { hash } from "@node-rs/argon2";

import { generateId, generateIdFromEntropySize } from "lucia";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect";
import { eq, or } from "drizzle-orm";
import { signUpSchema, SignUpValues } from "@/validators/authvalidator";
import { db } from "@/db/db";
import { users } from "@/db/schema";
import { lucia } from "@/lib/auth";

export async function signUp(credentials: SignUpValues) {
  let isError = false;

  try {
    const { email, username, password } = signUpSchema.parse(credentials);
    const passwordHash = await hash(password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });
    console.log("passwordHash", passwordHash);

    const existingUser = await db
      .select()
      .from(users)
      .where(or(eq(users.email, email), eq(users.name, username)));

    console.log("existing user", existingUser);

    if (existingUser.length)
      throw new Error("Username or email already exists");
    const insertedUserId = await db
      .insert(users)
      .values({
        email,
        name: username,
        password: passwordHash,
      })
      .returning({ userId: users.id })
      .then((res) => res[0]);

    console.log("ID IS  ", insertedUserId);

    const session = await lucia.createSession(insertedUserId.userId, {});
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
