import { motion } from "framer-motion";

export default function AnimatedCard({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={`rounded-2xl shadow-sm border bg-background p-6 ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
