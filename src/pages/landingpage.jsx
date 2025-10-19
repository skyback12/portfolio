import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Freelance from "../components/Freelance";
import Contact from "../components/Contact";
import "../styles/globals.css"

export default function LandingPage() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
      <main className="container mx-auto px-6 py-12">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Freelance />
        <Contact />
      </main>

      <footer className="border-t bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-6 py-8">
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div>
              <h4 className="font-semibold mb-3 text-blue-400">Aditya Malik</h4>
              <p className="text-sm text-slate-300">AI/ML Engineer & Full Stack Developer</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-blue-400">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="#projects" className="block text-slate-300 hover:text-white transition-colors">Projects</a>
                <a href="#experience" className="block text-slate-300 hover:text-white transition-colors">Experience</a>
                <a href="#contact" className="block text-slate-300 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-blue-400">Connect</h4>
              <div className="space-y-2 text-sm">
                <a href="https://github.com/skyback12" target="_blank" rel="noreferrer" className="block text-slate-300 hover:text-white transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/aditya-malik-946a61253" target="_blank" rel="noreferrer" className="block text-slate-300 hover:text-white transition-colors">LinkedIn</a>
                <a href="https://www.fiverr.com/s/lj29pDa" target="_blank" rel="noreferrer" className="block text-slate-300 hover:text-white transition-colors">Fiverr</a>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-slate-700 text-center text-sm text-slate-400">
            © {new Date().getFullYear()} Aditya Malik • Built with React + Tailwind
          </div>
        </div>
      </footer>
    </div>
  );
}
