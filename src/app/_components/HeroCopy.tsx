"use client";

import React from "react";
import { CustomLink } from "@/components/CustomLink";
import { Constants, ExternalLinks } from "@/utils/constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 2.5,
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const HeroCopy = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col justify-start gap-6 md:gap-8 items-start order-1 self-start lg:self-center lg:-order-1 lg:text-left lg:items-start"
    >
      <motion.h1
        variants={childVariants}
        className="text-5xl text-primary xs:text-6xl font-bebas-neue sm:text-7xl lg:text-9xl xl:text-10xl leading-none font-bold tracking-normal lg:tracking-[0.015em]"
      >
        Developer by day, <br /> Vigilante by night
      </motion.h1>
      <motion.p
        variants={childVariants}
        className="text-base text-secondary sm:text-lg xl:text-xl leading-snug"
      >
        <i>
          &ldquo;If I can&apos;t change things here,{" "}
          <br className="md:hidden" /> if I can&apos;t have an effect, <br />I
          don&apos;t care what happens to me.&rdquo;
        </i>
      </motion.p>
      <motion.div
        variants={childVariants}
        className="flex justify-center flex-wrap items-center gap-4"
      >
        <CustomLink
          variant="primary"
          id={Constants.primaryCtaId}
          className="flex text-sm md:text-base flex-col justify-center items-center group w-full md:w-64"
          href={ExternalLinks.meeting}
          target="_blank"
        >
          SUMMON THE KNIGHT
          <small className="text-tertiary normal-case">(Schedule a call)</small>
        </CustomLink>
        <CustomLink
          variant="primary"
          className="flex flex-col text-sm md:text-base justify-center items-center group w-full md:w-64"
          href={ExternalLinks.resume}
          target="_blank"
        >
          VIGILANTE PROFILE
          <small className="text-tertiary normal-case">(Download resume)</small>
        </CustomLink>
      </motion.div>
    </motion.div>
  );
};
