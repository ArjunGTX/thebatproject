import { cn } from "@/styles/utils";
import React from "react";

type Props = {
  className?: string;
};

export const BatCaveLoader: React.FC<Props> = ({ className }) => {
  return (
    <p
      className={cn(
        "text-sm text-tertiary font-medium md:text-base lg:text-lg text-center",
        className,
      )}
    >
      Batcave is loading up...
    </p>
  );
};
