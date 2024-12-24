import { cn } from "@/styles/utils";
import React from "react";

type Props = {
  className?: string;
  id?: string;
  children?: React.ReactNode;
};

export const PageSection: React.FC<Props> = ({ className, id, children }) => {
  return (
    <section
      className={cn(
        "w-full p-5 xs:p-10 lg:px-24 xl:px-40 lg:max-w-[90rem] xl:max-w-[115rem] scroll-mt-24",
        className,
      )}
      id={id}
    >
      {children}
    </section>
  );
};
