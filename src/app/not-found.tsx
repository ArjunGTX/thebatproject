import { CustomLink } from "@/components/CustomLink";
import { HomePageSections } from "@/utils/constants";

const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center text-center w-svw h-svh gap-5 p-10">
      <h1 className="text-5xl font-bebas-neue xs:text-6xl md:text-8xl lg:text-9xl leading-none">
        Lost in the shadows
      </h1>
      <p className="text-base md:text-xl text-tertiary mb-2 text-balance">
        The path you seek does not exist. <br /> Every choice leads
        somewhere&mdash;this one ends here. <br /> Return to the light and find
        your way.
      </p>
      <CustomLink href={`/$${HomePageSections.main}`} variant="primary">
        Back to Home
      </CustomLink>
    </main>
  );
};

export default NotFound;
