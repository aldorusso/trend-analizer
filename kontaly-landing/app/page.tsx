import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./components/ThemeToggle";
import Logo from "./components/Logo";
import FeaturesWithTabs from "./components/FeaturesWithTabs";
import AIFeature from "./components/AIFeature";
import WhyChoose from "./components/WhyChoose";
import Pricing from "./components/Pricing";
import UseCases from "./components/UseCases";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Logo width={140} height={32} />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-400 hover:text-[var(--foreground)] transition-colors">
              Características
            </Link>
            <Link href="#pricing" className="text-gray-400 hover:text-[var(--foreground)] transition-colors">
              Precios
            </Link>
            <Link href="/colaboradores" className="text-gray-400 hover:text-[var(--foreground)] transition-colors">
              Colaboradores
            </Link>
            <Link href="/contacto" className="text-gray-400 hover:text-[var(--foreground)] transition-colors">
              Contacto
            </Link>
            <Link href="/ayuda" className="text-gray-400 hover:text-[var(--foreground)] transition-colors">
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
      <section className="relative flex items-center justify-center overflow-hidden pt-20 pb-12" style={{ minHeight: 'calc(100vh - 80px)' }}>
        {/* Background Gradient Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-3s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up">
            {/* Announcement Badge */}
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" />
                </svg>
                Announcement
              </span>
              <span className="text-[var(--foreground)] font-medium">
                100% compatible con Verifactu
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight">
              Gestiona todo tu negocio
              <br />
              <span className="gradient-text">desde un solo lugar</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              CRM, proyectos, facturación y más — con Kontaly CRM
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-lg transition-all hover:from-purple-500 hover:to-indigo-500 glow-purple-strong">
                Empieza gratis
              </button>
              <button className="px-8 py-4 rounded-lg glass text-[var(--foreground)] font-semibold text-lg hover:bg-white/10 transition-all">
                Solicita una demo
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-gray-500 text-sm mb-10">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Sin tarjeta de crédito
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Configuración en 2 minutos
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Cancelación cuando quieras
              </div>
            </div>

            {/* Video Demo */}
            <div className="relative max-w-5xl mx-auto">
              <div className="glass rounded-2xl p-2 glow-purple">
                <div className="relative rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/UA_qS3aLEII?start=60&modestbranding=1&rel=0&showinfo=0&controls=1"
                    title="Kontaly Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Tabs */}
      <FeaturesWithTabs />

      {/* AI Feature Section */}
      <AIFeature />

      {/* Stats Section */}
      <section id="benefits" className="relative py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-3xl p-12 md:p-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Resultados que <span className="gradient-text">hablan por sí solos</span>
              </h2>
              <p className="text-xl text-gray-400">
                Miles de empresas confían en Kontaly para gestionar su negocio
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="text-6xl font-bold gradient-text mb-4">+25%</div>
                <p className="text-xl text-gray-300 font-medium mb-2">Más productividad</p>
                <p className="text-gray-400">Aumenta la eficiencia de tu equipo</p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold gradient-text mb-4">-40%</div>
                <p className="text-xl text-gray-300 font-medium mb-2">Menos tiempo administrativo</p>
                <p className="text-gray-400">Automatiza tareas repetitivas</p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold gradient-text mb-4">5,000+</div>
                <p className="text-xl text-gray-300 font-medium mb-2">Empresas activas</p>
                <p className="text-gray-400">Confiando en Kontaly cada día</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <WhyChoose />

      {/* Pricing Section */}
      <Pricing />

      {/* Verifactu Compliance Section */}
      <section className="relative py-20 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-3xl p-12 md:p-16 overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-500/10 to-emerald-600/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div>
                <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-green-500">100% Certificado</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Cumplimos al <span className="gradient-text">100%</span> con Verifactu
                </h2>

                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  Kontaly está completamente adaptado a la normativa Verifactu de la Agencia Tributaria española, garantizando el cumplimiento total de tus obligaciones fiscales.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--foreground)] mb-1">Facturación Certificada</h3>
                      <p className="text-gray-400 text-sm">Todas tus facturas cumplen con el sistema Verifactu sin necesidad de configuración adicional.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--foreground)] mb-1">Trazabilidad Total</h3>
                      <p className="text-gray-400 text-sm">Registro completo de todas las operaciones según los requisitos de la AEAT.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--foreground)] mb-1">Actualizaciones Automáticas</h3>
                      <p className="text-gray-400 text-sm">Nos adaptamos a todos los cambios normativos sin que tengas que preocuparte.</p>
                    </div>
                  </div>
                </div>

                <Link href="/#pricing" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold transition-all glow-purple-strong hover:scale-105">
                  Comienza ahora con Verifactu
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Right side - Visual */}
              <div className="relative">
                <div className="glass rounded-2xl p-8 relative">
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center glow-purple rotate-12">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>

                  <div className="space-y-4 mt-8">
                    <div className="flex items-center justify-between p-4 glass rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-sm text-gray-300">Sistema Verifactu</span>
                      </div>
                      <span className="text-sm font-semibold text-green-500">Activo</span>
                    </div>

                    <div className="flex items-center justify-between p-4 glass rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-sm text-gray-300">Registro AEAT</span>
                      </div>
                      <span className="text-sm font-semibold text-green-500">Conectado</span>
                    </div>

                    <div className="flex items-center justify-between p-4 glass rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-sm text-gray-300">Certificación</span>
                      </div>
                      <span className="text-sm font-semibold text-green-500">100%</span>
                    </div>

                    <div className="p-6 glass rounded-xl text-center mt-6">
                      <div className="text-5xl font-bold gradient-text mb-2">2025</div>
                      <p className="text-sm text-gray-400">Certificado para el año fiscal actual</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <UseCases />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Final CTA Section */}
      <section className="relative py-32 px-6 overflow-hidden bg-white/[0.015]">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[150px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            ¿Listo para transformar
            <br />
            <span className="gradient-text">tu negocio?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Únete a miles de empresas que ya están gestionando su negocio de forma más eficiente con Kontaly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-10 py-5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-lg transition-all glow-purple-strong hover:scale-105">
              Comenzar gratis ahora
            </button>
            <button className="px-10 py-5 rounded-full glass text-white font-semibold text-lg hover:bg-white/10 transition-all">
              Hablar con un experto
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            No se requiere tarjeta de crédito • Configuración en minutos • Cancela cuando quieras
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
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
                <li><Link href="#features" className="hover:text-white transition-colors">Características</Link></li>
                <li><Link href="#pricing" className="hover:text-white transition-colors">Precios</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Integraciones</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Actualizaciones</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">Sobre nosotros</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Carreras</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contacto</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">Privacidad</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Términos</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Cookies</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Licencias</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Kontaly. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
