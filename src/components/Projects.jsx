// src/components/Projects.jsx
import React from "react";
import AnimatedCard from "./ui/AnimatedCard.jsx";
import Badge from "./ui/Badge.jsx";
import Button from "./ui/Button.jsx";
import AnimatedSection from "./ui/AnimatedSection.jsx";
import { ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    slug: "ai-dress-studio",
    title: "AI Dress Studio (Ongoing)",
    desc: "AI platform for pattern generation, outfit visualization, and measurement AI.",
    tech: ["Flask", "React", "Supabase", "Stable Diffusion", "OpenCV"],
    link: "https://ai-dress-studio-web.onrender.com",
    live: true
  },
  {
    slug: "gesture-presentation",
    title: "Gesture Controlled Presentation System",
    desc: "Hands-free slide navigation using computer vision + ML.",
    tech: ["Python", "OpenCV", "TensorFlow", "Flask", "React"],
    link: "https://github.com/skyback12/S07-MINOR-PROJECT-GRS"
  },
  {
    slug: "credit-card-fraud",
    title: "Credit Card Fraud Detection",
    desc: "ML model achieving high accuracy using Logistic Regression & Random Forest.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    link: "https://github.com/skyback12/credit-card-fraud-detection"
  },
  {
    slug: "notes-app",
    title: "Notes App (React + Firebase)",
    desc: "Real-time notes with cloud sync.",
    tech: ["React", "Firebase"],
    link: "https://github.com/skyback12"
  }
];

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="mt-12">
      <h3 className="text-xl font-semibold">Projects</h3>
      <p className="text-sm text-slate-600 mt-2">Selected work — active & maintained projects highlighted.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((p) => (
          <AnimatedCard key={p.slug}>
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h4 className="text-lg font-semibold">{p.title}</h4>
                  {p.live && <span className="text-xs ml-2 px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full">Live</span>}
                </div>

                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => <Badge key={t}>{t}</Badge>)}
                </div>
              </div>

              <div className="flex-shrink-0 flex flex-col items-end">
                <Button href={`/project?slug=${p.slug}`} variant="outline" className="text-xs">
                  <ExternalLink className="w-4 h-4 inline-block mr-1" /> Open
                </Button>
                <div className="mt-3 text-xs text-slate-400">{p.live ? "Deployed site" : ""}</div>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </AnimatedSection>
  );
}
