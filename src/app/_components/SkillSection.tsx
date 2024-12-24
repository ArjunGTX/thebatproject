"use client";

import React from "react";
import { PageSection } from "./PageSection";
import { HomePageSections } from "@/utils/constants";
import { motion } from "framer-motion";
import { Skills } from "@/utils/skills";
import { CustomLink } from "@/components/CustomLink";
import Image from "next/image";

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

export const SkillSection = () => {
  return (
    <PageSection
      id={HomePageSections.arsenal}
      className="w-full min-h-svh overflow-x-clip "
    >
      <div className="w-full flex flex-col justify-start items-start mx-auto max-w-[80rem] gap-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col justify-start items-start z-10 w-full pb-4"
        >
          <motion.h2
            variants={item}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bebas-neue"
          >
            Tech Arsenal
          </motion.h2>
          <motion.p
            variants={item}
            viewport={{ once: true }}
            className="text-tertiary max-w-[55ch] text-xs md:text-sm lg:text-base xl:text-lg"
          >
            A vigilante is only as good as his tools. Here&apos;s the full
            arsenal I use to fight bugs, build websites, and save the day.
          </motion.p>
        </motion.div>
        <motion.div
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16"
        >
          <div className="flex flex-wrap gap-2 justify-start items-start">
            {Skills.map((skill, index) => (
              <CustomLink
                variant="primary"
                href={skill.link}
                target="_blank"
                key={index}
              >
                <motion.div
                  variants={{
                    initial: { opacity: 0 },
                    animate: {
                      opacity: 1,
                    },
                  }}
                  viewport={{ once: true }}
                  className="flex justify-center items-center text-sm lg:text-base gap-1 capitalize"
                >
                  <div className="relative w-4 h-4 md:w-5 md:h-5">
                    <Image alt={skill.name} src={skill.image} fill />
                  </div>
                  {skill.name}
                </motion.div>
              </CustomLink>
            ))}
          </div>
        </motion.div>
      </div>
    </PageSection>
  );
};