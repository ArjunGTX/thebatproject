import React from "react";
import { HeroCta } from "./HeroCta";

export const HeroCopy = () => {
  return (
    <div className="flex flex-col justify-start gap-6 md:gap-8 items-center text-center order-1 self-start lg:self-center lg:-order-1 lg:text-left lg:items-start">
      <h1 className="text-5xl xs:text-6xl font-bebas-neue sm:text-7xl lg:text-9xl xl:text-10xl leading-none font-bold tracking-normal lg:tracking-[0.02em]">
        Developer by day, <br /> Vigilante by night
      </h1>
      <p className="text-base text-gray-300 sm:text-lg xl:text-xl leading-snug">
        <i>
          &ldquo;If I can&apos;t change things here,{" "}
          <br className="md:hidden" /> if I can&apos;t have an effect, <br />I
          don&apos;t care what happens to me.&rdquo;
        </i>
      </p>
      <HeroCta />
    </div>
  );
};
