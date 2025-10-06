import homeData from '@/../content/pages/corporate-home.json';
import AnimatedCounter from '../counter/AnimatedCounter';
import { ArrowSix, ArrowSvg } from '@/svg/ArrowIcons';
import { StarIcon } from '@/svg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CorporateAgencyHero = () => {
    const { hero } = homeData;

    return (
        <div className="crp-hero-area crp-hero-bg" style={{ backgroundImage: `url(${hero.bgImage})`, backgroundColor: hero.bgColor }}>
            <div className="container container-1550">
                <div className="row align-items-end">
                    <div className="col-xl-9 col-lg-8">
                        <div className="crp-hero-ptb">
                            <div className="crp-hero-title-box mb-35">
                                <h2 className="crp-hero-title tp_fade_anim">
                                    {hero.title.split(' ').slice(0, 2).join(' ')}{" "}
                                    <i className="box d-none d-sm-inline-flex">
                                        <span className="eye"></span>
                                        <span className="eye"></span>
                                    </i>
                                    {hero.title.split(' ').slice(2, 6).join(' ')}{" "}
                                    <span>{hero.title.split(' ')[6]}</span> {hero.title.split(' ').slice(7).join(' ')}
                                </h2>
                            </div>
                            <div className="crp-hero-review-box d-flex align-items-center">
                                <div className="crp-hero-avater tp_fade_anim" data-delay=".3">
                                    <Image src={hero.avatarImage} alt="avater" width={200} height={50} />
                                </div>
                                <div className="crp-hero-ratting d-flex align-items-center tp_fade_anim" data-delay=".5">
                                    <div className="crp-hero-ratting-text">
                                        <span>{hero.rating}</span>
                                    </div>
                                    <div className="crp-hero-ratting">
                                        <div className="crp-hero-ratting-icon">
                                            {[...Array(5)].map((_, i) => (
                                                <span style={{ marginRight: "4px" }} key={i}>
                                                    <StarIcon width={13} height={12} color="#E9FF48" />
                                                </span>
                                            ))}
                                        </div>
                                        <div className="crp-hero-ratting-details">
                                            <Link href="#">
                                                {hero.reviewsText}{" "}
                                                <span>
                                                    <ArrowSvg pathValue='M1 1L9 9M9 9V1M9 9H1' />
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4">
                        <div className="crp-hero-funfact-wrap crp-hero-funfact-bg z-index-1 p-relative tp_fade_anim" data-delay=".5" style={{ backgroundImage: `url(${hero.funfactPanel.bgImage})` }}>
                            <div className="crp-hero-funfact-line d-none d-xl-inline-block"></div>
                            <div className="crp-hero-funfact-img">
                                <Image src={hero.funfactPanel.circleAvatar} alt="circle-avater" width={200} height={200} />
                            </div>
                            <div className="crp-hero-funfact-top-content">
                                <h4>{hero.funfactPanel.title}</h4>
                                <p>{hero.funfactPanel.description}</p>
                            </div>
                            {hero.funfactPanel.stats.map((item, index) => (
                                <div className="crp-hero-funfact-item" key={index}>
                                    <h4>
                                        <span><AnimatedCounter min={0} max={item.count} /></span>
                                        {item.suffix}
                                    </h4>
                                    <div className="crp-hero-funfact-more-details d-flex justify-content-between">
                                        <p>{item.description}</p>
                                        <Link href="#">
                                            <ArrowSix />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CorporateAgencyHero;