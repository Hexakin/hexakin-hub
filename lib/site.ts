export const SITE_URL = "https://www.hexakin.com";
export const SITE_CANONICAL = "https://www.hexakin.com/";
export const SITE_NAME = "Hexakin";
export const SITE_TITLE = "Hexakin";
export const SITE_META = "Games writing from Hexakin. Building on the side.";
export const MUSIC_HREF = "https://music.hexakin.com";
export const HILLMADE_HREF = "https://hillmade.uk";
export const GROKBOT_HREF = "https://grokbot.studio";
export const NOTION_EXPORT_HREF = "https://notion.hexakin.com";
export const DROPFORGE_HREF = "https://arcade.hexakin.com";
export const DISCORD_LOG_VIEWER_HREF = "https://logs.hexakin.com";
export const BUS_STOP_DIVISION_HREF = "https://busstop.hexakin.com";
export const AO3_FORMATTER_HREF = "https://ao3.hexakin.com";
export const GOODREADS_EXPORT_HREF = "https://goodreads.hexakin.com";
export const X_HREF = "https://x.com/Hexakin";
export const X_DISC2_HREF = "https://x.com/Hexakin/status/2095964870617579867";

export type NavItem = {
  label: string;
  href: string;
  external: boolean;
};

export const navItems = [
  { label: "Writing", href: "/writing", external: false },
  { label: "Notion Export Cleaner", href: NOTION_EXPORT_HREF, external: true },
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
    label: "Notion Export Cleaner",
    href: NOTION_EXPORT_HREF,
    gloss: "notion.hexakin.com",
  },
  {
    label: "DropForge",
    href: DROPFORGE_HREF,
    gloss: "arcade",
  },
  {
    label: "Discord Log Viewer",
    href: DISCORD_LOG_VIEWER_HREF,
    gloss: "logs.hexakin.com",
  },
  {
    label: "Bus Stop Division",
    href: BUS_STOP_DIVISION_HREF,
    gloss: "busstop.hexakin.com",
  },
  {
    label: "AO3 Formatter",
    href: AO3_FORMATTER_HREF,
    gloss: "ao3.hexakin.com",
  },
  {
    label: "Goodreads Export Fixer",
    href: GOODREADS_EXPORT_HREF,
    gloss: "goodreads.hexakin.com",
  },
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
