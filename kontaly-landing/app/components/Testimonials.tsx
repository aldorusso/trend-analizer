'use client';

import { useState } from 'react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  initials: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: 'Kontaly transformó completamente la forma en que gestionamos nuestros clientes. La automatización de facturación nos ahorra más de 10 horas semanales.',
    author: 'María González',
    role: 'CEO',
    company: 'TechStart Solutions',
    initials: 'MG'
  },
  {
    quote: 'La gestión de múltiples proyectos nunca fue tan sencilla. El tracking de tiempo y los reportes nos ayudan a mantener la rentabilidad en cada proyecto.',
    author: 'Carlos Rodríguez',
    role: 'Director de Proyectos',
    company: 'Agencia Creativa',
    initials: 'CR'
  },
  {
    quote: 'Como freelancer, necesitaba una herramienta profesional pero accesible. Kontaly es perfecta para mi negocio y mis clientes aman el portal personalizado.',
    author: 'Ana Martínez',
    role: 'Freelancer',
    company: 'Consultoría Independiente',
    initials: 'AM'
  },
  {
    quote: 'Probamos 5 CRMs diferentes antes de encontrar Kontaly. La relación calidad-precio es imbatible y el soporte es excepcional.',
    author: 'Luis Fernández',
    role: 'Fundador',
    company: 'StartupLab',
    initials: 'LF'
  },
  {
    quote: 'El pipeline visual nos ayudó a aumentar nuestras conversiones en un 40%. Ahora tenemos visibilidad completa de todas nuestras oportunidades.',
    author: 'Patricia Sánchez',
    role: 'Gerente de Ventas',
    company: 'Comercial del Sur',
    initials: 'PS'
  },
  {
    quote: 'La integración con nuestros procesos existentes fue muy sencilla. En menos de una semana todo el equipo estaba trabajando productivamente.',
    author: 'Roberto Torres',
    role: 'CTO',
    company: 'Digital Innovations',
    initials: 'RT'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-indigo-600/30 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-3s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Testimonios
          </h2>
          <p className="text-xl text-gray-400">
            Lo que dicen <span className="gradient-text font-semibold">nuestros clientes</span>
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="glass rounded-3xl p-8 md:p-12 min-h-[400px] flex flex-col justify-between">
            {/* Quote Icon */}
            <div className="mb-6">
              <svg className="w-12 h-12 text-purple-500 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Quote Text */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-fade-in-up">
              "{testimonials[currentIndex].quote}"
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl glow-purple">
                {testimonials[currentIndex].initials}
              </div>

              {/* Author Details */}
              <div>
                <div className="font-semibold text-lg text-[var(--foreground)]">
                  {testimonials[currentIndex].author}
                </div>
                <div className="text-gray-400">
                  {testimonials[currentIndex].role} en {testimonials[currentIndex].company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 rounded-full glass hover:bg-white/10 flex items-center justify-center transition-all hover:scale-110"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 rounded-full glass hover:bg-white/10 flex items-center justify-center transition-all hover:scale-110"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`transition-all ${
                  index === currentIndex
                    ? 'w-8 h-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full'
                    : 'w-3 h-3 bg-gray-600 rounded-full hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats or Trust Badges */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">4.9/5</div>
            <div className="text-sm text-gray-400">Valoración media</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">500+</div>
            <div className="text-sm text-gray-400">Reseñas verificadas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-2">98%</div>
            <div className="text-sm text-gray-400">Recomendación</div>
          </div>
        </div>
      </div>
    </section>
  );
}
