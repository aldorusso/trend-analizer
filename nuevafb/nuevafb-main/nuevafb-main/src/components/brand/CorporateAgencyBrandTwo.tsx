import homeData from '@/../content/pages/corporate-home.json';
import { brandMarqueeSwiperParams } from '@/constants/swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import React from 'react';

const CorporateAgencyBrandTwo = () => {
    const { brandSlider } = homeData;

    return (
        <div className="ar-brand-area ar-brand-style crp-text-slider-style fix">
            <div className="tp-brand-wrapper yellow-green-bg z-index-1">
                <Swiper className='tp-brand-active slide-transtion'
                    {...brandMarqueeSwiperParams}
                >
                    {brandSlider.items.map((title, index) => (
                        <SwiperSlide key={index}>
                            <div className="tp-brand-item">
                                <span className="tp-brand-title">{title}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div >
    );
};

export default CorporateAgencyBrandTwo;
