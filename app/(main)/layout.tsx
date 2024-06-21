import "@/app/globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";

export const metaData: Metadata = {
  title: {
    template: "%s | umanoc",
    default: "umanoc",
  },
  description: "Nextjsツールまとめ",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
  );
}
