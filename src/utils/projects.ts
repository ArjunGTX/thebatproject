import { ExternalLinks } from "./constants";

export type Project = {
  title: string;
  description: string;
  link: string;
  techStack: string[];
  coverImage: string;
  cta: string;
};

export const Projects: Project[] = [
  {
    title: "SpriteLab",
    description:
      "A nodejs CLI for building a custom icon library for react projects.",
    link: ExternalLinks.spriteLab,
    techStack: ["nodejs", "typescript", "commander", "inquirer"],
    coverImage: "/images/projects/spritelab.webp",
    cta: "View on NPM",
  },
  {
    title: "Cubic Bezier Generator",
    description: "A webapp to generate cubic bezier curves for CSS animations.",
    link: ExternalLinks.cubicBezier,
    techStack: ["html", "css", "javascript"],
    coverImage: "/images/projects/cubic-bezier.webp",
    cta: "Try it out",
  },
  {
    title: "PrestoUI",
    description:
      "A lightweight component library for building beautiful user interfaces.",
    link: ExternalLinks.prestoUi,
    techStack: ["html", "css", "javascript"],
    coverImage: "/images/projects/prestoui.webp",
    cta: "Take a look",
  },
];
