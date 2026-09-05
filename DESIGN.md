---
version: alpha
name: Hexakin Writing
description: Night-desk editorial. Games writing first, building on the side. Dark, type-led, adult enthusiast — not a foundry, not a HUD.
colors:
  primary: "#F4F1E9"
  secondary: "#8C8B84"
  tertiary: "#C4A574"
  neutral: "#0A0A0C"
  on-primary: "#0A0A0C"
  on-tertiary: "#0A0A0C"
  lifted: "#121214"
  hairline: "#2A2A33"
typography:
  h1:
    fontFamily: Newsreader
    fontSize: 3rem
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  h2:
    fontFamily: Newsreader
    fontSize: 1.75rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  body-md:
    fontFamily: Source Serif 4
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.65
  ui:
    fontFamily: Space Grotesk
    fontSize: 0.9375rem
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.02em"
  kicker:
    fontFamily: Space Mono
    fontSize: 0.6875rem
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.12em"
rounded:
  sm: 0px
  md: 0px
  lg: 0px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  xxl: 80px
components:
  page:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
  article-well:
    backgroundColor: "{colors.lifted}"
    textColor: "{colors.primary}"
    padding: 24px
  link:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.tertiary}"
  link-hover:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
  kicker:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.tertiary}"
    typography: kicker
  nav-item:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.secondary}"
    typography: ui
  nav-item-hover:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.sm}"
    padding: 12px
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
  rule:
    backgroundColor: "{colors.hairline}"
    textColor: "{colors.secondary}"
---

## Overview

Hexakin.com is a public hub that should read as an independent games writer who also builds. Stay dark. Shift is type, measure, and what sits in the hero. Logo shrinks. Essay title grows. Music and Grokbot remain doors, never the lead.

## Colors

- Neutral #0A0A0C page void
- Primary #F4F1E9 bone
- Secondary #8C8B84 muted
- Tertiary #C4A574 copper desk-lamp (only warm note — never #FF2233)
- Lifted #121214 optional article well
- Hairline #2A2A33

## Typography

- Newsreader — story titles
- Source Serif 4 — article body 62–68ch
- Space Grotesk — nav/UI
- Space Mono — kickers

Wordmark HEXAKIN in Grotesk, small, masthead — never full-viewport metal canvas.

## Layout / shapes / motion

Flat. Radius zero. Hairlines not shadows. Motion: hover underline/color + prefers-reduced-motion only.

## Don'ts

- Don't restore metal HEXAKIN canvas or strap “build what you love, love what you build”
- Don't lead with Music
- Don't use official game key art
- Don't fake extra essays
- Don't deploy unless asked
