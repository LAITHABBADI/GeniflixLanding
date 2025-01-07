// app/sitemap.ts
import { MetadataRoute } from "next";

const baseUrl = "https://www.geniflix.com";
const currentDate = new Date();

const routes = [
  {
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: "daily" as const,
    priority: 1,
  },
  // ... other routes
] satisfies MetadataRoute.Sitemap;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes;
}
