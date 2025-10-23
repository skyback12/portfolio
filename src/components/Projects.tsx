// src/components/Projects.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "./ui/button";
import Badge from "./ui/badge";
import { ExternalLink, Briefcase, User, Video } from "lucide-react";
import Card from "./ui/card";
import { Project } from "../types";

// EXPORTING PROJECTS ARRAY for use in ProjectOverview.tsx
export const PROJECTS: Project[] = [
  {
    title: "AI Dress Studio (Instyle Retail Inc.)",
    type: "company", // COMPANY PROJECT
    slug: "ai-dress-studio",
    desc: "Flagship fashion-tech AI platform that integrates pattern generation, outfit visualization, and AI-based body measurement. Built with a Flask backend, React frontend, Supabase storage, Stable Diffusion for fabric patterns, OpenCV for measurement AI, and OpenAI for generative intelligence.",
    tech: ["Flask", "React", "Supabase", "Stable Diffusion", "OpenCV", "OpenAI"],
    link: "https://drive.google.com/file/d/1uxsLV_FTCdDkOfMWZ-LazaLIAk7vgBNW/view?usp=drive_link",
    note: "⚠️ Project built during Internship. Preview link — under development. Final product link will be shared once completed.",
    live: false,
    short: "Fashion-tech platform for pattern generation and body-measurement AI.",
    longDesc: "An end-to-end fashion platform that automates pattern design, simulates outfits on user body measurements, and provides a dashboard for designers and buyers. Integrated services include model inference, image pipelines, and cloud storage.",
    contributions: [
      "Designed and built the Flask API for model inference and result caching.",
      "Created the OpenCV-based measurement preprocessing pipeline.",
      "Integrated Stable Diffusion for pattern generation and prototyping.",
      "Implemented Supabase storage for assets and user uploads."
    ],
  },
  // UPDATED COMPANY PROJECT
  {
    title: "Instyle Production Dashboard (Streamlit)",
    type: "company", // COMPANY PROJECT
    slug: "instyle-dashboard",
    desc: "A real-time production monitoring dashboard built with Streamlit and Python. It analyzes Google Sheets data to automatically identify critical manufacturing delays based on business rules and generates buyer-specific PDF reports and email alerts.",
    tech: ["Python", "Streamlit", "Pandas", "Plotly", "gspread", "fpdf"],
    link: "#", // Changed to a placeholder
    note: "Note: Live deployment link is confidential and cannot be shared publicly, as it contains sensitive company data. Please refer to the code snippets.",
    live: false, // Changed to false
    short: "Streamlit dashboard for manufacturing monitoring and automated reporting.",
    longDesc: "Real-time ETL from Google Sheets, business-rule evaluation, PDF report generation per buyer, and email alerting. The dashboard features drill-down charts and CSV exports.",
    contributions: [
      "Built data ingestion from Google Sheets using gspread.",
      "Designed PDF generation templates and email alerting logic.",
      "Authored business-rule engine to detect production delays."
    ],
  },

  {
    title: "Gesture Controlled Presentation System",
    type: "personal", // PERSONAL PROJECT
    slug: "gesture-presentation",
    desc: "Hands-free presentation controller enabling users to switch slides using real-time hand gestures. Enhanced accessibility and engagement with computer vision + ML integration.",
    tech: ["Python", "OpenCV", "TensorFlow", "Flask", "React"],
    link: "https://github.com/skyback12/Gesture-Controlled-Presentation-System",
    videoLink: "https://drive.google.com/file/d/1Us-m6OocHGPcrxX23BW8YCoJkhAsuEQ4/view?usp=drive_link",
    contributions: [
      "Developed a real-time gesture recognition model using OpenCV and TensorFlow.",
      "Implemented hand landmark detection (MediaPipe) to track gestures accurately.",
      "Integrated Python's Pynput library to simulate keyboard commands (left/right arrows) for slide navigation.",
      "Built a simple web interface using Flask for easy demonstration and control."
    ],
    short: "Real-time hand-gesture slide controller with media demo.",
    longDesc: "Prototype which captures webcam frames, runs a gestures model, and emits keyboard events to control slides. Includes a Flask demo server and a React UI for toggling modes.",
  },
  {
    title: "Crop Yield Prediction",
    type: "personal", // PERSONAL PROJECT
    slug: "crop-yield-prediction",
    desc: "AI model forecasting agricultural production based on weather and soil health data. Integrated real-time climate data for more accurate predictions.",
    tech: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
    link: "https://drive.google.com/drive/folders/1zRJxr8kXpX0TpQsBS8esQz93BmNLz4Ol?usp=drive_link",
    short: "ML model predicting crop yield using weather and soil features.",
    longDesc: "Built end-to-end pipeline: data collection, feature engineering using climatic and soil indicators, model training, and basic dashboarding for visualization.",
    contributions: [
      "Engineered features using historical climate, soil, and fertilizer application data.",
      "Trained a time-series based model (TensorFlow) for multi-year crop yield forecasting.",
      "Validated results against Scikit-learn models to ensure reliability.",
      "Visualized predictions and uncertainty metrics using Matplotlib/Seaborn."
    ]
  },
  {
    title: "Credit Card Fraud Detection",
    type: "personal", // PERSONAL PROJECT
    slug: "fraud-detection",
    desc: "Achieved 96.3% accuracy using Logistic Regression & Random Forest models on a transactional dataset to flag fraudulent activities.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    link: "https://github.com/skyback12/Credit-Card-Fraud-Detection-Repo",
    additionalLink: "https://drive.google.com/drive/folders/1zRJxr8kXpX0TpQsBS8esQz93BmNLz4Ol?usp=drive_link",
    additionalLinkText: "View Report/Data",
    live: false,
    contributions: [
      "Implemented and compared Logistic Regression and Random Forest models.",
      "Applied SMOTE technique to handle severe class imbalance in the transactional data.",
      "Achieved a high recall rate (92%) to minimize false negatives (missed fraud).",
      "Created performance evaluation metrics focusing on Precision, Recall, and AUC-ROC."
    ],
    short: "Fraud detection models with class-imbalance handling and evaluation.",
    longDesc: "Detailed experimentation pipeline comparing models, resampling strategies, and threshold tuning to optimize for recall while keeping precision acceptable. Includes plots and evaluation notebooks.",
  }
];


