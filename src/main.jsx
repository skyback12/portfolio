import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ModernPortfolio from "./pages/ModernPortfolio";
import LandingPage from "./pages/landingpage";
import ProjectOverview from "./components/ProjectOverview";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ModernPortfolio />
  },
  {
    path: "/classic",
    element: <LandingPage />
  },
  {
    path: "/project",
    element: <ProjectOverview />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Analytics/>
    <SpeedInsights/>
  </React.StrictMode>
);
