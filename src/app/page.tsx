import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () =>
    import("./_components/HeroSection").then((module) => module.HeroSection),
  {
    loading: () => <p>Loading...</p>,
  },
);

const NightSky = dynamic(
  () => import("./_components/NightSky").then((module) => module.NightSky),
  {
    loading: () => <p>Loading...</p>,
  },
);

export const runtime = "edge";

export default function Home() {
  return (
    <>
      <NightSky />
      <main className="flex justify-center items-center flex-col max-w-svw w-full min-h-svh">
        <HeroSection />
      </main>
    </>
  );
}
