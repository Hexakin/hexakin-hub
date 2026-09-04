"use client";

import { useEffect } from "react";
import { VERCEL_CHROME_SELECTOR } from "@/lib/no-vercel-chrome";

export function NoVercelChrome() {
  useEffect(() => {
    const strip = () => {
      document.querySelectorAll(VERCEL_CHROME_SELECTOR).forEach((node) => {
        node.remove();
      });
    };

    strip();
    const watch = new MutationObserver(strip);
    watch.observe(document.documentElement, { childList: true, subtree: true });
    return () => watch.disconnect();
  }, []);

  return null;
}
