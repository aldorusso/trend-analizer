import Image from "next/image";
import React from "react";

export default function Pricing() {
  return (
    <div id="pricing_tiers" className="pricing-tiers section panel">
      <div className="section-outer panel pt-3 md:pt-4 xl:pt-5">
        <div className="container">
          <div className="section-inner panel">
            <div className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8">
              <div
                className="heading vstack gap-2 items-center panel text-center"
                data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
              >
                <span className="fs-7 fw-medium py-narrow px-2 border rounded-pill text-primary dark:text-tertiary">
                  Precios
                </span>
                <h2 className="title h3 lg:h2 xl:h1 m-0">
                  Planes flexibles para tu negocio
                </h2>
                <p className="fs-6 xl:fs-5 opacity-70">
                  Sin cargos extras. Sin comisiones ocultas.
                </p>
              </div>
              <div
                className="content panel w-100"
                data-anime="onview: -200; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 100;"
              >
                <div className="panel">
                  <div className="row child-cols-12 g-0">
                    <div className="panel d-none lg:d-block lg:col-3">
                      <Image
                        className="w-128px position-absolute d-inline-block dark:d-none"
                        alt="man-upside-down"
                        style={{ top: "-2%", left: "30%" }}
                        data-anime="onview: -200; scale: [0.8, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 500;"
                        src="/assets/images/vectors/man-upside-down.svg"
                        width={104}
                        height={195}
                      />
                      <Image
                        className="w-128px position-absolute d-none dark:d-inline-block"
                        alt="man-upside-down"
                        style={{ top: "-2%", left: "30%" }}
                        data-anime="onview: -200; scale: [0.8, 1]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: 500;"
                        src="/assets/images/vectors/man-upside-down-dark.svg"
                        width={104}
                        height={195}
                      />
                      <div
                        className="vstack border border-end-0 rounded-start-2 overflow-hidden"
                        style={{ marginTop: 211 }}
                      >
                        <div className="panel p-2 lg:px-3 bg-gray-25 dark:bg-gray-800">
                          <span className="text-truncate-1">
                            Usuarios
                          </span>
                        </div>
                        <div className="panel p-2 lg:px-3">
                          <span className="text-truncate-1">
                            CRM y gestión de leads
                          </span>
                        </div>
                        <div className="panel p-2 lg:px-3 bg-gray-25 dark:bg-gray-800">
                          <span className="text-truncate-1">
                            Proyectos activos
                          </span>
                        </div>
                        <div className="panel p-2 lg:px-3">
                          <span className="text-truncate-1">Propuestas mensuales</span>
                        </div>
                        <div className="panel p-2 lg:px-3 bg-gray-25 dark:bg-gray-800">
                          <span className="text-truncate-1">
                            Facturación avanzada
                          </span>
                        </div>
                        <div className="panel p-2 lg:px-3">
                          <span className="text-truncate-1">
                            Reportes personalizados
                          </span>
                        </div>
                        <div className="panel p-2 lg:px-3 bg-gray-25 dark:bg-gray-800">
                          <span className="text-truncate-1">
                            Time tracking
                          </span>
                        </div>
                        <div className="panel p-2 lg:px-3">
                          <span className="text-truncate-1">
                            Integraciones Stripe/PayPal
                          </span>
                        </div>
                        <div className="panel p-2 lg:px-3 bg-gray-25 dark:bg-gray-800">
                          <span className="text-truncate-1">
                            API completa
                          </span>
                        </div>
                        <div className="panel p-2 lg:px-3">
                          <span className="text-truncate-1">
                            Almacenamiento
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col">
                      <div className="panel border rounded-2 text-center">
                        <div className="row child-cols-12 lg:child-cols-4 col-match g-0">
                          <div>
                            <div className="vstack">
                              <div className="panel vstack items-center gap-narrow p-2 py-4 lg:py-6 border-bottom">
                                <h3 className="h5 title mb-1">Starter</h3>
                                <h5 className="h1 price m-0">
                                  <sup className="h5 m-0 mx-narrow">€</sup>27
                                </h5>
                                <span className="fs-7 fw-normal m-0">
                                  /mes
                                </span>
                              </div>
                              <div className="panel p-2 lg:px-3 bg-gray-25 dark:bg-gray-800">
                                Hasta 3
                              </div>
                              <div className="panel p-2 lg:px-3">
                                Básica
                              </div>
                              <div className="panel p-2 lg:px-3 bg-gray-25 dark:bg-gray-800">
                                Hasta 10
                              </div>
                              <div className="panel p-2 lg:px-3">100</div>
                              <div className="panel p-2 lg:px-3 bg-gray-25 dark:bg-gray-800">
                                <span className="cstack mx-auto w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                                  <i className="icon-narrow unicon-close fw-bold" />
                                </span>
                              </div>
                              <div className="panel p-2 lg:px-3">
                                <span className="cstack mx-auto w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                                  <i className="icon-narrow unicon-close fw-bold" />
                                </span>
                              </div>
                              <div className="panel p-2 lg:px-3 bg-gray-25 dark:bg-gray-800">
                                <span className="cstack mx-auto w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                                  <i className="icon-narrow unicon-close fw-bold" />
                                </span>
                              </div>
                              <div className="panel p-2 lg:px-3">
                                <span className="cstack mx-auto w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                                  <i className="icon-narrow unicon-close fw-bold" />
                                </span>
                              </div>
                              <div className="panel p-2 lg:px-3 bg-gray-25 dark:bg-gray-800">
                                <span className="cstack mx-auto w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                                  <i className="icon-narrow unicon-close fw-bold" />
                                </span>
                              </div>
                              <div className="panel p-2 lg:px-3">5 GB</div>
                              <div className="vstack items-center gap-2 p-4 border-top">
                                <a href="https://www.kontaly.com/authentication/register?plan=1" target="_blank" rel="noopener noreferrer" className="btn btn-md btn-ghost-primary fw-bold border rounded-pill px-3 w-100">
                                  Comenzar ahora
                                </a>
                                <p className="fs-7 fw-normal">Para freelancers</p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div
                              className="panel vstack border border-2 rounded-1-5 border-primary dark:border-tertiary contrast-shadow-md z-1"
                              style={{
                                marginTop: "-2px",
                                marginBottom: "-2px",
                              }}
                            >
                              <div className="panel vstack items-center gap-narrow p-2 py-4 lg:py-6 border-bottom">
                                <h3 className="h5 title mb-1 text-primary dark:text-tertiary">
                                  Professional
                                </h3>
                                <h5 className="h1 price m-0">
                                  <sup className="h5 m-0 mx-narrow">€</sup>73
                                </h5>
                                <span className="fs-7 fw-normal m-0">
                                  /mes
                                </span>
                                <span className="position-absolute top-0 end-0 cstack px-1 bg-tertiary text-white border rounded-default m-1">
                                  Más popular
                                </span>
                              </div>
                              <div className="panel p-2 lg:px-3 bg-gray-25 dark:bg-gray-800">
                                Hasta 10
                              </div>
                              <div className="panel p-2 lg:px-3">
                                Completo
                              </div>
                              <div className="panel p-2 lg:px-3 bg-gray-25 dark:bg-gray-800">
                                Ilimitados
                              </div>
                              <div className="panel p-2 lg:px-3">Ilimitadas</div>
                              <div className="panel p-2 lg:px-3 bg-gray-25 dark:bg-gray-800">
                                <span className="cstack mx-auto w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                                  <i className="icon-narrow unicon-checkmark fw-bold" />
                                </span>
                              </div>
                              <div className="panel p-2 lg:px-3">
                                <span className="cstack mx-auto w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                                  <i className="icon-narrow unicon-checkmark fw-bold" />
                                </span>
                              </div>
                              <div className="panel p-2 lg:px-3 bg-gray-25 dark:bg-gray-800">
                                <span className="cstack mx-auto w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                                  <i className="icon-narrow unicon-checkmark fw-bold" />
                                </span>
                              </div>
                              <div className="panel p-2 lg:px-3">
                                <span className="cstack mx-auto w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                                  <i className="icon-narrow unicon-checkmark fw-bold" />
                                </span>
                              </div>
                              <div className="panel p-2 lg:px-3 bg-gray-25 dark:bg-gray-800">
                                <span className="cstack mx-auto w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                                  <i className="icon-narrow unicon-close fw-bold" />
                                </span>
                              </div>
                              <div className="panel p-2 lg:px-3">50 GB</div>
                              <div className="vstack items-center gap-2 p-4 border-top">
                                <a href="https://www.kontaly.com/authentication/register?plan=2" target="_blank" rel="noopener noreferrer" className="btn btn-md btn-primary text-white dark:bg-tertiary dark:text-primary fw-bold rounded-pill px-3 w-100">
                                  Comenzar ahora
                                </a>
                                <p className="fs-7 fw-normal">
                                  Para equipos en crecimiento
                                </p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="vstack">
                              <div className="panel vstack items-center gap-narrow p-2 py-4 lg:py-6 border-bottom">
                                <h3 className="h5 title mb-1">Business</h3>
                                <h5 className="h1 price m-0">
                                  <sup className="h5 m-0 mx-narrow">€</sup>139
                                </h5>
                                <span className="fs-7 fw-normal m-0">
                                  /mes
                                </span>
                              </div>
                              <div className="panel p-2 lg:px-3 bg-gray-25 dark:bg-gray-800">
                                Hasta 25
                              </div>
                              <div className="panel p-2 lg:px-3">
                                Completo
                              </div>
                              <div className="panel p-2 lg:px-3 bg-gray-25 dark:bg-gray-800">
                                Ilimitados
                              </div>
                              <div className="panel p-2 lg:px-3">Ilimitadas</div>
                              <div className="panel p-2 lg:px-3 bg-gray-25 dark:bg-gray-800">
                                <span className="cstack mx-auto w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                                  <i className="icon-narrow unicon-checkmark fw-bold" />
                                </span>
                              </div>
                              <div className="panel p-2 lg:px-3">
                                <span className="cstack mx-auto w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                                  <i className="icon-narrow unicon-checkmark fw-bold" />
                                </span>
                              </div>
                              <div className="panel p-2 lg:px-3 bg-gray-25 dark:bg-gray-800">
                                <span className="cstack mx-auto w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                                  <i className="icon-narrow unicon-checkmark fw-bold" />
                                </span>
                              </div>
                              <div className="panel p-2 lg:px-3">
                                <span className="cstack mx-auto w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                                  <i className="icon-narrow unicon-checkmark fw-bold" />
                                </span>
                              </div>
                              <div className="panel p-2 lg:px-3 bg-gray-25 dark:bg-gray-800">
                                <span className="cstack mx-auto w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                                  <i className="icon-narrow unicon-checkmark fw-bold" />
                                </span>
                              </div>
                              <div className="panel p-2 lg:px-3">
                                200 GB
                              </div>
                              <div className="vstack items-center gap-2 p-4 border-top">
                                <a href="https://www.kontaly.com/authentication/register?plan=3" target="_blank" rel="noopener noreferrer" className="btn btn-md btn-ghost-primary fw-bold border rounded-pill px-3 w-100">
                                  Comenzar ahora
                                </a>
                                <p className="fs-7 fw-normal">
                                  Para empresas
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
