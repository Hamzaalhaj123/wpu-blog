"use server";

import { invalidateSession } from "@/actions/auth/invalidateSession";
import routes from "@/config/routes";
import { lucia, validateRequest } from "@/lib/auth";
import { redirect } from "@/lib/next-intl/navigation";
import { cookies } from "next/headers";

export async function logout() {
  const { session } = await validateRequest();
  if (!session) {
    throw new Error("No session found");
  }
  await invalidateSession(session.id);
  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  return redirect(routes.index);
}
