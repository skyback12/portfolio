import React from "react";
import Button from "../components/ui/button";
import Badge from "../components/ui/badge";
import { Github, Linkedin, File } from "lucide-react";

export default function Hero() {
  return (
    <div className="text-center py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-3xl mx-auto">
        {/* Name */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Aditya Malik
        </h1>

        {/* Tagline */}
        <p className="mt-4 text-xl text-slate-700 font-medium">
          Full Stack Python Developer Intern • AI/ML Intern
        </p>
        <p className="mt-2 text-slate-500">
          B.Tech AI & ML Graduate (GGSIPU, 2025) • Building AI-Driven Applications
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/CV.pdf" variant="solid">
            <File className="w-4 h-4 mr-2" /> Resume
          </Button>
          <Button
            href="https://www.linkedin.com/in/aditya-malik-946a61253"
            variant="ghost"
          >
            <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
          </Button>
          <Button href="https://github.com/skyback12" variant="ghost">
            <Github className="w-4 h-4 mr-2" /> GitHub
          </Button>
        </div>

        {/* Badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Badge>Full Stack Development</Badge>
          <Badge>AI/ML Engineering</Badge>
          <Badge>Fiverr Freelancer</Badge>
          <Badge>GGSIPU 2025</Badge>
        </div>
      </div>
    </div>
  );
}
