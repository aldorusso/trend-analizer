import homeData from '@/../content/pages/corporate-home.json';
import shapeOne from '../../../public/assets/img/home-09/success/shape-2.png';
import shapeTwo from '../../../public/assets/img/home-09/success/shape-1.png';
import { ArrowSvg } from '@/svg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CorporateAgencySuccess = () => {
    const { successGallery } = homeData;

    return (
        <div className="crp-success-area mb-70 p-relative">
            <div className="crp-success-big-img anim-zoomin-wrap">
                <Image className="w-100 anim-zoomin" src={successGallery.bigImage} alt="success-image" width={1920} height={800} />
            </div>
            <div className="container-fluid p-0">
                <div className="row gx-10">
                    <div className="offset-xxl-7 col-xxl-5 offset-xl-6 col-xl-6">
                        <div className="row gx-10">
                            <div className="col-xl-6 col-lg-6 col-md-6 mb-10">
                                <div className="crp-success-item">
                                    <div className="crp-success-img anim-zoomin-wrap">
                                        <Image className="w-100 anim-zoomin" src={successGallery.smallImages[0]} alt="" width={500} height={400} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 mb-10">
                                <div className="crp-success-item p-relative" style={{ backgroundColor: "#50703D" }}>
                                    <div className="crp-success-item-shape-1 d-none d-xxl-block">
                                        <Image src={shapeOne} alt="shape" />
                                    </div>
                                    <div className="crp-success-content-wrap">
                                        <div className="crp-success-content d-flex flex-column justify-content-between">
                                            <p>{successGallery.stats.fundingText}</p>
                                            <span><i data-purecounter-duration="1" data-purecounter-end="250" className="purecounter">250</i>K</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 mb-10">
                                <div className="crp-success-item p-relative" style={{ backgroundColor: "#FFEB53" }}>
                                    <div className="crp-success-item-shape-2 d-none d-xxl-block">
                                        <Image src={shapeTwo} alt="shape" />
                                    </div>
                                    <div className="crp-success-content-wrap crp-success-yellow-box">
                                        <div className="crp-success-content d-flex flex-column justify-content-between">
                                            <p>{successGallery.stats.ctaText} <br /> {successGallery.stats.ctaDescription}</p>
                                            <div className="crp-success-btn-box">
                                                <Link className="tp-btn-green-border" href={successGallery.stats.ctaLink}>
                                                    <span>
                                                        <span className="text-1">{successGallery.stats.ctaButtonText}</span>
                                                        <span className="text-2">{successGallery.stats.ctaButtonText}</span>
                                                    </span>{" "}
                                                    <i>
                                                        <ArrowSvg />
                                                        <ArrowSvg />
                                                    </i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 mb-10">
                                <div className="crp-success-item">
                                    <div className="crp-success-img anim-zoomin-wrap">
                                        <Image className="w-100 anim-zoomin" src={successGallery.smallImages[1]} alt="image" width={500} height={400} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CorporateAgencySuccess;
