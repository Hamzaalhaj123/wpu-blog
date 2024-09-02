import routes from "@/config/routes";
import { validateRequest } from "@/lib/auth";
import { redirect } from "@/lib/next-intl/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = await validateRequest();

  if (user) {
    redirect(routes.index);
  }

  return <div className="h-full">{children}</div>;
}
