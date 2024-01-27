import Hero from "@/components/Hero";
import Skill from "@/components/Skill/index";
import Experience from "@/components/Experience/index";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Skill />
      <Experience />
    </div>
  );
}
