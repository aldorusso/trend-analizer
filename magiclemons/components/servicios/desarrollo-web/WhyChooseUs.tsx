export default function WhyChooseUs() {
  const reasons = [
    {
      icon: "ph-bold ph-strategy",
      title: "Enfoque Estratégico",
      desc: "Analizamos tu negocio para crear soluciones digitales que realmente impulsen tus objetivos y maximicen el ROI.",
    },
    {
      icon: "ph-bold ph-diamond",
      title: "Calidad Premium",
      desc: "Código limpio, diseño elegante y mejores prácticas de la industria garantizan la excelencia en cada proyecto.",
    },
    {
      icon: "ph-bold ph-lightbulb",
      title: "Innovación Constante",
      desc: "Aprovechamos tecnologías de vanguardia para mantener tu negocio en la vanguardia competitiva.",
    },
  ];

  const stats = [
    { number: "15+", label: "años entregando soluciones digitales excepcionales" },
    { number: "200+", label: "proyectos completados exitosamente a nivel global" },
    { number: "React, Next.js, Node.js", label: "Equipo experto en stacks modernos" },
    { number: "Ágil", label: "Metodologías con garantía de entrega a tiempo" },
    { number: "24/7", label: "Soporte continuo y acompañamiento técnico profesional" },
    { number: "SEO", label: "Optimización y excelencia en rendimiento incluidas" },
  ];

  return (
    <div className="mxd-section padding-default overflow-hidden">
      <div className="mxd-container grid-container">
        <div className="mxd-block">
          {/* Section Title */}
          <div className="mxd-section-title centered pre-grid">
            <div className="container-fluid p-0">
              <div className="row g-0 justify-content-center">
                <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle">
                    <h2 className="reveal-type reveal-type anim-uni-in-up">
                      Creamos experiencias digitales excepcionales
                    </h2>
                  </div>
                  <div className="mxd-section-title__hrdescr">
                    <p className="anim-uni-in-up t-large">
                      Magic Lemons es un equipo de desarrolladores apasionados y
                      diseñadores que transforman tu visión en aplicaciones web
                      potentes, escalables y hermosas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Cards */}
          <div className="mxd-block__content">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                {reasons.map((reason, idx) => (
                  <div key={idx} className="col-12 col-md-4 mxd-grid-item">
                    <div className="bg-accent radius-m padding-4 anim-uni-in-up" style={{ marginBottom: "2rem", minHeight: "300px", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
                      <div style={{ fontSize: "3rem", marginBottom: "1.5rem", color: "var(--color-base)" }}>
                        <i className={reason.icon}></i>
                      </div>
                      <h3 className="h4 opposite" style={{ marginBottom: "1rem" }}>
                        {reason.title}
                      </h3>
                      <p className="t-opposite">{reason.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Our Experience Stats */}
          <div className="mxd-block__content" style={{ marginTop: "4rem" }}>
            <div className="container-fluid px-0">
              <div className="row g-0">
                <div className="col-12 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrtitle">
                    <h3 className="h3 anim-uni-in-up" style={{ marginBottom: "2rem" }}>Nuestra experiencia</h3>
                  </div>
                </div>
              </div>
              <div className="row gx-0">
                {stats.map((stat, idx) => (
                  <div key={idx} className="col-12 col-md-6 mxd-grid-item">
                    <div className="bg-base-tint radius-m padding-3 anim-uni-in-up" style={{ marginBottom: "1rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <div style={{ color: "var(--color-accent)", fontWeight: "700", fontSize: "1.5rem", minWidth: "100px" }}>
                          {stat.number}
                        </div>
                        <p className="t-bright" style={{ marginBottom: 0, flex: 1 }}>
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="mxd-block__content" style={{ marginTop: "4rem" }}>
            <div className="container-fluid px-0">
              <div className="row g-0 justify-content-center">
                <div className="col-12 col-xl-10">
                  <blockquote
                    className="mxd-manifest mxd-manifest-l text-center anim-uni-in-up"
                    style={{
                      borderLeft: "4px solid var(--color-accent)",
                      paddingLeft: "2rem",
                      fontStyle: "italic",
                    }}
                  >
                    <p>
                      "Transformamos desafíos empresariales complejos en
                      soluciones digitales elegantes que impulsan el crecimiento
                      y deleitan a los usuarios"
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
