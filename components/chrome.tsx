import Link from "next/link";
import { Mark } from "@/components/mark";
import { HILLMADE_HREF, navItems } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="masthead">
      <div className="masthead-bar">
        <Link href="/" className="masthead-home" aria-label="Hexakin home">
          <Mark />
          <span className="masthead-word">HEXAKIN</span>
        </Link>
        <nav className="masthead-nav" aria-label="Site">
          {navItems.map((item) =>
            item.external ? (
              <a key={item.label} href={item.href} className="nav-item">
                {item.label}
              </a>
            ) : (
              <Link key={item.label} href={item.href} className="nav-item">
                {item.label}
              </Link>
            ),
          )}
        </nav>
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
    </footer>
  );
}
