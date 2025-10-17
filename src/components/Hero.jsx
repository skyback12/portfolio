import React, { useState, useEffect, useRef } from "react";
import Button from "../components/ui/button";
import Badge from "../components/ui/badge";
import { Github, Linkedin, File } from "lucide-react";
import anime from 'animejs/lib/anime.es.js'; // Import animejs

// Helper component for the typing effect (No change needed here)
const Typewriter = ({ roles, speed = 100, delay = 1000 }) => {
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

  // Refs for animation targets
  const nameRef = useRef(null);
  const taglineRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    // 1. Name Fade In
    anime({
      targets: nameRef.current,
      opacity: [0, 1],
      translateY: [-20, 0],
      duration: 800,
      easing: 'easeOutQuad'
    });

    // 2. Tagline Fade In (delayed)
    anime({
      targets: taglineRef.current,
      opacity: [0, 1],
      translateY: [-10, 0],
      duration: 800,
      delay: 300,
      easing: 'easeOutQuad'
    });
    
    // 3. Buttons Fade In (further delayed)
    anime({
      targets: buttonsRef.current,
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      delay: 600,
      easing: 'easeOutQuad'
    });
  }, []);
  
  return (
    <div className="text-center py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-4xl mx-auto">
        {/* Name */}
        <h1 
          ref={nameRef}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900"
          style={{ opacity: 0 }} // Start invisible
        >
          Hi, I'm Aditya Malik
        </h1>

        {/* Dynamic Tagline */}
        <div 
          ref={taglineRef}
          className="mt-4 text-2xl md:text-3xl font-bold text-slate-800 h-10 md:h-12"
          style={{ opacity: 0 }} // Start invisible
        >
          I build solutions as a&nbsp;
          <Typewriter roles={dynamicRoles} />
        </div>
        
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          B.Tech AI & ML Graduate (GGSIPU, 2025) with a passion for bridging **machine learning** with **modern full stack development** to create production-ready applications.
        </p>

        {/* Buttons */}
        <div 
          ref={buttonsRef}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          style={{ opacity: 0 }} // Start invisible
        >
          <Button href="/CV.pdf" variant="solid" className="shadow-lg hover:shadow-xl">
            <File className="w-4 h-4 mr-2" /> Download Resume
          </Button>
          <Button
            href="#projects"
            variant="ghost"
            className="border-slate-400 hover:bg-slate-200"
          >
            Explore Projects
          </Button>
          <Button href="https://github.com/skyback12" variant="ghost">
            <Github className="w-4 h-4 mr-2" /> GitHub
          </Button>
        </div>

        {/* Badges - Simplified and made more subtle */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-500">
          <span>#Python</span>
          <span>•</span>
          <span>#React</span>
          <span>•</span>
          <span>#TensorFlow</span>
          <span>•</span>
          <span>#Flask</span>
          <span>•</span>
          <span>#OpenAI</span>
        </div>
      </div>
    </div>
  );
}
