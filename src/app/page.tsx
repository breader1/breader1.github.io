import Hero from "@/components/hero";
import Nav from "@/components/nav";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-white">
      {/* Animated background overlay */}
      <div className="fixed inset-0 z-0 bg-radial from-purple-500/20 via-purple-900/1 to-black"></div>

      {/* Grid lines overlay */}
      <div className="fixed inset-0 z-0 opacity-5 bg-[url('/grid.svg')] bg-center bg-repeat"></div>

      <div className="relative z-10">
        <Nav />

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Contact />

        <Footer />
      </div>
    </div>
  );
}
