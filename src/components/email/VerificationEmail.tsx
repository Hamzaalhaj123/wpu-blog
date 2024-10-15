import routes from "@/config/routes";
import { verificationCodeTable } from "@/db/schemas/verificationCodeTable";
import { Link } from "@react-email/components";
import { InferSelectModel } from "drizzle-orm";
import { User } from "lucia";

type VerificationEmailProps = User &
  Pick<InferSelectModel<typeof verificationCodeTable>, "code">; //TODO import the type from the table
export default function VerificationEmail({
  id,
  name,
  code,
}: VerificationEmailProps) {
  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <p>Please verify your email address by clicking the link below.</p>
      <Link
        href={`${process.env.NEXT_PUBLIC_URL}/en/${routes.verify(id.toString(), code)}`}
      >
        Verify Email
      </Link>
    </div>
  );
}
