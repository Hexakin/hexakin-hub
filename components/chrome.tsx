import { HILLMADE_HREF } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="floor">
      <p>
        Built in the open by <a href={HILLMADE_HREF}>Hillmade</a>
      </p>
    </footer>
  );
}
