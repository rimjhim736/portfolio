import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Leadership from "@/components/Leadership";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-fg">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Leadership />
      <Skills />
      <Contact />
    </main>
  );
}
