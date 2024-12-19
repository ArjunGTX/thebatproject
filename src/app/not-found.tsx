import { CustomLink } from "@/components/CustomLink";
import { InternalRoutes } from "@/utils/constants";

const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-center text-center w-svw h-svh gap-5 p-10">
      <h1 className="text-5xl font-bebas-neue xs:text-6xl md:text-8xl lg:text-9xl leading-none">
        Holy Broken Links, Batman!
      </h1>
      <p className="text-base max-w-[50ch] md:text-xl text-tertiary mb-6">
        Even Batman can&apos;t find this page... It might have vanished into the
        Batcave or been taken down by the Joker. Either way, it&apos;s not here.{" "}
      </p>
      <CustomLink href={InternalRoutes.home} variant="primary">
        Back to Home
      </CustomLink>
    </main>
  );
};

export default NotFound;
