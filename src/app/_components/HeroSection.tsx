import React from "react";
import dynamic from "next/dynamic";
import { HeroSectionLoader } from "./HeroSectionLoader";
import { HeroCopy } from "./HeroCopy";

const BatLogo = dynamic(
  () => import("./BatLogo").then((module) => module.BatLogo),
  {
    loading: () => (
      <div className="w-full flex justify-center items-center">
        <HeroSectionLoader />
      </div>
    ),
  },
);

export const HeroSection = () => {
  return (
    <section className="w-full h-svh relative grid grid-cols-1 p-5 xs:p-10 overflow-x-clip pt-32 xs:pt-32 sm:pt-36 lg:pt-16 lg:grid-cols-[1fr_1.2fr] items-center lg:px-24 gap-10 xl:gap-20 xl:px-40 lg:max-w-[90rem] xl:max-w-[115rem]">
      <HeroCopy />
      <BatLogo />
    </section>
  );
};
