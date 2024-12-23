import React from "react";
import { CustomLink } from "./CustomLink";
import { HomePageSections } from "@/utils/constants";

const NavLinks = [
  {
    name: "Journey",
    url: `/#${HomePageSections.journey}`,
  },
  {
    name: "Missions",
    url: `/#${HomePageSections.missions}`,
  },
  {
    name: "Arsenal",
    url: `/#${HomePageSections.arsenal}`,
  },
  {
    name: "Unmasked",
    url: `/#${HomePageSections.about}`,
  },
];

export const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 h-24 flex justify-center items-center gap-4 px-14 py-3 z-50 backdrop-blur-sm bg-surface/10">
      <nav>
        <ul className="flex gap-6 md:gap-10 justify-center p-0 items-center">
          {NavLinks.map((link) => (
            <li key={link.name} className="flex p-0 m-0">
              <CustomLink
                href={link.url}
                className="text-secondary hover:text-primary focus-visible:text-primary md:text-lg"
              >
                {link.name}
              </CustomLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};