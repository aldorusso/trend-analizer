export default function PrivacyContent() {
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
                  Política de Privacidad
                </h1>
                <p className="fs-6 text-dark dark:text-white text-opacity-70">
                  Última actualización: 14 de octubre de 2025
                </p>
              </div>

              {/* Content */}
              <div className="panel prose prose-lg max-w-none dark:prose-invert">
                {/* Introducción */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">1. Introducción</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70">
                    En Kontaly ("nosotros", "nuestro" o "la empresa"), respetamos su privacidad y nos comprometemos a proteger sus datos personales. Esta Política de Privacidad explica cómo recopilamos, usamos, compartimos y protegemos su información cuando utiliza nuestros servicios.
                  </p>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70">
                    Al utilizar Kontaly, usted acepta las prácticas descritas en esta política. Si no está de acuerdo con algún término, por favor no utilice nuestros servicios.
                  </p>
                </section>

                {/* Información que Recopilamos */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">2. Información que Recopilamos</h2>

                  <h3 className="h5 mb-2">2.1 Información que Usted Proporciona</h3>
                  <ul className="fs-6 text-dark dark:text-white text-opacity-70 mb-4">
                    <li><strong>Datos de cuenta:</strong> nombre, correo electrónico, contraseña, información de empresa</li>
                    <li><strong>Datos de facturación:</strong> información de pago, dirección de facturación</li>
                    <li><strong>Contenido:</strong> datos que ingresa en nuestro CRM (clientes, proyectos, facturas, etc.)</li>
                    <li><strong>Comunicaciones:</strong> mensajes que envía a nuestro equipo de soporte</li>
                  </ul>

                  <h3 className="h5 mb-2">2.2 Información Recopilada Automáticamente</h3>
                  <ul className="fs-6 text-dark dark:text-white text-opacity-70">
                    <li><strong>Datos de uso:</strong> páginas visitadas, características utilizadas, tiempo de uso</li>
                    <li><strong>Información del dispositivo:</strong> dirección IP, tipo de navegador, sistema operativo</li>
                    <li><strong>Cookies</strong> y tecnologías similares (ver nuestra Política de Cookies)</li>
                  </ul>
                </section>

                {/* Cómo Usamos su Información */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">3. Cómo Usamos su Información</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    Utilizamos su información personal para:
                  </p>
                  <ul className="fs-6 text-dark dark:text-white text-opacity-70">
                    <li>Proporcionar, mantener y mejorar nuestros servicios</li>
                    <li>Procesar transacciones y enviar confirmaciones</li>
                    <li>Enviar actualizaciones, notificaciones y comunicaciones del servicio</li>
                    <li>Proporcionar soporte técnico y responder a sus consultas</li>
                    <li>Detectar, prevenir y abordar problemas técnicos o de seguridad</li>
                    <li>Cumplir con obligaciones legales y regulatorias</li>
                    <li>Realizar análisis y mejoras del servicio</li>
                    <li>Enviar comunicaciones de marketing (solo con su consentimiento)</li>
                  </ul>
                </section>

                {/* Base Legal */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">4. Base Legal para el Procesamiento (GDPR)</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    Procesamos sus datos personales bajo las siguientes bases legales:
                  </p>
                  <ul className="fs-6 text-dark dark:text-white text-opacity-70">
                    <li><strong>Ejecución de contrato:</strong> para proporcionar los servicios que ha contratado</li>
                    <li><strong>Interés legítimo:</strong> para mejorar nuestros servicios y prevenir fraudes</li>
                    <li><strong>Consentimiento:</strong> para enviar comunicaciones de marketing</li>
                    <li><strong>Obligación legal:</strong> para cumplir con requisitos legales y fiscales</li>
                  </ul>
                </section>

                {/* Compartir Información */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">5. Compartir Información</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    No vendemos su información personal. Compartimos sus datos solo en las siguientes circunstancias:
                  </p>
                  <ul className="fs-6 text-dark dark:text-white text-opacity-70">
                    <li><strong>Proveedores de servicios:</strong> empresas que nos ayudan a operar (hosting, procesamiento de pagos, análisis)</li>
                    <li><strong>Cumplimiento legal:</strong> cuando sea requerido por ley o para proteger nuestros derechos</li>
                    <li><strong>Transacciones comerciales:</strong> en caso de fusión, adquisición o venta de activos</li>
                    <li><strong>Con su consentimiento:</strong> cuando usted autorice expresamente compartir su información</li>
                  </ul>
                </section>

                {/* Seguridad */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">6. Seguridad de los Datos</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos:
                  </p>
                  <ul className="fs-6 text-dark dark:text-white text-opacity-70">
                    <li>Encriptación SSL/TLS para datos en tránsito</li>
                    <li>Encriptación de datos en reposo</li>
                    <li>Controles de acceso estrictos y autenticación multifactor</li>
                    <li>Auditorías de seguridad regulares</li>
                    <li>Backups automáticos y planes de recuperación ante desastres</li>
                    <li>Cumplimiento con estándares de seguridad de la industria</li>
                  </ul>
                </section>

                {/* Sus Derechos */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">7. Sus Derechos</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    Bajo el GDPR y otras leyes de protección de datos, usted tiene los siguientes derechos:
                  </p>
                  <ul className="fs-6 text-dark dark:text-white text-opacity-70">
                    <li><strong>Acceso:</strong> solicitar una copia de sus datos personales</li>
                    <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos</li>
                    <li><strong>Eliminación:</strong> solicitar la eliminación de sus datos ("derecho al olvido")</li>
                    <li><strong>Portabilidad:</strong> recibir sus datos en formato estructurado y legible</li>
                    <li><strong>Oposición:</strong> oponerse al procesamiento de sus datos</li>
                    <li><strong>Restricción:</strong> solicitar la limitación del procesamiento</li>
                    <li><strong>Retirar consentimiento:</strong> en cualquier momento, sin afectar la legalidad del procesamiento previo</li>
                  </ul>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70">
                    Para ejercer sus derechos, contáctenos en <a href="mailto:privacy@kontaly.com" className="text-primary">privacy@kontaly.com</a>
                  </p>
                </section>

                {/* Retención de Datos */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">8. Retención de Datos</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70">
                    Conservamos su información personal mientras su cuenta esté activa o según sea necesario para proporcionar nuestros servicios. Después de la cancelación de su cuenta, conservamos ciertos datos durante el período requerido por ley (generalmente 7 años para datos fiscales) o para resolver disputas y hacer cumplir nuestros acuerdos.
                  </p>
                </section>

                {/* Transferencias Internacionales */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">9. Transferencias Internacionales</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70">
                    Sus datos pueden ser transferidos y procesados en países fuera del Espacio Económico Europeo (EEE). Cuando esto ocurra, nos aseguramos de que existan garantías adecuadas mediante cláusulas contractuales estándar de la UE u otros mecanismos legales aprobados.
                  </p>
                </section>

                {/* Menores de Edad */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">10. Menores de Edad</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70">
                    Nuestros servicios no están dirigidos a menores de 16 años. No recopilamos intencionalmente información personal de menores. Si descubrimos que hemos recopilado datos de un menor, tomaremos medidas para eliminar esa información.
                  </p>
                </section>

                {/* Cambios */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">11. Cambios a esta Política</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70">
                    Podemos actualizar esta Política de Privacidad periódicamente. Le notificaremos cualquier cambio significativo por correo electrónico o mediante un aviso destacado en nuestro servicio. Le recomendamos revisar esta política regularmente.
                  </p>
                </section>

                {/* Contacto */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">12. Contacto</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    Si tiene preguntas sobre esta Política de Privacidad o nuestras prácticas de datos, contáctenos:
                  </p>
                  <ul className="fs-6 text-dark dark:text-white text-opacity-70">
                    <li><strong>Email:</strong> <a href="mailto:privacy@kontaly.com" className="text-primary">privacy@kontaly.com</a></li>
                    <li><strong>Delegado de Protección de Datos:</strong> <a href="mailto:dpo@kontaly.com" className="text-primary">dpo@kontaly.com</a></li>
                  </ul>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mt-3">
                    También tiene derecho a presentar una queja ante la autoridad de protección de datos de su jurisdicción.
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
