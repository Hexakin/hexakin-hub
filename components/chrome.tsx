import Link from "next/link";
import { Mark } from "@/components/mark";
import { HILLMADE_HREF } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="chrome">
      <div className="chrome-bar">
        <Link href="/" className="chrome-home" aria-label="Hexakin home">
          <Mark />
          <span className="chrome-word">HEXAKIN</span>
        </Link>
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
      <a className="floor-site" href={HILLMADE_HREF}>
        hillmade.uk
      </a>
    </footer>
  );
}
