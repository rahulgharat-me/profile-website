import { profile } from "@/data/profile";

export default function Footer() {
  const socials = [
    { label: "GitHub", href: profile.social.github },
    { label: "LinkedIn", href: profile.social.linkedin },
    { label: "Twitter", href: profile.social.twitter },
    { label: "Email", href: `mailto:${profile.email}` },
  ].filter((s) => s.href && s.href !== "mailto:");

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[1000px] px-6 sm:px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-fg-dim">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>
        <div className="flex gap-4 flex-wrap">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                s.href.startsWith("mailto:") ? undefined : "noopener noreferrer"
              }
              className="hover:text-accent transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
