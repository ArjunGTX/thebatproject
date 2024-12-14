import { Metadata, Viewport } from "next";
import { Constants } from "./constants";

export const getViewPort = () => {
  const viewport: Viewport = {
    themeColor: "#000000",
    colorScheme: "dark",
  };
  return viewport;
};

export const getMetaData = (options?: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata => {
  const title = options?.title ?? "The Bat Project";
  const description = options?.description ?? "The Bat Project by Arjun";
  const url = `${Constants.frontendUrl}${options?.path ?? ""}`;

  return {
    title,
    description,
    authors: {
      name: "Arjun VC",
      url,
    },
    creator: "Arjun VC",
    icons: [
      {
        rel: "icon",
        url: "/favicon.ico",
      },
    ],
    twitter: {
      title,
      description,
      card: "summary_large_image",
      images: [
        {
          url: `${Constants.frontendUrl}/images/preview.webp`,
          height: 630,
          width: 1200,
          alt: "Batman looking at the bat signal pointed at the sky",
        },
      ],
      creator: "@im_arjunvc",
    },
    openGraph: {
      type: "website",
      description,
      siteName: "The Bat Project",
      locale: "en_US",
      images: [
        {
          url: `${Constants.frontendUrl}/images/preview.webp`,
          height: 630,
          width: 1200,
          alt: "Batman looking at the bat signal pointed at the sky",
        },
      ],
      title,
      url,
      countryName: "India",
      emails: ["arjunvc.official@gmail.com"],
    },
    metadataBase: new URL(Constants.frontendUrl),
    publisher: "Arjun VC",
  };
};
