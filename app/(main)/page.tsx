import { Button } from "@/components/ui/button";
import { tools } from "@/lib/tools";
import Link from "next/link";

export default function MainPage() {
  return (
    <div className="flex gap-2">
      {tools.map(({ name, href, Icon }) => (
        <Button variant="outline" key={name}>
          <Link href={href} className="flex items-center gap-2">
            <Icon className="size-4 text-primary" />
            {name}
          </Link>
        </Button>
      ))}
    </div>
  );
}
