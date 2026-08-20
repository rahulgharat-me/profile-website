import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Blobs from "@/components/Blobs";
import Footer from "@/components/Footer";
import { getAllPosts, getPost } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  return (
    <>
      <Blobs />
      <Nav />
      <main className="px-6 pt-32 pb-16 min-h-screen">
        <article className="mx-auto max-w-3xl">
          <Link
            href="/#blog"
            className="text-sm text-sky-300 hover:text-sky-200 transition-colors"
          >
            ← Back to home
          </Link>
          <h1 className="font-display text-3xl sm:text-5xl font-bold mt-6 mb-4">
            <span className="text-gradient">{post.title}</span>
          </h1>
          <p className="text-sm text-white/40 mb-10">{post.date}</p>
          <div
            className="prose-blog"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-10">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-fuchsia-500/15 border border-fuchsia-400/25 px-3 py-1 text-xs text-fuchsia-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
