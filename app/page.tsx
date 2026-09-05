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
    card: "summary_large_image",
    title: `${featured.title} — Hexakin`,
    description: featured.dek,
  },
};

export default function Home() {
  return (
    <main className="page page-cover">
      <div className="well well-cover">
        <article className="feature">
          <Link href={`/writing/${featured.slug}`} className="feature-hit">
            <p className="kicker kicker-tick">{featured.kicker}</p>
            <h1 className="story-title">
              <span className="title-ink">{featured.title}</span>
            </h1>
            <p className="lede">{featured.dek}</p>
            <div className="feature-rail">
              <p className="dek">{featured.standfirst}</p>
              <p className="byline">By {featured.byline}</p>
              <span className="rail-rule" aria-hidden="true" />
            </div>
          </Link>
          <span className="rule-double" aria-hidden="true" />
        </article>
        <aside className="also" aria-label="Also">
          <h2 className="also-label kicker-tick">Also</h2>
          <ul className="also-list">
            {alsoDoors.map((door) => (
              <li key={door.href}>
                <a href={door.href} className="also-row">
                  <span className="also-name">{door.label}</span>
                  <span className="also-gloss">{door.gloss}</span>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </main>
  );
}
