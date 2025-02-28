"use client";

import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

type Props = {
  description: string;
  index: number;
};

export const ExperienceDescription: React.FC<Props> = ({
  description,
  index,
}) => {
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  const duration = 3;
  const delay = 0.5 + duration * index;

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    description.slice(0, latest),
  );

  const isInView = useInView(descriptionRef);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      return;
    }
    const controls = animate(count, description.length, {
      type: "tween",
      duration,
      ease: "linear",
      autoplay: false,
      delay,
    });
    if (isInView) {
      controls.play();
    } else {
      controls.stop();
    }
    return controls.stop;
  }, [description.length, isInView, count, delay, duration, reduceMotion]);

  return reduceMotion ? (
    <motion.p
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 1,
          delay,
        },
      }}
      viewport={{
        once: true,
      }}
      className="text-tertiary text-xs md:text-sm lg:text-base min-h-[12lh] lg:min-h-[6lh] leading-normal"
    >
      {description}
    </motion.p>
  ) : (
    <motion.p
      ref={descriptionRef}
      className="text-tertiary text-xs md:text-sm lg:text-base min-h-[12lh] lg:min-h-[6lh] leading-normal"
    >
      {displayText}
    </motion.p>
  );
};
