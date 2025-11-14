import AnimatedButton from "@/components/animation/AnimatedButton";
import RevealText from "@/components/animation/RevealText";
import Link from "next/link";

export default function About() {
  return (
    <div className="mxd-section padding-default">
      <div className="mxd-container grid-container">
        {/* Block - About Description with Manifest Start */}
        <div className="mxd-block">
          <div className="container-fluid px-0">
            <div className="row gx-0 d-xl-flex justify-content-xl-center">
              <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                <div className="mxd-block__content">
                  <div className="mxd-block__manifest centered anim-uni-in-up">
                    <RevealText
                      as="p"
                      className="mxd-manifest mxd-manifest-l reveal-type"
                    >
                      El panorama digital evoluciona constantemente, y nuestra agencia se enfoca en liderar el cambio.
                      Utilizamos las tecnologías más eficientes para crear soluciones que no solo son funcionales,
                      sino realmente transformadoras.
                    </RevealText>
                    <div className="mxd-manifest__controls anim-uni-in-up">
                      <div className="mxd-btngroup centered">
                        <AnimatedButton
                          text="Nuestros Proyectos"
                          className="btn btn-anim btn-default btn-accent slide-right-up"
                          href={`/portafolio`}
                        >
                          <i className="ph-bold ph-arrow-up-right" />
                        </AnimatedButton>
                        <AnimatedButton
                          text="Contáctanos"
                          as={"a"}
                          className="btn btn-anim btn-default btn-outline slide-down"
                          href="/contacto"
                        >
                          <i className="ph-bold ph-arrow-right" />
                        </AnimatedButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Block - About Description with Manifest End */}
      </div>
    </div>
  );
}
