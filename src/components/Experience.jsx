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
    <AnimatedSection id="experience" className="mt-16">
      <h3 className="text-xl font-semibold">Experience</h3>
      <div className="mt-6 space-y-4">
        {EXPERIENCE.map(e => (
          <AnimatedCard key={e.title}>
            <div>
              <h4 className="font-semibold text-slate-900">{e.title}</h4>
              <p className="text-sm text-slate-600">{e.org} • {e.date}</p>
              <p className="mt-3 text-sm text-slate-700 whitespace-pre-line">{e.desc}</p>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </AnimatedSection>
  );
}