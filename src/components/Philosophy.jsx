import React from 'react';
import { Target, Eye, Heart, Zap, Briefcase, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section id="filosofia" className="relative py-24 bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 uppercase tracking-tight">
            Nuestra <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-blue-500">Identidad</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            No solo implementamos tecnología; transformamos la manera en la que los negocios operan y crecen.
          </p>
        </motion.div>

        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          
          {/* Misión */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            className="glass-card p-10 rounded-3xl border border-cyber-cyan/30 hover:border-cyber-cyan/60 transition-colors relative overflow-hidden group"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-cyber-cyan/10 rounded-full blur-3xl group-hover:bg-cyber-cyan/20 transition-all"></div>
            <div className="flex items-center gap-4 mb-6 relative">
              <div className="p-3 bg-cyber-cyan/20 rounded-xl text-cyber-cyan">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Misión</h3>
            </div>
            <p className="text-gray-300 leading-relaxed relative">
              Ayudar a las empresas a recuperar el control total de sus operaciones mediante la automatización inteligente y la integración de Inteligencia Artificial. Transformamos procesos administrativos, logísticos y de gestión humana que consumen tiempo y recursos, en sistemas eficientes y libres de errores. Nuestro propósito fundamental es erradicar las tareas manuales y repetitivas para elevar la calidad de vida de dueños y colaboradores, devolviéndoles el tiempo y la libertad creativa necesarios para innovar y escalar el negocio de manera sostenible.
            </p>
          </motion.div>

          {/* Visión */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100, delay: 0.2 }}
            className="glass-card p-10 rounded-3xl border border-blue-500/30 hover:border-blue-500/60 transition-colors relative overflow-hidden group"
          >
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all"></div>
            <div className="flex items-center gap-4 mb-6 relative">
              <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider">Visión</h3>
            </div>
            <p className="text-gray-300 leading-relaxed relative">
              Convertirnos en el aliado tecnológico de referencia para el sector empresarial en Chalco y la Zona Oriente, demostrando que la Inteligencia Artificial y la automatización avanzada son herramientas fundamentales para la modernización de los negocios locales. Aspiramos a ser el puente que transforme la cultura de la sobreexplotación operativa en ecosistemas de trabajo inteligentes, autónomos y altamente rentables.
            </p>
          </motion.div>

        </div>

        {/* Philosophy and Values */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-4 text-center uppercase tracking-tight">Filosofía y Valores Corporativos</h3>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-lg">
            En XALY creemos que la tecnología debe ser un habilitador de bienestar y crecimiento humano. Nuestra filosofía se sostiene en los siguientes pilares:
          </p>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            
            {/* Pilar 1 */}
            <motion.div 
              variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } } }}
              whileHover={{ scale: 1.05, translateY: -10 }}
              className="glass-panel p-8 rounded-2xl transition-transform duration-300 border border-white/5 group overflow-hidden relative"
            >
              <Briefcase className="w-10 h-10 text-cyber-cyan mb-6 relative z-10" />
              <h4 className="text-xl font-bold text-white mb-4 relative z-10">La Verdadera Libertad Empresarial</h4>
              <p className="text-gray-400 leading-relaxed text-sm relative z-10">
                Entendemos que un modelo de negocio dependiente de la microgestión no es escalable. Si una organización requiere que el dueño o colaboradores trabajen 12 horas diarias para sostenerse, es un autoempleo. Diseñamos infraestructura para que el negocio trabaje para las personas, garantizando autonomía operativa.
              </p>
              <div className="absolute inset-0 bg-gradient-to-b from-cyber-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>

            {/* Pilar 2 */}
            <motion.div 
              variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } } }}
              whileHover={{ scale: 1.05, translateY: -10 }}
              className="glass-panel p-8 rounded-2xl transition-transform duration-300 border border-white/5 group overflow-hidden relative"
            >
              <Heart className="w-10 h-10 text-cyber-red mb-6 relative z-10" />
              <h4 className="text-xl font-bold text-white mb-4 relative z-10">Calidad de Vida y Enfoque</h4>
              <p className="text-gray-400 leading-relaxed text-sm relative z-10">
                Al automatizar la carga administrativa, eliminamos el desgaste operativo. Creemos que al liberar a los equipos de la captura de datos y el papeleo, se les otorga el espacio mental para la estrategia, el análisis y la libertad creativa.
              </p>
              <div className="absolute inset-0 bg-gradient-to-b from-cyber-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>

            {/* Pilar 3 */}
            <motion.div 
              variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } } }}
              whileHover={{ scale: 1.05, translateY: -10 }}
              className="glass-panel p-8 rounded-2xl transition-transform duration-300 border border-white/5 group overflow-hidden relative"
            >
              <Zap className="w-10 h-10 text-blue-400 mb-6 relative z-10" />
              <h4 className="text-xl font-bold text-white mb-4 relative z-10">Tecnología con Propósito</h4>
              <p className="text-gray-400 leading-relaxed text-sm relative z-10">
                No implementamos herramientas de moda; desarrollamos soluciones a la medida que atacan problemas reales en áreas críticas (finanzas, producción, recursos humanos), alineando la adopción de IA con los objetivos financieros de la empresa.
              </p>
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>

            {/* Pilar 4 */}
            <motion.div 
              variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } } }}
              whileHover={{ scale: 1.05, translateY: -10 }}
              className="glass-panel p-8 rounded-2xl transition-transform duration-300 border border-white/5 lg:col-span-1 md:col-span-2 lg:col-start-1 lg:translate-x-1/2 group overflow-hidden relative"
            >
              <Target className="w-10 h-10 text-cyber-cyan mb-6 relative z-10" />
              <h4 className="text-xl font-bold text-white mb-4 relative z-10">Eficiencia Absoluta</h4>
              <p className="text-gray-400 leading-relaxed text-sm relative z-10">
                Declaramos la guerra a los procesos interminables. Buscamos el máximo rendimiento de los recursos asegurando que cada proceso delegado a la Inteligencia Artificial se ejecute con precisión impecable y disponibilidad continua.
              </p>
              <div className="absolute inset-0 bg-gradient-to-b from-cyber-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>

            {/* Pilar 5 */}
            <motion.div 
              variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 100 } } }}
              whileHover={{ scale: 1.05, translateY: -10 }}
              className="glass-panel p-8 rounded-2xl transition-transform duration-300 border border-white/5 lg:col-span-1 md:col-span-2 lg:translate-x-1/2 group overflow-hidden relative"
            >
              <TrendingUp className="w-10 h-10 text-green-400 mb-6 relative z-10" />
              <h4 className="text-xl font-bold text-white mb-4 relative z-10">Impulso y Transformación Local</h4>
              <p className="text-gray-400 leading-relaxed text-sm relative z-10">
                Nos apasiona elevar el nivel competitivo de las empresas de nuestra región, dotándolas de las herramientas de primer nivel que les permitan competir, crecer y ofrecer mejores condiciones a su talento humano.
              </p>
              <div className="absolute inset-0 bg-gradient-to-b from-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Philosophy;
