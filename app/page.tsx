import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
// import AIProjects from "@/components/AIProjects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#07090e] text-zinc-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Header Navigation */}
      <Header />

      {/* Main Home Page Sections */}
      <main className="flex-1">
        {/* ├── Hero */}
        <Hero />

        {/* ├── About Me */}
        <AboutMe />

        {/* ├── Skills */}
        <Skills />

        {/* ├── Experience */}
        <Experience />

        {/* ├── Projects */}
        <Projects />

        {/* ├── AI Projects */}
        {/* <AIProjects /> */}

        {/* ├── Resume */}
        <Resume />

        {/* └── Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
