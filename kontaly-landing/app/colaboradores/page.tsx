import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";
import Logo from "../components/Logo";

export default function ColaboradoresPage() {
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
            <Link href="/colaboradores" className="text-[var(--foreground)] font-medium">
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
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-3s' }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Programa de <span className="gradient-text">Colaboradores</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Gana el 20% recurrente por cada cliente que refieras a Kontaly
          </p>
          <button className="px-10 py-5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-lg transition-all glow-purple-strong hover:scale-105">
            Únete al programa
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Por qué ser <span className="gradient-text">colaborador</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ideal para gestorías, consultorías y profesionales que trabajan con múltiples clientes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Benefit 1 */}
            <div className="glass rounded-2xl p-8 hover:bg-white/5 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">20% Recurrente</h3>
              <p className="text-gray-400 leading-relaxed">
                Gana el 20% mensual de cada cliente que refieras, mientras mantengan su suscripción activa. Ingresos pasivos garantizados.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="glass rounded-2xl p-8 hover:bg-white/5 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">Gestión Multi-Cliente</h3>
              <p className="text-gray-400 leading-relaxed">
                Panel exclusivo para gestionar todos tus clientes referidos. Accede a métricas, facturación y soporte prioritario.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="glass rounded-2xl p-8 hover:bg-white/5 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">Capacidades Extras</h3>
              <p className="text-gray-400 leading-relaxed">
                Accede a funciones exclusivas, descuentos especiales para tus clientes y soporte técnico dedicado para tu red.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-20 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Cómo <span className="gradient-text">funciona</span>?
            </h2>
            <p className="text-xl text-gray-400">
              Solo 3 pasos para empezar a ganar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="glass rounded-2xl p-8 hover:bg-white/5 transition-all h-full">
                <div className="text-6xl font-bold gradient-text mb-4">01</div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">Regístrate</h3>
                <p className="text-gray-400 leading-relaxed">
                  Únete al programa de colaboradores de Kontaly de forma gratuita. Obtén tu enlace único de referido.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="glass rounded-2xl p-8 hover:bg-white/5 transition-all h-full">
                <div className="text-6xl font-bold gradient-text mb-4">02</div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">Refiere Clientes</h3>
                <p className="text-gray-400 leading-relaxed">
                  Comparte Kontaly con tus clientes, contactos o red profesional usando tu enlace personalizado.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="glass rounded-2xl p-8 hover:bg-white/5 transition-all h-full">
                <div className="text-6xl font-bold gradient-text mb-4">03</div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--foreground)]">Gana Comisiones</h3>
                <p className="text-gray-400 leading-relaxed">
                  Recibe el 20% recurrente de cada suscripción. Pagos automáticos mensuales directos a tu cuenta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Perfecto para
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Gestorías */}
            <div className="glass rounded-2xl p-8 hover:bg-white/5 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-[var(--foreground)]">Gestorías y Asesorías</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Gestiona todos tus clientes desde un único panel. Ofrece Kontaly como solución integral y gana mientras ayudas a tus clientes a crecer.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Panel multi-cliente</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Soporte técnico prioritario</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Descuentos especiales para clientes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Agencias */}
            <div className="glass rounded-2xl p-8 hover:bg-white/5 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-[var(--foreground)]">Agencias y Consultoras</h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Añade valor a tus servicios ofreciendo Kontaly. Aumenta tus ingresos recurrentes mientras mejoras la experiencia de tus clientes.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>White label disponible</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Material de marketing personalizado</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>API completa para integraciones</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-3xl p-12 md:p-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                El potencial de tus <span className="gradient-text">ingresos</span>
              </h2>
              <p className="text-xl text-gray-400">
                Ejemplo con el plan Professional ($79/mes)
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold gradient-text mb-3">$474</div>
                <p className="text-gray-400 text-lg mb-2">Con 30 clientes</p>
                <p className="text-sm text-gray-500">Ingresos mensuales recurrentes</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold gradient-text mb-3">$948</div>
                <p className="text-gray-400 text-lg mb-2">Con 60 clientes</p>
                <p className="text-sm text-gray-500">Ingresos mensuales recurrentes</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold gradient-text mb-3">$1,580</div>
                <p className="text-gray-400 text-lg mb-2">Con 100 clientes</p>
                <p className="text-sm text-gray-500">Ingresos mensuales recurrentes</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-400 mb-6">
                * Comisión del 20% sobre cada suscripción mientras el cliente permanezca activo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[150px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            ¿Listo para <span className="gradient-text">empezar</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Únete al programa de colaboradores y comienza a generar ingresos pasivos hoy mismo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-10 py-5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-lg transition-all glow-purple-strong hover:scale-105">
              Unirme al programa
            </button>
            <button className="px-10 py-5 rounded-full glass text-white font-semibold text-lg hover:bg-white/10 transition-all">
              Hablar con el equipo
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Sin costos de inscripción • Pagos mensuales automáticos • Soporte dedicado
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
                <li><Link href="/#features" className="hover:text-white transition-colors">Características</Link></li>
                <li><Link href="/#pricing" className="hover:text-white transition-colors">Precios</Link></li>
                <li><Link href="/colaboradores" className="hover:text-white transition-colors">Colaboradores</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
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
