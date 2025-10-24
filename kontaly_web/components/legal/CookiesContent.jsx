export default function CookiesContent() {
  return (
    <div className="section panel overflow-hidden">
      <div className="section-outer panel py-6 sm:py-8 lg:py-9">
        <div className="container max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack gap-4 sm:gap-6"
              data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              {/* Header */}
              <div className="vstack gap-2 text-center">
                <h1 className="h2 sm:h1 lg:display-6 m-0">
                  Política de Cookies
                </h1>
                <p className="fs-6 text-dark dark:text-white text-opacity-70">
                  Última actualización: 14 de octubre de 2025
                </p>
              </div>

              {/* Content */}
              <div className="panel prose prose-lg max-w-none dark:prose-invert">
                {/* 1. ¿Qué son las Cookies? */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">1. ¿Qué son las Cookies?</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70">
                    Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet o móvil) cuando visita un sitio web. Permiten que el sitio web recuerde sus acciones y preferencias durante un período de tiempo, para que no tenga que volver a introducirlas cada vez que regrese al sitio o navegue de una página a otra.
                  </p>
                </section>

                {/* 2. ¿Cómo Usamos las Cookies? */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">2. ¿Cómo Usamos las Cookies?</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    Utilizamos cookies para mejorar su experiencia en Kontaly, proporcionarle funcionalidades esenciales y analizar cómo se utiliza nuestro servicio. Las cookies nos ayudan a:
                  </p>
                  <ul className="fs-6 text-dark dark:text-white text-opacity-70">
                    <li>Mantener su sesión iniciada de forma segura</li>
                    <li>Recordar sus preferencias y configuraciones</li>
                    <li>Entender cómo utiliza nuestro servicio</li>
                    <li>Mejorar el rendimiento y la funcionalidad</li>
                    <li>Personalizar su experiencia</li>
                    <li>Proteger contra actividades fraudulentas</li>
                  </ul>
                </section>

                {/* 3. Tipos de Cookies */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">3. Tipos de Cookies que Utilizamos</h2>

                  <h3 className="h5 mb-3">3.1 Cookies Estrictamente Necesarias</h3>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    Estas cookies son esenciales para que el sitio web funcione correctamente. No se pueden desactivar.
                  </p>

                  <div className="overflow-x-auto mb-4">
                    <table className="w-100 border border-gray-200 dark:border-gray-700 rounded">
                      <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                          <th className="px-4 py-3 text-left fs-6 fw-bold">Cookie</th>
                          <th className="px-4 py-3 text-left fs-6 fw-bold">Propósito</th>
                          <th className="px-4 py-3 text-left fs-6 fw-bold">Duración</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-gray-200 dark:border-gray-700">
                          <td className="px-4 py-3 fs-6"><code>session_token</code></td>
                          <td className="px-4 py-3 fs-6">Mantiene su sesión activa</td>
                          <td className="px-4 py-3 fs-6">Sesión</td>
                        </tr>
                        <tr className="border-t border-gray-200 dark:border-gray-700">
                          <td className="px-4 py-3 fs-6"><code>csrf_token</code></td>
                          <td className="px-4 py-3 fs-6">Protección contra ataques CSRF</td>
                          <td className="px-4 py-3 fs-6">Sesión</td>
                        </tr>
                        <tr className="border-t border-gray-200 dark:border-gray-700">
                          <td className="px-4 py-3 fs-6"><code>auth_token</code></td>
                          <td className="px-4 py-3 fs-6">Autenticación del usuario</td>
                          <td className="px-4 py-3 fs-6">30 días</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="h5 mb-3">3.2 Cookies de Funcionalidad</h3>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    Estas cookies permiten que el sitio web recuerde sus elecciones y preferencias.
                  </p>

                  <div className="overflow-x-auto mb-4">
                    <table className="w-100 border border-gray-200 dark:border-gray-700 rounded">
                      <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                          <th className="px-4 py-3 text-left fs-6 fw-bold">Cookie</th>
                          <th className="px-4 py-3 text-left fs-6 fw-bold">Propósito</th>
                          <th className="px-4 py-3 text-left fs-6 fw-bold">Duración</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-gray-200 dark:border-gray-700">
                          <td className="px-4 py-3 fs-6"><code>theme_preference</code></td>
                          <td className="px-4 py-3 fs-6">Guarda su preferencia de tema (claro/oscuro)</td>
                          <td className="px-4 py-3 fs-6">1 año</td>
                        </tr>
                        <tr className="border-t border-gray-200 dark:border-gray-700">
                          <td className="px-4 py-3 fs-6"><code>language</code></td>
                          <td className="px-4 py-3 fs-6">Idioma seleccionado</td>
                          <td className="px-4 py-3 fs-6">1 año</td>
                        </tr>
                        <tr className="border-t border-gray-200 dark:border-gray-700">
                          <td className="px-4 py-3 fs-6"><code>timezone</code></td>
                          <td className="px-4 py-3 fs-6">Zona horaria del usuario</td>
                          <td className="px-4 py-3 fs-6">1 año</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="h5 mb-3">3.3 Cookies de Rendimiento y Analíticas</h3>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    Estas cookies nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.
                  </p>

                  <div className="overflow-x-auto mb-4">
                    <table className="w-100 border border-gray-200 dark:border-gray-700 rounded">
                      <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                          <th className="px-4 py-3 text-left fs-6 fw-bold">Cookie</th>
                          <th className="px-4 py-3 text-left fs-6 fw-bold">Propósito</th>
                          <th className="px-4 py-3 text-left fs-6 fw-bold">Duración</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-gray-200 dark:border-gray-700">
                          <td className="px-4 py-3 fs-6"><code>_ga</code></td>
                          <td className="px-4 py-3 fs-6">Google Analytics - Distingue usuarios</td>
                          <td className="px-4 py-3 fs-6">2 años</td>
                        </tr>
                        <tr className="border-t border-gray-200 dark:border-gray-700">
                          <td className="px-4 py-3 fs-6"><code>_gid</code></td>
                          <td className="px-4 py-3 fs-6">Google Analytics - Distingue usuarios</td>
                          <td className="px-4 py-3 fs-6">24 horas</td>
                        </tr>
                        <tr className="border-t border-gray-200 dark:border-gray-700">
                          <td className="px-4 py-3 fs-6"><code>_gat</code></td>
                          <td className="px-4 py-3 fs-6">Google Analytics - Limita peticiones</td>
                          <td className="px-4 py-3 fs-6">1 minuto</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="h5 mb-3">3.4 Cookies de Marketing y Publicidad</h3>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    Estas cookies se utilizan para mostrar anuncios relevantes y medir la efectividad de nuestras campañas.
                  </p>

                  <div className="overflow-x-auto mb-4">
                    <table className="w-100 border border-gray-200 dark:border-gray-700 rounded">
                      <thead className="bg-gray-50 dark:bg-gray-800">
                        <tr>
                          <th className="px-4 py-3 text-left fs-6 fw-bold">Cookie</th>
                          <th className="px-4 py-3 text-left fs-6 fw-bold">Propósito</th>
                          <th className="px-4 py-3 text-left fs-6 fw-bold">Duración</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-gray-200 dark:border-gray-700">
                          <td className="px-4 py-3 fs-6"><code>_fbp</code></td>
                          <td className="px-4 py-3 fs-6">Facebook Pixel - Seguimiento</td>
                          <td className="px-4 py-3 fs-6">3 meses</td>
                        </tr>
                        <tr className="border-t border-gray-200 dark:border-gray-700">
                          <td className="px-4 py-3 fs-6"><code>ads_preferences</code></td>
                          <td className="px-4 py-3 fs-6">Preferencias publicitarias</td>
                          <td className="px-4 py-3 fs-6">1 año</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* 4. Cookies de Terceros */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">4. Cookies de Terceros</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    Utilizamos servicios de terceros que también pueden establecer cookies en su dispositivo:
                  </p>

                  <div className="vstack gap-3">
                    <div className="panel p-4 bg-gray-50 dark:bg-gray-800 rounded">
                      <h4 className="h6 fw-bold mb-2">Google Analytics</h4>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-1">
                        Para análisis de tráfico y comportamiento de usuarios.
                      </p>
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fs-6 text-primary"
                      >
                        Política de privacidad de Google
                      </a>
                    </div>

                    <div className="panel p-4 bg-gray-50 dark:bg-gray-800 rounded">
                      <h4 className="h6 fw-bold mb-2">Stripe</h4>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-1">
                        Para procesamiento seguro de pagos.
                      </p>
                      <a
                        href="https://stripe.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fs-6 text-primary"
                      >
                        Política de privacidad de Stripe
                      </a>
                    </div>

                    <div className="panel p-4 bg-gray-50 dark:bg-gray-800 rounded">
                      <h4 className="h6 fw-bold mb-2">Intercom</h4>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-1">
                        Para chat de soporte en vivo.
                      </p>
                      <a
                        href="https://www.intercom.com/legal/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fs-6 text-primary"
                      >
                        Política de privacidad de Intercom
                      </a>
                    </div>
                  </div>
                </section>

                {/* 5. Gestión de Cookies */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">5. Gestión de Cookies</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    Puede controlar y gestionar las cookies de varias maneras:
                  </p>

                  <h3 className="h5 mb-2">5.1 Configuración del Navegador</h3>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-2">
                    La mayoría de los navegadores web permiten controlar las cookies a través de la configuración. Para obtener instrucciones específicas:
                  </p>
                  <ul className="fs-6 text-dark dark:text-white text-opacity-70 mb-4">
                    <li>
                      <a
                        href="https://support.google.com/chrome/answer/95647"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary"
                      >
                        Google Chrome
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary"
                      >
                        Mozilla Firefox
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary"
                      >
                        Safari
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary"
                      >
                        Microsoft Edge
                      </a>
                    </li>
                  </ul>

                  <h3 className="h5 mb-2">5.2 Panel de Preferencias de Cookies</h3>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-4">
                    Puede gestionar sus preferencias de cookies en cualquier momento desde nuestro panel de configuración de cookies en el pie de página del sitio web.
                  </p>

                  <h3 className="h5 mb-2">5.3 Herramientas de Exclusión</h3>
                  <ul className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    <li>
                      <a
                        href="https://tools.google.com/dlpage/gaoptout"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary"
                      >
                        Complemento de inhabilitación para Google Analytics
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youronlinechoices.com/es/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary"
                      >
                        Your Online Choices
                      </a>
                    </li>
                  </ul>

                  <div className="panel p-4 bg-warning bg-opacity-10 border border-warning rounded mt-3">
                    <p className="fs-6 text-dark dark:text-white fw-medium m-0">
                      <strong>Importante:</strong> Tenga en cuenta que bloquear algunas cookies puede afectar la funcionalidad del sitio web y su experiencia de usuario. Las cookies estrictamente necesarias no se pueden desactivar ya que son esenciales para el funcionamiento del servicio.
                    </p>
                  </div>
                </section>

                {/* 6. Cookies y Dispositivos Móviles */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">6. Cookies y Dispositivos Móviles</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70">
                    Si accede a nuestro servicio a través de un dispositivo móvil, las cookies funcionan de manera similar. Puede gestionar las preferencias de cookies a través de la configuración de su navegador móvil. Además, podemos utilizar identificadores de dispositivos móviles para análisis y personalización.
                  </p>
                </section>

                {/* 7. Actualizaciones */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">7. Actualizaciones de esta Política</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70">
                    Podemos actualizar esta Política de Cookies ocasionalmente para reflejar cambios en las cookies que utilizamos o por otras razones operativas, legales o regulatorias. Revisaremos la fecha de "Última actualización" en la parte superior de esta página.
                  </p>
                </section>

                {/* 8. Más Información */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">8. Más Información</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70">
                    Para obtener más información sobre cómo manejamos sus datos personales, consulte nuestra{" "}
                    <a href="/page-privacy" className="text-primary">Política de Privacidad</a>.
                  </p>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mt-3">
                    Si tiene preguntas sobre nuestro uso de cookies, contáctenos en{" "}
                    <a href="mailto:privacy@kontaly.com" className="text-primary">privacy@kontaly.com</a>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
