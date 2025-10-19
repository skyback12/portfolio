// src/components/Contact.jsx
import React from "react";
import AnimatedSection from "./ui/AnimatedSection.jsx";
import AnimatedCard from "./ui/AnimatedCard.jsx";
import { Mail, Linkedin, Github, Briefcase } from "lucide-react";

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="mt-24 mb-12">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-900 bg-clip-text text-transparent mb-3">Get In Touch</h3>
        <p className="text-slate-600">Let's build something amazing together</p>
      </div>
      <div className="max-w-3xl mx-auto">
        <AnimatedCard className="hover:shadow-2xl transition-shadow duration-500 bg-gradient-to-br from-blue-50 to-slate-50">
          <ul className="space-y-5">
            <li className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <a
                href="mailto:adityamalik081203@gmail.com"
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                adityamalik081203@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
              <a
                href="https://www.linkedin.com/in/aditya-malik-946a61253"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                LinkedIn Profile
              </a>
            </li>
            <li className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                <Github className="w-5 h-5 text-white" />
              </div>
              <a
                href="https://github.com/skyback12"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                GitHub Portfolio
              </a>
            </li>
            <li className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <a
                href="https://www.fiverr.com/s/lj29pDa"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
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
