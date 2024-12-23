import { cn } from "@/styles/utils";
import { forwardRef } from "react";

export type ButtonVariant = "primary";

export const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "rounded-md uppercase text-secondary hover:[&:not(:disabled)]:bg-[radial-gradient(circle_at_80%_60%,_#232323,_#2b2b2b,_#4f4f4f,_#363636,_#424242)] bg-[radial-gradient(circle_at_80%_60%,_#424242,_#2b2b2b,_#363636,_#3c3c3c,_#232323)] p-[1px] disabled:opacity-30",
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
          "text-base bg-transparent font-[inherit] border-none cursor-pointer disabled:cursor-not-allowed",
          variant && variantClasses[variant],
          className,
        )}
        type={type}
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
      </button>
    );
  },
);
