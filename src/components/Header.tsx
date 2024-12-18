import React from "react";

const links = [
  {
    name: "Journey",
    url: "#",
  },
  {
    name: "Missions",
    url: "#",
  },
  {
    name: "Arsenal",
    url: "#",
  },
  {
    name: "Batlog",
    url: "#",
  },
];

export const Header = () => {
  return (
    <header className="w-full fixed top-0 left-0 h-20 flex justify-center items-end gap-4 px-14 py-3 z-50">
      <nav>
        <ul className="flex gap-6 md:gap-10 justify-center p-0 items-center">
          {links.map((link) => (
            <li key={link.name} className="flex p-0 m-0">
              <a
                href={link.url}
                className="text-gray-300 hover:text-white no-underline md:text-lg"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
