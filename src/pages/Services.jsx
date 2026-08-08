import React, { useEffect } from 'react';
import Pricing from '../components/Pricing';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24">
      <Pricing />
    </main>
  );
};

export default Services;
