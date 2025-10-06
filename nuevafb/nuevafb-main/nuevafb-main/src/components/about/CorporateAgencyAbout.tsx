import homeData from '@/../content/pages/corporate-home.json';
import AnimatedCounter from '../counter/AnimatedCounter';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CorporateAgencyAbout = () => {
    const { about } = homeData;

    return (
            <div className="crp-about-area pt-140 pb-160 z-index-1">
                <div className="container container-1330">
                    <div className="crp-about-wrapper p-relative">
                        <div className="crp-about-shape">
                            <Image data-speed="1.2" src={about.shapeImage} alt="shape" data-lag="0" width={400} height={400} />
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4">
                                <div className="crp-about-left">
                                    <span className="tp-section-subtitle-teko mb-120 tp_fade_anim" data-delay=".3">
                                        {about.subtitle.split(' ')[0]} <br /> <i>{about.subtitle.split(' ')[1]}</i> {about.subtitle.split(' ').slice(2).join(' ')}
                                    </span>
                                    <div className="crp-about-exp tp_fade_anim" data-delay=".5" data-fade-from="top" data-ease="bounce">
                                        <div className="crp-about-exp-item text-center">
                                            <AnimatedCounter min={0} max={about.yearsExperience} />
                                            <i>Years of <br /> Experience</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8">
                                <div className="crp-about-right">
                                    <h4 className="tp-section-title-teko mb-55 tp_fade_anim" data-delay=".3">
                                        {about.title}
                                    </h4>
                                    <div className="crp-about-bottom-wrap d-flex">
                                        <div className="crp-about-btn-box tp_fade_anim" data-delay=".5" >
                                            <Link className="tp-btn-yellow-green lg" href={about.buttonLink}>
                                                <span>
                                                    <span className="text-1">{about.buttonText}</span>
                                                    <span className="text-2">{about.buttonText}</span>
                                                </span>
                                            </Link>
                                        </div>
                                        <div className="crp-about-text tp_fade_anim" data-delay=".7">
                                            <p>{about.description}</p>
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

export default CorporateAgencyAbout;