"use client";

import { logout } from "@/actions/auth";
import React from "react";

export default function Logout() {
  return (
    <div onClick={() => logout()}>
      <div className="bg-muted-foreground text-background text-sm px-4 py-2 rounded-md cursor-pointer">
        Logout
      </div>
    </div>
  );
}
