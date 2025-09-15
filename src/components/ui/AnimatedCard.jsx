// src/components/ui/AnimatedCard.jsx
import React from "react";
import { motion } from "framer-motion";

export default function AnimatedCard({ children, className = "" }) {
  return (
    <motion.div
      className={`bg-white rounded-lg shadow-sm p-4 hover:shadow-lg transition-shadow ${className}`}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}
