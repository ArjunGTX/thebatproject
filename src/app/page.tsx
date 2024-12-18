import dynamic from "next/dynamic";
import { HeroSection } from "./_components/HeroSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const NightSky = dynamic(
  () => import("./_components/NightSky").then((module) => module.NightSky),
  {
    loading: () => <></>,
  },
);

export const runtime = "edge";

export default function Home() {
  return (
    <>
      <Header />
      <NightSky />
      <main className="flex justify-center items-center flex-col max-w-svw w-full min-h-svh">
        <HeroSection />
      </main>
      <Footer />
    </>
  );
}
