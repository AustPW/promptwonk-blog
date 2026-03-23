import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about PromptWonk — the platform for mastering prompt engineering through practice, challenges, and community.",
};

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-bl from-background/95 to-background/75">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 text-center">
          About PromptWonk
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
          We believe prompt engineering is a skill — and like any skill, it gets
          better with practice.
        </p>

        <div className="space-y-6 text-secondary-foreground leading-relaxed mb-16">
          <p>
            PromptWonk started with a simple observation: most people use AI tools
            every day but never learn to use them well. They write vague prompts,
            get mediocre results, and assume that&apos;s just how it works.
          </p>
          <p>
            It doesn&apos;t have to be that way. With the right techniques — and a
            bit of deliberate practice — anyone can get dramatically better results
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
              icon: "🎯",
              title: "Techniques",
              desc: "Proven prompting methods that get results",
              borderColor: "border-l-violet-400/80",
            },
            {
              icon: "🧪",
              title: "Testing",
              desc: "How to systematically improve your prompts",
              borderColor: "border-l-blue-400/80",
            },
            {
              icon: "⚡",
              title: "Challenges",
              desc: "Hands-on exercises to sharpen your skills",
              borderColor: "border-l-cyan-400/80",
            },
            {
              icon: "📊",
              title: "Comparisons",
              desc: "When to use which approach and why",
              borderColor: "border-l-violet-400/80",
            },
          ].map(({ icon, title, desc, borderColor }) => (
            <div
              key={title}
              className={`p-5 border border-white/10 bg-black/25 rounded-xl border-l-2 ${borderColor} transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/15`}
            >
              <div className="h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 flex mb-3">
                <span className="text-xl">{icon}</span>
              </div>
              <h3 className="font-semibold text-foreground mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <SectionHeader title="Stay Updated" />
        <div
          className="rounded-xl p-8 text-center"
          style={{
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "rgba(167,139,250,0.35)",
            backgroundColor: "rgba(167,139,250,0.1)",
            borderRadius: 12,
          }}
        >
          <h3 className="text-xl font-bold text-foreground mb-2">
            Get new posts in your inbox
          </h3>
          <p className="text-sm leading-6 text-primary mb-6">
            No spam, no fluff — just practical prompt engineering tips when we
            publish them.
          </p>
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
}
