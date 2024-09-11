"use client";

import { signUp } from "@/actions/auth/signup";
import Button from "@/components/shared/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shared/Form";
import { Input } from "@/components/shared/Input";
import { PasswordInput } from "@/components/shared/PasswordInput";
import { signUpSchema, SignUpValues } from "@/validators/authvalidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

export default function SignUpForm() {
  const [error, setError] = useState<string | null>(null);

  const form = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const [isLoading, startTransition] = useTransition();
  async function onSubmit(values: SignUpValues) {
    startTransition(async () => {
      setError(null);
      try {
        await signUp(values);
      } catch (error) {
        setError((error as Error).message || "An unexpected error occurred");
        console.error(error);
      }
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto flex w-full max-w-xl flex-col gap-6 rounded-xl bg-background-lighter p-6"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {error && <p className="text-error">{error}</p>}

        <Button
          variant={"default"}
          colour={"primary"}
          type="submit"
          className="w-fit"
          disabled={isLoading}
        >
          Create account
        </Button>
      </form>
    </Form>
  );
}
