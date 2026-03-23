"use client";

import { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ content }: { content: string }) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Parse headings from markdown content
    const lines = content.split("\n");
    const items: TOCItem[] = [];
    for (const line of lines) {
      const match = line.match(/^(#{2,3})\s+(.+)$/);
      if (match) {
        const level = match[1].length;
        const text = match[2].trim();
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
        items.push({ id, text, level });
      }
    }
    setHeadings(items);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "0px 0px -80% 0px" }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="hidden xl:block sticky top-24 self-start">
      <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
        On this page
      </h4>
      <ul className="space-y-1.5 border-l border-white/10">
        {headings.map(({ id, text, level }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block text-sm py-0.5 transition-colors border-l-2 -ml-px ${
                level === 3 ? "pl-6" : "pl-3"
              } ${
                activeId === id
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-secondary-foreground"
              }`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
