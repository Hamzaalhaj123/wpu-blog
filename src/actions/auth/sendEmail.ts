"use server";

import VerificationEmail from "@/components/email/VerificationEmail";
import { User } from "lucia";
import { Resend } from "resend";

export default async function sendEmail(user: User, verificationCode: string) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["hamzaalhaj987@gmail.com"],
    subject: "Hello world",
    react: VerificationEmail({
      code: verificationCode,
      ...user,
    }) as React.ReactElement,
  });
}
