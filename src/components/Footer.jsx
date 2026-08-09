import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900/50 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <img src="/images/logo.png" alt="XALY Logo" className="h-16 w-auto object-contain mb-3 mx-auto md:mx-0 invert mix-blend-screen" />
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
            <div className="flex gap-4 mt-2">
              <a href="https://www.facebook.com/people/XALY/61588726304793/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-cyan transition-colors" title="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/xaly.mex/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-cyan transition-colors" title="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@xalymex" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyber-cyan transition-colors" title="TikTok">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.68a6.34 6.34 0 0 0 6.27 6.36 6.33 6.33 0 0 0 6.33-6.33V9.45a8.4 8.4 0 0 0 3.32.7V6.7a4.93 4.93 0 0 1-1.33-.01Z"/>
                </svg>
              </a>
            </div>
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
