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
    <AnimatedSection id="skills" className="mt-24">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent mb-3">Technical Skills</h3>
        <p className="text-slate-600">Technologies I work with to build intelligent solutions</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {GROUPS.map((g, idx) => (
          <div key={g.title} className="group">
            <Card className="h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                  idx === 0 ? 'from-blue-500 to-cyan-500' :
                  idx === 1 ? 'from-emerald-500 to-teal-500' :
                  'from-violet-500 to-purple-500'
                } flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                  {idx + 1}
                </div>
                <h4 className="text-xl font-bold text-slate-800">{g.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-2 bg-gradient-to-r from-blue-50 to-slate-50 text-slate-700 font-medium rounded-lg border border-slate-200 transition-all duration-300 hover:scale-110 hover:shadow-md hover:border-blue-300 hover:bg-blue-50 cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
