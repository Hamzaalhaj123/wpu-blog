import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { locales } from "./config/locales";

const intlMiddleWare = createMiddleware({
  locales,
  defaultLocale: "en",
});
export const config = {
  matcher: ["/", "/(ar|en)/:path*"],
};

export async function middleware(request: NextRequest): Promise<NextResponse> {
  if (request.method === "GET") {
    const response = intlMiddleWare(request);
    const token = request.cookies.get("session")?.value ?? null;
    if (token !== null) {
      // Only extend cookie expiration on GET requests since we can be sure
      // a new session wasn't set when handling the request.
      response.cookies.set("session", token, {
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
        sameSite: "lax",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });
    }
    return response;
  }
  const originHeader = request.headers.get("Origin");
  const hostHeader = request.headers.get("Host");
  if (originHeader === null || hostHeader === null) {
    return new NextResponse(null, {
      status: 403,
    });
  }
  let origin: URL;
  try {
    origin = new URL(originHeader);
  } catch {
    return new NextResponse(null, {
      status: 403,
    });
  }
  if (origin.host !== hostHeader) {
    return new NextResponse(null, {
      status: 403,
    });
  }

  return intlMiddleWare(request);
}
