export const CSP_POLICY = [
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com",
  "frame-src 'none'",
  "object-src 'none'",
].join("; ");

export const SKIP_TOOLBAR_HEADERS = [
  { key: "x-vercel-skip-toolbar", value: "1" },
  {
    key: "Content-Security-Policy",
    value: `${CSP_POLICY}; frame-ancestors 'none'`,
  },
  {
    key: "Content-Security-Policy",
    value: CSP_POLICY,
  },
] as const;

export const VERCEL_CHROME_SELECTOR = [
  "vercel-live-feedback",
  "vercel-toolbar",
  "vercel-live-feedback-modal",
  "#vercel-live-feedback",
  "#vercel-toolbar",
  "#__vercel_toolbar",
  "[data-vercel-toolbar]",
  "[data-vercel-live]",
  '[id*="vercel-live"]',
  '[id*="vercel-toolbar"]',
  '[class*="vercel-live"]',
  '[class*="vercel-toolbar"]',
  '[class*="vercel_live"]',
  '[class*="vercel_toolbar"]',
  'iframe[src*="vercel.live"]',
  'iframe[src*="_next-live"]',
  'script[src*="vercel.live"]',
  'script[src*="_next-live/feedback"]',
].join(", ");

export const STRIP_VERCEL_CHROME_SCRIPT = `"use strict";
(function () {
  var re = /vercel\\.live|_next-live\\/feedback|vercel-live|vercel-toolbar|vercel_live|vercel_toolbar|__vercel_toolbar/i;
  function bad(node) {
    if (!node || node.nodeType !== 1) return false;
    var tag = String(node.tagName || "");
    if (tag === "VERCEL-LIVE-FEEDBACK" || tag === "VERCEL-TOOLBAR") return true;
    var id = String(node.id || "");
    var cls = typeof node.className === "string" ? node.className : "";
    var src = "";
    try {
      src = String(node.getAttribute("src") || node.getAttribute("href") || "");
    } catch (e) {}
    return re.test(tag + " " + id + " " + cls + " " + src);
  }
  function peel(node) {
    if (!node) return;
    if (bad(node)) {
      try { node.remove(); } catch (e) {}
      return;
    }
    if (!node.querySelectorAll) return;
    var found = node.querySelectorAll(
      "vercel-live-feedback,vercel-toolbar,script[src*='vercel.live'],script[src*='_next-live'],iframe[src*='vercel.live'],iframe[src*='_next-live']"
    );
    for (var i = 0; i < found.length; i++) {
      try { found[i].remove(); } catch (e) {}
    }
  }
  function wrap(proto, key) {
    var orig = proto[key];
    if (!orig) return;
    proto[key] = function () {
      var node = arguments[0];
      if (bad(node)) return node;
      return orig.apply(this, arguments);
    };
  }
  try {
    wrap(Element.prototype, "appendChild");
    wrap(Element.prototype, "insertBefore");
    wrap(Node.prototype, "appendChild");
    wrap(Node.prototype, "insertBefore");
  } catch (e) {}
  peel(document.documentElement);
  try {
    new MutationObserver(function (records) {
      for (var i = 0; i < records.length; i++) {
        var add = records[i].addedNodes;
        for (var j = 0; j < add.length; j++) peel(add[j]);
      }
    }).observe(document.documentElement, { childList: true, subtree: true });
  } catch (e) {}
})();
`;
