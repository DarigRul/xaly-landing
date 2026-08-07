import React from 'react';
import { ArrowRight, Bot } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden bg-dots">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-cyber-cyan/30 text-cyber-cyan text-sm font-semibold mb-8 animate-fade-in-up tracking-widest uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-cyan"></span>
          </span>
          Automatización B2B para Logística, Comercio y Clínicas
        </div>
        
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-5xl mx-auto uppercase">
          Deja de perder horas en procesos que una <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-blue-500">IA puede hacer en segundos.</span>
        </h1>
        
        <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Construimos el sistema nervioso de tu negocio. Automatizamos WhatsApp, sincronizamos tu ERP y eliminamos errores de captura para que reduzcas tus costos de nómina y escales sin límites.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
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
        </div>

        {/* Hero Image */}
        <div className="relative max-w-5xl mx-auto mt-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="absolute -inset-1 bg-gradient-to-r from-cyber-cyan to-cyber-red opacity-30 blur-2xl rounded-3xl"></div>
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="/images/hero.jpg" 
              alt="B2B AI Automation Control Room" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
