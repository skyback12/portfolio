// src/components/About.jsx
import React from "react";
import AnimatedCard from "./ui/animatedCard.jsx";
import AnimatedSection from "./ui/AnimatedSection.jsx";

export default function About() {
  return (
    <AnimatedSection id="about" className="mt-12">
      <div className="grid md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-2">
          <AnimatedCard>
            <h3 className="text-xl font-semibold">About</h3>
            <p className="mt-3 text-slate-700">
              I am a B.Tech AI & ML graduate (GGSIPU, 2025) currently interning as a Full Stack Python Developer & AI/ML Intern.
              I build AI-powered applications and provide freelance services on Fiverr focused on full stack development and automation.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>• Currently developing AI Dress Studio — a fashion-tech platform for pattern generation, outfit simulation, and body measurement.</li>
              <li>• Built Gesture Controlled Presentation System (computer vision + ML).</li>
              <li>• Worked on Credit Card Fraud Detection and Crop Yield Prediction projects.</li>
            </ul>
          </AnimatedCard>
        </div>

        <div>
          <AnimatedCard>
            <h4 className="text-sm font-medium text-slate-600">Contact</h4>
            <p className="mt-2 text-sm">adityamalik081203@gmail.com</p>
            <p className="mt-1 text-sm">+91 8527036487</p>
            <div className="mt-4">
              <a href="https://www.fiverr.com/" target="_blank" rel="noreferrer" className="text-sm text-sky-600 hover:underline">Fiverr profile</a>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </AnimatedSection>
  );
}
