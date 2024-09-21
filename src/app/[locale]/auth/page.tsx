"use client";
import LoginForm from "@/components/auth/LoginForm";
import SignUpForm from "@/components/auth/SignUpForm";
import Button from "@/components/shared/Button";
import { useState } from "react";

export default function Page() {
  const [method, setMethod] = useState<"login" | "signup">("signup");

  return (
    <div className="flex h-full items-center justify-center">
      <div className="mx-auto flex w-full max-w-xl flex-col gap-6 rounded-xl bg-background-lighter p-6">
        {method === "login" ? <LoginForm /> : <SignUpForm />}
        <div className="flex items-center gap-2">
          <p>
            {method === "login"
              ? "Don't have an account yet?"
              : "Already have an account?"}
          </p>

          <Button
            // variant={"link"}
            // shape={"link"}
            onClick={() => setMethod(method === "login" ? "signup" : "login")}
          >
            {method === "login" ? "Sign Up" : "Login"}
          </Button>
        </div>
      </div>
    </div>
  );
}
