import { PageSection } from "@/app/_components/PageSection";
import { ExternalLinks } from "@/utils/constants";
import React from "react";
import { CustomLink } from "./CustomLink";
import { Icon } from "./Icon";
import { IconName } from "../../icons/types/icon-name";

const links: { icon: IconName; url: string; title: string }[] = [
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

export const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-start relative z-50">
      <div className="h-[2px] bg-[linear-gradient(to_right,#9ca3af30,#6b7280,#9ca3af30)] w-full absolute top-0"></div>
      <PageSection className="w-full flex flex-col justify-start items-start py-12 md:py-14 lg:py-16 xl:py-20">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl md:text-4xl">The Bat Project</h2>
          <p className="text-gray-400 text-sm">
            Portfolio of a digital architect
          </p>
          <ul className="flex justify-start p-0 m-0 gap-2 items-center mt-2">
            {links.map((link) => (
              <li key={link.title} className="flex">
                <CustomLink
                  href={link.url}
                  className="text-gray-300 size-8 border border-solid border-gray-500 flex justify-center items-center rounded-full hover:text-white"
                  target="_blank"
                  rel="noopener"
                >
                  <Icon size="1.25rem" icon={link.icon} />
                </CustomLink>
              </li>
            ))}
          </ul>
        </div>
      </PageSection>
    </footer>
  );
};
