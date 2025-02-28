import dynamic from "next/dynamic";
import { HeroSection } from "./_components/HeroSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WorkSection } from "./_components/WorkSection";
import { SkillSection } from "./_components/SkillSection";
import { AboutSection } from "./_components/AboutSection";
import { ProjectsSection } from "./_components/ProjectsSection";

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
      <main className="flex justify-center items-center flex-col max-w-svw w-full gap-10 md:gap-16">
        <HeroSection />
        <WorkSection />
        <SkillSection />
        <ProjectsSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
