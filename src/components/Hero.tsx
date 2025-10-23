import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../components/ui/button";
import Badge from "../components/ui/badge";
import { Github, Linkedin, File } from "lucide-react";
import { TypewriterProps } from "../types";

// Helper component for the typing effect
const Typewriter: React.FC<TypewriterProps> = ({ roles, speed = 100, delay = 1000 }) => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (!isDeleting && charIndex < currentRole.length) {
      // Typing phase
      timer = setTimeout(() => {
        setText(prev => prev + currentRole.charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, speed);
    } else if (isDeleting && charIndex > 0) {
      // Deleting phase
      timer = setTimeout(() => {
        setText(prev => prev.substring(0, prev.length - 1));
        setCharIndex(charIndex - 1);
      }, speed / 2); // Faster deletion
    } else if (!isDeleting && charIndex === currentRole.length) {
      // Pause at end of word, then start deleting
      timer = setTimeout(() => setIsDeleting(true), delay * 1.5);
    } else if (isDeleting && charIndex === 0) {
      // Finished deleting, move to next word
      setIsDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, roles, speed, delay]);

  return (
    <span className="font-mono text-sky-600">
      {text}
      <span className="inline-block w-0.5 h-6 bg-sky-600 align-middle ml-1 animate-pulse" /> {/* Blinking Cursor */}
    </span>
  );
};

export default function Hero() {
  const dynamicRoles = [
    "AI/ML Engineer",
    "Full Stack Python Developer",
    "Freelancer"
  ];
  
  return (
    <div className="text-center py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-slate-100/30 pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent"
        >
          Hi, I'm Aditya Malik
        </motion.h1>

        {/* Dynamic Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-2xl md:text-3xl font-bold text-slate-800 h-10 md:h-12"
        >
          I build solutions as a&nbsp;
          <Typewriter roles={dynamicRoles} />
        </motion.div>
        
        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          B.Tech AI & ML Graduate (GGSIPU, 2025) with a passion for bridging <span className="font-semibold text-blue-700">machine learning</span> with <span className="font-semibold text-blue-700">modern full stack development</span> to create production-ready applications.
        </p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="/CV.pdf" variant="solid" className="shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
            <File className="w-4 h-4 mr-2" /> Download Resume
          </Button>
          <Button
            href="#projects"
            variant="ghost"
            className="border-2 border-slate-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 hover:scale-105"
          >
            Explore Projects
          </Button>
          <Button href="https://github.com/skyback12" variant="ghost" className="hover:scale-105 transition-all duration-300">
            <Github className="w-4 h-4 mr-2" /> GitHub
          </Button>
        </motion.div>

        {/* Badges - Simplified and made more subtle */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm">
          {['Python', 'React', 'TensorFlow', 'Flask', 'OpenAI'].map((tech, i) => (
            <span key={tech} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-600 font-medium shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300 hover:-translate-y-1">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
