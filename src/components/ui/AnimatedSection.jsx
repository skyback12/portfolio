import React from "react";

export default function AnimatedSection({ children, id }) {
  return (
    <section id={id} className="py-10">
      <div className="container mx-auto px-4">
        <div className="space-y-6">{children}</div>
      </div>
    </section>
  );
}
