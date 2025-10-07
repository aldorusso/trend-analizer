'use client';

interface UseCase {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: JSX.Element;
  color: string;
}

const useCases: UseCase[] = [
  {
    title: 'Freelancers',
    subtitle: 'Gestiona tus proyectos, factura a tus clientes y mantén el control de tu tiempo.',
    description: 'Perfecto para profesionales independientes',
    features: [
      'Tracking de tiempo para facturación',
      'Propuestas y contratos profesionales',
      'Portal del cliente personalizado',
      'Gestión de múltiples proyectos'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    color: 'from-purple-600 to-indigo-600'
  },
  {
    title: 'Pequeñas Empresas',
    subtitle: 'Centraliza la información de clientes, proyectos y ventas en un solo lugar.',
    description: 'Ideal para equipos de 3-15 personas',
    features: [
      'Pipeline de ventas visual',
      'Colaboración en equipo',
      'Facturación automatizada',
      'Reportes de rendimiento'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: 'from-blue-600 to-cyan-600'
  },
  {
    title: 'Agencias',
    subtitle: 'Gestiona múltiples clientes y proyectos con total control y transparencia.',
    description: 'Diseñado para agencias creativas y consultoras',
    features: [
      'Gestión multi-proyecto',
      'Reportes por cliente',
      'Asignación de equipos',
      'Seguimiento de rentabilidad'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: 'from-pink-600 to-rose-600'
  },
  {
    title: 'Startups',
    subtitle: 'Escala tu negocio con herramientas profesionales desde el primer día.',
    description: 'Para empresas en crecimiento',
    features: [
      'Configuración rápida',
      'Escalabilidad garantizada',
      'Integraciones con herramientas',
      'Soporte dedicado'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'from-emerald-600 to-teal-600'
  }
];

export default function UseCases() {
  return (
    <section className="relative py-32 px-6 bg-white/[0.015]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Casos de Uso
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
            Perfecto para <span className="gradient-text font-semibold">cualquier tipo de negocio</span>
          </p>
          <p className="text-lg text-gray-500">
            Desde freelancers hasta empresas, Kontaly se adapta a tus necesidades específicas.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 hover:bg-white/5 transition-all group hover:scale-[1.02]"
            >
              {/* Icon and Title */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${useCase.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform glow-purple`}>
                  <div className="text-white">
                    {useCase.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-[var(--foreground)]">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400">
                    {useCase.subtitle}
                  </p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3">
                {useCase.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
