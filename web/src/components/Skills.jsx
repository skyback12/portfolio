import React from "react";
import Card from "./ui";

const GROUPS = [
  {
    title: "AI / ML",
    skills: [
      "Python",
      "TensorFlow",
      "Scikit-learn",
      "OpenCV",
      "Deep Learning",
      "Machine Learning",
      "Data Analytics",
      "Data Visualization",
      "Natural Language Processing (NLP)",
      "Data Mining",
    ],
  },
  {
    title: "Full Stack",
    skills: [
      "Flask",
      "FastAPI",
      "React",
      "Vite",
      "TailwindCSS",
      "Supabase",
      "MERN Stack",
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
    ],
  },
  {
    title: "Core CS",
    skills: [
      "Operating Systems",
      "Computer Networking",
      "Data Structures",
      "Databases",
      "Front-End Development",
      "Computer Science Fundamentals"
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "MongoDB",
      "Postman",
      "VS Code",
      "Jupyter Notebook",
      "Google Colab",
      "openai",
      "google studio ai",
      "openrouter.ai",
      "claude",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mt-12">
      <h3 className="text-xl font-semibold">Skills</h3>
      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
    </section>
  );
}
