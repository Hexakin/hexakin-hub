export const SITE_URL = "https://hexakin.com";
export const SITE_NAME = "HEXAKIN";
export const SITE_LINE = "build what you love, love what you build";
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
