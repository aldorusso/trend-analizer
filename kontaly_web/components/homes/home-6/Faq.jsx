import Accordion3 from "@/components/common/Accordion3";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Faq({ ctaParentClass = "section-outer panel pt-3 xl:pt-5" }) {
  return (
    <div id="faq" className="faq section panel">
      <div className={ctaParentClass}>
        <div className="container lg:max-w-lg">
          <div
            className="section-inner panel"
            data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
          >
            <div className="row child-cols-12 col-match g-4">
              <div>
                <div className="vstack items-center text-center gap-2">
                  <span className="fs-7 fw-medium py-narrow px-2 border rounded-pill text-primary dark:text-tertiary">
                    Preguntas Frecuentes
                  </span>
                  <h2 className="h3 lg:h2 xl:h1 m-0">
                    ¿Tienes preguntas?
                  </h2>
                  <p className="fs-6 xl:fs-5 opacity-70">
                    Aquí encontrarás respuestas a las preguntas más comunes
                  </p>
                </div>
              </div>
              <div>
                <div className="panel rounded-2 p-3 lg:p-8 border">
                  <ul
                    className="uc-accordion-divider gap-7 max-w-md mx-auto uc-accordion"
                    data-uc-accordion="targets: > li; multiple: true;"
                    style={{ "--divider-gap": "56px" }}
                  >
                    <Accordion3 />
                  </ul>
                </div>
              </div>
              <div>
                <div className="panel vstack items-center justify-between gap-2 text-center rounded-2 p-3 lg:py-8 bg-primary text-white uc-dark">
                  <div className="panel">
                    <div className="vstack items-center gap-2">
                      <h2 className="h6 lg:h5 m-0">¿Aún tienes preguntas?</h2>
                      <p className="lg:fs-5 text-dark dark:text-white text-opacity-70">
                        ¿No encuentras la respuesta que buscas? <br />
                        Por favor, habla con nuestro equipo amigable.
                      </p>
                      <div className="hstack justify-center gap-0">
                        <Image
                          alt="Avatar-image"
                          className="w-48px h-48px rounded-circle border border-2 border-white dark:border-primary"
                          src="/assets/images/avatars/02.jpg"
                          width={96}
                          height={96}
                        />
                        <Image
                          alt="Avatar-image"
                          className="w-48px h-48px rounded-circle border border-2 border-white dark:border-primary ms-n2"
                          src="/assets/images/avatars/01.jpg"
                          width={96}
                          height={96}
                        />
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/page-contact`}
                    className="btn btn-md btn-primary text-white dark:bg-tertiary dark:text-white fw-bold rounded-pill px-3 lg:px-5 mt-1 lg:mt-2"
                  >
                    Contáctanos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
