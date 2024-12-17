import React from "react";
import { Button } from "@/components/Button";
import dynamic from "next/dynamic";
import { HeroSectionLoader } from "./HeroSectionLoader";

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
      <div className="flex flex-col justify-start gap-6 md:gap-8 items-start">
        <h1 className="text-5xl xs:text-6xl font-bebas-neue sm:text-7xl lg:text-9xl xl:text-10xl leading-none font-bold lg:tracking-[0.03em]">
          Developer by day, <br /> Vigilante by night
        </h1>
        <p className="text-base text-gray-200 sm:text-lg xl:text-xl leading-snug">
          &ldquo;If I can&apos;t change things here,{" "}
          <br className="md:hidden" /> if I can&apos;t have an effect, <br />I
          don&apos;t care what happens to me.&rdquo;
        </p>
        <Button variant="primary">SUMMON THE KNIGHT</Button>
      </div>
      <BatLogo />
    </section>
  );
};
