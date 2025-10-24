import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CtaFinal() {
  return (
    <div className="section-outer panel">
      <div
        className="d-none lg:d-block"
        data-anime="targets: >*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
      >
        <div
          className="position-absolute rotate-45"
          style={{ top: "40%", left: "20%" }}
        >
          <Image
            alt="star-1"
            data-uc-svg=""
            loading="lazy"
            width={193}
            height={216}
            decoding="async"
            className="w-24px text-gray-900 dark:text-white"
            src="/assets/images/template/star-1.svg"
          />
        </div>
        <div
          className="position-absolute rotate-45"
          style={{ bottom: "40%", right: "20%" }}
        >
          <Image
            alt="star-2"
            data-uc-svg=""
            loading="lazy"
            width={69}
            height={95}
            decoding="async"
            className="w-24px text-gray-900 dark:text-white"
            src="/assets/images/template/star-2.svg"
          />
        </div>
      </div>
      <div
        className="d-none lg:d-block"
        data-anime="onview: -100; targets: img; scale: [0.8, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 350;"
      >
        <div className="position-absolute top-50 start-0 translate-middle-y ms-n6">
          <Image
            alt="talking"
            loading="lazy"
            width={195}
            height={254}
            decoding="async"
            className="w-200px xl:w-250px d-block dark:d-none"
            src="/assets/images/template/talking.svg"
          />
          <Image
            alt="talking-dark"
            loading="lazy"
            width={195}
            height={254}
            decoding="async"
            className="w-200px xl:w-250px d-none dark:d-block"
            src="/assets/images/template/talking-dark.svg"
          />
        </div>
        <div className="position-absolute top-50 end-0 translate-middle-y me-n6">
          <Image
            alt="chatting"
            loading="lazy"
            width={255}
            height={283}
            decoding="async"
            className="w-200px xl:w-250px d-block dark:d-none"
            src="/assets/images/template/chatting.svg"
          />
          <Image
            alt="chatting-dark"
            loading="lazy"
            width={255}
            height={283}
            decoding="async"
            className="w-200px xl:w-250px d-none dark:d-block"
            src="/assets/images/template/chatting-dark.svg"
          />
        </div>
      </div>
      <div className="container max-w-xl">
        <div className="section-inner panel rounded xl:rounded-2 py-4 sm:py-6 xl:py-9">
          <div
            className="vstack items-center gap-2 max-w-400px lg:max-w-600px mx-auto text-center"
            data-anime="onview:-100; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <h2 className="h3 sm:h1 xl:display-6 m-0">
              Comienza con <br />
              Kontaly hoy
            </h2>
            <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70 mt-1 lg:mt-2">
              Con integraciones nativas que optimizan todo tu flujo de trabajo empresarial.
            </p>
            <form className="row child-cols g-1 w-100 lg:w-5/6 mt-1 lg:mt-2">
              <div>
                <input
                  className="form-control h-48px lg:h-56px bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                  type="email"
                  placeholder="Tu correo electrónico"
                  required
                />
              </div>
              <div className="col-12 sm:col-auto">
                <Link
                  className="btn btn-md h-48px lg:h-56px w-100 sm:min-w-150px btn-primary text-white"
                  href="/page-pricing"
                >
                  Prueba gratis
                </Link>
              </div>
            </form>
            <p className="fs-7 text-dark dark:text-white text-opacity-70">
              Prueba de 14 días, no se requiere tarjeta de crédito.
            </p>
          </div>
        </div>
        <hr className="w-100 m-0" />
      </div>
    </div>
  );
}
