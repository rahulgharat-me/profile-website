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
      <main className="mx-auto max-w-[1000px] px-6 sm:px-8 pt-14 pb-16 min-h-screen flex flex-col gap-[22px]">
        <h3 className="text-[13px] text-accent font-medium">## blog</h3>
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
      </main>
      <Footer />
    </>
  );
}
