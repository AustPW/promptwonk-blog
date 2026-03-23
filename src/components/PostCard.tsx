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
      <article className="rounded-xl border border-white/10 bg-black/25 overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20">
        {/* Gradient accent bar */}
        <div
          className="h-[3px] w-full"
          style={{
            background: "linear-gradient(to right, #6366f1, #22d3ee, #d946ef)",
          }}
        />
        {/* Inner content */}
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 3).map((tag) => (
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
        </div>
      </article>
    </Link>
  );
}
