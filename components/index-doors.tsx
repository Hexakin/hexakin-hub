import type { Door, DoorGloss } from "@/lib/site";

function DoorGlossLine({ gloss }: { gloss: DoorGloss }) {
  switch (gloss.kind) {
    case "clause":
      return <span className="index-gloss">{gloss.text}</span>;
    case "none":
      return null;
    default: {
      const _exhaustive: never = gloss;
      return _exhaustive;
    }
  }
}

function doorRel(door: Door) {
  switch (door.kind) {
    case "leave":
      return "noopener noreferrer";
    case "cut":
      return undefined;
    default: {
      const _exhaustive: never = door;
      return _exhaustive;
    }
  }
}

export function IndexDoors({ doors }: { doors: readonly Door[] }) {
  return (
    <nav aria-label="Doors">
      <ul className="index-doors">
        {doors.map((door) => (
          <li key={door.href} className="index-slot">
            <a className="index-row" href={door.href} rel={doorRel(door)}>
              <span className="index-label">{door.label}</span>
              <DoorGlossLine gloss={door.gloss} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
