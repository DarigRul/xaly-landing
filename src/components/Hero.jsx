import React from 'react';
import { ArrowRight, Bot } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-dots">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-cyber-cyan/30 text-cyber-cyan text-sm font-medium mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-cyan"></span>
          </span>
          Automatización B2B para Logística, Comercio y Clínicas
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-5xl mx-auto">
          Deja de perder horas en procesos que una <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-blue-500">IA puede hacer en segundos.</span>
        </h1>
        
        <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Construimos el sistema nervioso de tu negocio. Automatizamos WhatsApp, sincronizamos tu ERP y eliminamos errores de captura para que reduzcas tus costos de nómina y escales sin límites.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="group flex items-center justify-center gap-2 bg-cyber-cyan text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all">
            Ver Soluciones
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="flex items-center justify-center gap-2 border border-cyber-red/50 text-white hover:bg-cyber-red/10 px-8 py-4 rounded-full font-bold text-lg transition-all hover:border-cyber-red hover:shadow-[0_0_15px_rgba(255,87,87,0.2)]">
            <Bot className="w-5 h-5 text-cyber-red" />
            Agendar Diagnóstico
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
