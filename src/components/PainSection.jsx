import React from 'react';
import { Clock, AlertTriangle, Users } from 'lucide-react';

const PainSection = () => {
  const pains = [
    {
      icon: <Clock className="w-8 h-8 text-orange-400" />,
      title: "Pérdida de Ventas",
      description: "Clientes desatendidos en la madrugada o fines de semana que se van con la competencia."
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-cyber-red" />,
      title: "Fugas de Capital",
      description: "Errores humanos al capturar precios, inventarios o facturas que te cuestan dinero a diario."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "Altos Costos Operativos",
      description: "Pagar sueldos completos por tareas repetitivas de \"copiar y pegar\" en lugar de trabajo estratégico."
    }
  ];

  return (
    <section id="soluciones" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white">¿Sigues operando con <span className="text-gray-500 line-through">sistemas desconectados</span>?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pains.map((pain, index) => (
            <div key={index} className="glass-panel p-8 rounded-2xl hover:border-white/20 transition-all hover:-translate-y-1 group">
              <div className="bg-slate-800/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform">
                {pain.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{pain.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {pain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSection;
