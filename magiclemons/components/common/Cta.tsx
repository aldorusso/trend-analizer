import Link from "next/link";
import Image from "next/image";

import RevealText from "../animation/RevealText";
import AnimatedButton from "../animation/AnimatedButton";
import { CACHE_VERSION } from "@/lib/cache-version";

export default function Cta() {
  return (
    <div className="mxd-section overflow-hidden">
      <div className="mxd-container">
        {/* Block - CTA Start */}
        <div className="mxd-block">
          <div className="mxd-promo">
            <div className="mxd-promo__inner anim-zoom-out-container">
              {/* background */}
              <div className="mxd-promo__bg" />
              {/* caption */}
              <div className="mxd-promo__content">
                <p className="mxd-promo__title anim-uni-in-up">
                  <span className="mxd-promo__icon">
                    <Image
                      alt="Icon"
                      src={`/img/icons/300x300_obj-cta-01.webp?v=${CACHE_VERSION}`}
                      width={300}
                      height={300}
                      unoptimized
                    />
                  </span>
                  <RevealText
                    as="span"
                    className="mxd-promo__caption reveal-type"
                  >
                    ¡Hablemos de tu Proyecto Mágico!
                  </RevealText>
                </p>
                <div className="mxd-promo__controls anim-uni-in-up">
                  <AnimatedButton
                    text="Contáctanos"
                    className="btn btn-anim btn-default btn-large btn-additional slide-right-up"
                    href={`/contacto`}
                  >
                    <i className="ph-bold ph-arrow-up-right" />
                  </AnimatedButton>
                </div>
              </div>
              {/* parallax images */}
              <div className="mxd-promo__images">
                <Image
                  className="promo-image promo-image-1"
                  alt="Image"
                  src={`/img/illustrations/cta-img-01.webp?v=${CACHE_VERSION}`}
                  width={800}
                  height={912}
                  unoptimized
                />
                <Image
                  className="promo-image promo-image-2"
                  alt="Image"
                  src={`/img/illustrations/cta-img-02.webp?v=${CACHE_VERSION}`}
                  width={600}
                  height={601}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
        {/* Block - CTA End */}
      </div>
    </div>
  );
}
