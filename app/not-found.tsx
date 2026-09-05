import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page">
      <div className="gone">
        <p className="kicker">Gone</p>
        <h1 className="story-title">This page is not here.</h1>
        <p className="dek">
          <Link href="/">Back to Hexakin</Link>
        </p>
      </div>
    </main>
  );
}
