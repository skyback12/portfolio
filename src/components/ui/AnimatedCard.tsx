import React from "react";
import { motion } from "framer-motion";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedCard({ children, className = "" }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "0px" }}
      className={`p-6 bg-white border border-slate-200 rounded-xl shadow-md ${className}`}
    >
      {children}
    </motion.div>
  );
}
