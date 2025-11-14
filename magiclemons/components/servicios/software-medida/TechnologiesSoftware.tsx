import Image from "next/image";

const technologies = [
  { name: "Python", icon: "devicon-python-plain" },
  { name: "Node.js", icon: "devicon-nodejs-plain" },
  { name: "PHP", icon: "devicon-php-plain" },
  { name: "Java", icon: "devicon-java-plain" },
  { name: "C#", icon: "devicon-csharp-plain" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
  { name: "MongoDB", icon: "devicon-mongodb-plain" },
  { name: "Redis", icon: "devicon-redis-plain" },
  { name: "Docker", icon: "devicon-docker-plain" },
  { name: "Kubernetes", icon: "devicon-kubernetes-plain" },
  { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
  { name: "Azure", icon: "devicon-azure-plain" },
  { name: "Django", icon: "devicon-django-plain" },
  { name: "FastAPI", icon: "devicon-fastapi-plain" },
  { name: "Laravel", icon: "devicon-laravel-plain" },
  { name: "Express", icon: "devicon-express-original" },
  { name: "GraphQL", icon: "devicon-graphql-plain" },
  { name: "REST API", icon: "devicon-nodejs-plain" },
  { name: "Git", icon: "devicon-git-plain" },
  { name: "GitHub", icon: "devicon-github-original" },
  { name: "GitLab", icon: "devicon-gitlab-plain" },
  { name: "Jenkins", icon: "devicon-jenkins-plain" },
  { name: "Nginx", icon: "devicon-nginx-original" },
  { name: "Linux", icon: "devicon-linux-plain" },
];

export default function TechnologiesSoftware() {
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
                      Tecnologías Utilizadas
                    </h2>
                  </div>
                </div>
                <div className="col-12 col-xl-7 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrdescr">
                    <p className="anim-uni-in-up">
                      Stack tecnológico robusto para crear soluciones
                      empresariales escalables y de alto rendimiento.
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
