// src/components/Contact.jsx
import React from "react";
import AnimatedSection from "./ui/AnimatedSection.jsx";
import Card from "./ui/Card.jsx";

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="mt-12">
      <h3 className="text-xl font-semibold">Contact</h3>
      <div className="mt-4">
        <Card>
          <p className="text-sm">Email: <a href="mailto:adityamalik081203@gmail.com" className="text-sky-600">adityamalik081203@gmail.com</a></p>
          <p className="text-sm mt-2">LinkedIn: <a href="https://www.linkedin.com/in/aditya-malik-946a61253" className="text-sky-600">Aditya Malik</a></p>
          <p className="text-sm mt-2">GitHub: <a href="https://github.com/skyback12" className="text-sky-600">skyback12</a></p>
          <p className="text-sm mt-2">Fiverr: <a href="https://www.fiverr.com/s/lj29pDa" className="text-sky-600">Fiverr profile</a></p>
        </Card>
      </div>
    </AnimatedSection>
  );
}
