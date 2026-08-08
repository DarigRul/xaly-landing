import React, { useEffect } from 'react';
import Philosophy from '../components/Philosophy';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-10">
      <Philosophy />
    </main>
  );
};

export default About;
