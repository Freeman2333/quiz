import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames for the specified locales
  matcher: ["/", "/(en|de|es|fr)/:path*"],
};
