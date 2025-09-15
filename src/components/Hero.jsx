// src/components/Hero.jsx
import React from "react";
import { Button } from "./ui/Button.jsx";
import { Badge } from "./ui/Badge.jsx";
import AnimatedSection from "./ui/AnimatedSection.jsx";
import { Github, Linkedin, File } from "lucide-react";

export default function Hero() {
  return (
    <AnimatedSection className="text-center py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold">Aditya Malik</h1>
        <p className="mt-3 text-lg text-slate-600">Full Stack Python Developer & AI/ML Engineer</p>
        <p className="mt-2 text-slate-500">Building AI-Integrated Applications • GGSIPU 2025</p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Button href="/CV.pdf" variant="solid"><File className="w-4 h-4" /> Resume</Button>
          <Button href="https://www.linkedin.com/in/aditya-malik-946a61253" variant="ghost"><Linkedin className="w-4 h-4" /> LinkedIn</Button>
          <Button href="https://github.com/skyback12" variant="ghost"><Github className="w-4 h-4" /> GitHub</Button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          <Badge>Full Stack</Badge>
          <Badge>AI/ML</Badge>
          <Badge>Fiverr</Badge>
        </div>
      </div>
    </AnimatedSection>
  );
}
