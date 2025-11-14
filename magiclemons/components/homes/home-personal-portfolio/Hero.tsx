import AnimatedButton from "@/components/animation/AnimatedButton";
import Counter from "@/components/common/Counter";
import Image from "next/image";
import { CACHE_VERSION } from "@/lib/cache-version";

export default function Hero() {
  return (
    <div className="mxd-section">
      <div className="mxd-hero-09">
        <div className="mxd-hero-09__wrap loading-wrap">
          <div className="mxd-hero-09__headline">
            <div className="hero-09-headline__caption loading__item">
              <p>
                Si no trabajas apasionadamente por ser el mejor del mundo en lo que haces, le fallas a tu talento, a tu destino y a tu Dios.
                <br />
                <em>- George Lois</em>
              </p>
            </div>
            <div className="hero-09-headline__title loading__item">
              <h1 className="hero-09-headline__visible" style={{
                fontSize: '330px',
                fontWeight: '700',
                lineHeight: '1',
                margin: '0',
                textTransform: 'none',
                letterSpacing: '-0.02em'
              }}>
                Magic Lemons
              </h1>
            </div>
            <div className="hero-09-headline__tags loading__fade">
              <span className="tag tag-default tag-outline">Midjourney</span>
              <span className="tag tag-default tag-outline">AI</span>
              <span className="tag tag-default tag-outline">Editorial</span>
              <span className="tag tag-default tag-outline">
                Interactive design
              </span>
              <span className="tag tag-default tag-outline">
                Web experience
              </span>
              <span className="tag tag-default tag-outline">Web design</span>
              <span className="tag tag-default tag-outline">Branding</span>
              <span className="tag tag-default tag-outline">UI</span>
              <span className="tag tag-default tag-outline">UX</span>
              <span className="tag tag-default tag-outline">HTML</span>
              <span className="tag tag-default tag-outline">Frontend</span>
              <span className="tag tag-default tag-outline">Motion design</span>
              <span className="tag tag-default tag-outline">3d modeling</span>
              <span className="tag tag-default tag-outline">Video editing</span>
            </div>
          </div>
          <div className="mxd-hero-09__objects">
            <div className="hero-09-objects__image loading__item">
              <Image
                className="mxd-move"
                alt="Hero Image"
                src={`/limon-removebg-preview.png?v=${CACHE_VERSION}`}
                width={915}
                height={1157}
                unoptimized
              />
            </div>
            <div className="hero-09-objects__item item-01 loading__item">
              <div className="mxd-counter horizontal">
                <p
                  id="stats-counter-1"
                  className="mxd-counter__number mxd-stats-number xsmall"
                >
                  <Counter max={10} />+
                </p>
                <p className="mxd-counter__descr t-140 t-bright t-small">
                  Años de
                  <br />
                  experiencia
                </p>
              </div>
            </div>
            <div className="hero-09-objects__item item-02 loading__item">
              <div className="mxd-counter horizontal">
                <p
                  id="stats-counter-2"
                  className="mxd-counter__number mxd-stats-number xsmall"
                >
                  <Counter max={70} />+
                </p>
                <p className="mxd-counter__descr t-140 t-bright t-small">
                  Proyectos
                  <br />
                  Realizados
                </p>
              </div>
            </div>
            <div className="hero-09-objects__item item-03 loading__item">
              <div className="mxd-hero__mark">
                <span className="mark-icon" />
                <span className="mark-text">Disponibles para proyectos</span>
              </div>
            </div>
          </div>
          {/* scroll for more */}
          <div className="mxd-hero-09__more loading__fade">
            <AnimatedButton
              text="Scroll for more"
              as={"a"}
              className="btn btn-line-default btn-anim slide-down"
              href="#projects"
            >
              <i className="ph-bold ph-arrow-elbow-right-down" />
            </AnimatedButton>
          </div>
        </div>
      </div>
    </div>
  );
}
