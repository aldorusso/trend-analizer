'use client';

import { useState } from 'react';

interface Feature {
  id: string;
  name: string;
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
}

const features: Feature[] = [
  {
    id: 'leads',
    name: 'Gestión de Leads',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Convierte más leads en clientes',
    description: 'Pipeline visual estilo Kanban para gestionar tus oportunidades de negocio de forma intuitiva.',
    features: [
      'Vista Kanban personalizable',
      'Importación automática desde email',
      'Conversión rápida a clientes',
      'Seguimiento de fuentes de leads',
      'Asignación automática de leads',
      'Notificaciones en tiempo real'
    ]
  },
  {
    id: 'clientes',
    name: 'Gestión de Clientes',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Relaciones que perduran',
    description: 'Portal del cliente, comunicación centralizada y toda la información a tu alcance.',
    features: [
      'Portal del cliente personalizado',
      'Historial completo de interacciones',
      'Base de conocimiento integrada',
      'Sistema de encuestas',
      'Gestión de documentos',
      'Comunicación bidireccional'
    ]
  },
  {
    id: 'proyectos',
    name: 'Proyectos',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: 'Gestiona proyectos sin complicaciones',
    description: 'Tareas, tiempo, gastos y hitos en un solo lugar. Mantén el control total de tus proyectos.',
    features: [
      'Asignación de tareas múltiples',
      'Tracking de tiempo por tarea',
      'Gráficos Gantt profesionales',
      'Gestión de hitos',
      'Registro de gastos',
      'Reportes de timesheet'
    ]
  },
  {
    id: 'facturacion',
    name: 'Facturación',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Cobra más rápido',
    description: 'Facturas profesionales, pagos en línea y facturación recurrente automatizada.',
    features: [
      'Facturas recurrentes automáticas',
      'Múltiples métodos de pago',
      'Multi-moneda',
      'Estimaciones y cotizaciones',
      'Recordatorios automáticos',
      'Integración PayPal y Stripe'
    ]
  },
  {
    id: 'propuestas',
    name: 'Propuestas',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Propuestas que cierran negocios',
    description: 'Crea propuestas profesionales y obtén firmas electrónicas en minutos.',
    features: [
      'Plantillas personalizables',
      'Firmas electrónicas',
      'Seguimiento de visualizaciones',
      'Conversión a proyectos',
      'Biblioteca de contenido',
      'Envío automático'
    ]
  },
  {
    id: 'tickets',
    name: 'Tickets',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Soporte que marca la diferencia',
    description: 'Sistema completo de tickets con respuestas automáticas y gestión eficiente.',
    features: [
      'Importación automática desde email',
      'Respuestas predefinidas',
      'Asignación de tickets',
      'Sistema de prioridades',
      'Notas privadas del equipo',
      'Base de conocimiento integrada'
    ]
  },
  {
    id: 'reportes',
    name: 'Reportes',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Decisiones basadas en datos',
    description: 'Analytics completo y reportes personalizados para entender tu negocio.',
    features: [
      'Dashboard personalizable',
      'Seguimiento de objetivos',
      'Reportes de ventas',
      'Analytics de tiempo',
      'Reportes financieros',
      'Exportación de datos'
    ]
  },
  {
    id: 'contratos',
    name: 'Contratos',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Gestión de contratos simplificada',
    description: 'Administra contratos, renovaciones y documentos legales sin esfuerzo.',
    features: [
      'Plantillas de contratos',
      'Alertas de renovación',
      'Firmas electrónicas',
      'Versionado de documentos',
      'Vinculación con clientes',
      'Gestión de términos'
    ]
  }
];

export default function FeaturesWithTabs() {
  const [activeTab, setActiveTab] = useState('leads');

  const activeFeature = features.find(f => f.id === activeTab) || features[0];

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Todo lo que necesitas para
            <br />
            <span className="gradient-text">gestionar tu negocio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Una plataforma completa con todas las herramientas que tu equipo necesita, sin complicaciones.
          </p>
        </div>

        {/* Tabs Navigation - Grid Layout */}
        <div className="glass rounded-2xl p-4 mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                className={`
                  flex flex-col items-center justify-center gap-2 p-4 rounded-xl font-medium transition-all
                  ${activeTab === feature.id
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white glow-purple'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }
                `}
              >
                <span className={`transition-transform ${activeTab === feature.id ? 'scale-110' : ''}`}>
                  {feature.icon}
                </span>
                <span className="text-xs sm:text-sm text-center leading-tight">
                  {feature.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="animate-fade-in-up">
              <h3 className="text-4xl font-bold mb-4">
                {activeFeature.title}
              </h3>
              <p className="text-xl text-gray-400 mb-8">
                {activeFeature.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeFeature.features.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Visual Mockup */}
            <div className="relative">
              <div className="glass rounded-2xl p-6 glow-purple">
                <div className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-xl p-8 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center animate-pulse-glow">
                      {activeFeature.icon}
                    </div>
                    <h4 className="text-2xl font-bold mb-2">{activeFeature.name}</h4>
                    <p className="text-gray-400">Visualización interactiva</p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-600/20 rounded-full blur-2xl animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-600/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '-2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
