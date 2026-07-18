import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import BeltStripe from "./components/ui/BeltStripe";
import ScrollToTop from "./components/utility/ScrollToTop";
import BackToTop from "./components/utility/BackToTop";
import LandingPage from "./pages/LandingPage";
// Kept placeholders for future routes as requested
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import Terms from "./pages/Terms";

function App() {
  return (
    <div className="min-h-screen bg-ink">
      {/* Scroll progress indicator — belt rank stripe at the very top */}
      <BeltStripe variant="progress" />

      {/* Resets scroll position on every route change (less relevant for SPA, but good for other routes) */}
      <ScrollToTop />

      <Navbar />

      {/* Skip-to-main target for keyboard / screen-reader users */}
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Routes>
          {/* Main SPA Route */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Future separate routes can be added here */}
          {/* <Route path="/privacy" element={<PrivacyPolicy />} /> */}
          {/* <Route path="/terms" element={<Terms />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>

      <Footer />

      {/* Floating back-to-top — appears after 400 px of scroll */}
      <BackToTop />
    </div>
  );
}

export default App;
