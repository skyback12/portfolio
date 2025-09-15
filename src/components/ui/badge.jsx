import * as React from "react";

export function Badge({ variant = "default", className = "", ...props }) {
  const variants = {
    default: "bg-brand-100 text-brand-800 dark:bg-brand-800 dark:text-brand-100",
    secondary: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100",
    outline: "border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant] || ""} ${className}`}
      {...props}
    />
  );
}
