import Link from "next/link";
import Nav from "@/components/Nav";
import Blobs from "@/components/Blobs";
import Footer from "@/components/Footer";
import { profile } from "@/data/profile";
import { getAllPosts } from "@/lib/posts";

function Hero() {
  const socials = [
    { label: "GitHub", href: profile.social.github },
    { label: "LinkedIn", href: profile.social.linkedin },
    { label: "Twitter", href: profile.social.twitter },
  ].filter((s) => s.href);

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-16">
      <div className="mx-auto max-w-5xl w-full animate-fade-up">
        <p className="font-display text-lg text-sky-300 mb-4">Hey there, I'm</p>
        <h1 className="font-display text-5xl sm:text-7xl font-bold tracking-tight mb-4">
          <span className="text-gradient">{profile.name}</span>
        </h1>
        <h2 className="font-display text-2xl sm:text-4xl font-semibold text-white/80 mb-6">
          {profile.title}
        </h2>
        <p className="max-w-xl text-lg text-white/60 mb-10">{profile.tagline}</p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-sky-500 px-7 py-3 font-semibold text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105 transition-all"
          >
            Get in touch
          </a>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-white/70 hover:text-white hover:border-white/40 transition-all"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-3xl sm:text-4xl font-bold mb-10">
      <span className="text-gradient">{children}</span>
    </h2>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading>About Me</SectionHeading>
        <div className="max-w-3xl space-y-5 text-lg text-white/70">
          {profile.about.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <p className="text-white/50">
            📍 Based in {profile.location}
          </p>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading>Experience</SectionHeading>
        <div className="relative border-l-2 border-violet-500/30 ml-3 space-y-12">
          {profile.experience.map((job) => (
            <div key={`${job.company}-${job.period}`} className="relative pl-8">
              <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-gradient-to-r from-fuchsia-500 to-sky-500 ring-4 ring-ink" />
              <p className="text-sm font-semibold text-sky-300 mb-1">
                {job.period}
              </p>
              <h3 className="font-display text-xl font-bold text-white">
                {job.role}{" "}
                <span className="text-white/60 font-medium">
                  ·{" "}
                  {job.companyUrl ? (
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-sky-300 transition-colors"
                    >
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}
                </span>
              </h3>
              <ul className="mt-3 space-y-2 text-white/60">
                {job.points.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-fuchsia-400 mt-1">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading>Skills</SectionHeading>
        <div className="grid gap-6 sm:grid-cols-2">
          {profile.skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl bg-card/60 border border-white/5 p-6 hover:border-violet-500/40 hover:-translate-y-1 transition-all"
            >
              <h3 className="font-display font-bold text-lg mb-4 text-white">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-violet-500/15 border border-violet-400/25 px-3 py-1 text-sm text-violet-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Blog() {
  const posts = getAllPosts();
  if (posts.length === 0) return null;

  return (
    <section id="blog" className="scroll-mt-24 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading>Blog</SectionHeading>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="group rounded-2xl bg-card/60 border border-white/5 p-6 hover:border-sky-400/40 hover:-translate-y-1 transition-all"
            >
              <p className="text-xs text-white/40 mb-3">{post.date}</p>
              <h3 className="font-display font-bold text-lg text-white group-hover:text-sky-300 transition-colors mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-white/60 line-clamp-3">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Blobs />
      <Nav />
      <main>
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
