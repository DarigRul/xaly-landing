import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-screen">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-cyber-cyan hover:text-white transition-colors mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        Volver al inicio
      </button>

      <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10">
        <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">Aviso de Privacidad</h1>
        
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            En <strong>XALY</strong>, estamos comprometidos con la protección de los datos personales de nuestros clientes y prospectos. 
            El presente Aviso de Privacidad detalla la forma en que recopilamos, utilizamos y protegemos su información.
          </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Información Recopilada</h2>
          <p>
            Recopilamos información personal como nombre, correo electrónico, número de teléfono y datos de la empresa 
            únicamente cuando usted nos la proporciona voluntariamente a través de nuestro formulario de contacto o chatbot.
          </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">2. Uso de la Información</h2>
          <p>
            Los datos proporcionados serán utilizados exclusivamente para:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contactarle para ofrecerle las consultorías o servicios solicitados.</li>
            <li>Enviarle información relevante sobre actualizaciones, nuevos servicios o noticias relacionadas con la automatización.</li>
            <li>Mejorar nuestros servicios y la atención a clientes.</li>
          </ul>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">3. Protección de Datos</h2>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas para proteger su información contra acceso, 
            alteración, divulgación o destrucción no autorizada. No compartimos, vendemos ni alquilamos su información 
            a terceros sin su consentimiento expreso, salvo que sea requerido por la ley.
          </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">4. Derechos ARCO</h2>
          <p>
            Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales. 
            Para ejercer estos derechos, por favor contáctenos directamente a través del correo 
            <a href="mailto:contacto@xaly.mx" className="text-cyber-cyan ml-1 hover:underline">contacto@xaly.mx</a>.
          </p>

          <h2 className="text-xl font-bold text-white mt-8 mb-4">5. Cambios al Aviso de Privacidad</h2>
          <p>
            Nos reservamos el derecho de actualizar o modificar este aviso en cualquier momento. 
            Le recomendamos revisar esta sección periódicamente para estar informado sobre cualquier cambio.
          </p>
          
          <p className="pt-8 text-sm text-gray-500">
            Última actualización: Agosto 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
