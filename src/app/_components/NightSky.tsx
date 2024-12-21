"use client";

import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import { useReducedMotion } from "framer-motion";
import { getNightSkyOptions } from "@/lib/tsparticles";

export const NightSky = () => {
  const [hasInitialized, setHasInitialized] = useState(false);

  const reduceMotion = useReducedMotion();

  const nightSkyOptions = useMemo(() => {
    return getNightSkyOptions(!!reduceMotion);
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
    hasInitialized && <Particles id="tsparticles-2" options={nightSkyOptions} />
  );
};
