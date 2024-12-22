"use client";

import {
  animate,
  useInView,
  useMotionValue,
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

  const duration = 4;
  const delay = 0.75 + duration * index;

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    description.slice(0, latest),
  );

  const isInView = useInView(descriptionRef);

  useEffect(() => {
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
  }, [description.length, isInView, count, delay, duration]);

  return (
    <motion.p
      ref={descriptionRef}
      className="text-tertiary text-xs md:text-sm lg:text-base xl:text-lg leading-normal"
    >
      {displayText}
    </motion.p>
  );
};
