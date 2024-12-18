import React from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { cn } from "@/styles/utils";

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  id: string;
};

export const Modal: React.FC<Props> = ({
  children,
  id,
  className,
  ...props
}) => {
  return (
    <div
      popover=""
      {...props}
      className={cn(
        "border-2 border-solid border-gray-300/40 max-w-[90%] min-w-10 min-h-10 bg-black/80  backdrop-blur-md rounded-xl shadow-[0px_0px_10px_5px_#dddddd10] [position-anchor:--hero-cta] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        className,
      )}
      id={id}
    >
      <div className="w-full h-full relative pt-6">
        <Button
          className="absolute top-1 right-1 size-7 flex justify-center items-center text-gray-300 hover:text-white"
          popoverTarget={id}
          popoverTargetAction="hide"
        >
          <span className="sr-only">Close</span>
          <Icon icon="outline/x" size="1.25rem" />
        </Button>
        {children}
      </div>
    </div>
  );
};
