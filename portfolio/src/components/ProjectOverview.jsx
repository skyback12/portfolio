import React from "react";
import { PROJECTS } from "../data/projects";
import Button from "./ui/Button";
import Badge from "./ui/Badge";
import Card from "./ui/Card";
import { ExternalLink } from "lucide-react";

/**
 * ProjectOverview reads ?slug=... from URL and displays a detailed page.
 * Usage: navigate to /project?slug=ai-dress-studio
 */
export default function ProjectOverview() {
  // read slug from query param
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");

  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="container mx-auto px-6 py-12">
        <Card>
          <h3 className="text-xl font-semibold">Project not found</h3>
          <p className="mt-2 text-sm text-slate-600">No project matches the slug <code>{slug}</code>.</p>
          <div className="mt-4">
            <a href="/" className="text-sky-600 hover:underline">Return home</a>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h1 className="text-2xl font-bold">{project.title}</h1>
          <p className="text-sm text-slate-600 mt-2">{project.short}</p>

          {/* images carousel/simple grid */}
          {project.images && project.images.length > 0 && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.images.map((src, i) => (
                <div key={i} className="rounded overflow-hidden border">
                  <img src={src} alt={`${project.title} ${i + 1}`} className="w-full h-56 object-cover" />
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 space-y-4">
            <Card>
              <h4 className="font-semibold">Overview</h4>
              <p className="mt-2 text-sm text-slate-700">{project.longDesc}</p>
            </Card>

            <Card>
              <h4 className="font-semibold">What I built</h4>
              <ul className="mt-2 list-disc list-inside text-sm text-slate-700">
                <li>End-to-end integration: model → API → frontend.</li>
                <li>Image preprocessing & color fidelity pipeline (OpenCV).</li>
                <li>Pattern generation using diffusion models (Stable Diffusion).</li>
                <li>Measurement pipeline for front + side camera captures.</li>
              </ul>
            </Card>
          </div>
        </div>

        <aside>
          <Card>
            <h4 className="font-semibold">Tech Stack</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-2">
              {project.live && project.link ? (
                <Button href={project.link} variant="solid"><ExternalLink className="w-4 h-4 mr-2" /> Live site</Button>
              ) : project.repo ? (
                <Button href={project.repo} variant="solid"><ExternalLink className="w-4 h-4 mr-2" /> View repo</Button>
              ) : null}

              <a href="/#projects" className="text-sm text-slate-600 hover:underline mt-2">← Back to projects</a>
            </div>
          </Card>
        </aside>
      </div>
    </main>
  );
}
