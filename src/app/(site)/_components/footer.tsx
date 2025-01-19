import { InstagramIcon } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex h-[55dvh] w-full flex-col items-center justify-center gap-5 font-light">
      <h1 className="text-2xl tracking-tight">Share your vision with us.</h1>
      <p>nadia@nostosagency.com</p>
      <Link href="https://www.instagram.com/nostosagency/">
        <InstagramIcon />
      </Link>
    </footer>
  );
}
