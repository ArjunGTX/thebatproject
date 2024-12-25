"use client";

import React from "react";
import { PageSection } from "./PageSection";
import { HomePageSections } from "@/utils/constants";
import { motion } from "framer-motion";

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

export const AboutSection = () => {
  return (
    <PageSection
      id={HomePageSections.about}
      className="w-full snap-center min-h-svh overflow-x-clip"
    >
      <div className="w-full flex flex-col justify-start items-start gap-10 lg:gap-[5vh] xl:gap-[6vh] max-w-[80rem] mx-auto">
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
            The man behind the mask
          </motion.h2>
          <motion.p
            variants={childVariants}
            viewport={{ once: true }}
            className="text-tertiary max-w-[55ch] text-xs md:text-sm lg:text-base xl:text-lg"
          >
            As a man, I&apos;m flesh and blood, I can be ignored, I can be
            destroyed but as a symbol... as a symbol I can be incorruptible, I
            can be everlasting.
          </motion.p>
        </motion.div>
      </div>
    </PageSection>
  );
};
