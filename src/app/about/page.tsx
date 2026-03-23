import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about PromptWonk â€” the platform for mastering prompt engineering through practice, challenges, and community.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 text-center">
        About PromptWonk
      </h1>
      <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
        We believe prompt engineering is a skill â€” and like any skill, it gets
        better with practice.
      </p>

      <div className="space-y-6 text-secondary-foreground leading-relaxed mb-16">
        <p>
          PromptWonk started with a simple observation: most people use AI tools
          every day but never learn to use them well. They write vague prompts,
          get mediocre results, and assume that&apos;s just how it works.
        </p>
        <p>
          It doesn&apos;t have to be that way. With the right techniques â€” and a
          bit of deliberate practice â€” anyone can get dramatically better results
          from AI. That&apos;s what we&apos;re here for.
        </p>
        <p>
          This blog is our space for sharing what works: practical techniques,
          real examples, and honest takes on what matters (and what doesn&apos;t)
          in prompt engineering.
        </p>
        <p>
          Whether you&apos;re writing your first prompt or optimizing complex
          multi-step workflows, there&apos;s something here for you.
        </p>
      </div>

      <SectionHeader title="What We Cover" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        {[
          {
            icon: "ðŸŽ¯",
            title: "Techniques",
            desc: "Proven prompting methods that get results",
          },
          {
            icon: "ðŸ§ª",
            title: "Testing",
            desc: "How to systematically improve your prompts",
          },
          {
            icon: "âš¡",
            title: "Challenges",
            desc: "Hands-on exercises to sharpen your skills",
          },
          {
            icon: "ðŸ“Š",
            title: "Comparisons",
            desc: "When to use which approach and why",
          },
        ].map(({ icon, title, desc }) => (
          <div
            key={title}
            className="p-5 bg-muted border border-white/10 rounded-2xl"
          >
            <div className="w-10 h-10 rounded-lg bg-purple-500/15 flex items-center justify-center mb-3">
              <span className="text-xl">{icon}</span>
            </div>
            <h3 className="font-semibold text-foreground mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>

      <SectionHeader title="Stay Updated" />
      <div className="bg-muted border border-white/10 rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold text-foreground mb-2">
          Get new posts in your inbox
        </h3>
        <p className="text-muted-foreground text-sm mb-6">
          No spam, no fluff â€” just practical prompt engineering tips when we
          publish them.
        </p>
        <NewsletterForm />
      </div>
    </div>
  );
}
