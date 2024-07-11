import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  return (
    <nav className="container fixed z-10 py-4">
      <div className="flex justify-between items-center">
        <Button variant="ghost" asChild>
          <Link href="/" className="text-3xl font-bold">
            uma<span className="text-primary">noc</span>
          </Link>
        </Button>
        <ModeToggle />
      </div>
    </nav>
  );
}
