import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";
import Logo from "../components/Logo";

export default function ContactoPage() {
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
            <Link href="/contacto" className="text-[var(--foreground)] font-medium">
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
      <section className="relative pt-32 pb-12 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-3s' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Estamos aquí para <span className="gradient-text">ayudarte</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Completa el formulario y nuestro equipo te responderá lo antes posible
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Support Card */}
              <div className="glass rounded-2xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[var(--foreground)]">Soporte Técnico</h3>
                <p className="text-gray-400 text-sm mb-4">
                  ¿Tienes un problema técnico? Abre un ticket y te ayudaremos.
                </p>
                <p className="text-sm text-gray-400">
                  Tiempo de respuesta: <span className="text-purple-500 font-medium">2-4 horas</span>
                </p>
              </div>

              {/* Sales Card */}
              <div className="glass rounded-2xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[var(--foreground)]">Consultas Comerciales</h3>
                <p className="text-gray-400 text-sm mb-4">
                  ¿Quieres saber más sobre nuestros planes? Contáctanos.
                </p>
                <p className="text-sm text-gray-400">
                  Email: <a href="mailto:ventas@kontaly.com" className="text-purple-500 hover:text-purple-400">ventas@kontaly.com</a>
                </p>
              </div>

              {/* Partnership Card */}
              <div className="glass rounded-2xl p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[var(--foreground)]">Colaboradores</h3>
                <p className="text-gray-400 text-sm mb-4">
                  ¿Interesado en nuestro programa de afiliados?
                </p>
                <Link href="/colaboradores" className="text-sm text-purple-500 hover:text-purple-400 font-medium">
                  Más información →
                </Link>
              </div>
            </div>

            {/* Form Container */}
            <div className="lg:col-span-2">
              <div className="glass rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-[var(--foreground)]">Envíanos un mensaje</h2>

                {/* Kontaly Contact Form */}
                <div id="contact-form-container" className="min-h-[500px]">
                  <iframe
                    width="100%"
                    height="850"
                    src="https://kontaly.com/forms/wtl/4cd39b8987c8617fb604ea3fbe5e1a20"
                    style={{ border: 0 }}
                    sandbox="allow-top-navigation allow-forms allow-scripts allow-same-origin allow-popups"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--foreground)]">
              ¿Buscas respuestas rápidas?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Visita nuestra sección de preguntas frecuentes
            </p>
            <Link href="/#faq" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold transition-all glow-purple-strong hover:scale-105">
              Ver preguntas frecuentes
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
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
