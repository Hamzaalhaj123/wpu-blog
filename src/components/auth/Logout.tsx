"use client";
import { logout } from "@/actions/auth/logout";
import Button from "@/components/shared/Button";
import { useSession } from "@/components/wrappers/SessionProvider";

export default function Logout() {
  const { session } = useSession();

  return session ? <Button onClick={() => logout()}>Logout</Button> : null;
}
