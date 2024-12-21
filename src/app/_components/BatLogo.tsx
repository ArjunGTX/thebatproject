"use client";

import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import { motion, useReducedMotion } from "framer-motion";
import { getBatLogoOptions } from "@/lib/tsparticles";

export const BatLogo = () => {
  const [hasInitialized, setHasInitialized] = useState(false);

  const reduceMotion = useReducedMotion();

  const batLogoOptions = useMemo(() => {
    return getBatLogoOptions(!!reduceMotion);
  }, [reduceMotion]);

  useEffect(() => {
    (async () => {
      try {
        await initParticlesEngine(async (engine) => {
          await loadAll(engine);
        });
        setHasInitialized(true);
      } catch (err) {
        console.log(err);
        // TODO log error here
      }
    })();
  }, []);

  return (
    hasInitialized && (
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 2.75,
        }}
        className="w-full flex justify-center self-center"
      >
        <div className="w-full">
          <Particles id="tsparticles" options={batLogoOptions} />
        </div>
      </motion.div>
    )
  );
};
