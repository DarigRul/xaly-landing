import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import PainSection from '../components/PainSection';
import ContactForm from '../components/ContactForm';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
      <PainSection />
      <ContactForm />
    </main>
  );
};

export default Home;
