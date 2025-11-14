import Link from "next/link";
import Image from "next/image";

import BackgroundParallax from "@/components/animation/BackgroundParallax";
import AnimateRotation from "@/components/animation/AnimateRotation";
import { CACHE_VERSION } from "@/lib/cache-version";

export default function ParallaxBanner() {
  return (
    <div className="mxd-section padding-pre-title">
      <div className="mxd-container">
        <div className="mxd-container__circle">
          <Link
            className="btn-rotating btn-rotating-blur-outline ver-02"
            href={`/contacto`}
          >
            {/* SVG rotating text */}
            <AnimateRotation
              as="svg"
              version="1.1"
              id="scrollDown"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 160 160"
              enableBackground={"new 0 0 160 160"}
              xmlSpace="preserve"
              className="btn-rotating__text animate-rotation"
              value={360}
            >
              <defs>
                <path
                  id="textPath"
                  d="M149.7,80c0,38.5-31.2,69.7-69.7,69.7S10.3,118.5,10.3,80S41.5,10.3,80,10.3S149.7,41.5,149.7,80z"
                />
              </defs>
              <g>
                <use xlinkHref="#textPath" fill="none" />
                <text>
                  {/* button text here!!! */}
                  <textPath xlinkHref="#textPath">
                    Empecemos un proyecto innovador * Empecemos un proyecto innovador
                    *
                  </textPath>
                </text>
              </g>
            </AnimateRotation>
            {/* image */}
            <Image
              className="btn-rotating__image"
              alt="Object"
              src={`/img/icons/300x300_obj-btn-02.webp?v=${CACHE_VERSION}`}
              width={300}
              height={300}
              unoptimized
            />
          </Link>
        </div>
        <div className="mxd-divider">
          <BackgroundParallax
            scale={1.5}
            className="mxd-divider__image divider-image-6 parallax-img"
          />
        </div>
      </div>
    </div>
  );
}
