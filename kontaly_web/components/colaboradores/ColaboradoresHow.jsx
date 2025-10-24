export default function ColaboradoresHow() {
  const steps = [
    {
      number: "01",
      title: "Regístrate",
      description:
        "Únete al programa de colaboradores de Kontaly de forma gratuita. Obtén tu enlace único de referido.",
    },
    {
      number: "02",
      title: "Refiere Clientes",
      description:
        "Comparte Kontaly con tus clientes, contactos o red profesional usando tu enlace personalizado.",
    },
    {
      number: "03",
      title: "Gana Comisiones",
      description:
        "Recibe el 20% recurrente de cada suscripción. Pagos automáticos mensuales directos a tu cuenta.",
    },
  ];

  return (
    <div id="how_works" className="section panel overflow-hidden bg-secondary dark:bg-gray-800">
      <div className="section-outer panel py-6 sm:py-8 lg:py-9">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
              <div
                className="heading vstack gap-2 panel max-w-700px mx-auto text-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                <h2 className="title h3 lg:h2 xl:h1 m-0">
                  ¿Cómo funciona?
                </h2>
                <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                  Solo 3 pasos para empezar a ganar
                </p>
              </div>
              <div
                className="content panel"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                <div className="row child-cols-12 lg:child-cols g-4 col-match">
                  {steps.map((step, index) => (
                    <div key={index}>
                      <div className="panel vstack gap-3 p-4 lg:p-6 rounded-2 bg-white dark:bg-gray-700 h-100">
                        <span className="fs-1 fw-bold text-primary opacity-20">
                          {step.number}
                        </span>
                        <h3 className="title h5 lg:h4 m-0">
                          {step.title}
                        </h3>
                        <p className="desc fs-6 opacity-70">
                          {step.description}
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
    </div>
  );
}
