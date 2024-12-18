"use client";

import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import { nightSkyOptions } from "@/lib/tsparticles";

export const NightSky = () => {
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
    hasInitialized && <Particles id="tsparticles-2" options={nightSkyOptions} />
  );
};
