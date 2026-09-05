import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page">
      <div className="well gone">
        <p className="kicker kicker-tick">Gone</p>
        <h1 className="story-title">
          <span className="title-ink">This page is not here.</span>
        </h1>
        <p className="lede">
          <Link href="/">Back to Hexakin</Link>
        </p>
      </div>
    </main>
  );
}
