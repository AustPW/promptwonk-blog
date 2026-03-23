import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostBySlug, getAllPosts, getRelatedPosts } from "@/lib/posts";
import { renderMDX } from "@/lib/mdx";
import ReadingProgress from "@/components/ReadingProgress";
import ShareButtons from "@/components/ShareButtons";
import TableOfContents from "@/components/TableOfContents";
import PostCard from "@/components/PostCard";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(post.title)}`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`/api/og?title=${encodeURIComponent(post.title)}`],
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const content = await renderMDX(post.content);
  const related = getRelatedPosts(slug, post.tags, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "PromptWonk",
      url: "https://blog.promptwonk.ai",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://blog.promptwonk.ai/blog/${slug}`,
    },
    image: `https://blog.promptwonk.ai/api/og?title=${encodeURIComponent(post.title)}`,
  };

  return (
    <>
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-6xl mx-auto px-6 py-16 bg-gradient-to-bl from-background/95 to-background/75">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to all posts
        </Link>

        <div className="flex gap-12">
          {/* Main content */}
          <div className="flex-1 min-w-0 max-w-3xl">
            {/* Header */}
            <header className="mb-10">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold uppercase tracking-[1.3px] text-cyan-200 px-2.5 py-0.5 rounded-full"
                    style={{
                      borderWidth: 1,
                      borderColor: "rgba(103,232,249,0.35)",
                      backgroundColor: "rgba(6,182,212,0.11)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>{formatDate(post.date)}</span>
                <span>•</span>
                <span>{post.readTime} min read</span>
                <span>•</span>
                <span>{post.author}</span>
              </div>
            </header>

            {/* Content */}
            <div className="prose mb-12">{content}</div>

            {/* Share */}
            <div className="pt-8 border-t border-white/10">
              <ShareButtons title={post.title} slug={slug} />
            </div>

            {/* Related posts */}
            {related.length > 0 && (
              <div className="mt-16">
                <SectionHeader title="Related Posts" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {related.map((rp) => (
                    <PostCard key={rp.slug} post={rp} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Table of contents sidebar */}
          <TableOfContents content={post.content} />
        </div>
      </article>
    </>
  );
}
