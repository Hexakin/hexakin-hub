# Hexakin.com — Cursor brief

You are restyling **hexakin.com** (`hexakin-hub`, Next.js App Router on Vercel). This file is the job. `DESIGN.md` is the token spec. Follow both.

Do not invent a new brand. Hexakin already exists. You are changing what the **public hub** is for.

---

## The job

**From:** a builder “door” page (Night Bench, metal wordmark, workshop mystique, Music + Grokbot).

**To:** an independent **games writer** who still builds things. Enthusiastic about games. Calm and professional on the page. Not a YouTuber. Not a studio landing page. Not a music artist.

If someone clicks the X bio *Games writing. Building on the side.* this site must make that sentence true in under two seconds.

---

## Who this is for

Jonathan / Hexakin. British. Writes long, sincere takes on games he actually likes (FF7 Remake trilogy), then gets blunt about marketing. Jokes stay in the copy; the **chrome** stays quiet.

He is not a staff writer yet. The site should look like he could be one — Edge feature energy, not Kotaku, not IGN, not Substack-default, not “gamer RGB”.

**Push:** game commentary first. Building mixed in. Music is a hobby: keep the door, never lead with it, never sell commissions on this domain.

---

## Live vs this repo (read first)

Production is **ahead of this checkout**. Live homepage (2026-09-04):

- Strap: `build what you love, love what you build`
- Honesty line: hub / Hillmade / music.hexakin.com / grokbot unofficial not xAI
- Doors: **MUSIC** → music.hexakin.com, **GROK BOT STUDIOS** → grokbot.studio
- Title: `HEXAKIN: the public hub by Hillmade`
- Metal/canvas wordmark, XX mark, black/bone
- Apex `hexakin.com` 307s to `www.hexakin.com`

This repo still has an older one-door homepage (`Songs, tools, and things you can actually use.`). **Match live behaviour, then restyle.** Do not deploy the stale local homepage. Pull / diff against production before large deletes.

Music site (`music.hexakin.com`) and grokbot.studio are **out of scope**. Do not restyle them. Only link out.

---

## Information architecture

Keep it a hub. Stop making the hub the product.

| Path | Role |
|---|---|
| `/` | Masthead + **featured essay** + two more headlines if they exist + a small “also” row |
| `/writing` | Index of essays, newest first |
| `/writing/they-didnt-ship-disc-2` | First essay. Ship this. |
| Music | External door, last |
| Grokbot | External door, middle. Label **Grokbot** (not “Grok Bot Studios”). Gloss: `unofficial, not xAI` |

Nav, left to right: **Hexakin** (home) · Writing · Grokbot · Music  
Footer: © Hexakin · Built in the open by [Hillmade](https://hillmade.uk)

No shop, no catalogue grid, no Buttondown embed, no enforcer mascot, no album cards on this domain.

---

## Look like (north stars)

Steal *posture*, not pixels.

- **Edge magazine** — enthusiast, adult, type-led, one idea on the cover
- **Eurogamer / RPS features** — UK games writing, long measure, byline, date
- **404 Media / Defector** — independent writer, not a publisher home page
- His own X Article *They Didn't Ship Disc 2* — the voice the layout must serve

The feeling: a lamp on a desk at 1am, a piece you actually finish. Not a foundry. Not a streaming hub. Not a HUD.

---

## Do not look like

- Night Bench / metal-shader HEXAKIN canvas
- Bone-brutalist music site (blood `#FF2233`, enforcer, 83 release cards)
- RGB, scanlines, health bars, achievement toasts, “PRESS START”
- The Verge chrome, Kotaku clickbait cards, IGN play-button hero
- Medium/Substack beige essay template
- Startup doors with 12px rise-in animation as the whole site
- LinkedIn / agency “we build products”
- Fake game screenshots as decoration
- Square Enix / PlayStation key art (copyright). Original header art for Disc 2 is fine if he already generated one; do not fetch official art.

---

## Visual system (see DESIGN.md)

**Stay dark.** X is dark. The brand is night. Do not flip to paper-white “literary journal” unless he asks.

Shift is **type and layout**, not a new colour story.

1. **Kill the canvas metal wordmark.** HEXAKIN is small in the masthead, next to the XX mark. The hero is the **essay title**, not the logo.
2. **Serif for reading.** Display serif on story titles. Serif body on articles (~62–68ch, 1.6–1.7 line-height). Sans for nav and UI. Mono for kickers (`Essay · 4 September 2026`).
3. **Almost no radius.** Square plates. Hairline borders. No cards-with-shadows.
4. **One warm accent** (copper / desk-lamp). Links, kicker, focus. Never neon, never blood-red from the music brand.
5. **Motion:** none except underline/color on hover, and `prefers-reduced-motion`. No hero settle-up.

Homepage is a **front page**, not a splash:

```
[XX] HEXAKIN                         Writing  Grokbot  Music

ESSAY · 4 SEPTEMBER 2026
They Didn't Ship Disc 2
Square put the finale on one disc. The rest is a download.
Why one disc versus two — and why the middle is worse than picking a side.
By Jonathan

Also
Grokbot — unofficial, not xAI
Music — catalogue lives next door
```

That is enough. Do not invent three fake extra essays. One real piece is more professional than a grid of placeholders.

---

## First essay

Title: **They Didn't Ship Disc 2**  
Slug: `they-didnt-ship-disc-2`  
Kicker: Essay · 4 September 2026  
Byline: Jonathan  

Keep his jokes. Do not “professionalise” the prose. British dates. Game is **Revelation**, release **8 April 2027**.

Article chrome: title, kicker, byline, optional read time (compute, don’t fake). Typography-only header (no stock disc). Single column. Quiet end line: also on X + next door links — no newsletter hard-sell.

---

## Metadata

- Title pattern: `They Didn't Ship Disc 2 — Hexakin`
- Homepage title: `Hexakin`
- Description: `Games writing from Hexakin. Building on the side.`
- OG: featured essay on `/`; article title on essay pages
- `lang="en-GB"`
- Canonical on www

---

## Copy rules

- British English
- Short labels: Writing, Grokbot, Music
- Do not write “Welcome to my blog”
- Do not call him a journalist or “award-winning”
- Do not promote AI music, commissions, or The Land Is Backwards on the homepage
- Grokbot disclaimer stays, small, on that door only

---

## Done when

- `/` reads as a writer with one featured essay
- `/writing/they-didnt-ship-disc-2` is the full Disc 2 piece
- Music and Grokbot still reachable, not the lead
- No metal wordmark, no builder strap, no music catalogue
- DESIGN.md tokens used
- **Do not deploy** unless he says so.
