import React, { useRef, useEffect } from "react";
import anime from 'animejs/lib/anime.es.js';

export default function AnimatedCard({ children, className = "" }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const currentCard = cardRef.current;
    if (!currentCard) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: entry.target,
              opacity: [0, 1],
              translateY: [40, 0],
              scale: [0.95, 1],
              duration: 800,
              easing: 'easeOutCubic'
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    currentCard.style.opacity = 0;
    observer.observe(currentCard);

    return () => observer.unobserve(currentCard);
  }, []);

  return (
    <div ref={cardRef} className={`p-6 bg-white border border-slate-200 rounded-xl shadow-md ${className}`}>
      {children}
    </div>
  );
}
