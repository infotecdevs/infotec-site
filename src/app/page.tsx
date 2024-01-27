import Hero from "@/components/Hero";
import Skill from "@/components/Skill/index";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Skill />
    </div>
  );
}
