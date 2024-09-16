import SignUpForm from "@/components/auth/SignUpForm";
import routes from "@/config/routes";
import { validateRequest } from "@/lib/auth";
import { redirect } from "@/lib/next-intl/navigation";

export default async function SignupPage() {
  const { user } = await validateRequest();
  if (user) {
    redirect(routes.index);
  }
  return <SignUpForm />;
}
