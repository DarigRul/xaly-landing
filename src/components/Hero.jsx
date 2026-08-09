import React from 'react';
import { ArrowRight, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden bg-dots">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-cyber-cyan/30 text-cyber-cyan text-sm font-semibold mb-8 tracking-widest uppercase"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-cyan"></span>
          </span>
          Automatización para empresas de cualquier tamaño y sector
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-5xl mx-auto uppercase"
        >
          Deja de perder horas en procesos que una <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-blue-500">IA puede hacer en segundos.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Construimos el sistema nervioso de tu negocio. Automatizamos WhatsApp, sincronizamos tu ERP y eliminamos errores de captura para que reduzcas tus costos de nómina y escales sin límites.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
        >
          <button 
            onClick={() => document.getElementById('soluciones').scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center justify-center gap-2 bg-cyber-cyan text-black px-8 py-4 rounded-full font-bold text-lg tracking-wider uppercase hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all"
          >
            Ver Soluciones
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center justify-center gap-2 border border-cyber-red/50 text-white hover:bg-cyber-red/10 px-8 py-4 rounded-full font-bold text-lg tracking-wider uppercase transition-all hover:border-cyber-red hover:shadow-[0_0_15px_rgba(255,87,87,0.2)]"
          >
            <Bot className="w-5 h-5 text-cyber-red" />
            Agendar Diagnóstico
          </button>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
          className="relative max-w-5xl mx-auto mt-12"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyber-cyan to-cyber-red opacity-30 blur-2xl rounded-3xl"></div>
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="/images/hero.jpg" 
              alt="B2B AI Automation Control Room" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
