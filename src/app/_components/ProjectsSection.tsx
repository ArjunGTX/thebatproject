"use client";

import React from "react";
import { PageSection } from "./PageSection";
import { HomePageSections } from "@/utils/constants";
import { motion } from "framer-motion";
import { Projects } from "@/utils/projects";
import { ProjectCard } from "./ProjectCard";

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

export const ProjectsSection = () => {
  return (
    <PageSection id={HomePageSections.about} className="w-full overflow-x-clip">
      <div className="w-full flex flex-col justify-start items-start gap-12 max-w-[60rem] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col justify-start items-start z-10 w-full"
        >
          <motion.h2
            variants={childVariants}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bebas-neue"
          >
            Batcave secret missions
          </motion.h2>
          <motion.p
            variants={childVariants}
            viewport={{ once: true }}
            className="text-tertiary max-w-[55ch] text-xs md:text-sm lg:text-base xl:text-lg"
          >
            These are my covert operations: personal projects where I have
            crafted cutting-edge tools, solved impossible problems, and had a
            little fun saving the day.
          </motion.p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {Projects.map((project, index) => (
            <motion.div
              variants={childVariants}
              viewport={{ once: true }}
              key={index}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageSection>
  );
};
