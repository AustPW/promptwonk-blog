import { getAllPosts, getAllTags } from "@/lib/posts";
import TagFilter from "@/components/TagFilter";
import SectionHeader from "@/components/SectionHeader";

export default function HomePage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
          <span>&#x26A1;</span>
          <span>Prompt Engineering Insights</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 leading-tight">
          PromptWonk Blog
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Practical guides, techniques, and deep dives into prompt engineering.
          Write better prompts. Get better results.
        </p>
      </div>

      {/* Posts */}
      <SectionHeader title="Latest Posts" />
      <TagFilter posts={posts} tags={tags} />
    </div>
  );
}
