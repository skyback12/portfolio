import * as React from "react";

export function Card({ className = "", ...props }) {
  return <div className={`rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm ${className}`} {...props} />;
}

export function CardHeader({ className = "", ...props }) {
  return <div className={`p-4 border-b border-slate-200 dark:border-slate-800 ${className}`} {...props} />;
}

export function CardTitle({ className = "", ...props }) {
  return <h3 className={`font-semibold leading-none tracking-tight ${className}`} {...props} />;
}

export function CardDescription({ className = "", ...props }) {
  return <p className={`text-sm text-slate-500 dark:text-slate-400 ${className}`} {...props} />;
}

export function CardContent({ className = "", ...props }) {
  return <div className={`p-4 ${className}`} {...props} />;
}

export function CardFooter({ className = "", ...props }) {
  return <div className={`p-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between ${className}`} {...props} />;
}