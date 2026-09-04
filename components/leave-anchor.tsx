"use client";

import { useEffect, type MouseEvent, type ReactNode } from "react";
import type { Door } from "@/lib/site";
import { prefersReducedMotion } from "@/lib/cast-metal";
import {
  bindLeaveCutRestore,
  LEAVE_CUT_CLASS,
  peelLeaveCut,
} from "@/lib/leave-cut";

const CUT_MS = 350;

if (typeof window !== "undefined") {
  bindLeaveCutRestore();
}

type LeaveAnchorProps = {
  door: Door;
  className: string;
  children: ReactNode;
};

export function LeaveAnchor({ door, className, children }: LeaveAnchorProps) {
  useEffect(() => {
    bindLeaveCutRestore();
    peelLeaveCut();
  }, []);

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
    peelLeaveCut();
    const veil = document.createElement("div");
    veil.className = LEAVE_CUT_CLASS;
    veil.setAttribute("aria-hidden", "true");
    document.body.appendChild(veil);
    window.setTimeout(() => {
      peelLeaveCut();
      window.location.assign(door.href);
    }, CUT_MS);
  }

  return (
    <a className={className} href={door.href} onClick={onClick}>
      {children}
    </a>
  );
}
