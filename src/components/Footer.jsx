import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900/50 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <img src="/images/logo.png" alt="XALY Logo" className="h-16 w-auto object-contain mb-3 mx-auto md:mx-0" />
            <p className="text-gray-400 text-sm max-w-sm">
              Automatización Empresarial e Inteligencia Artificial para negocios que buscan escalar sin límites.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <a href="mailto:contacto@xaly.mx" className="text-gray-300 hover:text-cyber-cyan transition-colors text-lg font-medium">
              contacto@xaly.mx
            </a>
            <Link 
              to="/contacto"
              className="text-sm font-semibold text-cyber-cyan hover:text-white transition-colors underline underline-offset-4 decoration-cyber-cyan/30"
            >
              Solicitar una demostración
            </Link>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; 2026 XALY. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <Link to="/privacidad" className="hover:text-gray-300 transition-colors">Privacidad</Link>
            <a href="#" className="hover:text-gray-300 transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
