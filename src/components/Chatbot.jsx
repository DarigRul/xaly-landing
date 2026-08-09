import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Chatbot = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: '¡Hola! Soy la IA de XALY. ¿En qué te puedo ayudar para escalar o automatizar tu empresa hoy?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [showQuestions, setShowQuestions] = useState(true);
  const messagesEndRef = useRef(null);

  const suggestedQuestions = [
    "¿Qué procesos pueden automatizar?",
    "¿En cuánto tiempo veo resultados?",
    "¿Tienen soluciones para mi sector?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg = { id: Date.now(), type: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setShowQuestions(false);
    setIsTyping(true);

    // Simulate intelligent bot response based on context
    setTimeout(() => {
      let botResponse = "";
      let shouldRedirect = false;
      
      const lowerText = text.toLowerCase();
      
      // Intent Mapping / Knowledge Base (FAQs)
      if (lowerText.match(/(tiempo|resultados|tardan|duracion)/)) {
        botResponse = "Depende de la complejidad, pero la mayoría de nuestras implementaciones (como bots o automatizaciones de reportes) empiezan a dar resultados desde la primera semana.";
      } else if (lowerText.match(/(hola|buen dia|buenas tardes|que tal|saludos)/)) {
        botResponse = "¡Hola! Es un gusto. En XALY nos dedicamos a erradicar tareas manuales y crear sistemas inteligentes para empresas. ¿Qué problema operativo te gustaría resolver?";
      } else if (lowerText.match(/(sector|industria|tipo de empresa|quienes son|que hacen|servicios|a que se dedican|como funciona)/)) {
        botResponse = "Nos adaptamos a cualquier industria (clínicas, fábricas, logística, B2B). Creamos chatbots de atención, integramos ERPs, y automatizamos finanzas para que el dueño recupere su tiempo.";
      } else if (lowerText.match(/(procesos|automatizar|ejemplos)/)) {
        botResponse = "Podemos automatizar atención al cliente 24/7, agendamiento de citas, facturación masiva, control de inventario y generación de reportes financieros automáticos.";
      } else if (lowerText.match(/(asesor|contacto|hablar con alguien|humano|agendar|cita|reunion|consultoria|contratar|comprar)/)) {
        botResponse = "¡Excelente decisión! Usa el botón 'Ir a Contacto' debajo o te redirigiré en un momento.";
        shouldRedirect = true;
      } else if (lowerText.match(/(gracias|ok|perfecto|muy bien|excelente)/)) {
        botResponse = "¡De nada! Recuerda que la verdadera libertad empresarial se logra automatizando. Si necesitas algo más, aquí estoy.";
      } else {
        botResponse = "Te invitamos a agendar una llamada con nosotros utilizando el botón 'Ir a Contacto'.";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: botResponse }]);
      setIsTyping(false);
      
      if (shouldRedirect) {
        setTimeout(() => {
          setIsOpen(false);
          navigate('/contacto');
          window.scrollTo(0,0);
        }, 2000);
      }
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 md:w-96 glass-panel rounded-2xl border border-cyber-cyan/30 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] animate-fade-in-up">
          {/* Header */}
          <div className="bg-slate-800 p-4 flex justify-between items-center border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-cyber-cyan/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse"></div>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Asistente XALY</h4>
                <p className="text-cyber-cyan text-xs">En línea</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Messages */}
          <div className="h-72 p-4 overflow-y-auto bg-slate-900/80 flex flex-col gap-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-3 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.type === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-cyber-cyan">X</span>
                  </div>
                )}
                <div className={`p-3 text-sm max-w-[80%] border ${
                  msg.type === 'user' 
                    ? 'bg-cyber-cyan/10 border-cyber-cyan/30 text-white rounded-2xl rounded-tr-none' 
                    : 'bg-slate-800 border-white/5 text-gray-200 rounded-2xl rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-cyber-cyan">X</span>
                </div>
                <div className="bg-slate-800 border border-white/5 rounded-2xl rounded-tl-none p-3 max-w-[80%] flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Interaction Area (Buttons instead of input) */}
          <div className="p-4 bg-slate-800 border-t border-white/10 flex flex-col gap-3">
            
            {!isTyping && showQuestions && (
              <div className="flex flex-col gap-2 mb-2">
                {suggestedQuestions.map((q, idx) => (
                  <button 
                    key={idx}
                    onClick={() => handleSend(q)}
                    className="w-full bg-slate-700 hover:bg-slate-600 text-gray-200 border border-slate-600 rounded-lg px-3 py-2 text-sm text-left transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {!isTyping && !showQuestions && (
              <button 
                onClick={() => setShowQuestions(true)}
                className="w-full bg-slate-700 hover:bg-slate-600 text-gray-200 border border-slate-600 rounded-lg px-3 py-2 text-sm transition-colors mb-2 text-center"
              >
                Volver a la lista de preguntas
              </button>
            )}

            <button
              onClick={() => {
                setIsOpen(false);
                navigate('/contacto');
                window.scrollTo(0,0);
              }}
              className="w-full bg-cyber-cyan/10 hover:bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/50 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2"
            >
              Ir a Contacto
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-cyber-cyan rounded-full flex items-center justify-center text-black shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:scale-110 transition-transform relative"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-3 h-3 bg-cyber-red rounded-full border-2 border-background"></span>
        )}
      </button>
    </div>
  );
};

export default Chatbot;
