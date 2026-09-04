export const LEAVE_CUT_CLASS = "leave-cut";

let bound = false;

export function peelLeaveCut() {
  if (typeof document === "undefined") {
    return;
  }
  document.querySelectorAll(`.${LEAVE_CUT_CLASS}`).forEach((node) => {
    node.remove();
  });
}

export function bindLeaveCutRestore() {
  if (bound || typeof window === "undefined") {
    return;
  }
  bound = true;

  const restore = () => {
    peelLeaveCut();
  };

  window.addEventListener("pageshow", restore);
  window.addEventListener("popstate", restore);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      restore();
    }
  });
}
