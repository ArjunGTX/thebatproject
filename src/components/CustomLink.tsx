import React, { forwardRef } from "react";
import Link, { LinkProps } from "next/link";
import { cn } from "@/styles/utils";
import { ButtonVariant, variantClasses } from "./Button";

export const CustomLink: React.ForwardRefExoticComponent<
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
    LinkProps & {
      children?: React.ReactNode;
      variant?: ButtonVariant;
    } & React.RefAttributes<HTMLAnchorElement>
> = forwardRef(function CustomLink(
  { children, className, variant, ...props },
  ref,
) {
  return (
    <Link
      className={cn(
        "text-base font-inter cursor-pointer no-underline",
        variant && variantClasses[variant],
        className,
      )}
      ref={ref}
      {...props}
    >
      {variant === "primary" ? (
        <span className="inline-flex flex-col justify-center items-center py-3 px-5 w-full h-full bg-surface rounded-md ">
          {children}
        </span>
      ) : (
        children
      )}
    </Link>
  );
});
