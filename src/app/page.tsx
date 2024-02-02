import Hero from "@/components/Hero";
import Skills from "@/components/Skills/index";
import Experience from "@/components/Experience/index";
import Contact from "@/app/contact/page"

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Hero />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}
