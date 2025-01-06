import { CustomLink } from "@/components/CustomLink";
import { Project } from "@/utils/projects";
import Image from "next/image";
import React from "react";

type Props = {
  project: Project;
};

export const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="border-stroke border border-solid h-full rounded-lg p-4 flex flex-col justify-start items-start">
      <div className="w-full aspect-[2/1] relative rounded-sm overflow-hidden">
        <Image
          alt={`Preview of ${project.title}`}
          src={project.coverImage}
          fill
        />
      </div>
      <p className="font-semibold text-md md:text-lg lg:text-xl mt-2 mb-1">
        {project.title}
      </p>
      <small className="text-xs text-tertiary md:text-sm mb-4">
        {project.description}
      </small>
      <code className="text-xs text-tertiary md:text-sm mb-4">
        {project.techStack.join(", ")}
      </code>
      <CustomLink
        href={project.link}
        target="_blank"
        variant="primary"
        className="w-full mt-auto"
      >
        {project.cta}
      </CustomLink>
    </div>
  );
};
