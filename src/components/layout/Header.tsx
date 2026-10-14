"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/lib/site";
import { Icon } from "../ui/Icon";
import { Logo } from "../ui/Logo";

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-sand bg-cream/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <div className="flex justify-start">
          <Logo image="/images/logo/logo.png" alt="Eddems" className="w-32" />
        </div>
        <nav aria-label="Main" className="hidden items-center gap-5 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={path === n.href ? "page" : undefined}
              className={`text-[13px] font-semibold transition hover:text-ember ${path === n.href ? "text-ember" : "text-ink"}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn-primary !px-4 !py-2">
            Enquire Now
          </Link>
          <button
            className="lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? "close" : "menu"} size={26} />
          </button>
        </div>
      </div>
      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-sand bg-cream lg:hidden"
        >
          <div className="container-page flex flex-col py-2">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-semibold"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
