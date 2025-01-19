"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SITE_NAV_LINKS } from "@/constants/website";

export default function HeaderNavigation() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      {isHome ? (
        <nav className="flex md:gap-8 gap-4">
          {SITE_NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="font-medium flex items-center text-sm transition-colors hover:underline" prefetch={false}>
              {link.label}
            </Link>
          ))}
        </nav>
      ) : (
        <nav className="hidden md:flex md:gap-8 gap-4">
          {SITE_NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="font-medium flex items-center text-sm transition-colors hover:underline" prefetch={false}>
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}
