"use client";

import { useEffect, useRef, useState } from "react";
import {
  buildMetalField,
  CRAWL_PERIOD_MS,
  measureWord,
  paintMetal,
  POUR_MS,
  prefersReducedMotion,
  stampWord,
  wordInkSize,
  type MetalField,
} from "@/lib/cast-metal";
import { SITE_NAME } from "@/lib/site";

type Phase = "type" | "metal";

export function CastWordmark() {
  const typeRef = useRef<HTMLSpanElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<Phase>("type");

  useEffect(() => {
    const type = typeRef.current;
    const canvas = canvasRef.current;
    if (!type || !canvas) {
      return;
    }

    let field: MetalField | null = null;
    let frame = 0;
    let start = 0;
    let running = true;
    let token = 0;
    let lastW = 0;
    let lastH = 0;
    const reduce = prefersReducedMotion();

    const paint = (now: number) => {
      if (!running || !field) {
        return;
      }
      if (start === 0) {
        start = now;
      }
      const elapsed = now - start;
      const pour = reduce ? 1 : Math.min(1, elapsed / POUR_MS);
      const ctx = canvas.getContext("2d", { alpha: true });
      if (!ctx) {
        setPhase("type");
        return;
      }
      paintMetal(ctx, field, reduce ? CRAWL_PERIOD_MS / 2 : elapsed, pour);
      if (!reduce && !document.hidden) {
        frame = window.requestAnimationFrame(paint);
      }
    };

    const build = async () => {
      const current = ++token;
      try {
        const word = measureWord(type);
        if (!word.text.trim()) {
          setPhase("type");
          return;
        }
        try {
          if (document.fonts?.load) {
            await document.fonts.load(word.font);
          }
          if (document.fonts?.ready) {
            await document.fonts.ready;
          }
        } catch {
          /* keep the measured fallback font */
        }
        if (!running || current !== token) {
          return;
        }

        const probe = canvas.getContext("2d", { alpha: true });
        if (!probe) {
          setPhase("type");
          return;
        }

        type.style.minWidth = "";
        type.style.minHeight = "";
        void type.offsetWidth;

        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const font = scaleFont(word.font, dpr);
        const spacing = scaleSpacing(word.letterSpacing, dpr);
        const ink = wordInkSize(probe, font, spacing, word.text);
        const width = ink.width;
        const height = ink.height;
        const maxCss = Math.max(160, window.innerWidth - 32);
        const cssW = Math.min(maxCss, width / dpr);
        const cssH = height / dpr;
        canvas.style.width = `${cssW}px`;
        canvas.style.height = `${cssH}px`;
        if (field && width === lastW && height === lastH) {
          if (!reduce && !document.hidden && running) {
            window.cancelAnimationFrame(frame);
            frame = window.requestAnimationFrame(paint);
          }
          return;
        }
        window.cancelAnimationFrame(frame);
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) {
          setPhase("type");
          return;
        }

        stampWord(ctx, width, height, font, spacing, word.text);
        field = buildMetalField(ctx, width, height);
        lastW = width;
        lastH = height;
        start = 0;
        setPhase("metal");
        frame = window.requestAnimationFrame(paint);
      } catch {
        setPhase("type");
      }
    };

    const ro = new ResizeObserver(() => {
      void build();
    });
    ro.observe(type);

    const onVisible = () => {
      if (!document.hidden && !reduce && running && field) {
        window.cancelAnimationFrame(frame);
        frame = window.requestAnimationFrame(paint);
      }
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      running = false;
      window.cancelAnimationFrame(frame);
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  return (
    <h1 className="cast-word" data-metal={phase === "metal" ? "on" : "off"}>
      <span ref={typeRef} className="cast-word-type">
        {SITE_NAME}
      </span>
      <canvas ref={canvasRef} className="cast-word-metal" aria-hidden="true" />
    </h1>
  );
}

function scaleFont(font: string, dpr: number) {
  return font.replace(
    /(\d+(?:\.\d+)?)px/,
    (_, px: string) => `${Number(px) * dpr}px`,
  );
}

function scaleSpacing(letterSpacing: string, dpr: number) {
  if (letterSpacing.endsWith("px")) {
    return `${parseFloat(letterSpacing) * dpr}px`;
  }
  return letterSpacing;
}
