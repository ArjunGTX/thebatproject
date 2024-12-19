import React from "react";
import dynamic from "next/dynamic";
import { HeroCopy } from "./HeroCopy";
import { PageSection } from "./PageSection";

const BatLogo = dynamic(
  () => import("./BatLogo").then((module) => module.BatLogo),
  {
    loading: () => <></>,
  },
);

export const HeroSection = () => {
  return (
    <PageSection
      id="main"
      className="w-full h-svh grid grid-cols-1 overflow-x-clip pt-32 xs:pt-32 sm:pt-36 lg:pt-16 lg:grid-cols-[1fr_1.2fr] items-center gap-10 xl:gap-20"
    >
      <HeroCopy />
      <BatLogo />
    </PageSection>
  );
};
