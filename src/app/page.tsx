import { HeroSection } from "./_components/HeroSection";

export const runtime = "edge";

export default function Home() {
  return (
    <>
      <main className="flex justify-center items-center flex-col max-w-svw w-full min-h-svh">
        <HeroSection />
      </main>
    </>
  );
}
