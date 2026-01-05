import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header will appear on all pages */}
      <Header />

      {/* Main content changes per route */}
      {/* Add pt-16 to avoid content being hidden behind fixed header (h-16 = 64px) */}
      <main className="flex-1 pt-16">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
