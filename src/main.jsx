import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import LandingPage from "./pages/landingpage";
// 1. Import the ProjectOverview component
import ProjectOverview from "./components/ProjectOverview"; 
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { 
        index: true, 
        element: <LandingPage/> 
      },
      // 2. ADDED new route for project details
      {
        path: "project",
        element: <ProjectOverview/>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Analytics/>
    <SpeedInsights/>
  </React.StrictMode>
);
