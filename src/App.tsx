import { ThemeProvider } from "./context/theme-provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import FAQ from "./Pages/FaqPage/FAQ";

import ShuffleGrid from "./components/ShuffleGrid";
import Download from "./components/Download";
import Hero from "./components/Hero";
import MacMockup from "./components/MockUp";
import image from "@/assets/PictoPy_Logo.png";

function HomePage() {
  return (
    <>
      <Hero />
      <Download />
      <MacMockup image={image} />
      <FAQ />
    </>
  );
}

function AppContent() {
  return (
    <Router>
      <main className="relative min-h-screen bg-bg text-text">
        <ShuffleGrid />
        <div className="relative z-10 bg-transparent text-text py-4 px-4 min-[1250px]:px-29.5">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
