import React from 'react';
import { Server, ShieldCheck, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const Technology = () => {
  const techs = [
    {
      icon: <Server className="w-10 h-10 text-blue-400" />,
      title: "n8n (Servidores Privados VPS)",
      description: "Control total de los datos. Sin depender de nubes de terceros para tu orquestación."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-orange-500" />,
      title: "Cloudflare",
      description: "Escudo perimetral, reglas Zero Trust y aceleración global para máxima seguridad."
    },
    {
      icon: <Cpu className="w-10 h-10 text-emerald-400" />,
      title: "OpenAI / Gemini APIs",
      description: "Procesamiento inteligente sin usar tus datos corporativos para entrenar modelos públicos."
    }
  ];

  return (
    <section id="tecnologia" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Seguridad Grado Empresarial</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tu información es sagrada. No usamos nubes públicas compartidas. Construimos ecosistemas blindados.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {techs.map((tech, index) => (
            <motion.div 
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
              }}
              whileHover={{ scale: 1.05, translateY: -10 }}
              className="glass-panel p-8 rounded-2xl flex flex-col items-center text-center hover:border-cyber-cyan/50 transition-colors group relative overflow-hidden"
            >
              <div className="mb-6 p-4 rounded-full bg-slate-800/50 group-hover:scale-110 transition-transform">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">{tech.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm relative z-10">
                {tech.description}
              </p>
              {/* Subtle hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyber-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;
