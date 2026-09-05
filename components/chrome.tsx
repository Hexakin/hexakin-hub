"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mark } from "@/components/mark";
import { ReadingProgress } from "@/components/reading-progress";
import { HILLMADE_HREF, navItems } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const writingOn =
    pathname === "/writing" || pathname.startsWith("/writing/");
  const onEssayPage = pathname.startsWith("/writing/");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className={scrolled ? "masthead is-scrolled" : "masthead"}>
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
              <Link
                key={item.label}
                href={item.href}
                className="nav-item"
                aria-current={
                  item.label === "Writing" && writingOn ? "page" : undefined
                }
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
      </div>
      {onEssayPage ? <ReadingProgress /> : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="floor">
      <p>
        © Hexakin · Built in the open by <a href={HILLMADE_HREF}>Hillmade</a>
      </p>
    </footer>
  );
}
