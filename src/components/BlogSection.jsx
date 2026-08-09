import React, { useState } from 'react';
import { ArrowRight, X, Clock, Calendar, ChevronRight } from 'lucide-react';

const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Beneficios de automatizar tu empresa: La visión de los líderes tecnológicos",
      excerpt: "Descubre por qué gigantes como IBM, Microsoft y Salesforce advierten que la automatización de procesos ya no es un lujo, sino una necesidad de supervivencia empresarial.",
      date: "02 Agosto 2026",
      readTime: "4 min",
      image: "/images/blog_cover.jpg",
      content: (
        <>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            En un mercado global altamente competitivo, las empresas que aún operan con sistemas manuales y desconectados están perdiendo la carrera. La automatización de procesos empresariales (BPA) ha dejado de ser una innovación exclusiva para las grandes corporaciones y se ha convertido en el estándar operativo para la supervivencia.
          </p>
          
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">1. Aumento drástico de productividad y eficiencia</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Según datos recientes de <strong>Microsoft</strong>, las empresas que implementan flujos de trabajo automatizados experimentan una aceleración exponencial en sus ciclos operativos. Al delegar tareas repetitivas de alto volumen a sistemas de Inteligencia Artificial (como bots en WhatsApp o captura de datos OCR), los empleados quedan liberados para enfocarse en labores estratégicas que generan valor real, mejorando la moral del equipo y multiplicando los resultados.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4 mt-8">2. Precisión milimétrica y eliminación de errores</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            <strong>IBM</strong> destaca que uno de los mayores costos ocultos de las empresas proviene del "error humano" en tareas de captura. Al digitalizar y automatizar los inventarios, cotizaciones y flujos de ERP, la precisión se eleva casi al 100%. Esto no solo evita pérdidas económicas diarias (fugas de capital por errores en facturación), sino que también garantiza una ejecución uniforme que facilita el cumplimiento de normativas fiscales.
          </p>

          <div className="my-10 p-6 border-l-4 border-cyber-cyan bg-slate-800/50 rounded-r-xl">
            <p className="text-xl text-cyber-cyan italic font-medium">
              "La automatización no debe verse como un simple proyecto de TI, sino como la nueva estrategia del sistema nervioso central de tu negocio."
            </p>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4 mt-8">3. Impacto directo en la rentabilidad (ROI) y escalabilidad</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            <strong>Salesforce</strong> reporta que las integraciones automatizadas (como conectar un CRM directamente con los canales de atención) permiten que las organizaciones escalen su volumen de clientes sin necesidad de aumentar la nómina de soporte proporcionalmente. Esta agilidad estratégica transforma los altos costos fijos operativos en un modelo altamente escalable, ofreciendo además una experiencia de cliente superior y respuesta inmediata 24/7.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4 mt-8">Conclusión</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Adoptar estas tecnologías es dar el salto hacia el futuro. Con ecosistemas como n8n y herramientas de IA de vanguardia, en XALY construimos ese motor invisible que hace que tu empresa funcione de forma autónoma, rápida y sin errores.
          </p>
        </>
      )
    },
    {
      id: 2,
      title: "La Revolución del Transporte: Cómo la IA está transformando la Logística",
      excerpt: "La inteligencia artificial ya no es ciencia ficción. Descubre cómo los algoritmos de enrutamiento y la automatización predictiva están reduciendo costos operativos hasta en un 40%.",
      date: "05 Agosto 2026",
      readTime: "5 min",
      image: "/images/blog_logistics.jpg",
      content: (
        <>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            La industria del transporte y la logística siempre ha dependido del equilibrio perfecto entre tiempo, distancia y recursos. Hoy, la Inteligencia Artificial está reescribiendo las reglas del juego, permitiendo que las flotas operen con una eficiencia matemática inalcanzable para el cerebro humano.
          </p>
          
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">Optimización Predictiva de Rutas</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Sistemas avanzados pueden analizar en tiempo real datos de tráfico, clima y mantenimientos vehiculares para recalcular dinámicamente las rutas. Esto se traduce en menor consumo de combustible y entregas que siempre llegan a tiempo, aumentando drásticamente la satisfacción del cliente.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4 mt-8">Automatización de Inventarios B2B</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Al integrar ERPs con modelos de IA predictiva, las empresas pueden anticipar la demanda de stock antes de que ocurra. Ya no hay quiebres de inventario ni sobrealmacenaje; la IA compra, acomoda y despacha con una sincronización perfecta.
          </p>

          <div className="my-10 p-6 border-l-4 border-cyber-cyan bg-slate-800/50 rounded-r-xl">
            <p className="text-xl text-cyber-cyan italic font-medium">
              "El almacén del futuro no solo almacena productos, sino que predice el flujo exacto de la cadena de suministro gracias a la automatización inteligente."
            </p>
          </div>

          <h3 className="text-2xl font-bold text-white mb-4 mt-8">Impacto en la Última Milla</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            La última milla suele representar más del 50% del costo total de envío. Herramientas de machine learning están siendo utilizadas para coordinar flotillas en hiper-localización, asegurando un margen de ganancia sin precedentes para las pymes logísticas.
          </p>
        </>
      )
    },
    {
      id: 3,
      title: "Recursos Humanos Autónomos: El fin de la micro-gestión corporativa",
      excerpt: "Dejar de perder horas en nóminas y altas del IMSS es posible. La automatización libera al departamento de Recursos Humanos para enfocarse en el talento y la retención.",
      date: "08 Agosto 2026",
      readTime: "3 min",
      image: "/images/blog_hr.jpg",
      content: (
        <>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            Históricamente, los departamentos de Recursos Humanos han estado sepultados bajo toneladas de papeleo, correos y cálculos de nómina. La llegada de la automatización robótica de procesos (RPA) y la Inteligencia Artificial está liberando por completo a estos equipos.
          </p>
          
          <h3 className="text-2xl font-bold text-white mb-4 mt-8">Onboarding y Altas Automáticas</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Con un sistema automatizado, cuando un candidato firma su contrato, el sistema genera automáticamente su correo corporativo, sus accesos, su alta en el IMSS y su registro en el software de nómina. Un proceso que antes tomaba días, ahora se realiza en segundos y con cero margen de error.
          </p>

          <h3 className="text-2xl font-bold text-white mb-4 mt-8">Atención al Empleado 24/7</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Mediante chatbots internos impulsados por IA, los empleados pueden consultar sus días de vacaciones, recibos de nómina o políticas de la empresa en cualquier momento, sin interrumpir al personal de RRHH.
          </p>

          <div className="my-10 p-6 border-l-4 border-cyber-cyan bg-slate-800/50 rounded-r-xl">
            <p className="text-xl text-cyber-cyan italic font-medium">
              "Automatizar Recursos Humanos no significa deshumanizar la empresa; significa quitar a los humanos de tareas robóticas para que vuelvan a conectar con las personas."
            </p>
          </div>
        </>
      )
    }
  ];

  return (
    <section id="blog" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Insights & <span className="text-cyber-cyan">Blog</span></h2>
            <p className="text-gray-400 text-lg">Estrategias de automatización e Inteligencia Artificial.</p>
          </div>
          <button className="hidden md:flex items-center text-cyber-cyan hover:text-white transition-colors gap-1 font-semibold group mt-4">
            Ver todos los artículos <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="glass-panel rounded-2xl overflow-hidden border border-white/10 hover:border-cyber-cyan/50 transition-all duration-300 group cursor-pointer hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,240,255,0.15)] flex flex-col"
              onClick={() => setSelectedPost(post)}
            >
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-cyber-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay"></div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-xs text-gray-500 gap-4 mb-3 font-medium uppercase tracking-wider">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-cyan transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-cyber-cyan text-sm font-bold group/btn mt-auto">
                  Leer artículo <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Article Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in-up">
          <div className="bg-slate-900 border border-white/10 w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)] relative">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-white/10 bg-slate-900/90 backdrop-blur absolute w-full top-0 z-20">
              <span className="text-cyber-cyan font-bold tracking-widest text-sm uppercase">XALY Insights</span>
              <button 
                onClick={() => setSelectedPost(null)}
                className="w-10 h-10 bg-slate-800 hover:bg-cyber-red hover:text-white text-gray-400 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Scrollable Area */}
            <div className="overflow-y-auto w-full h-full pt-16">
              <div className="h-64 sm:h-80 w-full relative">
                <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>
              
              <div className="px-6 sm:px-12 py-8 max-w-3xl mx-auto -mt-32 relative z-10">
                <div className="flex items-center text-xs text-gray-300 gap-4 mb-4 font-medium uppercase tracking-wider bg-slate-800/80 backdrop-blur-md w-max px-4 py-2 rounded-full border border-white/10">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-cyber-cyan" /> {selectedPost.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-cyber-cyan" /> {selectedPost.readTime}</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight drop-shadow-lg">
                  {selectedPost.title}
                </h1>
                
                <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                  {selectedPost.content}
                </div>
                
                <div className="mt-16 pt-8 border-t border-white/10 flex justify-center pb-8">
                   <button 
                     onClick={() => {
                        setSelectedPost(null);
                        document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
                     }}
                     className="bg-cyber-cyan text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transition-all flex items-center gap-2"
                   >
                     Quiero Automatizar mi Empresa <ArrowRight className="w-5 h-5" />
                   </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default BlogSection;
