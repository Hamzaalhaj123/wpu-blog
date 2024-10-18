"use client";
import { logout } from "@/actions/auth/logout";
import Button from "@/components/shared/Button";
import { useSession } from "@/components/wrappers/SessionProvider";
import routes from "@/config/routes";
import { Link } from "@/lib/next-intl/navigation";

export default function Logout() {
  const { session } = useSession();

  return session ? (
    <Button onClick={() => logout()}>Logout</Button>
  ) : (
    <Button asChild>
      <Link href={routes.signUp}>Sign up</Link>
    </Button>
  );
}
