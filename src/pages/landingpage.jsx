import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Freelance from "../components/Freelance";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import "../styles/globals.css"

export default function LandingPage() {
  return (
    <div>
      <main className="container mx-auto px-6 py-12">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Freelance />
        <Contact />
      </main>

      <footer className="border-t bg-white">
        <div className="container mx-auto px-6 py-6 text-sm text-center text-slate-600">
          © {new Date().getFullYear()} Aditya Malik • Built with React + Tailwind
        </div>
      </footer>
    </div>
  );
}
