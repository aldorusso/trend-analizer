import homeData from '@/../content/pages/corporate-home.json';
import Image from 'next/image';
import React from 'react';

const CorporateAgencyBanner = () => {
    const { secondBanner } = homeData;

    return (
        <div className="crp-banner-area crp-banner-style">
            <div className="crp-banner-wrap">
                <Image style={{ width: "100%", height: "auto" }} className="w-100" data-speed=".8" src={secondBanner.image} alt="banner" width={1920} height={600} />
            </div>
        </div>
    );
};

export default CorporateAgencyBanner;
