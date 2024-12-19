"use client";

import { useEffect } from "react";

export const ServiceWorker = () => {
  useEffect(() => {
    if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
      navigator.serviceWorker.register("/sw.js");
    }
  }, []);

  return <></>;
};
