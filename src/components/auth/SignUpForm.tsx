"use client";

import { signUp } from "@/actions/auth/signUp";
import Button from "@/components/shared/Button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/shared/Form";
import { Input } from "@/components/shared/Input";
import { PasswordInput } from "@/components/shared/PasswordInput";
import routes from "@/config/routes";
import useServerAction from "@/hooks/utils/useServerAction";
import { Link } from "@/lib/next-intl/navigation";
import { signUpSchema, SignUpValues } from "@/validators/authValidator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function SignUpForm() {
  const [runSignUp, isPending] = useServerAction(signUp);
  const form = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: SignUpValues) {
    await runSignUp(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
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
        <Button type="submit" disabled={isPending}>
          Create account
        </Button>
        <p>
          Already have an account? <Link href={routes.signIn}>Sign in</Link>
        </p>
      </form>
    </Form>
  );
}
