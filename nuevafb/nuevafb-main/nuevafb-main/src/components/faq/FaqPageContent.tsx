"use client"
import aboutShape from '../../../public/assets/img/about-us/about-us-4/about-us-4-shape-1.png';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import teamBg from '../../../public/assets/img/team/team-bg.png';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import CorporateAgencyFooter from '@/layouts/footers/CorporateAgencyFooter';
import { fadeAnimation } from '@/hooks/useGsapAnimation';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { CareerShape } from '@/svg/HeroShape';
import { ArrowTwenty } from '@/svg/ArrowIcons';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import faqData from '@/../content/pages/faq.json';
import { useState } from 'react';

const FaqPageContent = () => {
    const [openAccordion, setOpenAccordion] = useState<string>('collapse-0-0');

    // Initialize custom cursor and background styles
    useCursorAndBackground({ bgColor: "#fff" });

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
        }, 100)
        return () => clearTimeout(timer);
    });

    const handleAccordionToggle = (id: string) => {
        setOpenAccordion(openAccordion === id ? '' : id);
    };

    return (
        <>
            <div id="magic-cursor" className="cursor-bg-red-2">
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <InnerPageHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <div className="ar-hero-area p-relative" style={{ backgroundImage: `url(${teamBg.src})` }}>
                            <div className="tp-career-shape-1">
                                <span><CareerShape /></span>
                            </div>
                            <div className="container container-1230">
                                <div className="ar-about-us-4-hero-ptb">
                                    <div className="row justify-content-center">
                                        <div className="col-xl-12">
                                            <div className="ar-hero-title-box tp_fade_anim" data-delay=".3">
                                                <div className="ar-about-us-4-title-box d-flex align-items-center mb-20">
                                                    <span className="tp-section-subtitle pre tp_fade_anim">{faqData.pageSubtitle}</span>
                                                    <div className="ar-about-us-4-icon">
                                                        <ArrowTwenty />
                                                    </div>
                                                </div>
                                                <h1 className="tp-career-title pb-30">
                                                    {faqData.pageTitle.split(' ')[0]} <span className="shape-1"><Image src={aboutShape} alt="about shape" /></span> <br />
                                                    {faqData.pageTitle.split(' ').slice(1).join(' ')}
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-4"></div>
                                        <div className="col-lg-8">
                                            <div className="tp-faq-text tp_fade_anim">
                                                <p>{faqData.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Categories */}
                        <div className="app-faq-area p-relative pb-120">
                            <div className="container container-1230">
                                {faqData.categories.map((category, catIndex) => (
                                    <div key={catIndex} className="mb-60">
                                        <div className="row justify-content-center mb-40">
                                            <div className="col-lg-12">
                                                <h2 className="tp-section-title-teko text-center mb-20">{category.name}</h2>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center">
                                            <div className="col-lg-10">
                                                <div className="app-faq-wrap faq-inner-style">
                                                    <div className="ai-faq-accordion-wrap">
                                                        <div className="accordion" id={`accordionCategory${catIndex}`}>
                                                            {category.questions.map((faq, qIndex) => {
                                                                const accordionId = `collapse-${catIndex}-${qIndex}`;
                                                                const isOpen = openAccordion === accordionId;

                                                                return (
                                                                    <div key={qIndex} className="accordion-items">
                                                                        <h2 className="accordion-header">
                                                                            <button
                                                                                className={`accordion-buttons ${!isOpen ? 'collapsed' : ''}`}
                                                                                type="button"
                                                                                onClick={() => handleAccordionToggle(accordionId)}
                                                                                aria-expanded={isOpen}
                                                                            >
                                                                                {faq.question}
                                                                                <span className="accordion-icon"></span>
                                                                            </button>
                                                                        </h2>
                                                                        <div
                                                                            id={accordionId}
                                                                            className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
                                                                        >
                                                                            <div className="accordion-body">
                                                                                {faq.answer.split('\n').map((line, lineIndex) => (
                                                                                    line.trim() ? <p key={lineIndex}>{line}</p> : <br key={lineIndex} />
                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </main>
                    <CorporateAgencyFooter bgColor="#F6F6F9" buttonCls='tp-footer-white-style' />
                </div>
            </div>
        </>
    );
};

export default FaqPageContent;
