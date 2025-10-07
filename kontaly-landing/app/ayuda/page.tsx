'use client';

import { useState } from 'react';
import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";
import Logo from "../components/Logo";

interface FAQ {
  question: string;
  answer: string;
}

interface Category {
  id: string;
  name: string;
  icon: JSX.Element;
  faqs: FAQ[];
}

const categories: Category[] = [
  {
    id: 'general',
    name: 'General',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    faqs: [
      {
        question: '¿Qué es Kontaly?',
        answer: 'Kontaly es una plataforma todo-en-uno de gestión empresarial que combina CRM, gestión de proyectos, facturación, propuestas, tickets de soporte y más. Diseñada para ayudar a empresas de todos los tamaños a centralizar y optimizar sus operaciones.'
      },
      {
        question: '¿Necesito instalar algún software?',
        answer: 'No, Kontaly es 100% basado en la nube. Solo necesitas un navegador web y conexión a internet para acceder desde cualquier dispositivo.'
      },
      {
        question: '¿Puedo importar mis datos desde otras plataformas?',
        answer: 'Sí, ofrecemos herramientas de importación para traer tus datos desde hojas de cálculo (Excel, Google Sheets) y otros sistemas CRM. Nuestro equipo de soporte puede ayudarte con migraciones más complejas.'
      },
      {
        question: '¿En qué idiomas está disponible Kontaly?',
        answer: 'Kontaly está disponible en español, inglés, francés y portugués. Puedes cambiar el idioma desde la configuración de tu cuenta en cualquier momento.'
      }
    ]
  },
  {
    id: 'precios',
    name: 'Precios y Facturación',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    faqs: [
      {
        question: '¿Puedo cambiar de plan en cualquier momento?',
        answer: 'Sí, puedes actualizar o bajar de plan cuando lo necesites. Si actualizas, solo pagas la diferencia prorrateada. Si bajas de plan, el cambio se aplicará en tu próximo ciclo de facturación.'
      },
      {
        question: '¿Qué métodos de pago aceptan?',
        answer: 'Aceptamos todas las tarjetas de crédito principales (Visa, Mastercard, American Express), PayPal, y transferencias bancarias para planes Enterprise. Todas las transacciones son seguras y encriptadas.'
      },
      {
        question: '¿Hay costos ocultos o cargos adicionales?',
        answer: 'No, no hay costos ocultos. El precio que ves es el precio que pagas. Todos nuestros planes incluyen actualizaciones, soporte técnico y almacenamiento según lo indicado.'
      },
      {
        question: '¿Ofrecen descuentos para organizaciones sin fines de lucro?',
        answer: 'Sí, ofrecemos un 25% de descuento para organizaciones sin fines de lucro verificadas y instituciones educativas. Contacta a nuestro equipo de ventas para más información.'
      },
      {
        question: '¿Puedo obtener una factura para mi empresa?',
        answer: 'Sí, todas las suscripciones incluyen facturación automática con todos los datos fiscales necesarios. Puedes configurar los datos de facturación desde tu panel de administración.'
      }
    ]
  },
  {
    id: 'cuenta',
    name: 'Cuenta y Usuarios',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    faqs: [
      {
        question: '¿Cómo agrego usuarios a mi cuenta?',
        answer: 'Desde el panel de administración, ve a Configuración > Usuarios y haz clic en "Invitar usuario". Ingresa el email de la persona y asigna su rol (Admin, Usuario, Solo lectura). Recibirá una invitación por correo.'
      },
      {
        question: '¿Puedo asignar diferentes roles y permisos?',
        answer: 'Sí, Kontaly ofrece un sistema completo de roles y permisos. Puedes crear roles personalizados y definir exactamente qué puede ver y hacer cada usuario en el sistema.'
      },
      {
        question: '¿Cómo cambio mi contraseña?',
        answer: 'Ve a tu perfil (icono de usuario en la esquina superior derecha) > Configuración de cuenta > Seguridad. Allí podrás cambiar tu contraseña. También puedes activar la autenticación de dos factores para mayor seguridad.'
      },
      {
        question: '¿Qué pasa si olvido mi contraseña?',
        answer: 'En la página de inicio de sesión, haz clic en "¿Olvidaste tu contraseña?". Te enviaremos un enlace para restablecer tu contraseña por correo electrónico.'
      }
    ]
  },
  {
    id: 'funcionalidades',
    name: 'Funcionalidades',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    faqs: [
      {
        question: '¿Puedo personalizar los campos del CRM?',
        answer: 'Sí, puedes crear campos personalizados para clientes, leads, proyectos y más. Ve a Configuración > Campos personalizados para agregar los campos que necesites.'
      },
      {
        question: '¿Cómo funciona la facturación automática?',
        answer: 'Puedes configurar facturas recurrentes para tus clientes. El sistema generará y enviará automáticamente las facturas según la frecuencia que definas (mensual, trimestral, anual, etc.).'
      },
      {
        question: '¿Puedo enviar propuestas y que los clientes las firmen digitalmente?',
        answer: 'Sí, nuestro módulo de propuestas incluye firma electrónica. Los clientes pueden revisar, firmar y aceptar propuestas directamente desde su navegador o dispositivo móvil.'
      },
      {
        question: '¿Kontaly tiene app móvil?',
        answer: 'Kontaly está optimizado para dispositivos móviles y funciona perfectamente en navegadores móviles. Estamos trabajando en apps nativas para iOS y Android que estarán disponibles próximamente.'
      },
      {
        question: '¿Puedo integrarlo con otras herramientas que uso?',
        answer: 'Sí, ofrecemos integraciones con las herramientas más populares: Stripe, PayPal, Google Workspace, Microsoft 365, Slack, Zapier y más. También contamos con una API completa para integraciones personalizadas.'
      }
    ]
  },
  {
    id: 'verifactu',
    name: 'Verifactu y Cumplimiento',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    faqs: [
      {
        question: '¿Qué es Verifactu?',
        answer: 'Verifactu es el sistema de la Agencia Tributaria española para garantizar la trazabilidad y veracidad de las facturas electrónicas. Es obligatorio para empresas que emiten facturas en España.'
      },
      {
        question: '¿Kontaly cumple con Verifactu?',
        answer: 'Sí, Kontaly cumple al 100% con la normativa Verifactu. Todas las facturas generadas en el sistema cumplen automáticamente con los requisitos de la AEAT sin configuración adicional.'
      },
      {
        question: '¿Necesito hacer algo para activar Verifactu?',
        answer: 'No, el cumplimiento de Verifactu está integrado de forma nativa en Kontaly. Solo necesitas completar los datos fiscales de tu empresa en la configuración y el sistema se encargará del resto.'
      },
      {
        question: '¿Qué pasa si cambia la normativa Verifactu?',
        answer: 'Nuestro equipo monitorea constantemente los cambios normativos y actualiza el sistema automáticamente. No tendrás que preocuparte por mantener el cumplimiento.'
      },
      {
        question: '¿Puedo exportar mis facturas para presentarlas a Hacienda?',
        answer: 'Sí, puedes exportar tus facturas en los formatos requeridos por la AEAT. También mantenemos un registro completo de todas las operaciones para auditorías.'
      }
    ]
  },
  {
    id: 'soporte',
    name: 'Soporte y Seguridad',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    faqs: [
      {
        question: '¿Qué tipo de soporte ofrecen?',
        answer: 'Ofrecemos soporte por email, chat en vivo y teléfono según tu plan. Todos los planes incluyen acceso a nuestra base de conocimiento y tutoriales en video. Los planes superiores tienen soporte prioritario y account managers dedicados.'
      },
      {
        question: '¿Mis datos están seguros?',
        answer: 'Sí, tomamos la seguridad muy en serio. Usamos encriptación SSL/TLS para todas las comunicaciones, encriptación de datos en reposo, backups diarios automáticos, y cumplimos con GDPR y otras regulaciones internacionales.'
      },
      {
        question: '¿Dónde se almacenan mis datos?',
        answer: 'Tus datos se almacenan en servidores seguros en la Unión Europea, cumpliendo con todas las regulaciones de protección de datos. Realizamos backups diarios y puedes exportar tus datos en cualquier momento.'
      },
      {
        question: '¿Qué pasa con mis datos si cancelo?',
        answer: 'Si decides cancelar, puedes exportar todos tus datos en cualquier momento antes o después de la cancelación. Mantenemos tus datos durante 30 días después de cancelar por si decides volver. Después, los datos se eliminan de forma segura y permanente.'
      },
      {
        question: '¿Ofrecen capacitación para mi equipo?',
        answer: 'Sí, ofrecemos sesiones de onboarding y capacitación para equipos. Los planes Business y Enterprise incluyen sesiones personalizadas. También tenemos webinars gratuitos cada semana y una extensa biblioteca de tutoriales.'
      }
    ]
  }
];

