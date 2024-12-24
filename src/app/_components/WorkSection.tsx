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
      <div className="w-full flex flex-col justify-start items-start gap-10 lg:gap-[5vh] xl:gap-[6vh] max-w-[80rem] mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col justify-start items-center text-center z-10 w-full pb-4"
        >
          <motion.h2
            variants={item}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bebas-neue"
          >
            The Knight&apos;s journey
          </motion.h2>
          <motion.p
            variants={item}
            viewport={{ once: true }}
            className="text-tertiary max-w-[55ch] text-xs md:text-sm lg:text-base xl:text-lg"
          >
            Every vigilante needs a backstory. Here&apos;s my professional
            journey, from sidekick to full-fledged hero of the web development
            world.
          </motion.p>
        </motion.div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-16 lg:gap-24">
          {Experiences.map((experience, index) => (
            <ExperienceCard experience={experience} key={index} />
          ))}
        </div>
      </div>
    </PageSection>
  );
};
