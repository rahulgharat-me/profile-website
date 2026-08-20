import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Blobs from "@/components/Blobs";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing on software, engineering, and things I'm learning.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Blobs />
      <Nav />
      <main className="px-6 pt-32 pb-16 min-h-screen">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-white/60 mb-12">
            Writing on software, engineering, and things I'm learning.
          </p>
          {posts.length === 0 ? (
            <p className="text-white/50">No posts yet — check back soon!</p>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}/`}
                  className="group block rounded-2xl bg-card/60 border border-white/5 p-6 hover:border-sky-400/40 hover:-translate-y-0.5 transition-all"
                >
                  <p className="text-xs text-white/40 mb-2">{post.date}</p>
                  <h2 className="font-display text-xl font-bold text-white group-hover:text-sky-300 transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-white/60">{post.excerpt}</p>
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-fuchsia-500/15 border border-fuchsia-400/25 px-3 py-0.5 text-xs text-fuchsia-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
