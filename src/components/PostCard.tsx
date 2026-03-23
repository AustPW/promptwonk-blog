import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="bg-background/70 backdrop-blur-md border border-white/10 rounded-2xl p-6 h-full transition-all duration-200 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 shadow-lg shadow-black/5">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
          {post.title}
        </h2>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{formatDate(post.date)}</span>
          <span className="flex items-center gap-1">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {post.readTime} min read
          </span>
        </div>
      </article>
    </Link>
  );
}
