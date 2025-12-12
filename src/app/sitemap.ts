import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const routes = [
  "/",
  "/services",
  "/about",
  "/contact",
  "/mobile-tyre-fitting",
  "/home-tyre-fitting",
  "/mobile-tyre-repair",
  "/mobile-tyre-change",
  "/locking-wheel-nut-removal",
  "/tpms-sensor-replacement",
  "/van-tyre-fitting",
  "/truck-tyre-fitting",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.url}${route === "/" ? "" : route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : route.startsWith("/mobile") ? 0.9 : 0.8,
  }));
}
