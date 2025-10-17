// src/components/ui/AnimatedSection.jsx
import React, { useRef, useEffect } from "react";
import anime from 'animejs/lib/anime.es.js';

export default function AnimatedSection({ children, className = "", id }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Target the section and apply the anime.js sequence
            anime({
              targets: entry.target,
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 800,
              delay: 50,
              easing: 'easeOutQuart',
            });
            // Stop observing after animation is complete
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.15, // Trigger when 15% of the item is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id={id} className={className} style={{ opacity: 0 }}>
      {children}
    </section>
  );
}
