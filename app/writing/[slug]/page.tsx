import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GROKBOT_HREF, MUSIC_HREF, SITE_META, SITE_URL } from "@/lib/site";
import { essays, getEssay, readMinutes } from "@/lib/writing";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return essays.map((essay) => ({ slug: essay.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const essay = getEssay(slug);

  if (!essay) {
    return {};
  }

  const canonical = `${SITE_URL}/writing/${essay.slug}`;
  const title = essay.title;
  const description = essay.dek || SITE_META;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      title,
      description,
      url: canonical,
      publishedTime: essay.date,
      authors: [essay.byline],
    },
    twitter: {
      title: `${title} — Hexakin`,
      description,
    },
  };
}

export default async function EssayPage({ params }: PageProps) {
  const { slug } = await params;
  const essay = getEssay(slug);

  if (!essay) {
    notFound();
  }

  const minutes = readMinutes(essay);

  return (
    <main className="page">
      <article className="article">
        <header className="article-header">
          <p className="kicker">{essay.kicker}</p>
          <h1 className="story-title">{essay.title}</h1>
          <p className="byline">
            By {essay.byline}
            <span className="byline-meta"> · {minutes} min read</span>
          </p>
        </header>
        <div className="article-body">
          {essay.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <footer className="article-end">
          <p>
            Also on <a href={essay.xHref}>X</a>
            .{" "}
            <a href={GROKBOT_HREF}>Grokbot</a>
            {" · "}
            <a href={MUSIC_HREF}>Music</a>
          </p>
        </footer>
      </article>
    </main>
  );
}
