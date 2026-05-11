"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-black/10">
      <img src="/images/layer-logo.png" alt="Layer" className="h-8 w-auto" />

      <ul className="flex items-center gap-8">
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className={`text-sm font-medium transition-colors hover:text-black ${
                pathname === href ? "text-black" : "text-black/50"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="#"
        className="rounded-xl bg-gradient-to-t from-orange-500 via-orange-400 to-orange-600 shadow-lg shadow-orange-600/20 text-white px-6 py-3 text-sm font-medium transition-all hover:opacity-90"
      >
        Get Started
      </Link>
    </nav>
  );
}
