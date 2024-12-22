"use client";

import { Experience } from "@/utils/experiences";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ExperienceDescription } from "./ExperienceDescription";
import { CustomLink } from "@/components/CustomLink";

type Props = {
  experience: Experience;
};

const container = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

export const ExperienceCard: React.FC<Props> = ({ experience }) => {
  return (
    <div className="w-full grid grid-cols-1 gap-6 md:gap-20 min-h-[66vh]">
      <motion.div
        variants={container}
        viewport={{ once: true }}
        initial="hidden"
        whileInView="show"
        className="flex flex-col justify-start items-start"
      >
        <motion.h3
          viewport={{ once: true }}
          variants={item}
          className="text-xl lg:text-2xl xl:text-3xl mb-1 uppercase"
        >
          {experience.title}
        </motion.h3>
        <motion.p
          variants={item}
          viewport={{ once: true }}
          className="flex text-xs lg:text-base text-secondary justify-start items-center"
        >
          <CustomLink
            href={experience.companyLink}
            target="_blank"
            className="text-xs lg:text-base text-secondary hover:text-primary hover:underline"
          >
            {experience.company}
          </CustomLink>
          &nbsp;• {experience.date}
        </motion.p>
        <CustomLink
          href={experience.imageLink}
          target="_blank"
          className="w-full md:w-3/4 xl:w-[80%]"
        >
          <motion.div
            variants={item}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-lg aspect-[2.2/1] w-full my-2"
          >
            <Image
              className="object-cover"
              alt={experience.imageAlt}
              src={experience.image}
              fill
            />
          </motion.div>
        </CustomLink>
        <motion.p
          variants={item}
          viewport={{ once: true }}
          className="text-xs md:text-sm lg:text-lg text-secondary font-medium mt-1"
        >
          {experience.subheading}
        </motion.p>
        <ul className="w-full flex flex-col p-0 gap-2 mt-2">
          {experience.descriptions.map((description, index) => (
            <li className="flex" key={index}>
              <ExperienceDescription description={description} index={index} />
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};
