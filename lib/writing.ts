import { theyDidntShipDisc2 } from "@/content/writing/they-didnt-ship-disc-2";

export type Essay = {
  slug: string;
  title: string;
  kicker: string;
  date: string;
  dateLabel: string;
  byline: string;
  dek: string;
  standfirst: string;
  xHref: string;
  paragraphs: readonly string[];
};

export const essays: readonly Essay[] = [theyDidntShipDisc2];

export function listEssays() {
  return [...essays].sort((left, right) => right.date.localeCompare(left.date));
}

export function getEssay(slug: string) {
  return essays.find((essay) => essay.slug === slug);
}

export function featuredEssay(): Essay {
  const [featured] = listEssays();

  if (!featured) {
    throw new Error("Hexakin needs at least one essay.");
  }

  return featured;
}

export function wordCount(essay: Essay) {
  return essay.paragraphs.join(" ").trim().split(/\s+/).filter(Boolean).length;
}

export function readMinutes(essay: Essay) {
  return Math.max(1, Math.round(wordCount(essay) / 220));
}
