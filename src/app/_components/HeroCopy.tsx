import React from "react";
import { CustomLink } from "@/components/CustomLink";
import { ExternalLinks } from "@/utils/constants";

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
      <div className="flex justify-center flex-wrap items-center gap-4">
        <CustomLink
          variant="primary"
          className="no-underline flex text-sm md:text-base flex-col justify-center items-center group w-64"
          href={ExternalLinks.meeting}
          target="_blank"
        >
          SUMMON THE KNIGHT
          <small className="text-gray-400 group-hover:text-gray-200 group-focus-visible:text-gray-200">
            (Schedule a call)
          </small>
        </CustomLink>
        <CustomLink
          variant="primary"
          className="no-underline flex flex-col text-sm md:text-base justify-center items-center group w-64"
          href={ExternalLinks.resume}
          target="_blank"
        >
          VIGILANTE PROFILE
          <small className="text-gray-400 group-hover:text-gray-200 group-focus-visible:text-gray-200">
            (Download resume)
          </small>
        </CustomLink>
      </div>
    </div>
  );
};
