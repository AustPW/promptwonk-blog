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
          className={`text-[11px] font-semibold uppercase tracking-[1.3px] px-3 py-1 rounded-full transition-colors ${
            activeTag === null
              ? "text-cyan-200"
              : "text-muted-foreground hover:text-cyan-200"
          }`}
          style={{
            borderWidth: 1,
            borderStyle: "solid",
            borderColor:
              activeTag === null
                ? "rgba(103,232,249,0.35)"
                : "rgba(255,255,255,0.1)",
            backgroundColor:
              activeTag === null
                ? "rgba(6,182,212,0.11)"
                : "transparent",
          }}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
            className={`text-[11px] font-semibold uppercase tracking-[1.3px] px-3 py-1 rounded-full transition-colors ${
              activeTag === tag
                ? "text-cyan-200"
                : "text-muted-foreground hover:text-cyan-200"
            }`}
            style={{
              borderWidth: 1,
              borderStyle: "solid",
              borderColor:
                activeTag === tag
                  ? "rgba(103,232,249,0.35)"
                  : "rgba(255,255,255,0.1)",
              backgroundColor:
                activeTag === tag
                  ? "rgba(6,182,212,0.11)"
                  : "transparent",
            }}
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
