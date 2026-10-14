import type { MetadataRoute } from "next";
import { nav, legal, site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [...nav, ...legal].map((p) => ({ url: `${site.url}${p.href === "/" ? "" : p.href}`, lastModified: new Date() }));
}
