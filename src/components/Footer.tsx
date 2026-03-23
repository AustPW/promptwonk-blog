import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-20 bg-black/25">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-7 w-7 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 flex">
              <span className="text-primary text-sm">⚡</span>
            </div>
            <span className="text-sm font-semibold text-foreground">
              PromptWonk
            </span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <a
              href="/feed.xml"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              RSS
            </a>
            <a
              href="https://x.com/promptwonk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              @promptwonk
            </a>
          </nav>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} PromptWonk
          </p>
        </div>
      </div>
    </footer>
  );
}
