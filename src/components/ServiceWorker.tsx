"use client";

import { CONSTANTS } from "@/utils/constants";
import { useEffect } from "react";

export const ServiceWorker = () => {
  useEffect(() => {
    const fetch3dModels = async () => {
      const models = ["https://models.iambatman.dev/scene.bin"];
      sessionStorage.setItem(CONSTANTS.MODEL_CACHING, "true");
      await Promise.allSettled(
        models.map(async (model) => {
          await fetch(model);
        }),
      );
      sessionStorage.setItem(CONSTANTS.MODEL_CACHING, "false");
    };
    fetch3dModels();
    const enableServiceWorker = true;
    if ("serviceWorker" in navigator && enableServiceWorker) {
      navigator.serviceWorker.register("/sw.js");
    }
  }, []);

  return <></>;
};
