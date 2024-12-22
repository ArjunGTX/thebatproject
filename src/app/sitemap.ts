import { Constants } from "@/utils/constants";
import { MetadataRoute } from "next";

export default function sitemap(): Promise<MetadataRoute.Sitemap> {
  return Promise.resolve([
    {
      url: Constants.frontendUrl,
      lastModified: new Date(),
      priority: 1.0,
      changeFrequency: "daily",
    },
  ] as MetadataRoute.Sitemap);
}
