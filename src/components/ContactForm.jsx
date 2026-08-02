import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [status, setStatus] = useState('idle'); // idle, submitting, success
  
  // Explicit states for all form fields
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Explicitly sending all form data in JSON format
    const jsonPayload = {
      nombre: formData.nombre,
      empresa: formData.empresa,
      email: formData.email,
      telefono: formData.telefono,
      mensaje: formData.mensaje
    };

    try {
      await fetch('https://darigrul.app.n8n.cloud/webhook/eb9da08e-eba1-4a70-8661-669a06670992', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(jsonPayload),
      });
      
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setFormData({ nombre: '', empresa: '', email: '', telefono: '', mensaje: '' });
      }, 5000);
      
    } catch (error) {
      console.error('Error enviando datos al webhook:', error);
      setStatus('idle');
      alert('Hubo un error al enviar el formulario. Verifica tu conexión o la configuración CORS en n8n.');
    }
  };

  return (
    <section id="contacto" className="py-24 bg-slate-900/20 relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyber-cyan/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Inicia tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-blue-500">Transformación</span> Hoy</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Déjanos tus datos y un Arquitecto de Software se pondrá en contacto contigo para realizar una auditoría gratuita de tus procesos actuales.
            </p>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-white/10">
                <span className="text-cyber-cyan font-bold">1</span>
              </div>
              <p className="text-gray-300 font-medium">Análisis de procesos manuales</p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-white/10">
                <span className="text-cyber-cyan font-bold">2</span>
              </div>
              <p className="text-gray-300 font-medium">Propuesta de automatización</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-white/10">
                <span className="text-cyber-cyan font-bold">3</span>
              </div>
              <p className="text-gray-300 font-medium">Despliegue y entrenamiento</p>
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-1/2">
            <div className="glass-panel p-8 md:p-10 rounded-3xl border border-cyber-cyan/20 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyber-cyan/10 blur-3xl rounded-full pointer-events-none"></div>
              
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in-up">
                  <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                  <p className="text-gray-400">Nuestro equipo te contactará en breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="w-full md:w-1/2">
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-400 mb-1.5">Nombre Completo</label>
                      <input 
                        type="text" 
                        id="nombre" 
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyber-cyan/50 focus:ring-1 focus:ring-cyber-cyan/50 transition-all"
                        placeholder="Ej. Carlos Mendoza"
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <label htmlFor="empresa" className="block text-sm font-medium text-gray-400 mb-1.5">Empresa</label>
                      <input 
                        type="text" 
                        id="empresa" 
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyber-cyan/50 focus:ring-1 focus:ring-cyber-cyan/50 transition-all"
                        placeholder="Tu negocio"
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="w-full md:w-1/2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1.5">Correo Electrónico</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyber-cyan/50 focus:ring-1 focus:ring-cyber-cyan/50 transition-all"
                        placeholder="correo@empresa.com"
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <label htmlFor="telefono" className="block text-sm font-medium text-gray-400 mb-1.5">Teléfono</label>
                      <input 
                        type="tel" 
                        id="telefono" 
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyber-cyan/50 focus:ring-1 focus:ring-cyber-cyan/50 transition-all"
                        placeholder="+52 55 1234 5678"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-400 mb-1.5">¿Qué procesos quieres automatizar?</label>
                    <textarea 
                      id="mensaje" 
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows="3"
                      required
                      className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyber-cyan/50 focus:ring-1 focus:ring-cyber-cyan/50 transition-all resize-none"
                      placeholder="Ej. Necesitamos sincronizar WhatsApp con nuestro Excel..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="mt-2 group flex items-center justify-center gap-2 w-full bg-cyber-cyan text-black py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Enviando...' : 'Solicitar Auditoría'}
                    {status !== 'submitting' && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
