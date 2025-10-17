// src/components/ui/Card.jsx
import React from "react";

export default function Card({ children, className = "" }) {
  // Enhanced shadow and added a subtle border for a cleaner, more professional look
  return (
    <div className={`bg-white rounded-xl shadow-lg border border-slate-100 p-5 hover:shadow-xl transition-all ${className}`}>
      {children}
    </div>
  );
}
