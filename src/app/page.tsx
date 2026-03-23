import { getAllPosts, getAllTags } from "@/lib/posts";
import TagFilter from "@/components/TagFilter";
import SectionHeader from "@/components/SectionHeader";

export default function HomePage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="bg-gradient-to-bl from-background/95 to-background/75">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[1.5px] text-violet-200 mb-6"
            style={{
              borderWidth: 1,
              borderColor: "rgba(167,139,250,0.4)",
              backgroundColor: "rgba(167,139,250,0.12)",
            }}
          >
            <span>⚡</span>
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
    </div>
  );
}
