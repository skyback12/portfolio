import Card from "./ui/card";


const EXPERIENCE = [
  {
    title: "Full Stack Python Developer & AI/ML Intern",
    org: "[Company Name]",
    date: "Jul 2025 – Present",
    desc: "Building automated reporting workflows and developing AI Dress Studio. Tech: Python, Flask, FastAPI, React, Supabase, OpenCV, TensorFlow."
  },
  {
    title: "IBM SkillsBuild – Data Analytics Intern",
    org: "IBM SkillsBuild",
    date: "Jun 2024 – Aug 2024",
    desc: "Data collection, analysis, visualization, dashboards."
  },
  {
    title: "Summer Training – MERN Stack",
    org: "Brain Mentor",
    date: "Jul 2023 – Aug 2023",
    desc: "Full stack development with MongoDB, Express, React, Node."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="mt-12">
      <h3 className="text-xl font-semibold">Experience</h3>
      <div className="mt-4 space-y-4">
        {EXPERIENCE.map((e) => (
          <Card key={e.title}>
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold">{e.title}</h4>
                <p className="text-sm text-slate-600">{e.org} • {e.date}</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-700">{e.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
