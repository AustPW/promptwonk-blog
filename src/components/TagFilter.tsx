"use client";

import { useState } from "react";
import type { PostMeta } from "@/lib/posts";
import PostCard from "./PostCard";

export default function TagFilter({
  posts,
  tags,
}: {
  posts: PostMeta[];
  tags: string[];
}) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? posts.filter((p) => p.tags.includes(activeTag))
    : posts;

  return (
    <>
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        <button
          onClick={() => setActiveTag(null)}
          className={`text-sm font-medium px-4 py-1.5 rounded-full border transition-colors ${
            activeTag === null
              ? "bg-primary/20 text-primary border-primary/40"
              : "bg-muted text-muted-foreground border-white/10 hover:border-muted-foreground"
          }`}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={`text-sm font-medium px-4 py-1.5 rounded-full border transition-colors ${
              activeTag === tag
                ? "bg-primary/20 text-primary border-primary/40"
                : "bg-muted text-muted-foreground border-white/10 hover:border-muted-foreground"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}
