"use server";

import { createSession } from "@/actions/auth/createSession";
import { generateSessionToken } from "@/actions/auth/generateSessionToken";
import { setSessionTokenCookie } from "@/actions/auth/setSessionTokenCookie";
import routes from "@/config/routes";
import { db } from "@/db/db";
import { userTable } from "@/db/schemas/userTable";

import { redirect } from "@/lib/next-intl/navigation";
import { SignInValues, signInSchema } from "@/validators/authValidator";
import { verify } from "@node-rs/argon2";
import { eq, or } from "drizzle-orm";
import { getTranslations } from "next-intl/server";
import { isRedirectError } from "next/dist/client/components/redirect";

export async function signIn(credentials: SignInValues) {
  const t = await getTranslations("AUTH");
  let isError = false;
  try {
    const { usernameOrEmail, password } = signInSchema.parse(credentials);

    const existingUser = await db
      .select()
      .from(userTable)
      .where(
        or(
          eq(userTable.name, usernameOrEmail),
          eq(userTable.email, usernameOrEmail),
        ),
      );

    if (
      !existingUser.length ||
      !existingUser[0].password ||
      !existingUser[0].email
    ) {
      throw new Error(t("invalid_credentials"));
    }
    const validPassword = verify(existingUser[0].password, password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });
    if (!validPassword) throw new Error(t("invalid_credentials"));
    const sessionToken = generateSessionToken();
    const session = await createSession(sessionToken, existingUser[0].id);

    setSessionTokenCookie(sessionToken, session.expiresAt);
  } catch (error) {
    isError = true;
    if (isRedirectError(error)) throw new Error("redirect error");
    console.error(error);
    throw error;
  } finally {
    if (isError === false) return redirect(routes.index);
  }
}
