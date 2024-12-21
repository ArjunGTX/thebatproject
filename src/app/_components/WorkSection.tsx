"use client";

import React from "react";
import { PageSection } from "./PageSection";
import { HomePageSections } from "@/utils/constants";
import { motion } from "framer-motion";
import { Experiences } from "@/utils/experiences";
import { ExperienceCard } from "./ExperienceCard";

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
      className="w-full snap-center min-h-svh overflow-x-clip"
    >
      <div className="w-full flex flex-col justify-start items-start gap-10 lg:gap-[7vh] xl:gap-[9vh] max-w-[65rem] mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col justify-start items-start sticky top-0 bg-surface z-10 pt-[11vh] xs:pt-[11vh] md:pt-[15vh] w-full pb-4"
        >
          <motion.h2
            variants={item}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-7xl font-bebas-neue"
          >
            The Knight&apos;s journey
          </motion.h2>
          <motion.p
            variants={item}
            viewport={{ once: true }}
            className="text-tertiary max-w-[50ch] text-xs md:text-sm lg:text-lg"
          >
            Every vigilante needs a backstory. Here&apos;s my professional
            journey, from sidekick to full-fledged hero of the web development
            world.
          </motion.p>
        </motion.div>
        {Experiences.map((experience, index) => (
          <ExperienceCard experience={experience} key={index} />
        ))}
      </div>
    </PageSection>
  );
};
