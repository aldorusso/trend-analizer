import Image from "next/image";

export default function ColaboradoresFor() {
  const profiles = [
    {
      id: 1,
      title: "Gestorías y Asesorías",
      description:
        "Gestiona todos tus clientes desde un único panel. Ofrece Kontaly como solución integral y gana mientras ayudas a tus clientes a crecer.",
      features: [
        "Panel multi-cliente",
        "Soporte técnico prioritario",
        "Descuentos especiales para clientes",
      ],
      icon: "unicon-briefcase-alt",
    },
    {
      id: 2,
      title: "Agencias y Consultoras",
      description:
        "Añade valor a tus servicios ofreciendo Kontaly. Aumenta tus ingresos recurrentes mientras mejoras la experiencia de tus clientes.",
      features: [
        "White label disponible",
        "Material de marketing personalizado",
        "API completa para integraciones",
      ],
      icon: "unicon-rocket",
    },
  ];

  return (
    <div id="perfect_for" className="section panel overflow-hidden">
      <div className="section-outer panel py-6 sm:py-8 lg:py-9">
        <div className="container max-w-xl">
          <div className="section-inner panel">
            <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
              <div
                className="heading vstack gap-2 panel max-w-700px mx-auto text-center"
                data-anime="onview: -100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
              >
                <h2 className="title h3 lg:h2 xl:h1 m-0">
                  Perfecto para
                </h2>
              </div>
              <div
                className="content panel"
                data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 100;"
              >
                <div className="row child-cols-12 lg:child-cols-6 g-4 col-match">
                  {profiles.map((profile) => (
                    <div key={profile.id}>
                      <div className="panel vstack gap-3 p-4 lg:p-6 rounded-2 bg-secondary dark:bg-gray-800 h-100">
                        <div className="cstack w-56px h-56px rounded-circle bg-primary text-white mb-2">
                          <i className={`icon icon-3 ${profile.icon}`} />
                        </div>
                        <h3 className="title h5 lg:h4 m-0">
                          {profile.title}
                        </h3>
                        <p className="desc fs-6 opacity-70 mb-3">
                          {profile.description}
                        </p>
                        <ul className="uc-list uc-list-divider fs-6">
                          {profile.features.map((feature, index) => (
                            <li key={index} className="hstack gap-narrow">
                              <i className="icon icon-narrow unicon-checkmark-circle text-primary" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
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
