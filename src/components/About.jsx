// src/components/About.jsx
import React from "react";
import AnimatedSection from "./ui/AnimatedSection.jsx";
import AnimatedCard from "./ui/AnimatedCard.jsx";

export default function About() {
  return (
    <AnimatedSection id="about" className="mt-16">
      <div className="grid md:grid-cols-3 gap-6 items-start">
        {/* Left section - About summary */}
        <div className="md:col-span-2">
          <AnimatedCard>
            <h3 className="text-xl font-semibold">About Me</h3>
            <p className="mt-3 text-slate-700 leading-relaxed">
              I am a <span className="font-medium">B.Tech Artificial Intelligence & Machine Learning graduate (GGSIPU, 2025)</span>, 
              currently interning as a <span className="font-medium">Full Stack Python Developer & AI/ML Intern</span>. 
              I specialize in building <span className="font-medium">AI-powered, end-to-end applications</span> that bridge 
              machine learning with modern full stack development.
            </p>

            <p className="mt-3 text-slate-700 leading-relaxed">
              Alongside my internship, I also work as a <span className="font-medium">Fiverr Freelancer</span>, delivering 
              projects in <span className="font-medium">full stack development</span> and <span className="font-medium">workflow automation</span>. 
              My goal is to create solutions that not only work in theory but scale in real-world production.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-slate-600">
              <li>• Developing <span className="font-medium">AI Dress Studio</span> — a fashion-tech platform for pattern generation, outfit visualization, and body measurement.</li>
              <li>• Built <span className="font-medium">Gesture Controlled Presentation System</span> (computer vision + ML for hands-free slides).</li>
              <li>• Designed <span className="font-medium">Credit Card Fraud Detection</span> (96.3% accuracy) and <span className="font-medium">Crop Yield Prediction</span> models.</li>
              <li>• Created <span className="font-medium">Notes App (React + Firebase)</span> for real-time note management.</li>
            </ul>
          </AnimatedCard>
        </div>

        {/* Right section - Contact */}
        <div>
          <AnimatedCard>
            <h4 className="text-sm font-medium text-slate-600">Contact</h4>
            <p className="mt-2 text-sm">📧 adityamalik081203@gmail.com</p>
            <p className="mt-1 text-sm">📱 +91 8527036487</p>
            <div className="mt-4 space-y-2">
              <a
                href="https://www.linkedin.com/in/aditya-malik-946a61253"
                target="_blank"
                rel="noreferrer"
                className="block text-sm text-sky-600 hover:underline"
              >
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/skyback12"
                target="_blank"
                rel="noreferrer"
                className="block text-sm text-sky-600 hover:underline"
              >
                GitHub Portfolio
              </a>
              <a
                href="https://www.fiverr.com/s/lj29pDa"
                target="_blank"
                rel="noreferrer"
                className="block text-sm text-sky-600 hover:underline"
              >
                Fiverr Profile
              </a>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </AnimatedSection>
  );
}
