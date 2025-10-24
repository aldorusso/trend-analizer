export default function ColaboradoresPotential() {
  const earnings = [
    {
      clients: "30 clientes",
      amount: "€474",
      description: "Ingresos mensuales recurrentes",
    },
    {
      clients: "60 clientes",
      amount: "€948",
      description: "Ingresos mensuales recurrentes",
      featured: true,
    },
    {
      clients: "100 clientes",
      amount: "€1,580",
      description: "Ingresos mensuales recurrentes",
    },
  ];

  return (
    <div id="potential" className="section panel overflow-hidden bg-secondary dark:bg-gray-800">
      <div className="section-outer panel py-6 sm:py-8 lg:py-9">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
              <div
                className="heading vstack gap-2 panel max-w-700px mx-auto text-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                <h2 className="title h3 lg:h2 xl:h1 m-0">
                  El potencial de tus ingresos
                </h2>
                <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                  Ejemplo con el plan Professional (€73/mes)
                </p>
              </div>
              <div
                className="content panel"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                <div className="row child-cols-12 lg:child-cols g-4 col-match">
                  {earnings.map((earning, index) => (
                    <div key={index}>
                      <div
                        className={`panel vstack items-center gap-3 p-4 lg:p-6 rounded-2 text-center h-100 ${
                          earning.featured
                            ? "bg-primary dark:bg-primary text-white border-2 border-primary"
                            : "bg-white dark:bg-gray-700"
                        }`}
                      >
                        <span
                          className={`fs-6 fw-medium ${
                            earning.featured ? "text-white" : "text-primary"
                          }`}
                        >
                          Con {earning.clients}
                        </span>
                        <h3
                          className={`display-4 fw-bold m-0 ${
                            earning.featured ? "text-white" : "text-dark dark:text-white"
                          }`}
                        >
                          {earning.amount}
                        </h3>
                        <p
                          className={`fs-6 m-0 ${
                            earning.featured ? "text-white opacity-90" : "opacity-70"
                          }`}
                        >
                          {earning.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="panel text-center mt-4">
                  <p className="fs-7 opacity-70">
                    * Comisión del 20% sobre cada suscripción mientras el cliente permanezca activo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
