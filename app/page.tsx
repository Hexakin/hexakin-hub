import { Mark } from "@/components/mark";
import { doors, SITE_LINE, SITE_NAME } from "@/lib/site";

export default function Home() {
  return (
    <main className="stage">
      <div className="identity settle">
        <Mark />
        <h1 className="wordmark">{SITE_NAME}</h1>
      </div>
      <p className="line settle-line">{SITE_LINE}</p>
      <nav aria-label="Doors">
        <ul className="doors settle-doors">
          {doors.map((door) => (
            <li key={door.href}>
              <a className="door" href={door.href}>
                {door.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
