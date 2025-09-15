// src/components/Projects.jsx
import React from "react";
import Button from "./ui/button";
import Badge from "./ui/badge";
import { ExternalLink } from "lucide-react";
import Card from "./ui/card";

const PROJECTS = [
  {
  title: "AI Dress Studio (Ongoing)",
  desc: "Flagship fashion-tech AI platform that integrates pattern generation, outfit visualization, and AI-based body measurement. Built with a Flask backend, React frontend, Supabase storage, Stable Diffusion for fabric patterns, OpenCV for measurement AI, and OpenAI for generative intelligence.",
  tech: ["Flask", "React", "Supabase", "Stable Diffusion", "OpenCV", "OpenAI"],
  link: "https://ai-dress-studio.onrender.com",
  note: "⚠️ Preview link — project under development. Final product link will be shared once completed.",
  live: true,
},

  {
    title: "Gesture Controlled Presentation System",
    desc: "Hands-free presentation controller enabling users to switch slides using real-time hand gestures. Enhanced accessibility and engagement with computer vision + ML integration.",
    tech: ["Python", "OpenCV", "TensorFlow", "Flask", "React"],
    link: "https://github.com/skyback12/Gesture-Controlled-Presentation-System",
  },
  {
    title: "Crop Yield Prediction",
    desc: "AI model forecasting agricultural production based on weather and soil health data. Integrated real-time climate data for more accurate predictions.",
    tech: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
    link: "https://drive.google.com/drive/folders/1zRJxr8kXpX0TpQsBS8esQz93BmNLz4Ol?usp=drive_link",
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="mt-16">
      <h3 className="text-xl font-semibold">Projects</h3>
      <p className="text-sm text-slate-600 mt-2">
        Selected work — flagship, academic, and freelance projects that highlight AI, ML, and full stack development.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((p) => (
          <Card key={p.title}>
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h4 className="text-lg font-semibold">{p.title}</h4>
                  {p.live && (
                    <span className="text-xs ml-2 px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full">
                      Live
                    </span>
                  )}
                </div>

                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>

                {p.note && (
                  <p className="mt-2 text-xs text-amber-600 italic">{p.note}</p>
                )}

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

                <div className="mt-3 text-xs text-slate-400">
                  {p.live ? "Deployed site" : ""}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
