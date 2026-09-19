
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Helmet } from "react-helmet";

// Main Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import BookService from "./pages/BookService";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Location Pages
import Porur from "./pages/Porur";
import Velachery from "./pages/Velachery";
import AnnaNagar from "./pages/AnnaNagar";
import Tambaram from "./pages/Tambaram";
import Avadi from "./pages/Avadi";
import Ambattur from "./pages/Ambattur";
import OMR from "./pages/OMR";
import Pallavaram from "./pages/Pallavaram";
import Chromepet from "./pages/Chromepet";
import Blog from "./pages/Blog";

// Admin Pages
import AdminPanel from "./pages/admin/AdminPanel";
import AdminLogin from "./pages/admin/Login";

// Blog Pages
import CockroachControlChennai from "./pages/blog/CockroachControlChennai";
import TermiteInfestationSigns from "./pages/blog/TermiteInfestationSigns";
import PestControlCostChennai from "./pages/blog/PestControlCostChennai";
import RodentControlGuide from "./pages/blog/RodentControlGuide";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import StickyCallBar from "./components/StickyCallBar";
import QuickBookingModal from "./components/QuickBookingModal";
import Breadcrumb from "./components/Breadcrumb";
import SiteSEO from "./components/SiteSEO";
import LocalAreaContent from "./components/LocalAreaContent";

import "./tailwind.css";

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <Router>
      <SiteSEO />
      <Helmet>
        <meta
          name="application-name"
          content="WildGreen Pest Management"
        />

        <meta
          name="apple-mobile-web-app-title"
          content="WildGreen Pest Management"
        />

        <meta
          property="og:site_name"
          content="WildGreen Pest Management"
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-secondary">

        {/* ==========================================
            Global Components
        ========================================== */}

        <StickyCallBar />

        <Navbar
          onBookClick={() => setIsBookingOpen(true)}
        />

        <Breadcrumb />

        {/* ==========================================
            Routes
        ========================================== */}

        <Routes>

          {/* Main Pages */}

          <Route
            path="/"
            element={
              <Home
                onBookClick={() => setIsBookingOpen(true)}
              />
            }
          />

          <Route
            path="/services"
            element={<Services />}
          />

          <Route
            path="/book"
            element={<BookService />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/blog"
            element={<Blog />}
          />

          {/* Location Pages */}

          <Route
            path="/pest-control-porur"
            element={
              <Porur
                onBookClick={() => setIsBookingOpen(true)}
              />
            }
          />

          <Route
            path="/pest-control-velachery"
            element={
              <Velachery
                onBookClick={() => setIsBookingOpen(true)}
              />
            }
          />

          <Route
            path="/pest-control-anna-nagar"
            element={
              <AnnaNagar
                onBookClick={() => setIsBookingOpen(true)}
              />
            }
          />

          <Route
            path="/pest-control-tambaram"
            element={
              <Tambaram
                onBookClick={() => setIsBookingOpen(true)}
              />
            }
          />

          <Route
            path="/pest-control-avadi"
            element={
              <Avadi
                onBookClick={() => setIsBookingOpen(true)}
              />
            }
          />

          <Route
            path="/pest-control-ambattur"
            element={
              <Ambattur
                onBookClick={() => setIsBookingOpen(true)}
              />
            }
          />

          <Route
            path="/pest-control-omr"
            element={
              <OMR
                onBookClick={() => setIsBookingOpen(true)}
              />
            }
          />

          <Route
            path="/pest-control-pallavaram"
            element={
              <Pallavaram
                onBookClick={() => setIsBookingOpen(true)}
              />
            }
          />

          <Route
            path="/pest-control-chromepet"
            element={
              <Chromepet
                onBookClick={() => setIsBookingOpen(true)}
              />
            }
          />

          {/* Blog Pages */}

          <Route
            path="/blog/cockroach-control-chennai"
            element={<CockroachControlChennai />}
          />

          <Route
            path="/blog/termite-infestation-signs"
            element={<TermiteInfestationSigns />}
          />

          <Route
            path="/blog/pest-control-cost-chennai"
            element={<PestControlCostChennai />}
          />

          <Route
            path="/blog/rodent-control-guide"
            element={<RodentControlGuide />}
          />

          {/* ==========================================
              ADMIN LOGIN
              
              /admin/login
          ========================================== */}

          <Route
            path="/admin/login"
            element={<AdminLogin />}
          />

          {/* ==========================================
              ADMIN DASHBOARD
              
              /admin
          ========================================== */}

          <Route
            path="/admin"
            element={<AdminPanel />}
          />

          {/* ==========================================
              BACKWARD COMPATIBILITY
              
              If something still opens /admin/panel,
              redirect it to /admin
          ========================================== */}

          <Route
            path="/admin/panel"
            element={
              <Navigate
                to="/admin"
                replace
              />
            }
          />

          {/* Unknown routes */}

          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />

        </Routes>

        <LocalAreaContent />

        {/* Global Components */}

        <QuickBookingModal
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
        />

        <WhatsAppWidget />

        <Footer />

      </div>
    </Router>
  );
}

export default App;


