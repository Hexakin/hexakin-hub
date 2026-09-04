import Link from "next/link";

export default function NotFound() {
  return (
    <main className="stage">
      <header className="mast">
        <h1 className="cast-word">
          <span className="cast-word-type">Gone.</span>
        </h1>
        <p className="strap">This page is not here.</p>
      </header>
      <nav aria-label="Home">
        <ul className="doors">
          <li className="door-slot">
            <Link className="plate" href="/">
              <span className="plate-name">Home</span>
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
