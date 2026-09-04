import type { Door, DoorGloss } from "@/lib/site";
import { LeaveAnchor } from "@/components/leave-anchor";

function DoorGlossLine({ gloss }: { gloss: DoorGloss }) {
  switch (gloss.kind) {
    case "clause":
      return <span className="plate-gloss">{gloss.text}</span>;
    case "none":
      return null;
    default: {
      void (gloss satisfies never);
      return null;
    }
  }
}

export function IndexDoors({ doors }: { doors: readonly Door[] }) {
  return (
    <nav aria-label="Doors">
      <ul className="doors">
        {doors.map((door) => (
          <li key={door.href} className="door-slot">
            <LeaveAnchor door={door} className="plate">
              <span className="plate-name">{door.label}</span>
              <DoorGlossLine gloss={door.gloss} />
            </LeaveAnchor>
          </li>
        ))}
      </ul>
    </nav>
  );
}
