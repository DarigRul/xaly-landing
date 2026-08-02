import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainSection from './components/PainSection';
import Pricing from './components/Pricing';
import Technology from './components/Technology';
import BlogSection from './components/BlogSection';
import ContactForm from './components/ContactForm';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-white font-sans overflow-x-hidden relative">
      <Navbar />
      <main>
        <Hero />
        <PainSection />
        <Pricing />
        <Technology />
        <BlogSection />
        <ContactForm />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
