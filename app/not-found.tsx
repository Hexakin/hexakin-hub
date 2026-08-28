import Link from "next/link";
import { Mark } from "@/components/mark";

export default function NotFound() {
  return (
    <main className="stage">
      <div className="identity settle">
        <Mark />
        <h1 className="wordmark">Gone.</h1>
      </div>
      <p className="line settle-line">This page is not here.</p>
      <nav aria-label="Doors">
        <ul className="doors settle-doors">
          <li>
            <Link className="door" href="/">
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
