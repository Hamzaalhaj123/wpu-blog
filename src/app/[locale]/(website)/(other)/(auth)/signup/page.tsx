import { getCurrentSession } from "@/actions/auth/getCurrentSession";
import SignUpForm from "@/components/auth/SignUpForm";
import routes from "@/config/routes";
import { redirect } from "@/lib/next-intl/navigation";

export default async function SignupPage() {
  const { user } = await getCurrentSession();
  if (user) {
    redirect(routes.index);
  }
  return <SignUpForm />;
}
