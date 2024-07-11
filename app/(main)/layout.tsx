import "@/app/globals.css";
import { auth } from "@/auth";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";
import { SessionProvider } from "next-auth/react";

export const metaData: Metadata = {
  title: {
    template: "%s | umanoc",
    default: "umanoc",
  },
  description: "Nextjsツールまとめ",
};

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="ja" suppressHydrationWarning>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="pt-20 container">{children}</main>
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
