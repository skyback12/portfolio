// src/components/ui/Badge.jsx
import React from "react";

export default function Badge({ children, className = "" }) {
  return (
    <span className={`inline-block text-xs px-2 py-0.5 bg-slate-100 text-slate-800 rounded ${className}`}>
      {children}
    </span>
  );
}
