import Image from "next/image";

const technologies = [
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "TypeScript", icon: "devicon-typescript-plain" },
  { name: "Python", icon: "devicon-python-plain" },
  { name: "PHP", icon: "devicon-php-plain" },
  { name: "C++", icon: "devicon-cplusplus-plain" },
  { name: "Kotlin", icon: "devicon-kotlin-plain" },
  { name: "Swift", icon: "devicon-swift-plain" },
  { name: "HTML5", icon: "devicon-html5-plain" },
  { name: "CSS3", icon: "devicon-css3-plain" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
  { name: "Next.js", icon: "devicon-nextjs-plain" },
  { name: "Vue.js", icon: "devicon-vuejs-plain" },
  { name: "Angular", icon: "devicon-angularjs-plain" },
  { name: "Svelte", icon: "devicon-svelte-plain" },
  { name: "Astro", icon: "devicon-astro-plain" },
  { name: "Node.js", icon: "devicon-nodejs-plain" },
  { name: "Django", icon: "devicon-django-plain" },
  { name: "FastAPI", icon: "devicon-fastapi-plain" },
  { name: "Laravel", icon: "devicon-laravel-plain" },
  { name: "React Native", icon: "devicon-react-original" },
  { name: "Flutter", icon: "devicon-flutter-plain" },
  { name: "Android", icon: "devicon-android-plain" },
  { name: "Apple", icon: "devicon-apple-original" },
  { name: "MySQL", icon: "devicon-mysql-plain" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
  { name: "MongoDB", icon: "devicon-mongodb-plain" },
  { name: "Firebase", icon: "devicon-firebase-plain" },
  { name: "Supabase", icon: "devicon-supabase-plain" },
  { name: "Git", icon: "devicon-git-plain" },
  { name: "Docker", icon: "devicon-docker-plain" },
  { name: "WordPress", icon: "devicon-wordpress-plain" },
  { name: "Drupal", icon: "devicon-drupal-plain" },
];

export default function TechnologiesGrid() {
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
                      Tecnologías
                    </h2>
                  </div>
                </div>
                <div className="col-12 col-xl-7 mxd-grid-item no-margin">
                  <div className="mxd-section-title__hrdescr">
                    <p className="anim-uni-in-up">
                      Trabajo con tecnologías modernas y probadas para crear
                      soluciones robustas, escalables y adaptadas a tus
                      necesidades.
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
