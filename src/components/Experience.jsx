// src/components/Experience.jsx
import React from "react";
import AnimatedCard from "./ui/AnimatedCard.jsx";
import AnimatedSection from "./ui/AnimatedSection.jsx";

const EXPERIENCE = [
  {
    title: "Full Stack Python Developer & AI/ML Intern",
    org: "CSRBOX (Internship)",
    date: "Jul 2025 – Present",
    desc: "Working on real-world projects solving company workflow challenges. Built automated reporting pipelines (initial prototypes), and currently developing AI Dress Studio — an AI-powered fashion-tech platform. Tech: Python, Flask, FastAPI, React, Supabase, OpenCV, TensorFlow."
  },
  {
    title: "IBM SkillsBuild – Data Analytics Intern",
    org: "IBM SkillsBuild",
    date: "Jun 2024 – Aug 2024",
    desc: "Data collection, analysis, visualization, and dashboards."
  },
  {
    title: "Summer Training – MERN Stack",
    org: "Brain Mentors Pvt Ltd",
    date: "Jul 2023 – Aug 2023",
    desc: "Trained in full stack development using MongoDB, Express, React, and Node.js."
  }
];

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="mt-12">
      <h3 className="text-xl font-semibold">Experience</h3>
      <div className="mt-4 space-y-4">
        {EXPERIENCE.map(e => (
          <AnimatedCard key={e.title}>
            <div>
              <h4 className="font-semibold">{e.title}</h4>
              <p className="text-sm text-slate-600">{e.org} • {e.date}</p>
              <p className="mt-3 text-sm text-slate-700">{e.desc}</p>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </AnimatedSection>
  );
}
