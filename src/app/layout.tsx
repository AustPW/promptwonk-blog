import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "PromptWonk Blog — Master Prompt Engineering",
    template: "%s | PromptWonk Blog",
  },
  description:
    "Tips, techniques, and guides for mastering prompt engineering. Level up your AI skills with PromptWonk.",
  metadataBase: new URL("https://blog.promptwonk.ai"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blog.promptwonk.ai",
    siteName: "PromptWonk Blog",
    title: "PromptWonk Blog — Master Prompt Engineering",
    description:
      "Tips, techniques, and guides for mastering prompt engineering.",
    images: [
      {
        url: "/api/og?title=PromptWonk+Blog",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@promptwonk",
    creator: "@promptwonk",
  },
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-gradient-to-bl from-background/95 via-primary/10 to-background/75">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
