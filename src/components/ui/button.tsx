// src/components/ui/Button.tsx
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "ghost" | "outline";
  className?: string;
  [key: string]: any;
}

export default function Button({ children, href, onClick, variant = "solid", className = "", ...props }: ButtonProps) {
  const base = "inline-flex items-center gap-2 rounded-md font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none";
  const variants = {
    solid: "bg-slate-900 text-white px-4 py-2 shadow-sm hover:shadow-md hover:bg-slate-800",
    ghost: "px-3 py-1 border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300",
    outline: "px-3 py-1 border border-slate-300 text-slate-900 hover:bg-white hover:border-slate-400",
  };
  const cls = `${base} ${variants[variant] || variants.solid} ${className}`;
  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noreferrer noopener" 
        className={cls} 
        aria-label={`Open ${children} in new tab`}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <button 
      onClick={onClick} 
      className={cls} 
      aria-label={typeof children === 'string' ? children : 'Button'}
      {...props}
    >
      {children}
    </button>
  );
}
