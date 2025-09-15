// src/components/Contact.jsx
import React from "react";
import AnimatedSection from "./ui/AnimatedSection.jsx";
import AnimatedCard from "./ui/AnimatedCard.jsx";
import { Mail, Linkedin, Github, Briefcase } from "lucide-react";

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="mt-16">
      <h3 className="text-xl font-semibold">Contact</h3>
      <div className="mt-6">
        <AnimatedCard>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-sky-600" />
              <a
                href="mailto:adityamalik081203@gmail.com"
                className="text-sky-600 hover:underline"
              >
                adityamalik081203@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-sky-600" />
              <a
                href="https://www.linkedin.com/in/aditya-malik-946a61253"
                target="_blank"
                rel="noreferrer"
                className="text-sky-600 hover:underline"
              >
                LinkedIn Profile
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Github className="w-4 h-4 text-sky-600" />
              <a
                href="https://github.com/skyback12"
                target="_blank"
                rel="noreferrer"
                className="text-sky-600 hover:underline"
              >
                GitHub Portfolio
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-sky-600" />
              <a
                href="https://www.fiverr.com/s/lj29pDa"
                target="_blank"
                rel="noreferrer"
                className="text-sky-600 hover:underline"
              >
                Fiverr Profile
              </a>
            </li>
          </ul>
        </AnimatedCard>
      </div>
    </AnimatedSection>
  );
}
