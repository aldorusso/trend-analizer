import Link from "next/link";

export default function LegalContent() {
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
                  Información Legal
                </h1>
                <p className="fs-6 text-dark dark:text-white text-opacity-70">
                  Documentación legal y avisos importantes
                </p>
              </div>

              {/* Content */}
              <div className="panel prose prose-lg max-w-none dark:prose-invert">
                {/* Información de la Empresa */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">Información de la Empresa</h2>
                  <div className="panel p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-2">
                    <div className="vstack gap-2">
                      <p className="fs-6 text-dark dark:text-white text-opacity-70 m-0">
                        <strong>Nombre de la empresa:</strong> Kontaly SL
                      </p>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70 m-0">
                        <strong>NIF:</strong> B-XXXXXXXX
                      </p>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70 m-0">
                        <strong>Dirección:</strong> [Calle, Número, Código Postal, Ciudad, País]
                      </p>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70 m-0">
                        <strong>Email:</strong>{" "}
                        <a href="mailto:legal@kontaly.com" className="text-primary">
                          legal@kontaly.com
                        </a>
                      </p>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70 m-0">
                        <strong>Teléfono:</strong> +34 XXX XXX XXX
                      </p>
                      <p className="fs-6 text-dark dark:text-white text-opacity-70 m-0">
                        <strong>Registro Mercantil:</strong> [Ciudad], Tomo [XX], Folio [XX], Hoja [XX]
                      </p>
                    </div>
                  </div>
                </section>

                {/* Documentos Legales */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">Documentos Legales</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-4">
                    Nuestro marco legal se compone de los siguientes documentos. Le recomendamos leer cada uno de ellos detenidamente:
                  </p>

                  <div className="row g-3 g-lg-4">
                    {/* Política de Privacidad */}
                    <div className="col-12 sm:col-6">
                      <Link href="/page-privacy">
                        <div className="panel p-4 lg:p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2 h-100 hover:border-primary dark:hover:border-primary transition-all duration-300">
                          <div className="vstack gap-2">
                            <div className="w-48px h-48px bg-primary bg-opacity-10 rounded-1 d-flex justify-center items-center mb-2">
                              <i className="icon icon-3 unicon-shield-check text-primary"></i>
                            </div>
                            <h3 className="h6 fw-bold m-0">Política de Privacidad</h3>
                            <p className="fs-6 text-dark dark:text-white text-opacity-70 m-0">
                              Cómo recopilamos, usamos y protegemos sus datos personales
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* Términos de Servicio */}
                    <div className="col-12 sm:col-6">
                      <Link href="/page-terms">
                        <div className="panel p-4 lg:p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2 h-100 hover:border-primary dark:hover:border-primary transition-all duration-300">
                          <div className="vstack gap-2">
                            <div className="w-48px h-48px bg-success bg-opacity-10 rounded-1 d-flex justify-center items-center mb-2">
                              <i className="icon icon-3 unicon-file-contract-alt text-success"></i>
                            </div>
                            <h3 className="h6 fw-bold m-0">Términos de Servicio</h3>
                            <p className="fs-6 text-dark dark:text-white text-opacity-70 m-0">
                              Condiciones de uso de nuestros servicios
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* Política de Cookies */}
                    <div className="col-12 sm:col-6">
                      <Link href="/page-cookies">
                        <div className="panel p-4 lg:p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2 h-100 hover:border-primary dark:hover:border-primary transition-all duration-300">
                          <div className="vstack gap-2">
                            <div className="w-48px h-48px bg-warning bg-opacity-10 rounded-1 d-flex justify-center items-center mb-2">
                              <i className="icon icon-3 unicon-cookie text-warning"></i>
                            </div>
                            <h3 className="h6 fw-bold m-0">Política de Cookies</h3>
                            <p className="fs-6 text-dark dark:text-white text-opacity-70 m-0">
                              Información sobre el uso de cookies en nuestro sitio
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* SLA */}
                    <div className="col-12 sm:col-6">
                      <div className="panel p-4 lg:p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2 h-100">
                        <div className="vstack gap-2">
                          <div className="w-48px h-48px bg-info bg-opacity-10 rounded-1 d-flex justify-center items-center mb-2">
                            <i className="icon icon-3 unicon-chart-line text-info"></i>
                          </div>
                          <h3 className="h6 fw-bold m-0">SLA (Nivel de Servicio)</h3>
                          <p className="fs-6 text-dark dark:text-white text-opacity-70 m-0">
                            Compromiso de disponibilidad 99.9% del tiempo
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Cumplimiento Normativo */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">Cumplimiento Normativo</h2>

                  {/* GDPR */}
                  <div className="panel p-4 lg:p-5 bg-primary bg-opacity-5 border border-primary border-opacity-20 rounded-2 mb-4">
                    <h3 className="h5 fw-bold mb-2">GDPR (Reglamento General de Protección de Datos)</h3>
                    <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                      Cumplimos plenamente con el GDPR de la Unión Europea. Nuestros procesos garantizan:
                    </p>
                    <ul className="fs-6 text-dark dark:text-white text-opacity-70">
                      <li>Transparencia en el tratamiento de datos personales</li>
                      <li>Derechos de acceso, rectificación, supresión y portabilidad</li>
                      <li>Medidas técnicas y organizativas de seguridad</li>
                      <li>Notificación de brechas de seguridad en 72 horas</li>
                      <li>Designación de Delegado de Protección de Datos (DPO)</li>
                    </ul>
                  </div>

                  {/* LOPD-GDD */}
                  <div className="panel p-4 lg:p-5 bg-gray-50 dark:bg-gray-800 rounded-2 mb-4">
                    <h3 className="h5 fw-bold mb-2">LOPD-GDD (Ley Orgánica de Protección de Datos)</h3>
                    <p className="fs-6 text-dark dark:text-white text-opacity-70 m-0">
                      Cumplimos con la legislación española de protección de datos, garantizando el tratamiento lícito, leal y transparente de información personal de ciudadanos españoles.
                    </p>
                  </div>

                  {/* LSSI */}
                  <div className="panel p-4 lg:p-5 bg-gray-50 dark:bg-gray-800 rounded-2 mb-4">
                    <h3 className="h5 fw-bold mb-2">LSSI (Ley de Servicios de la Sociedad de la Información)</h3>
                    <p className="fs-6 text-dark dark:text-white text-opacity-70 m-0">
                      Cumplimos con la normativa española sobre servicios de la sociedad de la información y comercio electrónico, incluyendo la identificación clara del prestador del servicio y las comunicaciones comerciales.
                    </p>
                  </div>

                  {/* Verifactu */}
                  <div className="panel p-4 lg:p-5 bg-success bg-opacity-5 border border-success border-opacity-20 rounded-2 mb-4">
                    <h3 className="h5 fw-bold mb-2">Verifactu</h3>
                    <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                      Nuestro sistema de facturación cumple al 100% con la normativa Verifactu de la Agencia Tributaria española:
                    </p>
                    <ul className="fs-6 text-dark dark:text-white text-opacity-70">
                      <li>Registro obligatorio de todas las facturas</li>
                      <li>Integridad y trazabilidad de documentos fiscales</li>
                      <li>Encadenamiento de facturas mediante hash</li>
                      <li>Cumplimiento con el Reglamento de facturación</li>
                      <li>Adaptación automática a cambios normativos</li>
                    </ul>
                  </div>

                  {/* PCI DSS */}
                  <div className="panel p-4 lg:p-5 bg-gray-50 dark:bg-gray-800 rounded-2">
                    <h3 className="h5 fw-bold mb-2">PCI DSS (Seguridad de Datos para Tarjetas de Pago)</h3>
                    <p className="fs-6 text-dark dark:text-white text-opacity-70 m-0">
                      Trabajamos con procesadores de pago certificados PCI DSS (Stripe, PayPal) para garantizar la seguridad de las transacciones. No almacenamos información de tarjetas de crédito en nuestros servidores.
                    </p>
                  </div>
                </section>

                {/* Propiedad Intelectual */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">Propiedad Intelectual</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    Todos los derechos de propiedad intelectual sobre el contenido, diseño, código fuente, marcas y logotipos de Kontaly pertenecen a Kontaly SL o sus licenciantes.
                  </p>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70">
                    Está prohibida la reproducción, distribución, modificación o uso no autorizado de cualquier elemento protegido sin el consentimiento expreso por escrito de Kontaly SL.
                  </p>
                </section>

                {/* Resolución de Conflictos */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">Resolución de Conflictos</h2>

                  <h3 className="h5 mb-2">Resolución Alternativa de Disputas</h3>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    En caso de conflicto, alentamos la resolución amistosa mediante negociación directa. Si no es posible, puede acceder a la plataforma europea de resolución de litigios en línea:{" "}
                    <a
                      href="https://ec.europa.eu/consumers/odr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      https://ec.europa.eu/consumers/odr
                    </a>
                  </p>

                  <h3 className="h5 mb-2">Jurisdicción</h3>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70">
                    Para cualquier controversia que derive de estos términos o del uso del servicio, las partes se someten a la jurisdicción de los Juzgados y Tribunales de [Ciudad], España, renunciando expresamente a cualquier otro fuero que pudiera corresponderles.
                  </p>
                </section>

                {/* Certificaciones y Estándares */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">Certificaciones y Estándares</h2>
                  <div className="row g-3">
                    <div className="col-6 sm:col-3">
                      <div className="panel p-3 text-center bg-gray-50 dark:bg-gray-800 rounded-2">
                        <i className="icon icon-3 unicon-award text-primary mb-2"></i>
                        <h4 className="h6 fw-bold mb-1">ISO 27001</h4>
                        <p className="fs-7 text-dark dark:text-white text-opacity-70 m-0">
                          Gestión de seguridad de la información (en proceso)
                        </p>
                      </div>
                    </div>
                    <div className="col-6 sm:col-3">
                      <div className="panel p-3 text-center bg-gray-50 dark:bg-gray-800 rounded-2">
                        <i className="icon icon-3 unicon-lock text-success mb-2"></i>
                        <h4 className="h6 fw-bold mb-1">SSL/TLS</h4>
                        <p className="fs-7 text-dark dark:text-white text-opacity-70 m-0">
                          Encriptación de datos en tránsito
                        </p>
                      </div>
                    </div>
                    <div className="col-6 sm:col-3">
                      <div className="panel p-3 text-center bg-gray-50 dark:bg-gray-800 rounded-2">
                        <i className="icon icon-3 unicon-database text-warning mb-2"></i>
                        <h4 className="h6 fw-bold mb-1">Backups Diarios</h4>
                        <p className="fs-7 text-dark dark:text-white text-opacity-70 m-0">
                          Copias de seguridad automáticas
                        </p>
                      </div>
                    </div>
                    <div className="col-6 sm:col-3">
                      <div className="panel p-3 text-center bg-gray-50 dark:bg-gray-800 rounded-2">
                        <i className="icon icon-3 unicon-chart-line text-info mb-2"></i>
                        <h4 className="h6 fw-bold mb-1">SLA 99.9%</h4>
                        <p className="fs-7 text-dark dark:text-white text-opacity-70 m-0">
                          Garantía de disponibilidad del servicio
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Contacto Legal */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">Contacto Legal</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    Para consultas legales, protección de datos o ejercicio de derechos:
                  </p>
                  <div className="panel p-4 lg:p-5 bg-gray-50 dark:bg-gray-800 rounded-2">
                    <ul className="fs-6 text-dark dark:text-white text-opacity-70 mb-0">
                      <li>
                        <strong>Email Legal:</strong>{" "}
                        <a href="mailto:legal@kontaly.com" className="text-primary">
                          legal@kontaly.com
                        </a>
                      </li>
                      <li>
                        <strong>DPO (Delegado de Protección de Datos):</strong>{" "}
                        <a href="mailto:dpo@kontaly.com" className="text-primary">
                          dpo@kontaly.com
                        </a>
                      </li>
                      <li>
                        <strong>Dirección Postal:</strong> [Dirección completa de la empresa]
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Nota Importante */}
                <div className="panel p-4 lg:p-5 bg-info bg-opacity-10 border border-info rounded-2">
                  <p className="fs-6 text-dark dark:text-white fw-medium m-0">
                    <strong>Nota importante:</strong> Esta página contiene un resumen de nuestra información legal. Para conocer los detalles completos, consulte cada documento específico. Si tiene dudas sobre cualquier aspecto legal de nuestro servicio, no dude en contactarnos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
