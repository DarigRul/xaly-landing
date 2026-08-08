import React, { useEffect } from 'react';
import Technology from '../components/Technology';

const Tech = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24">
      <Technology />
    </main>
  );
};

export default Tech;
