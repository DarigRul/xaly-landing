import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 glass-panel border-b-0 border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo Image */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src="/images/logo.png" 
              alt="XALY Logo" 
              style={{ height: '64px', width: 'auto' }}
            />
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <a href="#soluciones" className="text-gray-300 hover:text-cyber-cyan transition-colors text-sm font-semibold tracking-widest uppercase">Soluciones</a>
            <a href="#tecnologia" className="text-gray-300 hover:text-cyber-cyan transition-colors text-sm font-semibold tracking-widest uppercase">Tecnología</a>
            <a href="#planes" className="text-gray-300 hover:text-cyber-cyan transition-colors text-sm font-semibold tracking-widest uppercase">Planes</a>
            <a href="#blog" className="text-gray-300 hover:text-cyber-cyan transition-colors text-sm font-semibold tracking-widest uppercase">Blog</a>
            <button 
              onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
              className="bg-cyber-cyan text-black px-6 py-2.5 rounded-full font-bold text-sm tracking-widest uppercase hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all"
            >
              Consultoría Gratuita
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-300 hover:text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
