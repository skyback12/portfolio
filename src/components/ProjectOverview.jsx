import React from "react";
// Import PROJECTS array
import { PROJECTS } from "./Projects"; 
import { ExternalLink, Video } from "lucide-react";
import Card from "./ui/card";
import Button from "./ui/button";
import Badge from "./ui/badge";

/**
 * Utility function to convert a standard Google Drive file URL to an embed URL.
 * Assumes the URL is publicly shared.
 */
const getEmbedUrl = (url) => {
  if (!url || !url.includes("drive.google.com")) return null;

  try {
    const urlObj = new URL(url);
    const pathSegments = urlObj.pathname.split('/').filter(Boolean);

    const dIndex = pathSegments.findIndex(segment => segment === 'd');
    if (dIndex !== -1 && pathSegments[dIndex + 1]) {
      const fileId = pathSegments[dIndex + 1];
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }

    const idFromQuery = urlObj.searchParams.get("id");
    if (idFromQuery) {
      return `https://drive.google.com/file/d/${idFromQuery}/preview`;
    }

    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) return `https://drive.google.com/file/d/${match[1]}/preview`;

  } catch (e) {
    console.error("Failed to parse Google Drive URL:", e);
  }
  return null;
};

/**
 * ProjectOverview reads ?slug=... from URL and displays a detailed page.
 * Usage: navigate to /projects?slug=gesture-presentation (after redirect)
 */
export default function ProjectOverview() {
  // read slug from query param - THIS CODE IS CORRECT for your setup
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

  const embedUrl = getEmbedUrl(project.videoLink);

  const shortDesc = project.short || project.desc || "";
  const longDesc = project.longDesc || project.desc || "";

  return (
    <main className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h1 className="text-2xl font-bold">{project.title}</h1>
          <p className="text-sm text-slate-600 mt-2">{shortDesc}</p>

          {/* New Video Embed Section */}
          {embedUrl && (
            <div className="mt-8">
              <h4 className="flex items-center text-lg font-semibold mb-3">
                <Video className="w-5 h-5 mr-2" /> Project Demo
              </h4>
              {/* Responsive iFrame Container */}
              <div className="relative overflow-hidden w-full" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg border shadow-lg"
                  src={embedUrl}
                  allowFullScreen
                  title={`Video Demo of ${project.title}`}
                />
              </div>
            </div>
          )}

          {/* existing images carousel/simple grid */}
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
              <p className="mt-2 text-sm text-slate-700">{longDesc}</p>
            </Card>

            {/* contributions (if available) */}
            {project.contributions && project.contributions.length > 0 && (
              <Card>
                <h4 className="font-semibold">My contributions</h4>
                <ul className="mt-2 list-disc list-inside text-sm text-slate-700">
                  {project.contributions.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </Card>
            )}
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
              {/* Prefer explicit deployed link, then repo, then generic link */}
              {project.live && project.link ? (
                <Button href={project.link} variant="solid"><ExternalLink className="w-4 h-4 mr-2" /> Live site</Button>
              ) : project.repo ? (
                <Button href={project.repo} variant="solid"><ExternalLink className="w-4 h-4 mr-2" /> View repo</Button>
              ) : project.link && project.link !== "#" ? (
                <Button href={project.link} variant="solid"><ExternalLink className="w-4 h-4 mr-2" /> Open link</Button>
              ) : null}

              {/* video link (external) */}
              {project.videoLink && !embedUrl && (
                <Button href={project.videoLink} variant="ghost"><Video className="w-4 h-4 mr-2" /> Watch demo</Button>
              )}

              <a href="/#projects" className="text-sm text-slate-600 hover:underline mt-2">← Back to projects</a>
            </div>
          </Card>
        </aside>
      </div>
    </main>
  );
}