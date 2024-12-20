"use client";

import React from "react";
import { PageSection } from "./PageSection";
import { HomePageSections } from "@/utils/constants";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

export const WorkSection = () => {
  return (
    <PageSection
      id={HomePageSections.journey}
      className="w-full snap-center min-h-svh overflow-x-clip pt-[18vh] xs:pt-[18vh] md:pt-[20vh] flex flex-col justify-start items-start"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="flex flex-col justify-start items-start"
      >
        <motion.h2
          variants={item}
          className="text-4xl md:text-5xl lg:text-7xl font-bebas-neue"
        >
          The Knight&apos;s journey
        </motion.h2>
        <motion.p
          variants={item}
          className="text-secondary max-w-[50ch] text-xs md:text-sm lg:text-lg"
        >
          Every vigilante needs a backstory. Here&apos;s my professional
          journey, from sidekick to full-fledged hero of the web development
          world.
        </motion.p>
      </motion.div>
      <div className="w-full mt-10 p-[1px] rounded-lg h-[30rem] bg-[radial-gradient(circle_at_80%_60%,_#424242,_#2b2b2b,_#363636,_#3c3c3c,_#232323)]">
        <div className="w-full h-full rounded-lg bg-surface"></div>
      </div>
    </PageSection>
  );
};
