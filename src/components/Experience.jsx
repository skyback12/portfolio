// src/components/Experience.jsx
import React from "react";
import AnimatedCard from "./ui/AnimatedCard.jsx";
import AnimatedSection from "./ui/AnimatedSection.jsx";

const EXPERIENCE = [
  {
    title: "Full Stack Python Developer & AI/ML Intern",
    org: "InStyle Retail Inc",
    date: "Aug 2025 – Present",
    desc: "Solving real-world workflow challenges with AI and automation. Built initial prototypes of automated reporting pipelines, and currently leading the development of AI Dress Studio — a fashion-tech platform for pattern generation, outfit visualization, and body measurement.\nTech: Python, Flask, FastAPI, React, Supabase, OpenCV, TensorFlow."
  },
  {
    title: "Freelancer – Full Stack Python Developer & Automation",
    org: "Fiverr",
    date: "Oct 2024 – Present",
    desc: "Delivered custom freelance projects including Flask + React applications, API/database integrations, and workflow automation bots/scripts for clients across domains.\nGigs: Full Stack Python Developer | Automated Workflow Solutions."
  },
  {
    title: "IBM SkillsBuild – Data Analytics Intern",
    org: "IBM SkillsBuild",
    date: "Jun 2024 – Aug 2024",
    desc: "Analyzed large datasets, created dashboards, and built visualizations for actionable business insights. Gained practical experience in data collection, cleaning, and reporting.\nTech: Python, Pandas, NumPy, Matplotlib."
  },
  {
    title: "Summer Training – MERN Stack",
    org: "Brain Mentors Pvt Ltd",
    date: "Jul 2023 – Aug 2023",
    desc: "Hands-on training in full stack web development using MongoDB, Express.js, React, and Node.js. Built dynamic applications and strengthened fundamentals of modern web development."
  }
];

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="mt-24">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent mb-3">Experience</h3>
        <p className="text-slate-600">My professional journey in tech</p>
      </div>
      <div className="space-y-6">
        {EXPERIENCE.map((e, idx) => (
          <AnimatedCard key={e.title} className="hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-l-4 border-blue-500">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold shadow-lg">
                {idx + 1}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg text-slate-900">{e.title}</h4>
                <p className="text-sm text-blue-600 font-medium mt-1">{e.org}</p>
                <p className="text-xs text-slate-500 mt-1">{e.date}</p>
                <p className="mt-4 text-sm text-slate-700 whitespace-pre-line leading-relaxed">{e.desc}</p>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </AnimatedSection>
  );
}