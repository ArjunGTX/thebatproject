"use client";

import React from "react";
import { PageSection } from "./PageSection";
import { HomePageSections } from "@/utils/constants";
import { motion } from "framer-motion";
import { Experiences } from "@/utils/experiences";
import { ExperienceCard } from "./ExperienceCard";

const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

export const WorkSection = () => {
  return (
    <PageSection
      id={HomePageSections.journey}
      className="w-full overflow-x-clip"
    >
      <div className="w-full flex flex-col justify-start items-start gap-16 max-w-[60rem] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col justify-start items-start z-10 w-full pb-4"
        >
          <motion.h2
            variants={childVariants}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bebas-neue"
          >
            The Knight&apos;s journey
          </motion.h2>
          <motion.p
            variants={childVariants}
            viewport={{ once: true }}
            className="text-tertiary max-w-[55ch] text-xs md:text-sm lg:text-base xl:text-lg"
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
