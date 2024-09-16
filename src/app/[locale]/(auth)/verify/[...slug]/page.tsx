import routes from "@/config/routes";
import { db } from "@/db/db";
import { users, verificationCodes } from "@/db/schema";
import { validateRequest } from "@/lib/auth";
import { redirect } from "@/lib/next-intl/navigation";
import { and, eq } from "drizzle-orm";
import { notFound } from "next/navigation";

export default async function page({ params }: { params: { slug: string[] } }) {
  const { user, session } = await validateRequest();
  console.log(params);
  if (params.slug.length !== 2) {
    notFound();
  }
  if (!user) {
    throw new Error("Not Authorized");
  }
  if (user.isVerified) {
    redirect(routes.index);
  }

  const userId = +params.slug[0];
  const verificationCode = params.slug[1];

  const dbCode = await db
    .select()
    .from(verificationCodes)
    .where(
      and(
        eq(verificationCodes.id, userId),
        eq(verificationCodes.code, verificationCode),
      ),
    );

  if (dbCode.length) {
    await db.transaction(async (trx) => {
      Promise.all([
        trx.update(users).set({ isVerified: true }).where(eq(users.id, userId)),
        trx.delete(verificationCodes).where(eq(verificationCodes.id, userId)),
      ]);
    });
  }
  return <div>{userId + "-" + verificationCode}</div>;
}
