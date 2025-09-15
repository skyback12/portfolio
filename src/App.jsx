import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-full">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 md:px-6 py-6">
        <Outlet />
      </main>
    </div>
  );
}