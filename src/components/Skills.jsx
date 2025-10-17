// src/components/Skills.jsx
import React from "react";
import Card from "./ui/card.jsx";
import AnimatedSection from "./ui/AnimatedSection.jsx";

const GROUPS = [
  {
    title: "AI / ML",
    skills: [
      "Python",
      "TensorFlow",
      "Scikit-learn",
      "Keras",
      "OpenCV",
      "Deep Learning",
      "Machine Learning",
      "NLP (NLTK)",
      "Stable Diffusion",
      "OpenAI API",
      "Data Analytics",
      "Data Visualization"
    ],
  },
  {
    title: "Full Stack Development",
    skills: [
      "Flask",
      "FastAPI",
      "React",
      "Vite",
      "TailwindCSS",
      "shadcn/ui",
      "Supabase",
      "Firebase",
      "MERN Stack",
      "JavaScript",
      "Node.js",
      "Express.js",
      "HTML",
      "CSS"
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git & GitHub",
      "MongoDB",
      "Postman",
      "VS Code",
      "Jupyter Notebook",
      "Google Colab",
      "Docker (Basics)",
      "Openrouter.ai",
      "Google Studio AI",
      "yupp.ai"
    ],
  },
];

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="mt-16">
      <h3 className="text-3xl font-bold text-slate-800 mb-6">Technical Skills</h3>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Increased gap for visual separation */}
        {GROUPS.map((g) => (
          <Card key={g.title}>
            <h4 className="text-lg font-semibold text-sky-700 border-b pb-2 mb-3">{g.title}</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.skills.map((s) => (
                // Brighter badge for visual pop
                <span
                  key={s}
                  className="text-xs px-3 py-1 bg-sky-50 text-sky-800 font-medium rounded-full transition-colors hover:bg-sky-100"
                >
                  {s}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}
