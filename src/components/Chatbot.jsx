import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: '¡Hola! Soy la IA de XALY. ¿Quieres saber cómo automatizar tu empresa hoy?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestedQuestions = [
    "¿Qué procesos pueden automatizar?",
    "Quiero ver los precios",
    "Agendar una auditoría"
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
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response based on keywords
    setTimeout(() => {
      let botResponse = "Interesante. Un arquitecto de software se pondrá en contacto para darte detalles. ¿En qué más puedo ayudarte?";
      
      const lowerText = text.toLowerCase();
      if (lowerText.includes("precios") || lowerText.includes("cuesta")) {
        botResponse = "Nuestros planes empiezan desde $3,500 MXN mensuales para pymes, o bien soluciones corporativas a medida. Puedes verlos en la sección de Planes.";
      } else if (lowerText.includes("procesos") || lowerText.includes("automatizar")) {
        botResponse = "Automatizamos atención al cliente 24/7 vía WhatsApp, captura de datos en CRM, integración de ERPs (SAP/Oracle) y generación de reportes automáticos.";
      } else if (lowerText.includes("auditoría") || lowerText.includes("agendar")) {
        botResponse = "¡Excelente! Por favor llena el formulario de contacto de la página o déjame tu correo por aquí y te buscaremos hoy mismo.";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: botResponse }]);
      setIsTyping(false);
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

          {/* Suggested Questions */}
          {messages.length === 1 && !isTyping && (
             <div className="px-4 pb-2 bg-slate-900/80 flex flex-wrap gap-2">
               {suggestedQuestions.map((q, idx) => (
                 <button 
                   key={idx}
                   onClick={() => handleSend(q)}
                   className="bg-slate-800 hover:bg-slate-700 text-cyber-cyan border border-cyber-cyan/20 rounded-full px-3 py-1.5 text-xs transition-colors text-left"
                 >
                   {q}
                 </button>
               ))}
             </div>
          )}
          
          {/* Input */}
          <div className="p-4 bg-slate-800 border-t border-white/10">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
              className="relative"
            >
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="w-full bg-slate-900 border border-white/10 rounded-full py-2.5 pl-4 pr-10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyber-cyan/50"
              />
              <button 
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-cyber-cyan hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
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
