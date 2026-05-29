import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import BookService from './pages/BookService';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminPanel from './pages/admin/AdminPanel';
import AdminLogin from './pages/admin/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import StickyCallBar from './components/StickyCallBar';
import QuickBookingModal from './components/QuickBookingModal';
import './tailwind.css';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-secondary">
        <StickyCallBar />
        <Navbar onBookClick={() => setIsBookingOpen(true)} />
        <Routes>
          <Route path="/" element={<Home onBookClick={() => setIsBookingOpen(true)} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book" element={<BookService />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/panel" element={<AdminPanel />} />
        </Routes>
        <QuickBookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        <WhatsAppWidget />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
