"use client";

import { login } from "@/actions/auth";
import { FaGithub } from "react-icons/fa";

export default function LoginGithub() {
  return (
    <div
      onClick={() => {
        login("github");
      }}
      className="w-full gap-4 hover:cursor-pointer mt-6 h-12 bg-foreground rounded-md p-4 flex justify-center items-center"
    >
      <FaGithub className="text-background" />
      <p className="text-background">Login with Github</p>
    </div>
  );
}
