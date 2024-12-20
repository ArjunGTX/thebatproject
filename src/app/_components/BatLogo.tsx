"use client";

import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import { batLogoOptions } from "@/lib/tsparticles";
import { motion } from "framer-motion";

export const BatLogo = () => {
  const [hasInitialized, setHasInitialized] = useState(false);

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
