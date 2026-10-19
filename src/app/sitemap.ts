import type { MetadataRoute } from "next";

const baseUrl = "https://www.localroostcafe.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/rooms", "/cafe", "/dining", "/events", "/experiences", "/gallery", "/contact"];
  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
