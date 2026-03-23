import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">âš¡</span>
              </div>
              <span className="text-lg font-bold text-foreground">PromptWonk</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Master prompt engineering with practical guides, tips, and
              challenges. Level up your AI skills.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="/feed.xml"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  RSS Feed
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://x.com/promptwonk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  @promptwonk on X
                </a>
              </li>
              <li>
                <a
                  href="mailto:social@promptwonk.ai"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  social@promptwonk.ai
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-muted-foreground">
            Â© {new Date().getFullYear()} PromptWonk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
