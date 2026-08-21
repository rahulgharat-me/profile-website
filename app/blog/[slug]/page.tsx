import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
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
      <Nav />
      <main className="mx-auto max-w-[720px] px-6 sm:px-8 pt-14 pb-16 min-h-screen">
        <article>
          <Link
            href="/blog/"
            className="text-[13px] text-accent hover:text-accent-bright transition-colors"
          >
            ← cd ../blog
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-fg-bright mt-6 mb-4">
            {post.title}
          </h1>
          <p className="text-xs text-fg-dim mb-10">{post.date}</p>
          <div
            className="prose-blog"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-10">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-line px-3 py-1 text-xs text-fg-muted"
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
