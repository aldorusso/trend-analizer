import Image from "next/image";
import Link from "next/link";

export default function ColaboradoresHero() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <div
        className="position-absolute top-0 start-0 end-0 min-h-screen overflow-hidden d-none lg:d-block"
        data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
      >
        <div
          className="position-absolute  rotate-45"
          style={{ top: "30%", left: "18%" }}
        >
          <Image
            className="w-32px text-gray-900 dark:text-white"
            width={193}
            height={216}
            alt="star-1"
            data-uc-svg=""
            src="/assets/images/template/star-1.svg"
          />
        </div>
        <div
          className="position-absolute  rotate-45"
          style={{ top: "15%", right: "18%" }}
        >
          <Image
            className="w-24px text-gray-900 dark:text-white"
            width={69}
            height={95}
            alt="star-2"
            data-uc-svg=""
            src="/assets/images/template/star-2.svg"
          />
        </div>
      </div>
      <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
        <div className="container max-w-xl">
          <div
            className="section-inner panel mt-2 sm:mt-4 lg:mt-0"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <div className="row child-cols-12 lg:child-cols-6 g-4 lg:g-8 items-center">
              <div>
                <div className="vstack gap-2 lg:gap-4">
                  <span className="fs-7 fw-medium py-narrow px-2 bg-primary text-white rounded-pill d-inline-flex w-fit-content">
                    💰 Hasta 20% de comisión recurrente
                  </span>
                  <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                    Programa de Colaboradores
                  </h1>
                  <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
                    Gana ingresos pasivos refiriendo clientes a Kontaly. Ideal para gestorías, consultorías y agencias que trabajan con múltiples clientes.
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
                      href="#how_works"
                      className="btn btn-md lg:btn-lg btn-outline-gray-900 dark:btn-outline-white"
                    >
                      Ver cómo funciona
                    </Link>
                  </div>
                  <div className="hstack gap-4 mt-2">
                    <div className="vstack gap-0">
                      <span className="h4 lg:h3 fw-bold text-primary m-0">20%</span>
                      <span className="fs-7 opacity-70">Comisión mensual</span>
                    </div>
                    <div className="vr" />
                    <div className="vstack gap-0">
                      <span className="h4 lg:h3 fw-bold text-primary m-0">100%</span>
                      <span className="fs-7 opacity-70">Recurrente</span>
                    </div>
                    <div className="vr" />
                    <div className="vstack gap-0">
                      <span className="h4 lg:h3 fw-bold text-primary m-0">0€</span>
                      <span className="fs-7 opacity-70">Coste de registro</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="panel rounded-2 overflow-hidden">
                  <Image
                    className="w-100 h-auto rounded-2"
                    src="/assets/images/template/dashboard.jpg"
                    width={600}
                    height={700}
                    alt="Programa de Colaboradores"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
