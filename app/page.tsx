import { CastWordmark } from "@/components/cast-wordmark";
import { IndexDoors } from "@/components/index-doors";
import { doors, SITE_HUB, SITE_LINE } from "@/lib/site";

export default function Home() {
  return (
    <main className="stage">
      <header className="mast">
        <CastWordmark />
        <p className="strap">{SITE_LINE}</p>
        <p className="honesty">{SITE_HUB}</p>
      </header>
      <IndexDoors doors={doors} />
    </main>
  );
}
