import React from 'react';
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
import './tailwind.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-secondary">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book" element={<BookService />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/panel" element={<AdminPanel />} />
        </Routes>
        <WhatsAppWidget />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
