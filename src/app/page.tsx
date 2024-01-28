import Hero from "@/components/Hero";
import Skills from "@/components/Skills/index";
import Experience from "@/components/Experience/index";

export default function Home() {
  return (
    <div className="flex flex-col mx-2 md:mx-5">
      <Hero />
      <Skills />
      <Experience />
    </div>
  );
}
