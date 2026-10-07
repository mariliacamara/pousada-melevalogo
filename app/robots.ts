import type { MetadataRoute } from "next";

import { absoluteUrl, isProduction, site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Previews e ambientes de teste ficam fora do Google.
  if (!isProduction) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: site.url,
  };
}
