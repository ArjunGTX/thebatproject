import dynamic from "next/dynamic";
import { HeroSection } from "./_components/HeroSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WorkSection } from "./_components/WorkSection";
import { SkillSection } from "./_components/SkillSection";

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
      <main className="flex justify-center items-center flex-col max-w-svw w-full gap-20 md:gap-24">
        <HeroSection />
        <WorkSection />
        <SkillSection />
      </main>
      <Footer />
    </>
  );
}
