import { cn } from "@/styles/utils";
import { forwardRef } from "react";

export type ButtonVariant = "primary";

export const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-1 border-white border-solid text-white bg-black py-2 px-8 focus-visible:[&:not(:disabled)]:bg-white focus-visible:[&:not(:disabled)]:text-black hover:[&:not(:disabled)]:bg-white hover:[&:not(:disabled)]:text-black disabled:opacity-30 md:py-3 md:px-9 transition-all duration-200",
};

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: ButtonVariant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { children, className, variant, type = "button", ...props },
    ref,
  ) {
    return (
      <button
        className={cn(
          "text-base font-montserrat border-none cursor-pointer disabled:cursor-not-allowed",
          variant && variantClasses[variant],
          className,
        )}
        type={type}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);
