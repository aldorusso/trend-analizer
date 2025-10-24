"use client";
import Image from "next/image";

export default function Elements() {
  return (
    <div
      id="ai_features"
      className="ai-features section panel  scrollSpysection"
    >
      <div className="section-outer panel">
        <div className="container xl:max-w-xl">
          <div
            className="section-inner panel vstack items-center gap-4 xl:gap-6"
            data-anime="onview: -100; targets: >*; translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(200);"
          >
            <div className="panel vstack items-center gap-2 xl:gap-3 text-center">
              <div className="cstack gap-1 py-1 px-2 border rounded-pill">
                <span className="d-inline-block w-4px h-4px rounded-circle bg-primary dark:bg-secondary" />
                <span className="fs-8 fw-bold text-uppercase">
                  Potenciado por IA
                </span>
              </div>
              <h2 className="h3 lg:h2 xl:h1 m-0 px-2">
                Inteligencia Artificial Integrada
              </h2>
              <p className="fs-6 xl:fs-5 text-black dark:text-white text-opacity-70 max-w-650px">
                Kontaly integra OpenAI para ayudarte a trabajar más rápido y eficientemente
              </p>
            </div>
            <div className="row child-cols-12 md:child-cols-4 g-2 lg:g-4 w-100">
              <div>
                <div className="panel vstack gap-2 p-3 lg:p-4 bg-secondary dark:bg-gray-800 rounded-2">
                  <div className="icon-box w-48px h-48px rounded-circle cstack bg-primary dark:bg-secondary">
                    <i className="icon icon-2 unicon-document text-white dark:text-primary"></i>
                  </div>
                  <h4 className="h5 m-0">Resumen de Tickets</h4>
                  <p className="fs-6 text-black dark:text-white text-opacity-70">
                    IA resume automáticamente tickets largos para comprensión rápida
                  </p>
                </div>
              </div>
              <div>
                <div className="panel vstack gap-2 p-3 lg:p-4 bg-secondary dark:bg-gray-800 rounded-2">
                  <div className="icon-box w-48px h-48px rounded-circle cstack bg-primary dark:bg-secondary">
                    <i className="icon icon-2 unicon-chat text-white dark:text-primary"></i>
                  </div>
                  <h4 className="h5 m-0">Respuestas Sugeridas</h4>
                  <p className="fs-6 text-black dark:text-white text-opacity-70">
                    Sugerencias de respuestas inteligentes basadas en el contexto del ticket
                  </p>
                </div>
              </div>
              <div>
                <div className="panel vstack gap-2 p-3 lg:p-4 bg-secondary dark:bg-gray-800 rounded-2">
                  <div className="icon-box w-48px h-48px rounded-circle cstack bg-primary dark:bg-secondary">
                    <i className="icon icon-2 unicon-edit text-white dark:text-primary"></i>
                  </div>
                  <h4 className="h5 m-0">Mejora de Tono</h4>
                  <p className="fs-6 text-black dark:text-white text-opacity-70">
                    Ajusta el tono de tus respuestas para sonar más profesional o amigable
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
