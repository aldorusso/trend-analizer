export default function TermsContent() {
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
                  Términos de Servicio
                </h1>
                <p className="fs-6 text-dark dark:text-white text-opacity-70">
                  Última actualización: 14 de octubre de 2025
                </p>
              </div>

              {/* Content */}
              <div className="panel prose prose-lg max-w-none dark:prose-invert">
                {/* 1. Aceptación de los Términos */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">1. Aceptación de los Términos</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70">
                    Al acceder y utilizar Kontaly ("el Servicio"), usted acepta estar legalmente vinculado por estos Términos de Servicio ("Términos"). Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro servicio.
                  </p>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70">
                    Estos Términos constituyen un acuerdo legal entre usted (ya sea como individuo o en nombre de una entidad) y Kontaly. Al crear una cuenta o utilizar el Servicio, usted confirma que tiene al menos 18 años de edad y capacidad legal para celebrar contratos vinculantes.
                  </p>
                </section>

                {/* 2. Descripción del Servicio */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">2. Descripción del Servicio</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70">
                    Kontaly es una plataforma de gestión empresarial basada en la nube (SaaS) que proporciona:
                  </p>
                  <ul className="fs-6 text-dark dark:text-white text-opacity-70">
                    <li>CRM (Gestión de Relaciones con Clientes)</li>
                    <li>Facturación electrónica con cumplimiento de Verifactu</li>
                    <li>Gestión de proyectos y tareas</li>
                    <li>Control de inventarios</li>
                    <li>Gestión de gastos e ingresos</li>
                    <li>Informes y análisis financieros</li>
                    <li>Gestión de equipos y colaboradores</li>
                    <li>Integración con sistemas de pago y contabilidad</li>
                  </ul>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70">
                    Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto del Servicio en cualquier momento, con o sin previo aviso.
                  </p>
                </section>

                {/* 3. Registro y Cuenta */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">3. Registro y Cuenta</h2>

                  <h3 className="h5 mb-2">3.1 Creación de Cuenta</h3>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    Para utilizar Kontaly, debe registrarse y crear una cuenta. Usted se compromete a:
                  </p>
                  <ul className="fs-6 text-dark dark:text-white text-opacity-70 mb-4">
                    <li>Proporcionar información precisa, actualizada y completa</li>
                    <li>Mantener la seguridad de su contraseña</li>
                    <li>Notificarnos inmediatamente de cualquier uso no autorizado</li>
                    <li>Ser responsable de todas las actividades bajo su cuenta</li>
                  </ul>

                  <h3 className="h5 mb-2">3.2 Responsabilidad de la Cuenta</h3>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70">
                    Usted es el único responsable de mantener la confidencialidad de su cuenta y contraseña. Kontaly no será responsable de ninguna pérdida o daño derivado del incumplimiento de estas obligaciones de seguridad.
                  </p>
                </section>

                {/* 4. Planes y Pagos */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">4. Planes y Pagos</h2>

                  <h3 className="h5 mb-2">4.1 Planes de Suscripción</h3>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    Kontaly ofrece diferentes planes de suscripción con características y precios variables:
                  </p>
                  <ul className="fs-6 text-dark dark:text-white text-opacity-70 mb-4">
                    <li><strong>Plan Starter:</strong> €27/mes - Ideal para pequeños negocios</li>
                    <li><strong>Plan Professional:</strong> €73/mes - Para empresas en crecimiento</li>
                    <li><strong>Plan Business:</strong> €139/mes - Para grandes empresas</li>
                  </ul>

                  <h3 className="h5 mb-2">4.2 Facturación y Renovación</h3>
                  <ul className="fs-6 text-dark dark:text-white text-opacity-70 mb-4">
                    <li>Las suscripciones se renuevan automáticamente cada mes</li>
                    <li>Se le cobrará al inicio de cada período de facturación</li>
                    <li>Los precios están sujetos a cambios con notificación previa de 30 días</li>
                    <li>Todos los precios están en euros (€) e incluyen IVA cuando aplique</li>
                  </ul>

                  <h3 className="h5 mb-2">4.3 Política de Reembolsos</h3>
                  <ul className="fs-6 text-dark dark:text-white text-opacity-70 mb-4">
                    <li>Ofrecemos una garantía de satisfacción de 14 días para nuevos clientes</li>
                    <li>Los reembolsos de meses parciales no están disponibles</li>
                    <li>Las cancelaciones se efectúan al final del período de facturación actual</li>
                  </ul>

                  <h3 className="h5 mb-2">4.4 Cancelación</h3>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70">
                    Puede cancelar su suscripción en cualquier momento desde la configuración de su cuenta. La cancelación será efectiva al final del período de facturación actual, y conservará acceso hasta entonces.
                  </p>
                </section>

                {/* 5. Uso Aceptable */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">5. Uso Aceptable</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    Al utilizar Kontaly, usted acepta NO:
                  </p>
                  <ul className="fs-6 text-dark dark:text-white text-opacity-70">
                    <li>Violar leyes, regulaciones o derechos de terceros</li>
                    <li>Usar el Servicio para actividades fraudulentas o ilegales</li>
                    <li>Intentar acceder sin autorización a sistemas o redes</li>
                    <li>Interferir con el funcionamiento del Servicio</li>
                    <li>Transmitir virus, malware o código malicioso</li>
                    <li>Realizar ingeniería inversa o descompilar el software</li>
                    <li>Revender, alquilar o arrendar el Servicio sin autorización</li>
                    <li>Usar el Servicio para enviar spam o comunicaciones no solicitadas</li>
                    <li>Recopilar datos de otros usuarios sin su consentimiento</li>
                    <li>Publicar contenido ofensivo, difamatorio o ilegal</li>
                  </ul>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mt-3">
                    El incumplimiento de esta política puede resultar en la suspensión o terminación inmediata de su cuenta.
                  </p>
                </section>

                {/* 6. Propiedad Intelectual */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">6. Propiedad Intelectual</h2>

                  <h3 className="h5 mb-2">6.1 Propiedad de Kontaly</h3>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    El Servicio, incluyendo su código, diseño, contenido, marca y todos los derechos de propiedad intelectual relacionados, son propiedad exclusiva de Kontaly. Estos Términos no le otorgan ningún derecho de propiedad sobre el Servicio.
                  </p>

                  <h3 className="h5 mb-2">6.2 Sus Datos</h3>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    Usted conserva todos los derechos sobre los datos que ingresa en el Servicio. Al usar Kontaly, nos otorga una licencia limitada para:
                  </p>
                  <ul className="fs-6 text-dark dark:text-white text-opacity-70">
                    <li>Almacenar y procesar sus datos para proporcionar el Servicio</li>
                    <li>Realizar backups y recuperación de datos</li>
                    <li>Generar estadísticas anónimas y agregadas</li>
                    <li>Cumplir con obligaciones legales</li>
                  </ul>

                  <h3 className="h5 mb-2">6.3 Feedback</h3>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70">
                    Cualquier sugerencia, comentario o feedback que proporcione sobre el Servicio se considerará no confidencial, y nos otorga el derecho de utilizar dicho feedback sin restricciones ni compensación.
                  </p>
                </section>

                {/* 7. Privacidad y Seguridad */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">7. Privacidad y Seguridad</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    La recopilación y uso de su información personal está regida por nuestra <a href="/page-privacy" className="text-primary">Política de Privacidad</a>. Al utilizar el Servicio, usted acepta dicha política.
                  </p>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70">
                    Implementamos medidas de seguridad técnicas y organizativas de acuerdo con estándares de la industria, incluyendo encriptación SSL/TLS, controles de acceso y auditorías regulares. Sin embargo, ningún sistema es completamente seguro, y no podemos garantizar la seguridad absoluta de sus datos.
                  </p>
                </section>

                {/* 8. Disponibilidad del Servicio */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">8. Disponibilidad del Servicio</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    Nos esforzamos por mantener el Servicio disponible el 99.9% del tiempo. Sin embargo, no garantizamos que el Servicio será:
                  </p>
                  <ul className="fs-6 text-dark dark:text-white text-opacity-70">
                    <li>Ininterrumpido, oportuno o libre de errores</li>
                    <li>Seguro o libre de virus o componentes dañinos</li>
                    <li>Preciso, confiable o completo en todos los aspectos</li>
                  </ul>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mt-3">
                    Podemos realizar mantenimiento programado con previo aviso. En caso de mantenimiento no programado o emergencias, haremos esfuerzos razonables para notificar a los usuarios.
                  </p>
                </section>

                {/* 9. Respaldo de Datos */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">9. Respaldo de Datos</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70">
                    Realizamos backups automáticos diarios de todos los datos. Sin embargo, es su responsabilidad mantener copias de respaldo de sus datos críticos. No seremos responsables de la pérdida de datos causada por:
                  </p>
                  <ul className="fs-6 text-dark dark:text-white text-opacity-70">
                    <li>Errores del usuario o eliminación accidental</li>
                    <li>Fallos de hardware o software imprevistos</li>
                    <li>Ataques cibernéticos o violaciones de seguridad</li>
                    <li>Desastres naturales o casos de fuerza mayor</li>
                  </ul>
                </section>

                {/* 10. Terminación */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">10. Terminación</h2>

                  <h3 className="h5 mb-2">10.1 Por Su Parte</h3>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    Puede cancelar su cuenta en cualquier momento desde la configuración de su cuenta o contactándonos. La cancelación será efectiva al final del período de facturación actual.
                  </p>

                  <h3 className="h5 mb-2">10.2 Por Nuestra Parte</h3>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    Podemos suspender o terminar su cuenta inmediatamente si:
                  </p>
                  <ul className="fs-6 text-dark dark:text-white text-opacity-70 mb-4">
                    <li>Incumple estos Términos de Servicio</li>
                    <li>No paga las tarifas correspondientes</li>
                    <li>Su uso pone en riesgo la seguridad o estabilidad del Servicio</li>
                    <li>Es requerido por ley o por orden judicial</li>
                  </ul>

                  <h3 className="h5 mb-2">10.3 Efectos de la Terminación</h3>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70">
                    Tras la terminación de su cuenta, perderá acceso al Servicio y sus datos. Proporcionamos un período de gracia de 30 días para exportar sus datos. Después de este período, sus datos serán eliminados permanentemente.
                  </p>
                </section>

                {/* 11. Limitación de Responsabilidad */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">11. Limitación de Responsabilidad</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY:
                  </p>
                  <ul className="fs-6 text-dark dark:text-white text-opacity-70">
                    <li>El Servicio se proporciona "TAL CUAL" y "SEGÚN DISPONIBILIDAD"</li>
                    <li>No ofrecemos garantías expresas o implícitas sobre el Servicio</li>
                    <li>No seremos responsables de daños indirectos, incidentales, especiales o consecuentes</li>
                    <li>Nuestra responsabilidad total no excederá las tarifas pagadas en los últimos 12 meses</li>
                    <li>No somos responsables de decisiones comerciales basadas en el uso del Servicio</li>
                  </ul>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mt-3">
                    Algunas jurisdicciones no permiten la exclusión de ciertas garantías o limitaciones de responsabilidad, por lo que estas limitaciones pueden no aplicarse en su caso.
                  </p>
                </section>

                {/* 12. Indemnización */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">12. Indemnización</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70">
                    Usted acepta indemnizar, defender y eximir de responsabilidad a Kontaly, sus directores, empleados y agentes de cualquier reclamación, pérdida, responsabilidad, daño, costo o gasto (incluyendo honorarios legales) que surja de:
                  </p>
                  <ul className="fs-6 text-dark dark:text-white text-opacity-70">
                    <li>Su uso o mal uso del Servicio</li>
                    <li>Su violación de estos Términos</li>
                    <li>Su violación de derechos de terceros</li>
                    <li>Contenido o datos que proporcione al Servicio</li>
                  </ul>
                </section>

                {/* 13. Cumplimiento con Verifactu */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">13. Cumplimiento con Verifactu</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    Kontaly está diseñado para cumplir con la normativa española de Verifactu para facturación electrónica:
                  </p>
                  <ul className="fs-6 text-dark dark:text-white text-opacity-70">
                    <li>Generación de facturas con código QR verificable</li>
                    <li>Trazabilidad completa de todas las operaciones</li>
                    <li>Almacenamiento seguro según requisitos legales</li>
                    <li>Integridad de datos mediante firma electrónica</li>
                    <li>Envío automático a la Agencia Tributaria (cuando aplique)</li>
                  </ul>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mt-3">
                    Sin embargo, es su responsabilidad asegurarse de que el uso del Servicio cumple con todas las obligaciones fiscales y legales aplicables a su negocio.
                  </p>
                </section>

                {/* 14. Ley Aplicable y Jurisdicción */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">14. Ley Aplicable y Jurisdicción</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70">
                    Estos Términos se regirán e interpretarán de acuerdo con las leyes de España, sin dar efecto a sus disposiciones sobre conflictos de leyes. Cualquier disputa relacionada con estos Términos o el Servicio estará sujeta a la jurisdicción exclusiva de los tribunales de Madrid, España.
                  </p>
                </section>

                {/* 15. Resolución de Disputas */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">15. Resolución de Disputas</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    En caso de controversia o reclamación relacionada con el Servicio:
                  </p>
                  <ol className="fs-6 text-dark dark:text-white text-opacity-70">
                    <li><strong>Negociación informal:</strong> Primero debe contactarnos en <a href="mailto:support@kontaly.com" className="text-primary">support@kontaly.com</a> para intentar resolver la disputa de manera informal.</li>
                    <li><strong>Mediación:</strong> Si no se resuelve en 30 días, las partes pueden acordar mediación.</li>
                    <li><strong>Arbitraje:</strong> Como alternativa al litigio, puede optar por arbitraje vinculante.</li>
                    <li><strong>Acción judicial:</strong> Si las opciones anteriores fallan, puede presentar una demanda en los tribunales competentes.</li>
                  </ol>
                </section>

                {/* 16. Disposiciones Generales */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">16. Disposiciones Generales</h2>

                  <h3 className="h5 mb-2">16.1 Modificaciones</h3>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    Podemos modificar estos Términos en cualquier momento. Le notificaremos cambios significativos por correo electrónico o mediante un aviso en el Servicio con al menos 30 días de anticipación. El uso continuado del Servicio después de los cambios constituye su aceptación.
                  </p>

                  <h3 className="h5 mb-2">16.2 Cesión</h3>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    No puede ceder o transferir estos Términos sin nuestro consentimiento previo por escrito. Podemos ceder nuestros derechos en caso de fusión, adquisición o venta de activos.
                  </p>

                  <h3 className="h5 mb-2">16.3 Divisibilidad</h3>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    Si alguna disposición de estos Términos es considerada inválida o inaplicable, las demás disposiciones permanecerán en pleno vigor y efecto.
                  </p>

                  <h3 className="h5 mb-2">16.4 Acuerdo Completo</h3>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    Estos Términos, junto con nuestra Política de Privacidad, constituyen el acuerdo completo entre usted y Kontaly respecto al uso del Servicio.
                  </p>

                  <h3 className="h5 mb-2">16.5 Renuncia</h3>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70">
                    El hecho de que no ejerzamos o hagamos cumplir cualquier derecho o disposición de estos Términos no constituirá una renuncia a dicho derecho o disposición.
                  </p>
                </section>

                {/* 17. Contacto */}
                <section className="mb-6">
                  <h2 className="h4 mb-3">17. Contacto</h2>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-3">
                    Si tiene preguntas sobre estos Términos de Servicio, contáctenos:
                  </p>
                  <ul className="fs-6 text-dark dark:text-white text-opacity-70">
                    <li><strong>Email de soporte:</strong> <a href="mailto:support@kontaly.com" className="text-primary">support@kontaly.com</a></li>
                    <li><strong>Email legal:</strong> <a href="mailto:legal@kontaly.com" className="text-primary">legal@kontaly.com</a></li>
                    <li><strong>Formulario de contacto:</strong> <a href="/page-contact" className="text-primary">Página de contacto</a></li>
                  </ul>
                  <p className="fs-6 text-dark dark:text-white text-opacity-70 mt-4">
                    <strong>Kontaly</strong><br />
                    Plataforma de Gestión Empresarial<br />
                    <a href="https://www.kontaly.com" className="text-primary">www.kontaly.com</a>
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
