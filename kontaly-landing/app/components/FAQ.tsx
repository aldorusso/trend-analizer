'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: '¿Puedo cambiar de plan en cualquier momento?',
    answer: 'Sí, puedes cambiar de plan cuando lo necesites. Si actualizas a un plan superior, solo pagas la diferencia prorrateada. Si bajas de plan, el cambio se aplicará en tu próximo ciclo de facturación.'
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos todas las tarjetas de crédito principales (Visa, Mastercard, American Express), PayPal, y transferencias bancarias para planes Enterprise. Todas las transacciones son seguras y encriptadas.'
  },
  {
    question: '¿Hay costos ocultos o cargos adicionales?',
    answer: 'No, no hay costos ocultos. El precio que ves es el precio que pagas. Todos nuestros planes incluyen actualizaciones, soporte técnico y almacenamiento según lo indicado. No cobramos por instalación ni configuración.'
  },
  {
    question: '¿Qué pasa con mis datos si cancelo?',
    answer: 'Si decides cancelar, puedes exportar todos tus datos en cualquier momento antes o después de la cancelación. Mantenemos tus datos durante 30 días después de cancelar por si decides volver. Después de este período, los datos se eliminan de forma segura y permanente.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-32 px-6 bg-white/[0.015]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Preguntas <span className="gradient-text">frecuentes</span>
          </h2>
          <p className="text-xl text-gray-400">
            Todo lo que necesitas saber sobre Kontaly
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass rounded-2xl overflow-hidden transition-all hover:bg-white/5"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex items-center justify-between gap-4"
              >
                <h3 className="text-xl font-semibold text-[var(--foreground)] pr-8">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-purple-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 animate-fade-in-up">
                  <p className="text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">
            ¿Tienes más preguntas?
          </p>
          <button className="glass px-6 py-3 rounded-full font-semibold text-[var(--foreground)] hover:bg-white/10 transition-all">
            Contacta con soporte
          </button>
        </div>
      </div>
    </section>
  );
}
