import { cn } from "@/styles/utils";
import { forwardRef } from "react";

export type ButtonVariant = "primary";

export const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-gray-500 rounded-md border-solid text-white/80 bg-black/70 backdrop-blur-sm py-3 px-5  focus-visible:[&:not(:disabled)]:text-white hover:[&:not(:disabled)]:border-white/50 hover:[&:not(:disabled)]:text-white disabled:opacity-30",
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
          "text-base bg-transparent font-inter border-none cursor-pointer disabled:cursor-not-allowed",
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
