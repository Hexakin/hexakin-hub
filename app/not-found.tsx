import Link from "next/link";

export default function NotFound() {
  return (
    <main className="index">
      <h1 className="visually-hidden">Gone.</h1>
      <p className="strap">This page is not here.</p>
      <nav aria-label="Home">
        <ul className="index-doors">
          <li className="index-slot">
            <Link className="index-row" href="/">
              <span className="index-label">Home</span>
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
