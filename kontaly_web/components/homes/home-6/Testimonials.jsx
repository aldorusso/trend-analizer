"use client";
import { reviews, slidesData } from "@/data/testimonials";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
export default function Testimonials() {
  return (
    <div
      id="clients_feedback"
      className="clients-feedback section panel  scrollSpysection"
    >
      <div className="section-outer panel pt-3 lg:pt-4 xl:pt-5 bg-secondary text-black rounded-2 lg:rounded-3 m-2">
        <div className="container xl:max-w-xl">
          <div
            className="section-inner panel vstack items-center gap-4 md:gap-6 lg:gap-8 max-w-100"
            data-anime="onview: -100; targets: >*; translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(200);"
          >
            <div
              className="panel vstack items-center gap-2 xl:gap-3 text-center"
              data-anime="onview: -100; targets: >*; translateY: [-48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});"
            >
              <span className="fs-7 fw-medium py-narrow px-2 border rounded-pill text-primary dark:text-tertiary">
                Testimonios
              </span>
              <h2 className="h3 lg:h2 xl:h1 m-0 px-2 text-black">
                Lo que dicen nuestros clientes
              </h2>
              <p className="fs-6 xl:fs-5 opacity-70">
                Opiniones reales de empresas que confían en Kontaly
              </p>
            </div>
            <div className="panel w-100 mask-x">
              <Swiper
                className="swiper"
                slidesPerView={1}
                spaceBetween={16}
                centeredSlides={true}
                loop={true}
                speed={10000}
                modules={[Autoplay]}
                autoplay={{
                  delay: 0, // Negative delay is not valid, setting to 0 for continuous autoplay
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }}
                allowTouchMove={false}
                breakpoints={{
                  1024: {
                    // Adjust according to your responsive design
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                }}
              >
                {slidesData.map((slide, index) => (
                  <SwiperSlide className="swiper-slide" key={index}>
                    <div className="panel vstack justify-between gap-3 p-3 lg:p-4 xl:p-6 bg-white text-black rounded-1-5 h-100">
                      <div className="panel vstack items-start gap-2 lg:gap-4">
                        <div className="rating d-flex gap-0">
                          {Array.from({ length: slide.rating }).map((_, i) => (
                            <Image
                              className="icon icon-1"
                              alt="star"
                              data-uc-svg=""
                              key={i}
                              src="/assets/images/star.svg"
                              width="24"
                              height="25"
                            />
                          ))}
                        </div>
                        <p className="fs-5 lg:fs-4">“{slide.quote}”</p>
                      </div>
                      <div className="panel mt-2 lg:mt-4">
                        <div className="panel vstack items-start gap-narrow">
                          <h6 className="h5 m-0 text-black">{slide.name}</h6>
                          <span className="fs-7 lg:h6 opacity-70">
                            {slide.title}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <Swiper
                className="swiper mt-2 lg:mt-3"
                slidesPerView={1}
                spaceBetween={16}
                centeredSlides={true}
                loop={true}
                speed={10000}
                modules={[Autoplay]}
                autoplay={{
                  delay: 0, // Negative delay is not valid, setting to 0 for continuous autoplay
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }}
                allowTouchMove={false}
                breakpoints={{
                  1024: {
                    // Adjust according to your responsive design
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                }}
                style={{
                  transform: "rotate(180deg)",
                }}
              >
                {reviews.map((review, index) => (
                  <SwiperSlide
                    style={{ transform: "rotate(180deg)" }}
                    className="swiper-slide"
                    key={index}
                  >
                    <div className="panel vstack justify-between gap-3 p-3 lg:p-4 xl:p-6 bg-white text-black rounded-1-5 h-100">
                      <div className="panel vstack items-start gap-2 lg:gap-4">
                        <div className="rating d-flex gap-0">
                          {[...Array(5)].map((_, starIndex) => (
                            <Image
                              key={starIndex}
                              className="icon icon-1"
                              alt="star"
                              data-uc-svg=""
                              src="/assets/images/star.svg"
                              width="24"
                              height="25"
                            />
                          ))}
                        </div>
                        <p className="fs-5 lg:fs-4">{review.feedback}</p>
                      </div>
                      <div className="panel mt-2 lg:mt-4">
                        <div className="panel vstack items-start gap-narrow">
                          <h6 className="h5 m-0 text-black">{review.name}</h6>
                          <span className="fs-7 lg:h6 opacity-70">
                            {review.position}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
