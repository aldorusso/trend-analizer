import Image from "next/image";
import React from "react";

export default function Solutions() {
  return (
    <div
      id="key_features"
      className="key-features section panel overflow-hidden uc-dark lg:px-6"
    >
      <div
        className="section-outer panel py-4 md:py-6 xl:py-10 dark:text-white dark:text-opacity-60 rounded-2 lg:rounded-4"
        style={{ backgroundColor: '#0d262d' }}
        data-anime="onscroll: .key-features; onscroll-trigger: 1; onscoll-duration: 150%; translateY: [-80, 0]; scale: [0.85, 1]; opacity: [0.85, 1]; easing: linear;"
      >
        <Image
          className="d-none lg:d-inline-block w-200px position-absolute"
          alt="man-trigger"
          style={{ bottom: "-5%", left: "20%" }}
          data-anime="onview: -200; scale: [0.8, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 500;"
          src="/assets/images/vectors/man-trigger.svg"
          width={136}
          height={171}
        />
        <Image
          className="d-none lg:d-inline-block w-32px position-absolute text-white"
          alt="appostrof"
          style={{ bottom: "16%", right: "33%", transform: "rotate(45deg)" }}
          data-uc-svg=""
          data-anime="onview: -200; scale: [0.8, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 500;"
          src="/assets/images/vectors/appostrof.svg"
          width={29}
          height={34}
        />
        <div className="container sm:max-w-lg">
          <div className="section-inner panel">
            <div
              className="panel vstack items-center gap-2 xl:gap-3 mb-4 sm:mb-6 lg:mb-8 sm:max-w-600px lg:max-w-700px xl:max-w-800px mx-auto text-center"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <span className="fs-7 fw-medium py-narrow px-2 border rounded-pill text-primary dark:text-tertiary">
                Potenciado por IA
              </span>
              <h2 className="h3 lg:h2 m-0">
                <span className="px-1 bg-tertiary text-primary">
                  Inteligencia Artificial
                </span>{" "}
                Integrada
              </h2>
              <p className="fs-6 xl:fs-3 xl:px-8">
                Kontaly integra OpenAI para ayudarte a trabajar más rápido y eficientemente
              </p>
            </div>
            <div
              className="features-items row child-cols-12 sm:child-cols-6 lg:child-cols-4 g-4 lg:g-6 col-match"
              data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 400});"
            >
              <div>
                <div className="features-item vstack items-center justify-center text-center gap-4">
                  <div className="icon-box cstack w-48px h-48px dark:bg-tertiary rounded">
                    <Image
                      className="w-24px xl:w-32px text-primary-400 dark:text-tertiary"
                      alt="feature-icon"
                      src="/assets/images/custom-icons/home-8-icon-01.svg"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="panel">
                    <div className="vstack gap-1">
                      <h3 className="title h6 m-0">Resumen de Tickets</h3>
                      <p className="desc fs-6 opacity-60 dark:opacity-90">
                        IA resume automáticamente tickets largos para comprensión rápida
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="features-item vstack items-center justify-center text-center gap-4">
                  <div className="icon-box cstack w-48px h-48px dark:bg-tertiary rounded">
                    <Image
                      className="w-24px xl:w-32px text-primary-400 dark:text-tertiary"
                      alt="feature-icon"
                      src="/assets/images/custom-icons/home-8-icon-02.svg"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="panel">
                    <div className="vstack gap-1">
                      <h3 className="title h6 m-0">Respuestas Sugeridas</h3>
                      <p className="desc fs-6 opacity-60 dark:opacity-90">
                        Sugerencias de respuestas inteligentes basadas en el contexto del ticket
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="features-item vstack items-center justify-center text-center gap-4">
                  <div className="icon-box cstack w-48px h-48px dark:bg-tertiary rounded">
                    <Image
                      className="w-24px xl:w-32px text-primary-400 dark:text-tertiary"
                      alt="feature-icon"
                      src="/assets/images/custom-icons/home-8-icon-03.svg"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="panel">
                    <div className="vstack gap-1">
                      <h3 className="title h6 m-0">Mejora de Tono</h3>
                      <p className="desc fs-6 opacity-60 dark:opacity-90">
                        Ajusta el tono de tus respuestas para sonar más profesional o amigable
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="pre-cta vstack items-center gap-1 max-w-400px lg:max-w-750px mx-auto text-center mt-6 xl:mt-10"
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h4 xl:h3 m-0">
                Y mucho más...
              </h2>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                Sistema de Tickets, Contratos con firma electrónica, Gestión de Gastos, Objetivos, Encuestas, Base de Conocimientos y Reportes Avanzados.
              </p>
              <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 g-2 mt-3 w-100">
                <div className="vstack items-center gap-2">
                  <Image
                    className="w-24px xl:w-32px text-primary-400 dark:text-tertiary"
                    alt="feature-icon"
                    src="/assets/images/custom-icons/home-8-icon-07.svg"
                    width={24}
                    height={24}
                  />
                  <span className="fs-6 fw-medium">Presupuestos y Propuestas</span>
                </div>
                <div className="vstack items-center gap-2">
                  <Image
                    className="w-24px xl:w-32px text-primary-400 dark:text-tertiary"
                    alt="feature-icon"
                    src="/assets/images/custom-icons/home-8-icon-05.svg"
                    width={24}
                    height={24}
                  />
                  <span className="fs-6 fw-medium">Gestión de Tareas</span>
                </div>
                <div className="vstack items-center gap-2">
                  <Image
                    className="w-24px xl:w-32px text-primary-400 dark:text-tertiary"
                    alt="feature-icon"
                    src="/assets/images/custom-icons/home-8-icon-06.svg"
                    width={24}
                    height={24}
                  />
                  <span className="fs-6 fw-medium">Sistema de Tickets</span>
                </div>
                <div className="vstack items-center gap-2">
                  <Image
                    className="w-24px xl:w-32px text-primary-400 dark:text-tertiary"
                    alt="feature-icon"
                    src="/assets/images/custom-icons/home-8-icon-01.svg"
                    width={24}
                    height={24}
                  />
                  <span className="fs-6 fw-medium">Contratos</span>
                </div>
                <div className="vstack items-center gap-2">
                  <Image
                    className="w-24px xl:w-32px text-primary-400 dark:text-tertiary"
                    alt="feature-icon"
                    src="/assets/images/custom-icons/home-8-icon-02.svg"
                    width={24}
                    height={24}
                  />
                  <span className="fs-6 fw-medium">Gastos</span>
                </div>
                <div className="vstack items-center gap-2">
                  <Image
                    className="w-24px xl:w-32px text-primary-400 dark:text-tertiary"
                    alt="feature-icon"
                    src="/assets/images/custom-icons/home-8-icon-03.svg"
                    width={24}
                    height={24}
                  />
                  <span className="fs-6 fw-medium">Objetivos</span>
                </div>
                <div className="vstack items-center gap-2">
                  <Image
                    className="w-24px xl:w-32px text-primary-400 dark:text-tertiary"
                    alt="feature-icon"
                    src="/assets/images/custom-icons/home-8-icon-07.svg"
                    width={24}
                    height={24}
                  />
                  <span className="fs-6 fw-medium">Encuestas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
