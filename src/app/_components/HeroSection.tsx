import React from "react";
import { BatLogo } from "./BatLogo";
import { Button } from "@/components/Button";

export const HeroSection = () => {
  return (
    <section className="w-full h-svh relative grid grid-cols-1 p-4 xs:p-6 sm:p-8 overflow-x-clip pt-24 lg:pt-16 lg:grid-cols-2 lg:items-center lg:px-24 gap-5 lg:gap-16 xl:gap-20 xl:px-40 max-w-[120rem]">
      <div className="flex flex-col justify-start items-center text-center gap-6 md:gap-8 order-1 lg:-order-1 lg:items-start lg:text-start">
        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-medium">
          Transforming <br /> the Web from the <br className="lg:block" />{" "}
          <em>Shadows</em>
        </h1>
        <p className="text-base text-gray-200 sm:text-lg lg:text-xl lg:leading-[1.4] xl:text-xl xl:leading-[1.45]">
          &ldquo;If I can&apos;t change things here, <br /> if I can&apos;t have
          an effect, <br />I don&apos;t care what happens to me.&rdquo;
        </p>
        <Button variant="primary">HIRE THE VIGILANTE</Button>
      </div>
      <BatLogo />
    </section>
  );
};