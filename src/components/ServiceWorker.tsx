"use client";

import { useEffect } from "react";

export const ServiceWorker = () => {
  useEffect(() => {
    const enableServiceWorker = true;
    if ("serviceWorker" in navigator && enableServiceWorker) {
      navigator.serviceWorker.register("/sw.js");
    }
  }, []);

  return <></>;
};
