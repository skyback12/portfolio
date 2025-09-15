// src/components/ui/Card.jsx
import React from "react";

export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-lg shadow-sm p-4 hover:shadow-lg transition-shadow ${className}`}>
      {children}
    </div>
  );
}
