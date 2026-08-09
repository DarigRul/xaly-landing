import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      className="fixed w-full top-0 z-50 glass-panel border-b-0 border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo Image */}
          <Link to="/" className="flex-shrink-0 flex items-center cursor-pointer">
            <img 
              src="/images/logo.png" 
              alt="XALY Logo" 
              className="invert mix-blend-screen"
              style={{ height: '64px', width: 'auto' }}
            />
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/soluciones" className="text-gray-300 hover:text-cyber-cyan transition-colors text-sm font-semibold tracking-widest uppercase">Soluciones</Link>
            <Link to="/tecnologia" className="text-gray-300 hover:text-cyber-cyan transition-colors text-sm font-semibold tracking-widest uppercase">Tecnología</Link>
            <Link to="/filosofia" className="text-gray-300 hover:text-cyber-cyan transition-colors text-sm font-semibold tracking-widest uppercase">Filosofía</Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyber-cyan transition-colors text-sm font-semibold tracking-widest uppercase">Blog</Link>
            <Link 
              to="/contacto"
              className="bg-cyber-cyan text-black px-6 py-2.5 rounded-full font-bold text-sm tracking-widest uppercase hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all"
            >
              Consultoría Gratuita
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              className="text-gray-300 hover:text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0b0e14] border-t border-slate-800 absolute w-full left-0 top-24 px-6 py-8 flex flex-col space-y-6 shadow-2xl z-50">
          <Link to="/soluciones" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-cyber-cyan text-left text-sm font-semibold tracking-widest uppercase">Soluciones</Link>
          <Link to="/tecnologia" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-cyber-cyan text-left text-sm font-semibold tracking-widest uppercase">Tecnología</Link>
          <Link to="/filosofia" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-cyber-cyan text-left text-sm font-semibold tracking-widest uppercase">Filosofía</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-cyber-cyan text-left text-sm font-semibold tracking-widest uppercase">Blog</Link>
          <Link 
            to="/contacto"
            onClick={() => setIsOpen(false)}
            className="bg-cyber-cyan text-black px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase w-full text-center hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all mt-4"
          >
            Consultoría Gratuita
          </Link>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
