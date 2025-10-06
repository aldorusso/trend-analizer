import homeData from '@/../content/pages/corporate-home.json';
import Image from 'next/image';
import shape1 from '../../../public/assets/img/home-09/process/shape-1.png';
import shape2 from '../../../public/assets/img/home-09/process/shape-2.png';
import shape3 from '../../../public/assets/img/home-09/process/shape-3.png';
import React from 'react';

const CorporateAgencyProcess = () => {
    const { process } = homeData;

    return (
        <div className="crp-process-area p-relative pt-140 pb-100">
            <div className="crp-process-shape-wrap">
                <Image className="crp-process-shape-1" data-speed="1.1" src={shape1} alt="shape" />
                <Image className="crp-process-shape-2" data-speed="1.1" src={shape2} alt="shape" />
                <Image className="crp-process-shape-3" data-speed="1.1" src={shape3} alt="shape" />
            </div>
            <div className="container container-1330">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="crp-process-title-box mb-85">
                            <span className="tp-section-subtitle-teko mb-25 tp_fade_anim" data-delay=".3">{process.subtitle}</span>
                            <h4 className="tp-section-title-teko tp_fade_anim" data-delay=".5">{process.title} <span>{process.highlightWord}</span></h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {process.steps.map((item, index) => (
                        <div key={index} className="col-xl-3 col-lg-4 col-md-6">
                            <div className="crp-process-item mb-50 tp_fade_anim" data-delay={`.${3 + index * 2}`}>
                                <div className="crp-process-icon">
                                    <Image src={item.icon} alt={item.title} width={80} height={80} />
                                </div>
                                <div className="crp-process-content">
                                    <h4 className="crp-process-title-sm">{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CorporateAgencyProcess;
