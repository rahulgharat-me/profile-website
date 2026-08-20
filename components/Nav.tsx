import Link from "next/link";
import { profile } from "@/data/profile";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/blog/", label: "Blog" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-ink/60 border-b border-white/5">
      <nav className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl font-bold text-gradient"
        >
          {profile.handle}
        </Link>
        <ul className="flex items-center gap-6 text-sm text-white/70">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
