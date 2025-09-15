import React from "react";

export default function AnimatedCard({ children, className = "" }) {
  return (
    <div
      className={`fade-up bg-white rounded-2xl p-6 shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${className}`}
    >
      {children}
    </div>
  );
}
