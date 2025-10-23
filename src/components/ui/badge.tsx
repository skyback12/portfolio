// src/components/ui/Badge.tsx
import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span className={`inline-block text-xs px-2 py-0.5 bg-slate-100 text-slate-800 rounded ${className}`}>
      {children}
    </span>
  );
}
