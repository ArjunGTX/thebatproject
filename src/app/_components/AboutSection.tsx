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
  const dob = 2002;
  const age = new Date().getFullYear() - dob;

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
        <div className="w-full grid grid-cols-1 gap-10 ">
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
            }}
            initial="hidden"
            whileInView="show"
            transition={{ staggerChildren: 0.2, delay: 0.75, duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-start items-start gap-6"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1 },
              }}
              viewport={{ once: true }}
              className="min-w-20 min-h-20 md:min-w-24 md:min-h-24 rounded-full bg-surface/10 border-stroke border border-solid"
            ></motion.div>
            <div className="flex flex-col justify-start items-start max-w-[50ch] gap-3 text-tertiary text-sm md:text-base md:gap-4">
              <motion.p
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1 },
                }}
                viewport={{ once: true }}
              >
                I am Arjun, a {age}-year-old developer based in Kerala, India.
                For three years, I&apos;ve been working in the shadows, honing
                my craft as a frontend developer at two product-based startups.
                Each project, a mission; each line of code, a tool in my
                arsenal.
              </motion.p>
              <motion.p
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1 },
                }}
                viewport={{ once: true }}
              >
                Like a vigilante in the digital realm, my goal is to bring
                justice to the web by building accessible and inclusive
                applications. Accessibility isn&apos;t just a feature—it&apos;s
                a promise to ensure that no one is left behind in the digital
                age.
              </motion.p>
              <motion.p
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1 },
                }}
                viewport={{ once: true }}
              >
                The mission continues, and the web awaits transformation. One
                app at a time, I aim to make the online world better, stronger,
                and open to all.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageSection>
  );
};
