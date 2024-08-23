"use client";
import Button from "@/app/_components/shared/Button";
import { Checkbox } from "@/app/_components/shared/CheckBox";
import { Input } from "@/app/_components/shared/Input";

export default function SignInPage() {
  return (
    <div className="flex max-w-6xl border border-foreground bg-background p-5">
      <form className="flex-1 space-y-4">
        <Input />
        <Input />
        <div className="flex items-center gap-2">
          <Checkbox id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <Button>Sign In</Button>
      </form>
      <div className="flex-1"></div>
    </div>
  );
}
