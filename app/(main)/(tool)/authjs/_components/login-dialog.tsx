import LoginGithub from "@/components/login-github";
import { Button } from "@/components/ui/button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import LoginForm from "./login-form";

export default function LoginDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Login</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="w-full flex justify-center">
          <section className="flex flex-col w-[400px]">
            <h1 className="text-3xl w-full text-center font-bold mb-6">
              Sign in
            </h1>
            <LoginForm />
            <LoginGithub />
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}
