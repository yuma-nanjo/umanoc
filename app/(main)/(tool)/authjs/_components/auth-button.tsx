import { cn } from "@/lib/utils";
import { useFormStatus } from "react-dom";

const AuthButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className={cn(
        "rounded-md w-full px-12 py-3 text-sm font-medium text-background",
        pending ? "bg-muted-foreground" : "bg-primary"
      )}
    >
      {pending ? "Loading..." : "Sign in"}
    </button>
  );
};

export default AuthButton;
