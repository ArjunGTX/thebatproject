"use client";

import React, { useRef } from "react";
import { PageSection } from "./PageSection";
import { HomePageSections } from "@/utils/constants";
import { motion } from "framer-motion";
import { Skills } from "@/utils/skills";
import { CustomLink } from "@/components/CustomLink";
import Image from "next/image";
import dynamic from "next/dynamic";
import { BatCaveLoader } from "./BatCaveLoader";
import { Button } from "@/components/Button";

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

const BatCave = dynamic(() => import("./BatCave").then((mod) => mod.BatCave), {
  loading: () => <BatCaveLoader />,
});

export const SkillSection = () => {
  const batCaveContainer = useRef<HTMLDivElement>(null);

  const [showBatCave, setShowBatCave] = React.useState(false);

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
        <div className="w-full grid grid-cols-1 items-start justify-center gap-6">
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
            className="flex flex-wrap gap-2 items-start justify-start"
          >
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
                  className="flex justify-center items-center grow w-full text-xs md:text-sm lg:text-base gap-1 capitalize"
                >
                  <div className="relative w-4 h-4 md:w-5 md:h-5">
                    <Image alt={skill.name} src={skill.image} fill />
                  </div>
                  {skill.name}
                </motion.div>
              </CustomLink>
            ))}
          </motion.div>
          <div
            ref={batCaveContainer}
            className="min-h-[20rem] md:min-h-[45vh] flex justify-center items-center overflow-hidden"
          >
            {showBatCave ? (
              <BatCave />
            ) : (
              <div className="flex flex-col mt-16 justify-center items-center gap-2 rounded-md overflow-hidden w-full max-w-[65rem] aspect-[1.89/1] relative">
                <Image
                  alt="Preview of the batcave"
                  src="/images/misc/batcave.webp"
                  fill
                />
                <div className="flex flex-col justify-center items-center gap-2 absolute w-full h-full z-10 backdrop-blur-sm bg-surface/10">
                  <Button
                    variant="primary"
                    onClick={() => setShowBatCave(true)}
                  >
                    Enter the BatCave
                  </Button>
                  <p className="text-tertiary text-xs md:text-sm">
                    This experience involves downloading a 100MB 3D model.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageSection>
  );
};
