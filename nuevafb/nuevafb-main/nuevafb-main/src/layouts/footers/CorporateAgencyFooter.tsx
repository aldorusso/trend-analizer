import globalSettings from '@/../content/settings/global.json';
import shape from '../../../public/assets/img/home-09/footer/footer-shape-1.png';
import CorporateAgencyCopyright from './subComponents/CorporateAgencyCopyright';
import { FooterSocialIcons } from './subComponents/FooterSocialIcons';
import { ArrowSeven } from '@/svg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CorporateAgencyFooter = () => {
    const { logo, footer, contact } = globalSettings;

    return (
        <footer>
            {/* -- footer area start -- */}
            <div className="crp-footer-area crp-footer-bg p-relative pt-120 z-index-1">
                <div className="crp-footer-shape d-none d-xl-block">
                    <Image src={shape} alt="shape" />
                </div>
                <div className="container container-1350">
                    <div className="row">
                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                            <div className="crp-footer-widget mb-90 tp_fade_anim" data-delay=".3">
                                <div className="crp-footer-logo">
                                    <Link href="/"><Image width={120} src={logo.footer} alt="logo" height={40} /></Link>
                                </div>
                                <p>{footer.description}</p>
                                <FooterSocialIcons className='crp-footer-social' />
                            </div>
                        </div>
                        {footer.columns.map((column, index) => (
                            <div key={index} className="col-xxl-2 col-xl-3 col-lg-3 col-md-3">
                                <div className="crp-footer-widget mb-90 tp_fade_anim" data-delay={`.${5 + index * 2}`}>
                                    <h4 className="crp-footer-widget-title">{column.title}</h4>
                                    <div className="crp-footer-widget-menu">
                                        <ul>
                                            {column.links.map((link, linkIndex) => (
                                                <li key={linkIndex}><Link className="tp-line-white cream-2" href={link.url}>{link.text}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-4">
                            <div className="crp-footer-widget mb-90 tp_fade_anim" data-delay=".7">
                                <div className="crp-footer-widget-info mb-40">
                                    <h4 className="crp-footer-widget-title">Location</h4>
                                    <Link className="tp-line-white cream-2" href="https://www.google.com/maps" target="_blank">
                                        {contact.address}
                                    </Link>
                                </div>
                                <div className="crp-footer-widget-info">
                                    <h4 className="crp-footer-widget-title">Call Us on</h4>
                                    <Link className="tp-line-white cream-2" href={`mailto:${contact.email}`}>{contact.email}</Link>
                                    <Link className="tel tp-line-white cream-2 d-inline-block" href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="colx-l-12">
                            <div className="crp-footer-big-text-wrap tp_fade_anim" data-delay=".3">
                                <Link className="crp-footer-big-text text-center" href="/contact">
                                    <span>
                                        <span className="text-1">{`Let's`} Discuss</span>
                                        <span className="text-2">{`Let's`} Discuss</span>
                                    </span>{" "}
                                    <i>
                                        <ArrowSeven />
                                        <ArrowSeven />
                                    </i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <CorporateAgencyCopyright />
                </div>
            </div>
            {/* -- footer area end -- */}
        </footer>
    );
};

export default CorporateAgencyFooter;