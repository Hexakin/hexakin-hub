import { IndexDoors } from "@/components/index-doors";
import { doors, SITE_LINE, SITE_NAME } from "@/lib/site";

export default function Home() {
  return (
    <main className="index">
      <h1 className="visually-hidden">{SITE_NAME}</h1>
      <p className="strap">{SITE_LINE}</p>
      <IndexDoors doors={doors} />
    </main>
  );
}