// NEW: Wrapper component to apply Framer Motion scroll and 3D hover effects
interface ProjectCardProps {
  p: Project;
  index: number;
  tabActive: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ p, index, tabActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: 0.05 + (index * 0.1), 
        ease: "easeOut" 
      }}
      whileHover={{ 
        rotateX: 5, 
        rotateY: 5,
        transition: { duration: 0.1 }
      }}
      whileTap={{ scale: 0.98 }}
      viewport={{ once: true, margin: "0px" }}
      className="transform-gpu transition-shadow duration-500 ease-out"
      style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
    >
      <Card>
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h4 className="text-lg font-semibold">{p.title}</h4>

              {/* Project Type Badge */}
              <Badge className={`text-xs ml-2 px-2 py-0.5 rounded-full ${p.type === 'company' ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-200 text-slate-700'}`}>
                {p.type === 'company' ? (
                    <>
                        <Briefcase className="w-3 h-3 inline-block mr-1" /> Company
                    </>
                ) : (
                    <>
                        <User className="w-3 h-3 inline-block mr-1" /> Personal
                    </>
                )}
              </Badge>

              {p.live && (
                <span className="text-xs ml-2 px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full">
                  Live
                </span>
              )}
            </div>

            <p className="mt-2 text-sm text-slate-600">{p.short || p.desc}</p>

            {p.note && (
              <p className="mt-2 text-xs text-amber-600 italic">{p.note}</p>
            )}

            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0 flex flex-col items-end space-y-2"> 
            {/* Main Link (View Details/Open) */}
            <Button
              href={`/project?slug=${p.slug}`} 
              variant="outline"
              className="text-xs"
            >
              <ExternalLink className="w-4 h-4 inline-block mr-1" />
              View Details
            </Button>
            
            {/* Additional Link */}
            {p.additionalLink && (
              <Button
                href={p.additionalLink} 
                variant="ghost" 
                className="text-xs"
              >
                <ExternalLink className="w-4 h-4 inline-block mr-1" />
                {p.additionalLinkText || "Additional Link"}
              </Button>
            )}

            {/* Video Demo Button (New in your data structure) */}
            {p.videoLink && (
              <Button
                href={`/project?slug=${p.slug}`} // Link to the detail page where the video is embedded
                variant="ghost"
                className="text-xs"
              >
                <Video className="w-4 h-4 inline-block mr-1" />
                Watch Demo
              </Button>
            )}


            <div className="mt-3 text-xs text-slate-400">
              {p.live ? "Deployed site" : (p.link && p.link !== "#" ? "Repository / Drive Link" : "")}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};


export default function Projects() {
  const [activeTab, setActiveTab] = useState("personal"); // Initialize tab state to "personal"

  const filteredProjects = PROJECTS.filter(p => p.type === activeTab);


  const TabButton: React.FC<{ type: string; label: string }> = ({ type, label }) => {
    const isActive = activeTab === type;
    const baseClasses = "px-4 py-2 text-sm font-medium transition-colors border-b-2 cursor-pointer";
    const activeClasses = "border-sky-600 text-sky-600";
    const inactiveClasses = "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300";

    return (
      <button 
        onClick={() => setActiveTab(type)}
        className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      >
        {label}
      </button>
    );
  };

  return (
    <section id="projects" className="mt-16">
      <h3 className="text-xl font-semibold">Projects</h3>
      <p className="text-sm text-slate-600 mt-2">
        Selected work — flagship, academic, and freelance projects that highlight AI, ML, and full stack development.
      </p>

      {/* Tab Navigation */}
      <div className="mt-6 border-b border-slate-200 flex space-x-4">
        <TabButton type="personal" label="Personal Projects" />
        <TabButton type="company" label="Company Projects" />
      </div>

      {/* Project List now uses filteredProjects with Framer Motion */}
      <motion.div 
        key={activeTab}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {filteredProjects.map((p, index) => (
          // Pass activeTab as a prop to force re-running the scroll animation effect on tab switch
          <ProjectCard key={p.slug} p={p} index={index} tabActive={activeTab} />
        ))}

        {/* Fallback for empty state */}
        {filteredProjects.length === 0 && (
          <p className="text-slate-500 italic md:col-span-2 mt-4">
            No {activeTab} projects to display yet.
          </p>
        )}
      </motion.div>
    </section>
  );
}
