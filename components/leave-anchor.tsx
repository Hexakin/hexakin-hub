"use client";

import type { MouseEvent, ReactNode } from "react";
import type { Door } from "@/lib/site";
import { prefersReducedMotion } from "@/lib/cast-metal";

const CUT_MS = 350;

type LeaveAnchorProps = {
  door: Door;
  className: string;
  children: ReactNode;
};

export function LeaveAnchor({ door, className, children }: LeaveAnchorProps) {
  function onClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.defaultPrevented) {
      return;
    }
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    if (prefersReducedMotion()) {
      return;
    }
    if (door.kind === "leave") {
      return;
    }

    event.preventDefault();
    const veil = document.createElement("div");
    veil.className = "leave-cut";
    veil.setAttribute("aria-hidden", "true");
    document.body.appendChild(veil);
    window.setTimeout(() => {
      window.location.assign(door.href);
    }, CUT_MS);
  }

  return (
    <a className={className} href={door.href} onClick={onClick}>
      {children}
    </a>
  );
}
