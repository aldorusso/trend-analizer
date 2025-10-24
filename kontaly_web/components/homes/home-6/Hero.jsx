import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden" style={{ paddingBottom: '10px' }}>
      <div className="section-outer pt-9 pb-2 lg:pt-10 lg:pb-3 xl:pt-12 xl:pb-4 min-h-550px">
        <div className="w-750px h-750px position-absolute top-50 start-50 translate-middle rounded-circle border border-dashed border-tertiary-100 dark:border-tertiary-600" />
        <div className="w-1000px h-1000px position-absolute top-50 start-50 translate-middle rounded-circle border border-dashed border-tertiary-100 dark:border-tertiary-600" />
        <div className="w-1280px h-1280px position-absolute top-50 start-50 translate-middle rounded-circle border border-dashed border-tertiary-100 dark:border-tertiary-600" />
        <div className="position-cover bg-gradient-to-b from-white dark:from-tertiary-700 via-transparent to-white dark:to-tertiary-800" />
        <div className="position-absolute top-0 start-50 translate-middle w-1000px h-500px bg-secondary-300 dark:bg-white rounded-circle blur-10 dark:blend-overlay" />
        <div className="container">
          <div className="section-inner panel">
            <div
              className="d-none xl:d-block"
              data-anime="targets: >*; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 500});"
            >
              <div
                className="position-absolute rounded-circle border border-dark dark:border-white dark:border-opacity-15 dark:bg-gradient-45 from-tertiary to-transparent cstack w-56px h-56px d-none lg:d-block"
                style={{ top: "10%", right: "10.5%" }}
                data-anime="translateY: [0, 15]; easing: linear; loop: true; direction: alternate; delay: 50;"
              >
                <Image
                  className="p-2"
                  alt="brand"
                  src="/assets/images/apps/zapier.svg"
                  width={800}
                  height={800}
                />
              </div>
              <div
                className="position-absolute rounded-circle border border-dark dark:border-white dark:border-opacity-15 dark:bg-gradient-45 from-tertiary to-transparent cstack w-56px h-56px d-none lg:d-block"
                style={{ top: "-5%", left: "24%" }}
                data-anime="translateY: [0, 5]; easing: linear; loop: true; direction: alternate; delay: 25;"
              >
                <Image
                  className="p-2"
                  alt="brand"
                  src="/assets/images/apps/stipe.svg"
                  width={800}
                  height={800}
                />
              </div>
              <div
                className="position-absolute rounded-circle border border-dark dark:border-white dark:border-opacity-15 dark:bg-gradient-45 from-tertiary to-transparent cstack w-56px h-56px d-none lg:d-block"
                style={{ top: "30%", left: "-1.5%" }}
                data-anime="translateY: [0, 10]; easing: linear; loop: true; direction: alternate; delay: 0;"
              >
                <Image
                  className="p-2"
                  alt="brand"
                  src="/assets/images/apps/asana.svg"
                  width={2500}
                  height={2311}
                />
              </div>
              <div
                className="position-absolute rounded-circle border border-dark dark:border-white dark:border-opacity-15 dark:bg-gradient-45 from-tertiary to-transparent cstack w-56px h-56px d-none lg:d-block"
                style={{ top: "45%", right: "-1.5%" }}
                data-anime="translateY: [0, 5]; easing: linear; loop: true; direction: alternate; delay: 50;"
              >
                <Image
                  className="p-2 text-dark dark:text-yellow-400"
                  alt="brand"
                  data-uc-svg=""
                  src="/assets/images/apps/mailchimp.svg"
                  width={351}
                  height={373}
                />
              </div>
              <div
                className="position-absolute rounded-circle border border-dark dark:border-white dark:border-opacity-15 dark:bg-gradient-45 from-tertiary to-transparent cstack w-56px h-56px d-none lg:d-block"
                style={{ top: "75%", right: "21%" }}
                data-anime="translateY: [0, 15]; easing: linear; loop: true; direction: alternate; delay: 25;"
              >
                <Image
                  className="p-2"
                  alt="brand"
                  src="/assets/images/apps/drive.svg"
                  width={800}
                  height={800}
                />
              </div>
              <div
                className="position-absolute rounded-circle border border-dark dark:border-white dark:border-opacity-15 dark:bg-gradient-45 from-tertiary to-transparent cstack w-56px h-56px d-none lg:d-block"
                style={{ top: "85%", left: "11.5%" }}
                data-anime="translateY: [0, 10]; easing: linear; loop: true; direction: alternate; delay: 50;"
              >
                <Image
                  className="p-2"
                  alt="brand"
                  src="/assets/images/apps/bitbucket.svg"
                  width={333}
                  height={300}
                />
              </div>
            </div>
            <div
              className="panel vstack items-center gap-2 max-w-md mx-auto text-center px-4 lg:px-0 mt-6"
              data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <span className="fs-7 fw-medium py-narrow px-2 bg-dark text-white dark:bg-primary dark:text-white rounded-pill">
                100% Compatible con Verifactu
              </span>
              <h2 className="h2 xl:display-5 m-0 text-center">
                Todas las herramientas que necesitas para gestionar tu negocio
              </h2>

              <p className="fs-5 lg:fs-4">
                Kontaly es una plataforma completa de gestión empresarial que combina CRM, proyectos, facturación y mucho más
              </p>

              <div className="panel vstack items-center gap-1 max-w-400px lg:max-w-750px mx-auto text-center mt-2 xl:mt-4">
                <div className="mb-2 lg:mb-3">
                  <Link
                    href="/page-pricing"
                    className="btn btn-md xl:btn-lg btn-primary border border-dark dark:border-white dark:border-opacity-15 px-3 lg:px-5 w-auto rounded-pill"
                  >
                    <span>Prueba gratis 14 días</span>
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
