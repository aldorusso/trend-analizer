import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ColaboradoresCta() {
  return (
    <div
      id="cta"
      className="cta section panel overflow-hidden"
      data-anime="onview:-100; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
    >
      <div className="section-outer panel py-6 sm:py-8 xl:py-9 bg-white dark:bg-gray-800">
        <div
          className="d-none lg:d-block"
          data-anime="onview: -100; targets: img; scale: [0.8, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 350;"
        >
          <div className="position-absolute top-50 start-0 translate-middle-y ms-n6">
            <Image
              className="w-200px xl:w-250px d-block dark:d-none"
              alt="thinking"
              src="/assets/images/template/thinking.svg"
              width="233"
              height="236"
            />
            <Image
              className="w-200px xl:w-250px d-none dark:d-block"
              alt="thinking-dark"
              src="/assets/images/template/thinking-dark.svg"
              width="233"
              height="237"
            />
          </div>
          <div className="position-absolute top-50 end-0 translate-middle-y me-n6">
            <Image
              className="w-200px xl:w-250px d-block dark:d-none"
              alt="send-message"
              src="/assets/images/template/send-message.svg"
              width="240"
              height="215"
            />
            <Image
              className="w-200px xl:w-250px d-none dark:d-block"
              alt="send-message-dark"
              src="/assets/images/template/send-message-dark.svg"
              width="240"
              height="215"
            />
          </div>
        </div>
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div
              className="vstack items-center gap-3 sm:gap-4 max-w-650px mx-auto text-center"
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
            >
              <h2 className="h3 sm:h1 m-0">
                ¿Listo para empezar a ganar?
              </h2>
              <p className="fs-5 xl:fs-4 text-dark dark:text-white text-opacity-70">
                Únete ahora al programa de colaboradores de Kontaly y comienza a generar ingresos pasivos recurrentes.
              </p>
              <div className="vstack sm:hstack gap-2 mt-2">
                <Link
                  href="https://www.kontaly.com/affiliate_management/join"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-md lg:btn-lg btn-primary text-white"
                >
                  Únete gratis ahora
                </Link>
                <Link
                  href="/page-contact"
                  className="btn btn-md lg:btn-lg btn-outline-gray-900 dark:btn-outline-white"
                >
                  ¿Tienes dudas? Contáctanos
                </Link>
              </div>
              <div className="hstack gap-4 mt-3 fs-6 text-dark dark:text-white text-opacity-70">
                <div className="hstack gap-narrow">
                  <i className="icon-1 unicon-checkmark-circle" />
                  <span>Sin costes iniciales</span>
                </div>
                <div className="hstack gap-narrow">
                  <i className="icon-1 unicon-checkmark-circle" />
                  <span>Soporte dedicado</span>
                </div>
                <div className="hstack gap-narrow">
                  <i className="icon-1 unicon-checkmark-circle" />
                  <span>Pagos automáticos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
