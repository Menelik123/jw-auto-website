"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0A1628] border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/logo-circle.png"
              alt="JW Auto Service"
              width={44}
              height={44}
              className="rounded-full bg-white"
            />
            <div className="flex flex-col leading-none">
              <span className="text-white font-bold text-lg tracking-wide">JW AUTO SERVICE</span>
              <span className="text-white/50 text-xs tracking-widest uppercase">Mableton, GA</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button render={<Link href="/book" />} className="bg-[#C8102E] hover:bg-[#a00d24] text-white font-semibold px-5 py-2">
              Book Now
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger className="text-white p-2 bg-transparent border-0 cursor-pointer" aria-label="Open menu">
                <Menu className="w-6 h-6" />
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0A1628] border-white/10 w-[280px]">
                <div className="flex flex-col gap-6 pt-8">
                  <Link href="/" className="flex items-center gap-2 mb-4">
                    <Image
                      src="/images/logo-circle.png"
                      alt="JW Auto Service"
                      width={40}
                      height={40}
                      className="rounded-full bg-white"
                    />
                    <span className="text-white font-bold text-lg">JW AUTO SERVICE</span>
                  </Link>
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-white/80 hover:text-white text-base font-medium py-2 border-b border-white/10 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button render={<Link href="/book" onClick={() => setOpen(false)} />} className="bg-[#C8102E] hover:bg-[#a00d24] text-white font-semibold mt-4">
                    Book Now
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
