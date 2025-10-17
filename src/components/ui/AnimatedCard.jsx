// src/components/ui/Card.jsx
import React from "react";

export default function Card({ children, className = "" }) {
  // This combines the base card structure with the new animation CSS classes
  return (
    <div 
      className={`bg-white rounded-xl shadow-lg border border-slate-100 p-5 
                  transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1 
                  ${className}`}
    >
      {children}
    </div>
  );
}
