"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const article = document.querySelector<HTMLElement>("#essay");

    if (!article) {
      return;
    }

    const update = () => {
      const top = article.offsetTop;
      const height = article.offsetHeight;
      const start = top;
      const end = top + height - window.innerHeight;
      const span = Math.max(1, end - start);
      setProgress(Math.min(1, Math.max(0, (window.scrollY - start) / span)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className="reading-progress"
      aria-hidden="true"
      style={{ transform: `scaleX(${progress})` }}
    />
  );
}
