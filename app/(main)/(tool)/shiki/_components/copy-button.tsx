"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";

export default function CopyButton({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  return (
    <Button
      onClick={() => {
        navigator.clipboard.writeText(text);
      }}
      size="icon"
      className={cn("size-7", className)}
      variant="outline"
    >
      <Copy size={14} />
      <span className="sr-only">コピー</span>
    </Button>
  );
}
