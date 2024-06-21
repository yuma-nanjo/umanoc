"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { usePathname } from "next/navigation";

export default function ToolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="min-h-[90vh] rounded-lg border flex flex-col mt-2">
      <div className="flex justify-between p-4 bg-muted-foreground/10 border-b items-center">
        <h2 className="text-lg font-bold tracking-wider">{pathname}</h2>
        <ModeToggle />
      </div>
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
}
