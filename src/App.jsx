import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import PrivacyPolicy from './components/PrivacyPolicy';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Tech from './pages/Tech';
import BlogPage from './pages/BlogPage';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-white font-sans overflow-x-hidden relative">
        <ParticlesBackground />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filosofia" element={<About />} />
          <Route path="/soluciones" element={<Services />} />
          <Route path="/tecnologia" element={<Tech />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/privacidad" element={<PrivacyPolicy onBack={() => window.history.back()} />} />
        </Routes>
        
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
