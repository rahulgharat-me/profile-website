import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[1000px] px-6 sm:px-8 pt-14 pb-16 min-h-screen flex flex-col gap-[26px]">
        <h3 className="text-[13px] text-accent font-medium">## blog</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="flex flex-col gap-3 border border-line p-5 sm:p-6 hover:border-accent hover:bg-card hover:-translate-y-0.5 transition-all"
            >
              <span className="text-xs text-fg-dim">{post.date}</span>
              <span className="text-base font-bold leading-snug text-fg-bright">
                {post.title}
              </span>
              <span className="text-[13px] leading-[1.65] text-fg-mid line-clamp-4">
                {post.excerpt}
              </span>
              <span className="text-xs text-accent mt-auto pt-1">
                read →
              </span>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
