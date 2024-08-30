"use server";

import { validateRequest, lucia } from "@/lib/auth";
import { cookies } from "next/headers";
import { redirect } from "@/navigation";

export async function logout() {
  const { session } = await validateRequest();
  if (!session) {
    throw new Error("No session found");
  }
  await lucia.invalidateSession(session.id);
  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  return redirect("/login");
}
