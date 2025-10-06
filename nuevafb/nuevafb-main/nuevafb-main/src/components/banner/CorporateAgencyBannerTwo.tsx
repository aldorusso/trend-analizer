import homeData from '@/../content/pages/corporate-home.json';
import Image from 'next/image';
import React from 'react';

const CorporateAgencyBannerTwo = () => {
    const { bannerImage } = homeData;

    return (
        <div className="crp-banner-area">
            <div className="crp-banner-wrap">
                <Image style={{ width: "100%", height: "auto" }} className="w-100" data-speed=".8" src={bannerImage.image} alt="banner-image" data-lag="0" width={1920} height={600} />
            </div>
        </div>
    );
};

export default CorporateAgencyBannerTwo;