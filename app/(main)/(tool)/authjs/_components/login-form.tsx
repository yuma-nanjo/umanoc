"use client";

import { loginWithCreds } from "@/actions/auth";
import AuthButton from "./auth-button";

const LoginForm = () => {
  return (
    <div>
      <form action={loginWithCreds} className="w-full flex flex-col gap-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-muted-foreground"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            className="mt-1 w-full px-4 p-2 h-10 rounded-md border border-muted-foreground"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-muted-foreground"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            className="mt-1 w-full px-4 p-2 h-10 rounded-md border border-muted-foreground"
          />
        </div>
        <div>
          <AuthButton />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
