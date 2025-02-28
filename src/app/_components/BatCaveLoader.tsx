import { cn } from "@/styles/utils";
import React from "react";

type Props = {
  className?: string;
};

export const BatCaveLoader: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "text-sm text-primary min-h-20 font-medium md:text-base lg:text-lg text-center flex flex-col justify-center items-center gap-1",
        className,
      )}
    >
      <video
        src="/videos/batloader.webm"
        muted
        loop
        playsInline
        autoPlay
        className="max-w-28"
      ></video>
      <small className="text-tertiary text-xs">Great things take time.</small>
    </div>
  );
};
