// src/components/ui/AnimatedSection.tsx
import React from "react";
import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function AnimatedSection({ children, className = "", id }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
      viewport={{ once: true, margin: "0px" }}
    >
      {children}
    </motion.section>
  );
}
