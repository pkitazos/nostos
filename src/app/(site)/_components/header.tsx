"use client";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";

export function Header() {
  const darkHeaderPaths = [
    "/our-philosophy",
    "/about",
    "/services",
    "/gallery",
  ];

  const path = usePathname();
  const isDark = darkHeaderPaths.some((p) => path.startsWith(p));

  const [open, setOpen] = useState(false);
  return (
    <header
      className={cn(
        "absolute left-0 top-0 z-[99] flex h-16 w-full items-center justify-between px-10 font-[350] sm:h-28 lg:px-10 2xl:h-40 2xl:px-20",
        isDark ? "text-foreground" : "text-background",
      )}
    >
      <Link href="/">
        <h1 className="font-serif text-2xl md:text-3xl">Nõstos Agency</h1>
      </Link>
      <div className="flex lg:hidden">
        <button onClick={() => setOpen(true)}>
          <MenuIcon />
        </button>
        <MobileNav open={open} />
      </div>
      <div className="hidden lg:flex">
        <DesktopNav />
      </div>
    </header>
  );
}

function DesktopNav() {
  return (
    <nav className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-8">
      <HeaderLink route="/our-philosophy">Our Philosophy</HeaderLink>
      <HeaderLink route="/about">About</HeaderLink>
      <HeaderLink route="/services">Services</HeaderLink>
      <HeaderLink route="/gallery">Gallery</HeaderLink>
      <HeaderLink route="/contact-us">Contact Us</HeaderLink>
    </nav>
  );
}

function MobileNav({ open }: { open: boolean }) {
  return (
    <nav
      className={cn(
        "absolute left-0 top-0 h-dvh w-full place-items-center bg-background text-foreground",
        open ? "grid" : "hidden",
      )}
    >
      <ul className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-11">
        <HeaderLink route="/our-philosophy" className="text-2xl">
          Our Philosophy
        </HeaderLink>
        <HeaderLink route="/about" className="text-2xl">
          About
        </HeaderLink>
        <HeaderLink route="/services" className="text-2xl">
          Services
        </HeaderLink>
        <HeaderLink route="/gallery" className="text-2xl">
          Gallery
        </HeaderLink>
        <HeaderLink route="/contact-us" className="text-2xl">
          Contact Us
        </HeaderLink>
      </ul>
    </nav>
  );
}

function HeaderLink({
  route,
  children: name,
  className,
}: {
  route: string;
  children: ReactNode;
  className?: ClassValue;
}) {
  const path = usePathname();
  return (
    <Link
      className={cn(
        "decoration-1 underline-offset-8 hover:underline",
        path.startsWith(route) && "underline",
        className,
      )}
      href={route}
    >
      {name}
    </Link>
  );
}
