import { Constants, InternalRoutes } from "@/utils/constants";
import { MetadataRoute } from "next";

export default function sitemap(): Promise<MetadataRoute.Sitemap> {
  return Promise.resolve([
    {
      url: Constants.frontendUrl,
      lastModified: new Date(),
      priority: 1.0,
      changeFrequency: "daily",
    },
    {
      url: `${Constants.frontendUrl}${InternalRoutes.blog}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ] as MetadataRoute.Sitemap);
}
