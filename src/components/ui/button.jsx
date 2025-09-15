import React from "react";

export default function Button({ children, href, onClick, variant = "solid", className = "", ...props }) {
  const base = "inline-flex items-center gap-2 rounded-md font-medium transition-shadow focus:outline-none";
  const variants = {
    solid: "bg-slate-900 text-white px-4 py-2 shadow-sm hover:shadow-md",
    ghost: "px-3 py-1 border border-slate-200 text-slate-700 hover:bg-slate-50",
    outline: "px-3 py-1 border border-slate-300 text-slate-900 hover:bg-white",
  };
  const cls = `${base} ${variants[variant] || variants.solid} ${className}`;
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={cls} {...props}>
      {children}
    </button>
  );
}
