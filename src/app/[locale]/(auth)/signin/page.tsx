import SignInForm from "@/components/auth/SignInForm";
import routes from "@/config/routes";
import { validateRequest } from "@/lib/auth";
import { redirect } from "@/lib/next-intl/navigation";

export default async function SignInPage() {
  const { user } = await validateRequest();
  if (user) {
    redirect(routes.index);
  }
  return <SignInForm />;
}
