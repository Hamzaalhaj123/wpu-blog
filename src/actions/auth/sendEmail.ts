"use server";

import VerificationEmail from "@/components/email/VerificationEmail";
import { User } from "@/db/schemas/userTable";
import { Resend } from "resend";

export default async function sendEmail(user: User, verificationCode: string) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: [user.email],
    subject: "Hello world",
    react: VerificationEmail({
      code: verificationCode,
      ...user,
    }) as React.ReactElement,
  });
  console.log(data, error);
}
