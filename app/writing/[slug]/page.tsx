import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { notFound } from "next/navigation";
import { SITE_META, SITE_URL } from "@/lib/site";
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
      card: "summary_large_image",
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
    <main className="page page-essay">
      <article className="article well" id="essay">
        <header className="article-header">
          <p className="kicker kicker-tick">{essay.kicker}</p>
          <h1 className="story-title story-title-essay">
            <span className="title-ink">{essay.title}</span>
          </h1>
          <p className="byline">
            By {essay.byline}
            <span className="byline-meta"> · {minutes} min read</span>
          </p>
          <span className="rule-double" aria-hidden="true" />
        </header>
        <div className="article-body">
          {essay.paragraphs.map((paragraph) => (
            <Fragment key={paragraph}>
              <p>{paragraph}</p>
              {essay.pullQuote && paragraph === essay.pullAfter ? (
                <blockquote className="pull">
                  <p>{essay.pullQuote}</p>
                </blockquote>
              ) : null}
            </Fragment>
          ))}
        </div>
        <footer className="article-end">
          <p>
            <Link href="/writing">More writing</Link>
          </p>
        </footer>
      </article>
    </main>
  );
}
