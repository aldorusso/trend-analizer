export default function ProcessMarketing() {
  const steps = [
    {
      number: "01",
      title: "Auditoría y Estrategia",
      duration: "1 semana",
      desc: "Análisis de tu mercado, competencia y audiencia. Definimos objetivos, KPIs y estrategia de marketing personalizada.",
    },
    {
      number: "02",
      title: "Implementación de Campañas",
      duration: "1-2 semanas",
      desc: "Configuración de plataformas publicitarias, creación de anuncios y landing pages. Integración de herramientas de seguimiento.",
    },
    {
      number: "03",
      title: "Optimización Continua",
      duration: "Continuo",
      desc: "Monitoreo diario de campañas, A/B testing y ajustes basados en datos. Maximización del ROI mediante IA y machine learning.",
    },
    {
      number: "04",
      title: "Reportes y Escalado",
      duration: "Mensual",
      desc: "Informes detallados de rendimiento y ROI. Identificamos oportunidades de escalado y nuevas estrategias de crecimiento.",
    },
  ];

  return (
    <div className="mxd-section overflow-hidden bg-base-tint" style={{ paddingTop: "3rem", paddingBottom: "6rem" }}>
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          {/* Section Title */}
          <div className="mxd-section-title pre-grid">
            <div className="container-fluid p-0">
              <div className="row g-0">
                <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle">
                    <h2 className="reveal-type reveal-type anim-uni-in-up">
                      Proceso de Trabajo
                    </h2>
                  </div>
                </div>
                <div className="col-12 col-xl-7 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrdescr">
                    <p className="anim-uni-in-up">
                      Metodología data-driven con optimización continua para maximizar tu retorno de inversión
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mxd-block__content">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                {steps.map((step, idx) => (
                  <div key={idx} className="col-12 col-md-6 mxd-grid-item">
                    <div className="anim-uni-in-up" style={{ padding: "2rem 0", borderBottom: idx < steps.length - 1 ? "1px solid var(--color-border)" : "none" }}>
                      <div style={{ opacity: 0.3, marginBottom: "1rem" }}>
                        <span className="h1" style={{ fontWeight: 700, lineHeight: 1 }}>{step.number}</span>
                      </div>
                      <div>
                        <h3 className="h4" style={{ marginBottom: "0.5rem" }}>{step.title}</h3>
                        <p className="t-accent" style={{ marginBottom: "0.75rem", fontWeight: 500 }}>
                          {step.duration}
                        </p>
                        <p className="t-bright" style={{ marginBottom: 0 }}>{step.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
