import { PageSection } from "@/app/_components/PageSection";
import React from "react";
import { CustomLink } from "./CustomLink";
import { Icon } from "./Icon";
import { ExternalLinks, HomePageSections } from "@/utils/constants";
import { IconName } from "../../icons/types/icon-name";

const SiteLinks = [
  {
    name: "Experience",
    url: `/#${HomePageSections.journey}`,
  },
  {
    name: "Projects",
    url: `/#${HomePageSections.missions}`,
  },
  {
    name: "Skills",
    url: `/#${HomePageSections.arsenal}`,
  },
  {
    name: "About",
    url: `/#${HomePageSections.about}`,
  },
];

const SocialLinks: { icon: IconName; url: string; title: string }[] = [
  {
    icon: "outline/mail",
    url: ExternalLinks.email,
    title: "Email",
  },
  {
    icon: "outline/github",
    url: ExternalLinks.github,
    title: "GitHub",
  },
  {
    icon: "outline/linkedin",
    url: ExternalLinks.linkedin,
    title: "LinkedIn",
  },
  {
    icon: "outline/twitter",
    url: ExternalLinks.twitter,
    title: "Twitter",
  },
];

const WorkLinks = [
  {
    name: "Findr",
    url: ExternalLinks.findr,
  },
  {
    name: "Patr",
    url: ExternalLinks.patr,
  },
];

const ProjectLinks = [
  {
    name: "Cubic Bezier",
    url: ExternalLinks.cubicBezier,
  },
  {
    name: "SpriteLab",
    url: ExternalLinks.spriteLab,
  },
  {
    name: "Presto UI",
    url: ExternalLinks.prestoUi,
  },
];

const ContactLinks = [
  {
    name: "Download Resume",
    url: ExternalLinks.resume,
  },
  {
    name: "Schedule a meeting",
    url: ExternalLinks.meeting,
  },
  {
    name: "arjunvc.official@gmail.com",
    url: ExternalLinks.email,
  },
  {
    name: "+91 8921404559",
    url: ExternalLinks.phone,
  },
];

export const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-start relative z-50 min-h-[40vh] snap-center">
      <div className="h-[2px] bg-[linear-gradient(to_right,#9ca3af10,#6b7280bb,#9ca3af10)] w-full absolute top-0"></div>
      <PageSection className="w-full flex justify-center items-start py-12 md:py-14 lg:py-16 xl:py-20">
        <div className="flex justify-start flex-wrap items-start gap-y-8 gap-x-24">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl md:text-4xl leading-none">
              The Bat Project
            </h2>
            <p className="text-tertiary text-sm">
              Portfolio of a digital architect
            </p>
            <ul className="flex justify-start p-0 m-0 gap-2 items-center mt-2">
              {SocialLinks.map((link) => (
                <li key={link.title} className="flex">
                  <CustomLink
                    href={link.url}
                    className="text-secondary size-8 border border-solid border-stroke flex justify-center items-center rounded-full hover:text-primary hover:border-tertiary focus-visible:text-primary"
                    target="_blank"
                    rel="noopener"
                  >
                    <span className="sr-only">{link.title}</span>
                    <Icon size="1.25rem" icon={link.icon} />
                  </CustomLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-start items-start gap-5">
            <p className="text-xs text-tertiary">This Website</p>
            <ul className="flex flex-col gap-3 p-0 m-0">
              {SiteLinks.map((link) => (
                <li key={link.url} className="flex p-0 m-0">
                  <CustomLink
                    href={link.url}
                    className="text-secondary hover:text-primary focus-visible:text-primary text-sm"
                  >
                    {link.name}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-start items-start gap-5">
            <p className="text-xs text-tertiary">Experience</p>
            <ul className="flex flex-col gap-3 p-0 m-0">
              {WorkLinks.map((link) => (
                <li key={link.url} className="flex p-0 m-0">
                  <CustomLink
                    href={link.url}
                    target="_blank"
                    rel="noopener"
                    className="text-secondary hover:text-primary focus-visible:text-primary text-sm"
                  >
                    {link.name}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-start items-start gap-5">
            <p className="text-xs text-tertiary">Projects</p>
            <ul className="flex flex-col gap-3 p-0 m-0">
              {ProjectLinks.map((link) => (
                <li key={link.url} className="flex p-0 m-0">
                  <CustomLink
                    href={link.url}
                    target="_blank"
                    rel="noopener"
                    className="text-secondary hover:text-primary focus-visible:text-primary text-sm"
                  >
                    {link.name}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-start items-start gap-5">
            <p className="text-xs text-tertiary">Contact Me</p>
            <ul className="flex flex-col gap-3 p-0 m-0">
              {ContactLinks.map((link) => (
                <li key={link.url} className="flex p-0 m-0">
                  <CustomLink
                    href={link.url}
                    target="_blank"
                    rel="noopener"
                    className="text-secondary hover:text-primary focus-visible:text-primary text-sm"
                  >
                    {link.name}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PageSection>
    </footer>
  );
};