export default function AyudaPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('general');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const currentCategory = categories.find(cat => cat.id === selectedCategory);

  const filteredFAQs = currentCategory?.faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[var(--background)] transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Logo width={140} height={32} />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#features" className="text-gray-400 hover:text-[var(--foreground)] transition-colors">
              Características
            </Link>
            <Link href="/#pricing" className="text-gray-400 hover:text-[var(--foreground)] transition-colors">
              Precios
            </Link>
            <Link href="/colaboradores" className="text-gray-400 hover:text-[var(--foreground)] transition-colors">
              Colaboradores
            </Link>
            <Link href="/contacto" className="text-gray-400 hover:text-[var(--foreground)] transition-colors">
              Contacto
            </Link>
            <Link href="/ayuda" className="text-[var(--foreground)] font-medium">
              Ayuda
            </Link>
            <ThemeToggle />
            <button className="px-6 py-2 rounded-full glass text-[var(--foreground)] font-medium hover:bg-white/10 transition-all">
              Login
            </button>
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium transition-all glow-purple hover:glow-purple-strong">
              Comenzar gratis
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-3s' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Centro de <span className="gradient-text">Ayuda</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Encuentra respuestas a todas tus preguntas sobre Kontaly
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar en la ayuda..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-14 rounded-full glass text-[var(--foreground)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <svg className="w-6 h-6 text-gray-400 absolute left-5 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Help Content */}
      <section className="relative py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Categories */}
            <div className="lg:col-span-1">
              <div className="glass rounded-2xl p-6 sticky top-24">
                <h3 className="text-lg font-bold mb-4 text-[var(--foreground)]">Categorías</h3>
                <nav className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        setSearchQuery('');
                        setOpenFAQIndex(null);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                          : 'glass hover:bg-white/5 text-gray-400'
                      }`}
                    >
                      {category.icon}
                      <span className="font-medium text-sm">{category.name}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-3">
              <div className="glass rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-8">
                  {currentCategory?.icon}
                  <h2 className="text-3xl font-bold text-[var(--foreground)]">{currentCategory?.name}</h2>
                </div>

                {filteredFAQs.length === 0 ? (
                  <div className="text-center py-12">
                    <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-400">No se encontraron resultados</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredFAQs.map((faq, index) => (
                      <div
                        key={index}
                        className="glass rounded-xl overflow-hidden transition-all hover:bg-white/5"
                      >
                        <button
                          onClick={() => toggleFAQ(index)}
                          className="w-full text-left p-6 flex items-center justify-between gap-4"
                        >
                          <h3 className="text-lg font-semibold text-[var(--foreground)] pr-8">
                            {faq.question}
                          </h3>
                          <svg
                            className={`w-6 h-6 text-purple-500 flex-shrink-0 transition-transform ${
                              openFAQIndex === index ? 'rotate-180' : ''
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

                        {openFAQIndex === index && (
                          <div className="px-6 pb-6 animate-fade-in-up">
                            <p className="text-gray-400 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact Support CTA */}
              <div className="glass rounded-2xl p-8 mt-8 text-center">
                <h3 className="text-2xl font-bold mb-3 text-[var(--foreground)]">
                  ¿No encuentras lo que buscas?
                </h3>
                <p className="text-gray-400 mb-6">
                  Nuestro equipo de soporte está listo para ayudarte
                </p>
                <Link href="/contacto" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold transition-all glow-purple-strong hover:scale-105">
                  Contactar soporte
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Logo width={120} height={28} className="mb-4" />
              <p className="text-gray-400 text-sm">
                La plataforma todo-en-uno para gestionar tu negocio.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/#features" className="hover:text-white transition-colors">Características</Link></li>
                <li><Link href="/#pricing" className="hover:text-white transition-colors">Precios</Link></li>
                <li><Link href="/colaboradores" className="hover:text-white transition-colors">Colaboradores</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/ayuda" className="hover:text-white transition-colors">Centro de ayuda</Link></li>
                <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 Kontaly. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
