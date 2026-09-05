export const SITE_URL = "https://www.hexakin.com";
export const SITE_CANONICAL = "https://www.hexakin.com/";
export const SITE_NAME = "Hexakin";
export const SITE_TITLE = "Hexakin";
export const SITE_META = "Games writing from Hexakin. Building on the side.";
export const MUSIC_HREF = "https://music.hexakin.com";
export const HILLMADE_HREF = "https://hillmade.uk";
export const GROKBOT_HREF = "https://grokbot.studio";
export const X_HREF = "https://x.com/Hexakin";
export const X_DISC2_HREF = "https://x.com/Hexakin/status/2095964870617579867";

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const navItems = [
  { label: "Writing", href: "/writing" },
  { label: "Grokbot", href: GROKBOT_HREF, external: true },
  { label: "Music", href: MUSIC_HREF, external: true },
] as const satisfies readonly NavItem[];

export type AlsoDoor = {
  label: string;
  href: string;
  gloss: string;
};

export const alsoDoors = [
  {
    label: "Grokbot",
    href: GROKBOT_HREF,
    gloss: "unofficial, not xAI",
  },
  {
    label: "Music",
    href: MUSIC_HREF,
    gloss: "catalogue lives next door",
  },
] as const satisfies readonly AlsoDoor[];
