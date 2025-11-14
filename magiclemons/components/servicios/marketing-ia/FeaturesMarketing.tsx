export default function FeaturesMarketing() {
  const features = [
    "Campañas en Google Ads, Meta Ads y plataformas publicitarias",
    "Estrategia SEO y SEM orientada a conversiones",
    "Chatbots inteligentes con IA para atención al cliente 24/7",
    "Análisis predictivo y segmentación avanzada de audiencias",
    "Personalización de contenido y recomendaciones con IA",
    "Automatización de marketing y email marketing inteligente",
    "Dashboards y reportes de rendimiento en tiempo real",
    "Optimización continua basada en datos y machine learning",
  ];

  return (
    <div className="mxd-section padding-default overflow-hidden">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          {/* Section Title */}
          <div className="mxd-section-title pre-grid">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle">
                    <h2 className="reveal-type reveal-type anim-uni-in-up">
                      ¿Qué incluye este servicio?
                    </h2>
                  </div>
                </div>
                <div className="col-12 col-xl-7 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrdescr">
                    <p className="anim-uni-in-up">
                      Características Principales
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="mxd-block__content">
            <div className="mxd-services-list grid-top">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="mxd-services-list__item"
                >
                  <div className="mxd-services-list__border anim-uni-in-up" />
                  <div className="mxd-services-list__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-1 mxd-grid-item no-margin">
                          <div className="mxd-services-list__icon anim-uni-in-up">
                            <i className="ph-bold ph-check-circle"></i>
                          </div>
                        </div>
                        <div className="col-12 col-xl-11 mxd-grid-item no-margin">
                          <div className="mxd-services-list__title anim-uni-in-up">
                            <p>{feature}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-services-list__border anim-uni-in-up" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
