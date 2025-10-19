// src/components/ui/Card.jsx
import React from "react";

export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-xl shadow-md border border-slate-200 p-6 hover:shadow-xl transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}
