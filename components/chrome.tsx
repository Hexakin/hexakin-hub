import Link from "next/link";
import { Mark } from "@/components/mark";
import { HILLMADE_HREF, MUSIC_HREF, socials } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="chrome">
      <div className="chrome-bar">
        <Link href="/" className="chrome-home" aria-label="Hexakin home">
          <Mark />
          <span className="chrome-word">HEXAKIN</span>
        </Link>
        <a className="chrome-door" href={MUSIC_HREF}>
          Music
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="floor">
      <p>
        © Hexakin · Built in the open by{" "}
        <a href={HILLMADE_HREF}>Hillmade</a>
      </p>
      <nav aria-label="Hexakin on the web">
        <ul className="floor-socials">
          {socials.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
