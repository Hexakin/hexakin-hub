import type { Metadata } from "next";
import Link from "next/link";
import { alsoDoors, SITE_CANONICAL, SITE_META } from "@/lib/site";
import { featuredEssay } from "@/lib/writing";

const featured = featuredEssay();

export const metadata: Metadata = {
  title: {
    absolute: "Hexakin",
  },
  description: SITE_META,
  alternates: {
    canonical: SITE_CANONICAL,
  },
  openGraph: {
    title: `${featured.title} — Hexakin`,
    description: featured.dek,
    url: SITE_CANONICAL,
  },
  twitter: {
    title: `${featured.title} — Hexakin`,
    description: featured.dek,
  },
};

export default function Home() {
  return (
    <main className="page">
      <article className="cover">
        <p className="kicker">{featured.kicker}</p>
        <h1 className="story-title">
          <Link href={`/writing/${featured.slug}`}>{featured.title}</Link>
        </h1>
        <p className="dek">{featured.dek}</p>
        <p className="standfirst">{featured.standfirst}</p>
        <p className="byline">By {featured.byline}</p>
      </article>
      <aside className="also" aria-label="Also">
        <h2 className="also-label">Also</h2>
        <ul className="also-list">
          {alsoDoors.map((door) => (
            <li key={door.href}>
              <a href={door.href}>
                {door.label} — {door.gloss}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </main>
  );
}
