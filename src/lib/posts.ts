import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  author: string;
  readTime: number;
}

export interface Post extends PostMeta {
  content: string;
}

export function getAllPosts(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title,
        date: data.date,
        tags: data.tags || [],
        excerpt: data.excerpt || "",
        author: data.author || "PromptWonk Team",
        readTime: data.readTime || Math.ceil(stats.minutes),
      };
    });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const stats = readingTime(content);

    return {
      slug,
      title: data.title,
      date: data.date,
      tags: data.tags || [],
      excerpt: data.excerpt || "",
      author: data.author || "PromptWonk Team",
      readTime: data.readTime || Math.ceil(stats.minutes),
      content,
    };
  } catch {
    return null;
  }
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set<string>();
  posts.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}

export function getRelatedPosts(
  currentSlug: string,
  tags: string[],
  limit = 3
): PostMeta[] {
  const allPosts = getAllPosts();
  return allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => ({
      ...post,
      relevance: post.tags.filter((tag) => tags.includes(tag)).length,
    }))
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, limit);
}
