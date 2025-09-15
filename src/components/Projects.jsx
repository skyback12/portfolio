// src/components/Projects.jsx
import React from "react";
import AnimatedCard from "./ui/AnimatedCard";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import { ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "AI Dress Studio (Ongoing)",
    desc: "AI platform for pattern generation, outfit visualization, and measurement AI.",
    tech: ["Flask", "React", "Supabase", "Stable Diffusion", "OpenCV"],
    link: "https://ai-dress-studio-web.onrender.com", // <- updated to your deployed site
    live: true
  },
  {
    title: "Gesture Controlled Presentation System",
    desc: "Hands-free slide navigation using computer vision + ML.",
    tech: ["Python", "OpenCV", "TensorFlow", "Flask", "React"],
    link: "https://github.com/skyback12/Gesture-Controlled-Presentation-System"
  },
  {
    title: "Crop Yield Prediction",
    desc: "Forecasting agricultural production using weather & soil data.",
    tech: ["TensorFlow", "Scikit-learn", "Pandas"],
    link: "https://drive.google.com/drive/folders/1zRJxr8kXpX0TpQsBS8esQz93BmNLz4Ol?usp=drive_link"
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="mt-12">
      <h3 className="text-xl font-semibold">Projects</h3>
      <p className="text-sm text-slate-600 mt-2">Selected work — active & maintained projects highlighted.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((p) => (
          <AnimatedCard key={p.title}>
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h4 className="text-lg font-semibold">{p.title}</h4>
                  {p.live && (
                    <span className="text-xs ml-2 px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full">Live</span>
                  )}
                </div>

                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>

              <div className="flex-shrink-0 flex flex-col items-end">
                <Button
                  href={p.link && p.link !== "#" ? p.link : undefined}
                  variant="outline"
                  className="text-xs"
                >
                  <ExternalLink className="w-4 h-4 inline-block mr-1" />
                  {p.link && p.link !== "#" ? "Open" : "View"}
                </Button>

                {/* optional small meta or status */}
                <div className="mt-3 text-xs text-slate-400">{p.live ? "Deployed site" : ""}</div>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </section>
  );
}
