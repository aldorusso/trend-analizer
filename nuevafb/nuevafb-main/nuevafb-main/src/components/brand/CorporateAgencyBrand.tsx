import homeData from '@/../content/pages/corporate-home.json';
import Image from "next/image"
import React from 'react';

// Import Swiper components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

const CorporateAgencyBrand = () => {
    const { brands } = homeData;

    // Duplicate logos for seamless scroll
    const duplicatedBrands = [
        ...brands.logos,
        ...brands.logos,
        ...brands.logos,
    ];

    return (
        <div className="creative-brand-area pb-80 fix">
            <div className="creative-brand-wrapper">
                <Swiper
                    className="creative-brand-active slider-transtion"
                    modules={[Autoplay, FreeMode]}
                    loop={true}
                    freeMode={true}
                    slidesPerView={6}
                    spaceBetween={0}
                    centeredSlides={true}
                    allowTouchMove={false}
                    speed={3000}
                    autoplay={{
                        delay: 1,
                        disableOnInteraction: true,
                    }}
                    breakpoints={{
                        '1600': { slidesPerView: 6 },
                        '1400': { slidesPerView: 5 },
                        '1200': { slidesPerView: 5 },
                        '992': { slidesPerView: 4 },
                        '768': { slidesPerView: 3 },
                        '576': { slidesPerView: 3 },
                        '0': { slidesPerView: 2 }
                    }}
                >
                    {duplicatedBrands.map((brand, index) => (
                        <SwiperSlide key={index}>
                            <div className="creative-brand-item">
                                <Image src={brand.image} alt={brand.alt} width={150} height={80} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div >
    );
};

export default CorporateAgencyBrand;