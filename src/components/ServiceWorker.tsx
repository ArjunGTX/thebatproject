"use client";

import { useEffect } from "react";

export const ServiceWorker = () => {
  useEffect(() => {
    const enableServiceWorker = false;
    if (
      "serviceWorker" in navigator &&
      process.env.NODE_ENV === "production" &&
      enableServiceWorker
    ) {
      navigator.serviceWorker.register("/sw.js");
    }
  }, []);

  return <></>;
};
