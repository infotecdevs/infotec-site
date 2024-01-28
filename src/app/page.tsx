import Hero from "@/components/Hero";
import Skill from "@/components/Skill/index";
import Experience from "@/components/Experience/index";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Hero />
      <Skill />
      <Experience />
    </div>
  );
}
