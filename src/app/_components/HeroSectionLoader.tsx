import React from "react";

type Props = {
  className?: string;
};

export const HeroSectionLoader: React.FC<Props> = ({ className }) => {
  return (
    <video
      muted
      autoPlay
      loop
      playsInline
      src="/videos/loader.webm"
      className={className}
    ></video>
  );
};
