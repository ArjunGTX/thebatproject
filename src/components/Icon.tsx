import React from "react";
import { IconName } from "../../icons/types/icon-name";
import pkg from "../../package.json";

type Props = React.DetailedHTMLProps<
  React.SVGAttributes<SVGSVGElement>,
  SVGSVGElement
> & {
  icon: IconName;
} & (
    | {
        size: string;
      }
    | {
        width: string;
        height: string;
      }
  );

export const Icon = React.forwardRef<SVGSVGElement, Props>(function Icon(
  { icon, ...props },
  ref,
) {
  return (
    <svg
      ref={ref}
      {...props}
      style={{
        minWidth: "width" in props ? props.width : props.size,
        minHeight: "height" in props ? props.height : props.size,
        height: "height" in props ? props.height : props.size,
        width: "width" in props ? props.width : props.size,
      }}
    >
      <use href={`/icons/sprites/default.svg?v=${pkg.version}#${icon}`} />
    </svg>
  );
});
