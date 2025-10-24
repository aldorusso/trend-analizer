import Image from "next/image";

export default function ColaboradoresWhy() {
  const benefits = [
    {
      id: 1,
      icon: "unicon-sync",
      iconBg: "bg-success",
      title: "20% Recurrente",
      description:
        "Gana el 20% mensual de cada cliente que refieras, mientras mantengan su suscripción activa. Ingresos pasivos garantizados.",
      stats: "Pagos automáticos cada mes",
    },
    {
      id: 2,
      icon: "unicon-layer-group",
      iconBg: "bg-primary",
      title: "Gestión Multi-Cliente",
      description:
        "Panel exclusivo para gestionar todos tus clientes referidos. Accede a métricas, facturación y soporte prioritario.",
      stats: "Dashboard completo incluido",
    },
    {
      id: 3,
      icon: "unicon-rocket",
      iconBg: "bg-warning",
      title: "Capacidades Extras",
      description:
        "Accede a funciones exclusivas, descuentos especiales para tus clientes y soporte técnico dedicado para tu red.",
      stats: "Soporte prioritario 24/7",
    },
  ];

  return (
    <div id="why_colaborador" className="section panel overflow-hidden">
      <div className="section-outer panel py-6 sm:py-8 lg:py-9">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
              <div
                className="heading vstack gap-2 panel max-w-700px mx-auto text-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                <h2 className="title h3 lg:h2 xl:h1 m-0">
                  ¿Por qué ser colaborador?
                </h2>
                <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                  Ideal para gestorías, consultorías y profesionales que trabajan con múltiples clientes
                </p>
              </div>
              <div
                className="content panel"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 g-3 xl:g-4 col-match">
                  {benefits.map((benefit) => (
                    <div key={benefit.id}>
                      <div className="feature-item panel vstack gap-3 p-4 lg:p-6 rounded-2 bg-secondary dark:bg-gray-800 h-100 border border-gray-100 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all duration-300">
                        <div className={`cstack w-56px h-56px rounded-2 ${benefit.iconBg} text-white mb-2`}>
                          <i className={`icon icon-2 ${benefit.icon}`} />
                        </div>
                        <h3 className="title h5 lg:h4 m-0">
                          {benefit.title}
                        </h3>
                        <p className="desc fs-6 opacity-70">
                          {benefit.description}
                        </p>
                        <div className="mt-auto pt-3 border-top border-gray-200 dark:border-gray-700">
                          <span className="fs-7 fw-medium text-primary">
                            <i className="icon-narrow unicon-checkmark-circle me-narrow" />
                            {benefit.stats}
                          </span>
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
    </div>
  );
}
