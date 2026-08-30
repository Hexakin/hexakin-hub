export const SITE_URL = "https://www.hexakin.com";
export const SITE_NAME = "HEXAKIN";
export const SITE_TITLE = "HEXAKIN: the public hub by Hillmade";
export const SITE_LINE = "build what you love, love what you build";
export const SITE_META =
  "Hexakin is the public hub. Hillmade is the parent. Music lives at music.hexakin.com. grokbot.studio is unofficial and not xAI.";
export const SITE_HUB =
  "Hexakin is the public hub. Hillmade is the parent. Music lives at music.hexakin.com. grokbot.studio is unofficial, not xAI.";
export const MUSIC_HREF = "https://music.hexakin.com";
export const HILLMADE_HREF = "https://hillmade.uk";
export const GROKBOT_HREF = "https://grokbot.studio";

export type DoorGloss =
  | { kind: "clause"; text: string }
  | { kind: "none" };

export type Door =
  | {
      kind: "cut";
      label: string;
      href: string;
      gloss: DoorGloss;
    }
  | {
      kind: "leave";
      label: string;
      href: string;
      gloss: DoorGloss;
    };

export const doors = [
  {
    kind: "cut",
    label: "Music",
    href: MUSIC_HREF,
    gloss: { kind: "clause", text: "songs, the shop, the catalogue" },
  },
  {
    kind: "leave",
    label: "Grok Bot Studios",
    href: GROKBOT_HREF,
    gloss: { kind: "clause", text: "one bot builds you a studio" },
  },
] as const satisfies readonly Door[];
