"use client";

import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import { batLogoOptions } from "@/lib/tsparticles";

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
      <div className="w-full flex justify-center self-start lg:self-center">
        <div className="w-full">
          <Particles id="tsparticles" options={batLogoOptions} />
        </div>
      </div>
    )
  );
};
