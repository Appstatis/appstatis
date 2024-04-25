import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <header className="flex h-16 w-full items-center justify-between px-4 md:px-6">
      <Link className="font-bold flex items-center gap-2" href="#">
        <span>appstatis</span>
      </Link>
      <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
        <Link className="hover:underline hover:underline-offset-4" href="#">
          About
        </Link>
        <Link className="hover:underline hover:underline-offset-4" href="#">
          Services
        </Link>
        <Link href="" className="hover:underline hover:underline-offset-4">
          How it works
        </Link>
        <Link className="hover:underline hover:underline-offset-4" href="#">
          Contact
        </Link>
      </nav>
    </header>
  );
};
