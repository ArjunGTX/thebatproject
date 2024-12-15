import { Metadata, Viewport } from "next";
import { Constants, ExternalLinks } from "./constants";

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
  const title =
    options?.title ??
    "Developer by day, Vigilante by night | Portfolio of a digital architect";
  const description =
    options?.description ??
    "Step into the world of a masked developer who crafts elegant web solutions by day and reshapes the digital landscape after dark. Explore a portfolio driven by innovation, precision, and a passion for change.";
  const url = `${Constants.frontendUrl}${options?.path ?? ""}`;

  return {
    title,
    description,
    authors: {
      name: "Arjun VC",
      url: ExternalLinks.linkedin,
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
          alt: "Developer by day, vigilante by night.",
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
          height: 600,
          width: 1200,
          alt: "Developer by day, vigilante by night.",
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
