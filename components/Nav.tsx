import Link from "next/link";

const links = [
  { href: "/#about", label: "about" },
  { href: "/#experience", label: "experience" },
  { href: "/#skills", label: "skills" },
  { href: "/#blog", label: "blog" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-ink/90 backdrop-blur-md border-b border-line">
      <nav className="mx-auto max-w-[1000px] px-6 sm:px-8 py-[18px] flex items-center justify-between gap-6 flex-wrap">
        <Link href="/" className="text-xs text-accent">
          ~/rahulgharat.me
        </Link>
        <ul className="flex items-center gap-5 text-xs text-fg-dim">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="py-1 border-b border-transparent hover:border-accent hover:text-accent transition-colors"
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
