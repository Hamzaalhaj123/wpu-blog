"use client ";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import { Input } from "../shared/Input";
import { loginSchema, LoginValues } from "@/validators/authvalidator";
import { login } from "@/actions/auth/login";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shared/form";
import Button from "@/components/shared/Button";

export default function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const form = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      usernameOrEmail: "",
      password: "",
    },
  });
  const [isLoading, startTransition] = useTransition();
  async function onSubmit(values: LoginValues) {
    startTransition(async () => {
      setError(null);
      try {
        await login(values);
        console.log(values);
      } catch (error) {
        setError((error as Error).message || "An unexpected error occurred");
        console.error(error);
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          name="usernameOrEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username or Email</FormLabel>
              <FormControl>
                <Input placeholder="Username or Email" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {error && <p className="text-error">{error}</p>}
        <Button
          variant={"default"}
          colour={"secondary"}
          type="submit"
          className="w-full"
          disabled={isLoading}
        >
          Login
        </Button>
      </form>
    </Form>
  );
}
