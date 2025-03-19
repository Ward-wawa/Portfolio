
import Blackhole from "@/components/Blackhole";
import Hero from "@/components/Hero";
import SkillsCard from "@/components/SkillsCard";
import ProjectsCard from "@/components/projectsCard";
import Contact from "@/components/Contact";
export const dynamic = "force-dynamic";
export default function Home() {
  return (
      <>
        <Blackhole/>
          <Hero/>
          <SkillsCard/>
          <ProjectsCard/>
          <Contact/>
      </>
  );
}
