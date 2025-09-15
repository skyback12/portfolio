import AnimatedCard from "./ui/animatedCard.jsx";
import AnimatedSection from "./ui/AnimatedSection.jsx";


export default function Freelance() {
  return (
    <AnimatedSection id="freelance" className="mt-12">
      <h3 className="text-xl font-semibold">Freelancing</h3>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <AnimatedCard>
          <h4 className="font-semibold">Full Stack Python Developer</h4>
          <p className="mt-2 text-sm text-slate-600">Flask + React applications with API and database integration. Custom web apps for small businesses.</p>
          <div className="mt-3">
            <a href="https://www.fiverr.com/s/LdEerVQ" target="_blank" rel="noreferrer" className="text-sm text-sky-600 hover:underline">View Fiverr gig</a>
          </div>
        </AnimatedCard>

        <AnimatedCard>
          <h4 className="font-semibold">Automated Workflow Solutions</h4>
          <p className="mt-2 text-sm text-slate-600">Automation scripts and reporting pipelines to save time and deliver daily insights.</p>
          <div className="mt-3">
            <a href="https://www.fiverr.com/s/8zgdwb4" target="_blank" rel="noreferrer" className="text-sm text-sky-600 hover:underline">View Fiverr gig</a>
          </div>
        </AnimatedCard>
      </div>
    </AnimatedSection>
  );
}
