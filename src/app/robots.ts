// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/", // Add any private routes you want to block
    },
    sitemap: "https://www.geniflix.com/sitemap.xml",
  };
}
