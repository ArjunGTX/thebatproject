"use client";

import React from "react";
import { Button } from "./Button";
import { Constants } from "@/utils/constants";

export const SkipLink = () => {
  const handleClick = () => {
    document.getElementById(Constants.primaryCtaId)?.focus();
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed top-3 left-3 -translate-y-[200%] focus-visible:translate-y-0 z-50 transition-transform duration-300 ease-in-out"
      variant="primary"
    >
      Skip to main content
    </Button>
  );
};
