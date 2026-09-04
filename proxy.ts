import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SKIP_TOOLBAR_HEADERS } from "@/lib/no-vercel-chrome";

export function proxy(_request: NextRequest) {
  const response = NextResponse.next();
  for (const header of SKIP_TOOLBAR_HEADERS) {
    if (header.key.toLowerCase() === "content-security-policy") {
      response.headers.append(header.key, header.value);
    } else {
      response.headers.set(header.key, header.value);
    }
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|icon.svg|favicon.ico).*)"],
};
