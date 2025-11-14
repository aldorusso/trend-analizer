import Link from "next/link";
import Image from "next/image";

import StackCards from "@/components/animation/StackCards";
import { CACHE_VERSION } from "@/lib/cache-version";

export default function Services() {
  return (
    <div className="mxd-section padding-stacked-section">
      <div className="mxd-container grid-container">
        {/* Block - Services/Features Stacking Cards Start */}
        <div className="mxd-block mxd-grid-item no-margin">
          <div className="content__block">
            <StackCards className="stack-wrapper">
              <div className="mxd-services-stack__inner justify-between bg-base-opp">
                <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-additional slide-right-up anim-no-delay"
                    href={`/servicios/desarrollo-web`}
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">Desarrollo Web en Frameworks</h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline-opposite">
                      REACT
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Next.js
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      ASTRO
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      SEO
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Velocidad
                    </span>
                  </div>
                  <p className="t-opposite">
                    Construcción de sitios ultrarrápidos y modernos usando REACT, Next.js y ASTRO.
                    Máxima velocidad y SEO optimizado para resultados excepcionales.
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    unoptimized
                    alt="Service/Feature Image"
                    src={`/img/services/800x800_ser-01.webp?v=${CACHE_VERSION}`}
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    unoptimized
                    alt="Service/Feature Image"
                    src={`/img/services/1000x1000_ser-01.webp?v=${CACHE_VERSION}`}
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              {/* services stack single item */}

              <div className="mxd-services-stack__inner justify-between bg-accent">
                <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-base slide-right-up anim-no-delay"
                    href={`/servicios/desarrollo-web`}
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">
                    Soluciones de
                    <br />
                    Software a Medida
                  </h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline-opposite">
                      SAAS
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Backend
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      APIs
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Sistemas Complejos
                    </span>
                  </div>
                  <p className="t-opposite">
                    Desarrollo de sistemas complejos, SAAS y Backend robustos que optimizan
                    tu negocio con tecnología de punta y arquitecturas escalables.
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    unoptimized
                    alt="Service/Feature Image"
                    src={`/img/services/800x800_ser-02.webp?v=${CACHE_VERSION}`}
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    unoptimized
                    alt="Service/Feature Image"
                    src={`/img/services/1000x1000_ser-02.webp?v=${CACHE_VERSION}`}
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              {/* services stack single item */}

              <div className="mxd-services-stack__inner radius-dark justify-between bg-base-tint">
                <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-opposite slide-right-up anim-no-delay"
                    href={`/servicios/desarrollo-web`}
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3>
                    Inteligencia
                    <br />
                    Artificial Integrada
                  </h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline">
                      Chatbots
                    </span>
                    <span className="tag tag-default tag-outline">
                      Análisis Predictivo
                    </span>
                    <span className="tag tag-default tag-outline">
                      Personalización
                    </span>
                    <span className="tag tag-default tag-outline">
                      Machine Learning
                    </span>
                  </div>
                  <p>
                    Implementación de soluciones con IA (chatbots, análisis predictivo, personalización)
                    para impulsar la eficiencia y las ventas de tu negocio.
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    unoptimized
                    alt="Service/Feature Image"
                    src={`/img/services/800x800_ser-03.webp?v=${CACHE_VERSION}`}
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    unoptimized
                    alt="Service/Feature Image"
                    src={`/img/services/1000x1000_ser-03.webp?v=${CACHE_VERSION}`}
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              {/* services stack single item */}

              <div className="mxd-services-stack__inner justify-between bg-base-opp">
                <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-additional slide-right-up anim-no-delay"
                    href={`/servicios/desarrollo-web`}
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">
                    Diseño UX/UI Centrado
                    <br />
                    en el Cliente
                  </h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline-opposite">
                      UX Design
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      UI Design
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Diseño Web
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Conversión
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Prototipos
                    </span>
                  </div>
                  <p className="t-opposite">
                    Creamos interfaces intuitivas y diseños web que convierten usuarios
                    en clientes finales. Diseño centrado en la experiencia del usuario.
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    unoptimized
                    alt="Service/Feature Image"
                    src={`/img/services/800x800_ser-04.webp?v=${CACHE_VERSION}`}
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    unoptimized
                    alt="Service/Feature Image"
                    src={`/img/services/1000x1000_ser-04.webp?v=${CACHE_VERSION}`}
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              {/* services stack single item */}

              <div className="mxd-services-stack__inner justify-between bg-accent">
                <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-base slide-right-up anim-no-delay"
                    href={`/servicios/desarrollo-web`}
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3 className="opposite">
                    E-commerce de
                    <br />
                    Alto Impacto
                  </h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline-opposite">
                      Tiendas Online
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Pasarelas de Pago
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Logística
                    </span>
                    <span className="tag tag-default tag-outline-opposite">
                      Escalabilidad
                    </span>
                  </div>
                  <p className="t-opposite">
                    Tiendas virtuales que escalan. Desde estrategias de catálogo hasta
                    integraciones de pagos y logística para maximizar tus ventas online.
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    unoptimized
                    alt="Service/Feature Image"
                    src={`/img/services/800x800_ser-01.webp?v=${CACHE_VERSION}`}
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    unoptimized
                    alt="Service/Feature Image"
                    src={`/img/services/1000x1000_ser-01.webp?v=${CACHE_VERSION}`}
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>

              {/* services stack single item */}

              <div className="mxd-services-stack__inner radius-dark justify-between bg-base-tint">
                <div className="mxd-services-stack__controls">
                  <Link
                    className="btn btn-round btn-round-large btn-opposite slide-right-up anim-no-delay"
                    href={`/servicios/desarrollo-web`}
                  >
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
                <div className="mxd-services-stack__title width-60">
                  <h3>
                    Publicidad Digital
                    <br />
                    y ADS
                  </h3>
                </div>
                <div className="mxd-services-stack__info width-60">
                  <div className="mxd-services-cards__tags">
                    <span className="tag tag-default tag-outline">
                      Google Ads
                    </span>
                    <span className="tag tag-default tag-outline">
                      Meta Ads
                    </span>
                    <span className="tag tag-default tag-outline">
                      ROI
                    </span>
                    <span className="tag tag-default tag-outline">
                      Performance
                    </span>
                  </div>
                  <p>
                    Campañas de performance en Google, Meta y más, enfocadas en el retorno
                    de la inversión (ROI) y resultados medibles para tu negocio.
                  </p>
                </div>
                <div className="services-stack__image">
                  <Image
                    className="service-img service-img-s"
                    unoptimized
                    alt="Service/Feature Image"
                    src={`/img/services/800x800_ser-02.webp?v=${CACHE_VERSION}`}
                    width={800}
                    height={800}
                  />
                  <Image
                    className="service-img service-img-m"
                    unoptimized
                    alt="Service/Feature Image"
                    src={`/img/services/1000x1000_ser-02.webp?v=${CACHE_VERSION}`}
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </StackCards>
          </div>
        </div>
        {/* Block - Services/Features Stacking Cards End */}
      </div>
    </div>
  );
}
