import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="planes" className="py-24 bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wide">Elige el nivel de evolución para tu empresa</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Automatización accesible y escalable para cualquier volumen de operación.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="glass-panel rounded-3xl p-8 border border-cyber-cyan/30 hover:shadow-[0_0_40px_rgba(0,240,255,0.15)] transition-all duration-300 hover:-translate-y-2 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-cyan/10 blur-3xl rounded-full"></div>
            
            <h3 className="font-display text-2xl font-bold text-white mb-2 uppercase tracking-wide">Ventas & Control 24/7</h3>
            <p className="text-cyber-cyan text-sm font-semibold mb-6 tracking-wider uppercase">Enfoque PyME · Distribuidoras, Clínicas, Comercio Local</p>
            
            <div className="mb-6 border-b border-white/10 pb-6">
              <p className="text-gray-400 text-sm">Paquete diseñado para empresas que buscan optimizar su operación diaria y atender a sus clientes de forma automática las 24 horas del día.</p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyber-cyan shrink-0 mt-0.5" />
                <span className="text-gray-300">Bot de IA en WhatsApp Business</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyber-cyan shrink-0 mt-0.5" />
                <span className="text-gray-300">Cotizador y atención 24/7</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyber-cyan shrink-0 mt-0.5" />
                <span className="text-gray-300">Captura automática de leads en Excel/CRM</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyber-cyan shrink-0 mt-0.5" />
                <span className="text-gray-300">Cero errores de captura manual</span>
              </li>
            </ul>

            <button 
              onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-transparent border-2 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black py-4 rounded-xl font-bold text-lg tracking-widest uppercase transition-all"
            >
              Solicitar Información
            </button>
          </div>

          {/* Card 2 - Premium */}
          <div className="glass-panel rounded-3xl p-8 border-2 border-cyber-red/50 hover:shadow-[0_0_40px_rgba(255,87,87,0.2)] transition-all duration-300 hover:-translate-y-2 flex flex-col relative overflow-hidden bg-gradient-to-b from-slate-900/80 to-background">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-red/10 blur-3xl rounded-full"></div>
            <div className="absolute top-4 right-4 bg-cyber-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Premium
            </div>
            
            <h3 className="font-display text-2xl font-bold text-white mb-2 uppercase tracking-wide">Desarrollo Corporativo a la Medida</h3>
            <p className="text-cyber-red text-sm font-semibold mb-6 tracking-wider uppercase">Enfoque High-Ticket · Logística, Fábricas, Corporativos</p>
            
            <div className="mb-6 border-b border-white/10 pb-6">
              <p className="text-gray-400 text-sm">Soluciones enterprise de automatización compleja, diseñadas a la medida del volumen y los sistemas existentes de tu organización.</p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyber-red shrink-0 mt-0.5" />
                <span className="text-gray-300">Orquestación avanzada (n8n Self-Hosted)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyber-red shrink-0 mt-0.5" />
                <span className="text-gray-300">Integración nativa con ERPs Legacy (SAP, Oracle)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyber-red shrink-0 mt-0.5" />
                <span className="text-gray-300">Dashboards operativos privados</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyber-red shrink-0 mt-0.5" />
                <span className="text-gray-300">Modelos predictivos entrenados con tus datos</span>
              </li>
            </ul>

            <button 
              onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-cyber-red text-white hover:bg-red-600 py-4 rounded-xl font-bold text-lg tracking-widest uppercase transition-all shadow-[0_4px_14px_0_rgba(255,87,87,0.39)] hover:shadow-[0_6px_20px_rgba(255,87,87,0.23)]"
            >
              Hablar con un Arquitecto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
