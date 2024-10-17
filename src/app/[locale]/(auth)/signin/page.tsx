import { getCurrentSession } from "@/actions/auth/getCurrentSession";
import SignInForm from "@/components/auth/SignInForm";
import routes from "@/config/routes";
import { redirect } from "@/lib/next-intl/navigation";

export default async function SignInPage() {
  const { user } = await getCurrentSession();
  if (user) {
    redirect(routes.index);
  }
  return <SignInForm />;
}
