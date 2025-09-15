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
      <h3 className="text-xl font-semibold">Skills</h3>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {GROUPS.map((g) => (
          <Card key={g.title}>
            <h4 className="text-sm font-medium text-slate-600">{g.title}</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2 py-1 bg-slate-100 rounded"
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
