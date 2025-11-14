export default function ProcessSoftware() {
  const steps = [
    {
      number: "01",
      title: "Análisis de Requisitos",
      duration: "1-2 semanas",
      desc: "Inmersión profunda en tus procesos y necesidades empresariales. Definimos el alcance y la estrategia técnica.",
    },
    {
      number: "02",
      title: "Diseño de Arquitectura",
      duration: "1 semana",
      desc: "Planificar la arquitectura técnica y modelos de datos. Diseñamos una solución escalable y mantenible.",
    },
    {
      number: "03",
      title: "Desarrollo Ágil",
      duration: "4-8 semanas",
      desc: "Desarrollo iterativo con retroalimentación regular. Sprints con entregas incrementales y revisiones continuas.",
    },
    {
      number: "04",
      title: "Pruebas y Despliegue",
      duration: "1-2 semanas",
      desc: "Pruebas exhaustivas y despliegue en producción. Monitoreo, documentación y capacitación del equipo.",
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
                      Metodología ágil con sprints de desarrollo y
                      retroalimentación continua para entregar software de
                      calidad
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
