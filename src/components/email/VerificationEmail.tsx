import routes from "@/config/routes";
import { User } from "@/db/schemas/userTable";
import { VerificationCode } from "@/db/schemas/verificationCodeTable";
import { Link } from "@react-email/components";

type VerificationEmailProps = User & Pick<VerificationCode, "code">; //TODO import the type from the table
export default function VerificationEmail({
  code,
  id,
  name,
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
