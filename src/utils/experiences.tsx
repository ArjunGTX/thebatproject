import { CustomLink } from "@/components/CustomLink";
import { ExternalLinks } from "./constants";

export type Experience = {
  title: string;
  company: string;
  date: string;
  descriptions: string[];
  image: string;
  imageAlt: string;
  imageLink: string;
  companyLink: string;
  subheading: React.ReactNode;
};

export const Experiences: Experience[] = [
  {
    title: "Frontend Developer",
    company: "VICARA",
    date: "Feb 2022 to Jun 2023",
    descriptions: [
      "At Vicara, I led the end-to-end development of Patr's frontend, migrating the codebase from Material UI to a custom-built SCSS library, ensuring type safety using TypeScript, Containerizing the app for local development, and implementing CI/CD pipelines.",
      "I also built features like a drag-and-drop CI/CD pipeline builder, an in-app code editor, and revamped the landing page in Next.js, significantly boosting web vitals and SEO.",
      "Additionally, I explored 3D animations and WebGL with Three.js, wrote basic APIs in Rust, and automated screenshot generation for documentation website using Cypress.",
    ],
    image: "/images/orgs/patr.webp",
    imageAlt: "Patr - Deploy your app in 60 seconds",
    companyLink: ExternalLinks.vicara,
    imageLink: ExternalLinks.patr,
    subheading: (
      <>
        Revolutionized the frontend architecture for an infrastructure
        management platform -{" "}
        <CustomLink
          href={ExternalLinks.patr}
          target="_blank"
          className="font-medium underline hover:text-primary text-xs md:text-sm lg:text-base text-tertiary"
        >
          Patr
        </CustomLink>
      </>
    ),
  },
  {
    title: "Founding Engineer",
    company: "FINDR",
    date: "Jul 2023 to Present",
    companyLink: ExternalLinks.findr,
    imageLink: ExternalLinks.findr,
    descriptions: [
      "At Vicara, I led the end-to-end development of Patr's frontend, migrating the codebase from Material UI to a custom-built SCSS library, ensuring type safety using TypeScript, Containerizing the app for local development, and implementing CI/CD pipelines.",
      "I also built features like a drag-and-drop CI/CD pipeline builder, an in-app code editor, and revamped the landing page in Next.js, significantly boosting web vitals and SEO.",
      "Additionally, I explored 3D animations and WebGL with Three.js, wrote basic APIs in Rust, and automated screenshot generation for documentation website using Cypress.",
    ],
    image: "/images/orgs/findr.webp",
    imageAlt: "Findr - Your AI second brain",
    subheading: (
      <>
        Revolutionized the frontend architecture for an infrastructure
        management platform -{" "}
        <CustomLink
          href={ExternalLinks.findr}
          target="_blank"
          className="font-medium underline hover:text-primary text-xs md:text-sm lg:text-base text-tertiary"
        >
          Findr
        </CustomLink>
      </>
    ),
  },
];
