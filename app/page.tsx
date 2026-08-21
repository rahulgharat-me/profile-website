import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { profile } from "@/data/profile";
import { getAllPosts } from "@/lib/posts";

function Hero() {
  const socials = [
    { label: "GitHub", href: profile.social.github },
    { label: "LinkedIn", href: profile.social.linkedin },
    { label: "Twitter", href: profile.social.twitter },
  ].filter((s) => s.href);

  const [firstName, ...restName] = profile.name.split(" ");

  return (
    <section className="py-14 sm:py-24 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-14 items-start">
      <div className="flex flex-col gap-[22px] min-w-0">
        <p className="text-[13px] text-accent">
          $ whoami<span className="text-fg-faint"> — Hey there, I&apos;m</span>
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-none tracking-tighter font-bold text-fg-bright">
          {firstName}
          <br />
          {restName.join(" ")}
          <span className="text-accent animate-blink">_</span>
        </h1>
        <p className="text-[15px] text-fg-muted">{profile.title}</p>
        <p className="text-[17px] leading-relaxed max-w-[34em] text-fg-soft">
          {profile.tagline}
        </p>
        <div className="flex gap-2.5 flex-wrap pt-2 text-[13px]">
          <a
            href={`mailto:${profile.email}`}
            className="px-[18px] py-3 bg-accent text-accent-ink font-bold hover:bg-accent-bright hover:-translate-y-0.5 transition-all"
          >
            get in touch →
          </a>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 border border-line-bright text-fg-muted hover:border-accent hover:text-accent transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
      {profile.photo && (
        <div className="flex flex-col gap-2.5 border border-line p-2.5 max-w-[320px] md:justify-self-end">
          <img
            src={profile.photo}
            alt={profile.name}
            className="w-full aspect-square object-cover block"
          />
          <p className="text-[11px] text-fg-dim">📍 Based in {profile.location}</p>
        </div>
      )}
    </section>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[13px] text-accent font-medium">## {children}</h3>
  );
}

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 py-12 sm:py-16 border-t border-line flex flex-col gap-[22px]"
    >
      <SectionHeading>about-me</SectionHeading>
      <div className="flex flex-col gap-4 max-w-[44em]">
        {profile.about.map((paragraph, i) => (
          <p
            key={i}
            className={`text-base leading-[1.75] ${i === 0 ? "text-fg" : "text-fg-mid"}`}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 py-12 sm:py-16 border-t border-line flex flex-col gap-6"
    >
      <SectionHeading>experience</SectionHeading>
      {profile.experience.map((job) => (
        <div
          key={`${job.company}-${job.period}`}
          className="border border-line p-6 sm:p-[30px] flex flex-col gap-[18px] hover:border-line-bright transition-colors"
        >
          <div className="flex justify-between items-baseline gap-5 flex-wrap">
            <h4 className="text-[17px] sm:text-xl font-bold text-fg-bright leading-snug">
              {job.role} ·{" "}
              {job.companyUrl ? (
                <a
                  href={job.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent border-b border-transparent hover:border-accent"
                >
                  {job.company}
                </a>
              ) : (
                <span className="text-accent">{job.company}</span>
              )}
            </h4>
            <p className="text-xs text-fg-dim whitespace-nowrap">{job.period}</p>
          </div>
          <ul className="flex flex-col gap-[11px]">
            {job.points.map((point, i) => (
              <li
                key={i}
                className="text-[15px] leading-[1.65] text-fg-soft flex gap-2.5"
              >
                <span className="text-accent flex-none">▹</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {profile.education.map((edu) => (
        <div
          key={edu.institution}
          className="border border-line px-6 sm:px-[30px] py-5 sm:py-[26px] flex justify-between items-baseline gap-5 flex-wrap"
        >
          <div className="flex flex-col gap-1">
            <p className="text-[17px] font-bold text-fg-bright">{edu.degree}</p>
            <p className="text-sm leading-normal text-fg-muted">
              {edu.institution}
            </p>
          </div>
          <p className="text-xs text-fg-dim">education</p>
        </div>
      ))}
    </section>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 py-12 sm:py-16 border-t border-line flex flex-col gap-[26px]"
    >
      <SectionHeading>skills</SectionHeading>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-7">
        {profile.skills.map((group) => (
          <div key={group.category} className="flex flex-col gap-3">
            <p className="text-[13px] text-fg-bright border-b border-line pb-2">
              {group.category}
            </p>
            <div className="flex flex-col gap-2 text-[13px] leading-snug text-fg-mid">
              {group.items.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Blog() {
  const posts = getAllPosts();
  if (posts.length === 0) return null;

  return (
    <section
      id="blog"
      className="scroll-mt-20 py-12 sm:py-16 border-t border-line flex flex-col gap-[22px]"
    >
      <div className="flex justify-between items-baseline gap-4">
        <SectionHeading>blog</SectionHeading>
        <Link href="/blog/" className="text-xs text-fg-dim hover:text-accent">
          all posts →
        </Link>
      </div>
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}/`}
          className="flex gap-4 sm:gap-6 items-baseline border border-line p-5 sm:px-[26px] sm:py-6 flex-wrap hover:border-accent hover:bg-card transition-colors"
        >
          <span className="text-xs text-fg-dim whitespace-nowrap">
            {post.date}
          </span>
          <span className="flex flex-col gap-[7px] min-w-[220px] flex-1">
            <span className="text-lg font-bold text-fg-bright">
              {post.title}
            </span>
            <span className="text-sm leading-[1.65] text-fg-mid">
              {post.excerpt}
            </span>
          </span>
        </Link>
      ))}
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[1000px] px-6 sm:px-8">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
