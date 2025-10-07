'use client';

import { useState } from 'react';

interface PricingPlan {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

type Currency = 'EUR' | 'USD';

const currencySymbols = {
  EUR: '€',
  USD: '$'
};

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    monthlyPrice: 29,
    annualPrice: 24,
    description: 'Ideal para freelancers y pequeños proyectos',
    features: [
      'Hasta 3 usuarios',
      'Gestión básica de leads y clientes',
      'Hasta 10 proyectos activos',
      '100 propuestas al mes',
      'Facturación básica',
      'Reportes básicos',
      'Soporte por email',
      '5 GB de almacenamiento'
    ],
    cta: 'Comenzar ahora'
  },
  {
    name: 'Professional',
    monthlyPrice: 79,
    annualPrice: 66,
    description: 'Perfecto para equipos en crecimiento',
    features: [
      'Hasta 10 usuarios',
      'CRM completo',
      'Proyectos ilimitados',
      'Propuestas ilimitadas',
      'Facturación avanzada + recordatorios',
      'Reportes personalizados',
      'Sistema de tickets',
      'Gestión de contratos',
      'Time tracking',
      'Integraciones con Stripe, PayPal',
      'Soporte prioritario',
      '50 GB de almacenamiento'
    ],
    highlighted: true,
    cta: 'Comenzar ahora'
  },
  {
    name: 'Business',
    monthlyPrice: 149,
    annualPrice: 124,
    description: 'Para empresas que necesitan más potencia',
    features: [
      'Hasta 25 usuarios',
      'Todo lo de Professional',
      'Automatizaciones avanzadas',
      'API completa',
      'White label',
      'Multi-divisa y multi-idioma',
      'Roles y permisos personalizados',
      'Auditoría completa',
      'Soporte dedicado',
      'Onboarding personalizado',
      '200 GB de almacenamiento'
    ],
    cta: 'Comenzar ahora'
  },
  {
    name: 'Enterprise',
    monthlyPrice: 0,
    annualPrice: 0,
    description: 'Para grandes organizaciones',
    features: [
      'Usuarios ilimitados',
      'Todo lo de Business',
      'Infraestructura dedicada',
      'SLA garantizado 99.9%',
      'Soporte 24/7',
      'Account manager dedicado',
      'Personalización completa',
      'Seguridad avanzada + SSO',
      'Cumplimiento GDPR',
      'Almacenamiento ilimitado'
    ],
    cta: 'Contactar ventas'
  }
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [currency, setCurrency] = useState<Currency>('USD');

  const getPrice = (plan: PricingPlan) => {
    if (plan.name === 'Enterprise') return 'Custom';
    return isAnnual ? plan.annualPrice : plan.monthlyPrice;
  };

  const formatPrice = (price: number | string) => {
    if (typeof price === 'string') return price;
    return `${currencySymbols[currency]}${price}`;
  };

  return (
    <section id="pricing" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Precios simples y <span className="gradient-text">transparentes</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Elige el plan perfecto para tu negocio
          </p>

          {/* Currency Toggle */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <button
              onClick={() => setCurrency('USD')}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                currency === 'USD'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                  : 'glass text-gray-400 hover:bg-white/10'
              }`}
            >
              USD ($)
            </button>
            <button
              onClick={() => setCurrency('EUR')}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                currency === 'EUR'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                  : 'glass text-gray-400 hover:bg-white/10'
              }`}
            >
              EUR (€)
            </button>
          </div>

          {/* Toggle Monthly/Annual */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className={`text-lg font-medium transition-colors ${!isAnnual ? 'text-[var(--foreground)]' : 'text-gray-400'}`}>
              Mensual
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-all ${
                isAnnual ? 'bg-gradient-to-r from-purple-600 to-indigo-600' : 'bg-gray-600'
              }`}
              aria-label="Toggle pricing"
            >
              <span
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                  isAnnual ? 'translate-x-8' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-lg font-medium transition-colors ${isAnnual ? 'text-[var(--foreground)]' : 'text-gray-400'}`}>
              Anual
            </span>
          </div>

          {/* Savings Badge */}
          {isAnnual && (
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 animate-fade-in-up">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-green-500">
                Ahorra hasta 17% con facturación anual
              </span>
            </div>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass rounded-2xl p-8 transition-all ${
                plan.highlighted
                  ? 'relative border-2 border-purple-600 scale-105 hover:scale-110'
                  : 'hover:bg-white/5 hover:scale-105'
              }`}
            >
              {/* Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold glow-purple">
                    Más popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-[var(--foreground)]">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                {typeof getPrice(plan) === 'number' ? (
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-[var(--foreground)]">
                        {formatPrice(getPrice(plan))}
                      </span>
                      <span className="text-gray-400">/mes</span>
                    </div>
                    {isAnnual && plan.monthlyPrice > 0 && (
                      <p className="text-sm text-gray-400 mt-2">
                        Facturado anualmente ({formatPrice(plan.annualPrice * 12)}/año)
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="text-5xl font-bold text-[var(--foreground)]">
                    {getPrice(plan)}
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3 rounded-full font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white glow-purple-strong'
                    : 'glass hover:bg-white/10 text-[var(--foreground)]'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p className="text-gray-400">
            Todos los planes incluyen actualizaciones gratuitas y soporte técnico
          </p>
          <p className="text-sm text-gray-500 mt-2">
            ¿Necesitas más de 25 usuarios? <button className="text-purple-500 hover:text-purple-400 underline">Contáctanos</button>
          </p>
        </div>
      </div>
    </section>
  );
}
