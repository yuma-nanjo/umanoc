import { auth } from "@/auth";
import Logout from "@/components/logout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LoginDialog from "./login-dialog";

export default async function Navbar() {
  const session = await auth();
  return (
    <nav className="border-b bg-background w-full flex items-center">
      <div className="flex w-full items-center justify-between my-4">
        <Link href="/authjs" className="font-bold">
          Home
        </Link>
        <div className="flex items-center gap-x-5">
          <Link href="/authjs/middleware">Middleware</Link>
          <Link href="/authjs/server">Server</Link>
        </div>

        <div className="flex items-center gap-x-5">
          {!session?.user ? (
            <LoginDialog />
          ) : (
            <>
              <div className="flex items-center gap-x-2 text-sm">
                {session?.user?.name}
                {session?.user?.image && (
                  <Image
                    className="rounded-full"
                    width={30}
                    height={30}
                    alt="User Avatar"
                    src={session?.user?.image || ""}
                  />
                )}

                <Logout />
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
