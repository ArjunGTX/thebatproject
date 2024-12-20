import React from "react";
import { PageSection } from "./PageSection";
import { HomePageSections } from "@/utils/constants";

export const WorkSection = () => {
  return (
    <PageSection
      id={HomePageSections.journey}
      className="w-full snap-center min-h-svh overflow-x-clip"
    ></PageSection>
  );
};
