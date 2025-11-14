const technologies = [
  { name: "Google Ads", icon: "devicon-google-plain" },
  { name: "Google Analytics", icon: "devicon-googleanalytics-plain" },
  { name: "Meta Ads", icon: "devicon-facebook-plain" },
  { name: "LinkedIn Ads", icon: "devicon-linkedin-plain" },
  { name: "Python", icon: "devicon-python-plain" },
  { name: "TensorFlow", icon: "devicon-tensorflow-original" },
  { name: "OpenAI", icon: "devicon-openai-plain" },
  { name: "Anthropic", icon: "devicon-anthropic-plain" },
  { name: "HubSpot", icon: "devicon-hubspot-plain" },
  { name: "Salesforce", icon: "devicon-salesforce-plain" },
  { name: "WordPress", icon: "devicon-wordpress-plain" },
  { name: "Shopify", icon: "devicon-shopify-plain" },
  { name: "Mailchimp", icon: "devicon-mailchimp-plain" },
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "TypeScript", icon: "devicon-typescript-plain" },
  { name: "Node.js", icon: "devicon-nodejs-plain" },
  { name: "React", icon: "devicon-react-original" },
  { name: "Next.js", icon: "devicon-nextjs-plain" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
  { name: "MongoDB", icon: "devicon-mongodb-plain" },
  { name: "Docker", icon: "devicon-docker-plain" },
  { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
  { name: "Git", icon: "devicon-git-plain" },
  { name: "Figma", icon: "devicon-figma-plain" },
];

export default function TechnologiesMarketing() {
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
                      Tecnologías y Plataformas
                    </h2>
                  </div>
                </div>
                <div className="col-12 col-xl-7 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrdescr">
                    <p className="anim-uni-in-up">
                      Herramientas de marketing digital e IA de vanguardia para maximizar resultados y automatizar procesos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technologies Grid */}
          <div className="mxd-block__content">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                {technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="col-6 col-sm-4 col-md-3 col-xl-2 mxd-grid-item"
                  >
                    <div className="bg-base-tint radius-m padding-3 anim-uni-in-up" style={{ textAlign: "center", minHeight: "120px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ fontSize: "3rem", marginBottom: "0.75rem", color: "var(--color-accent)" }}>
                        <i className={tech.icon}></i>
                      </div>
                      <p className="t-small t-bright" style={{ marginBottom: 0 }}>
                        {tech.name}
                      </p>
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
