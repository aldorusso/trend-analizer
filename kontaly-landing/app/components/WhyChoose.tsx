'use client';

interface Benefit {
  icon: JSX.Element;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: 'Centraliza tu información',
    description: 'Toda la información de clientes, proyectos y ventas en un solo lugar. No más hojas de cálculo dispersas.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Automatiza procesos',
    description: 'Facturas recurrentes, seguimientos automáticos y flujos de trabajo que ahorran horas de trabajo manual.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Aumenta tus ventas',
    description: 'Pipeline visual de oportunidades, seguimiento de leads y herramientas para cerrar más negocios.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Colaboración en equipo',
    description: 'Asigna tareas, comparte archivos y mantén a todo el equipo sincronizado en tiempo real.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Ahorra tiempo',
    description: 'Reduce el tiempo administrativo hasta un 60% con automatizaciones inteligentes y procesos optimizados.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Seguridad garantizada',
    description: 'Tus datos protegidos con encriptación de nivel bancario, backups automáticos y cumplimiento GDPR.'
  }
];

export default function WhyChoose() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-white/[0.015]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-3s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            ¿Por qué elegir
            <br />
            <span className="gradient-text">Kontaly?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            No es solo un CRM, es la plataforma completa que tu negocio necesita para crecer de forma sostenible.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 hover:bg-white/5 transition-all group hover:scale-105 hover:glow-purple"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Icon container */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform glow-purple">
                <div className="text-white">
                  {benefit.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3 text-[var(--foreground)]">
                {benefit.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
