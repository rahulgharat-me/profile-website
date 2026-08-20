import { profile } from "@/data/profile";

export default function Footer() {
  const socials = [
    { label: "GitHub", href: profile.social.github },
    { label: "LinkedIn", href: profile.social.linkedin },
    { label: "Twitter", href: profile.social.twitter },
    { label: "Email", href: `mailto:${profile.email}` },
  ].filter((s) => s.href && s.href !== "mailto:");

  return (
    <footer className="border-t border-white/5 py-10 mt-24">
      <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>
        <div className="flex gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
