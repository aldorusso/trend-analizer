import homeData from '@/../content/pages/corporate-home.json';
import { BusinessConsultationIcon, ProfessionalBusinessIcon, BusinessGrowthIcon } from '@/svg/ServiesIcons';
import { ArrowSvg } from '@/svg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CorporateAgencyService = () => {
    const { services } = homeData;

    // Map icon names to actual components
    const iconMap: Record<string, React.ComponentType> = {
        BusinessConsultationIcon,
        ProfessionalBusinessIcon,
        BusinessGrowthIcon,
    };

    return (
        <div className="crp-service-area p-relative pt-80 pb-90">
            <div className="crp-service-shape-wrap">
                <Image className="crp-service-shape-1" data-speed="1.1" src={services.shape1} alt="service-image" width={200} height={200} />
                <Image className="crp-service-shape-2" data-speed="1.1" src={services.shape2} alt="service-image" width={200} height={200} />
                <Image className="crp-service-shape-3" data-speed="1.1" src={services.shape3} alt="service-image" width={200} height={200} />
            </div>
            <div className="container container-1330">
                <div className="row">
                    <div className="col-md-6">
                        <div className="crp-service-title-box">
                            <span className="tp-section-subtitle-teko mb-25 tp_fade_anim" data-delay=".3">{services.subtitle}</span>
                            <h4 className="tp-section-title-teko tp_fade_anim" data-delay=".5">
                                {services.title.split(' ')[0]} <span>{services.title.split(' ')[1]}</span> <br /> {services.title.split(' ').slice(2).join(' ')}
                            </h4>
                        </div>
                    </div>

                    {services.servicesList.map((service, index) => {
                        const IconComponent = iconMap[service.iconName];
                        const delay = `.${(index + 1) * 2 + 1}`;

                        return (
                            <div className="col-md-6" key={index}>
                                <div className="crp-service-item mt-50 pb-65 d-flex tp_fade_anim" data-delay={delay}>
                                    <div className="crp-service-icon">
                                        <span>
                                            {IconComponent && <IconComponent />}
                                        </span>
                                    </div>
                                    <div className="crp-service-content">
                                        <h4 className="crp-service-title-sm">
                                            <Link className="tp-line-white cream" href={service.link}>{service.title}</Link>
                                        </h4>
                                        <p>{service.description}</p>
                                        <Link className="crp-service-link" href={service.link}>
                                            <span>
                                                <span className="text-1">View More</span>
                                                <span className="text-2">View More</span>
                                            </span>
                                            <i>
                                                <ArrowSvg width={12} height={12} strokeWidth={2} viewBox='0 0 12 12' pathValue='M1 11L11 1M11 1V11M11 1H1' />
                                                <ArrowSvg width={12} height={12} strokeWidth={2} viewBox='0 0 12 12' pathValue='M1 11L11 1M11 1V11M11 1H1' />
                                            </i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CorporateAgencyService;