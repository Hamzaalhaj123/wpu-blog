import LoginForm from "@/components/auth/LoginForm";
import routes from "@/config/routes";
import { validateRequest } from "@/lib/auth";
import { redirect } from "@/lib/next-intl/navigation";

export default async function LoginPage() {
  const { user } = await validateRequest();
  if (user) {
    redirect(routes.index);
  }
  return <LoginForm />;
}
