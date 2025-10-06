'use client';
import globalSettings from '@/../content/settings/global.json';
import OffCanvasPanel from '@/components/offcanvas/OffCanvasPanel';
import useStickyHeader from '@/hooks/useStickyHeader';
import useGlobalContext from '@/hooks/useContext';
import CustomNavMenus from '../subComponents/CustomNavMenus';
import TopBar from '@/components/shared/TopBar/TopBar';
import React, { useState, useEffect } from 'react';
import { SearchIcon } from '@/svg';
import Image from 'next/image';
import Link from 'next/link';

const CorporateAgencyHeader = () => {
    const [openOffCanvas, setOpenOffCanvas] = useState(false);
    const [topBarVisible, setTopBarVisible] = useState(true);
    const { toggleSearch } = useGlobalContext();
    const isSticky = useStickyHeader(20);
    const { logo, navigation, topBar } = globalSettings;

    useEffect(() => {
        const handleScroll = () => {
            setTopBarVisible(window.scrollY <= 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {topBar?.show && (
                <TopBar
                    address={topBar.address}
                    clientLoginText={topBar.clientLoginText}
                    clientLoginUrl={topBar.clientLoginUrl}
                    businessLoginText={topBar.businessLoginText}
                    businessLoginUrl={topBar.businessLoginUrl}
                />
            )}
            <div className={`tp-header-9-area tp-header-blur tp-header-9-sticky sticky-white-bg header-transparent tp-header-9-mt ${isSticky ? 'header-sticky' : ''}`} style={{ zIndex: 999, top: topBarVisible ? '48px' : '0', transition: 'top 0.3s ease-in-out' }}>
                <div className="container container-1750">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-4 col-md-6 col-4">
                            <div className="tp-header-9-logo">
                                <Link href="/">
                                    <Image className="logo-1" width={120} src={logo.white} alt="logo-white" height={40} />
                                    <Image className="logo-2" width={120} src={logo.main} alt="logo-black" height={40} />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-6 col-8">
                            <div className="tp-header-9-box d-flex align-items-center justify-content-end justify-content-xl-between">
                                <div className="tp-header-9-menu tp-header-dropdown dropdown-white-bg d-none d-xl-block">
                                    <nav className="tp-mobile-menu-active">
                                        <CustomNavMenus />
                                    </nav>
                                </div>
                                <div className="tp-header-9-right d-flex align-items-center justify-content-end">
                                    <div className="tp-header-9-search-box d-none d-md-block">
                                        <button onClick={toggleSearch} className="tp-header-9-search tp-search-open-btn">
                                            <span>
                                                <SearchIcon strokeColor='currentcolor' />
                                            </span>
                                        </button>
                                    </div>
                                    <div className="tp-header-9-btn ml-25">
                                        <Link className="tp-btn-yellow-green" href={navigation.ctaButton.url}>
                                            <span>
                                                <span className="text-1">{navigation.ctaButton.text}</span>
                                                <span className="text-2">{navigation.ctaButton.text}</span>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="tp-header-bar ml-20 d-xl-none">
                                        <button onClick={() => setOpenOffCanvas(true)} className="tp-offcanvas-open-btn">
                                            <i></i>
                                            <i></i>
                                            <i></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* off canvas */}
            <OffCanvasPanel openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffCanvas} />
            {/* off canvas */}
        </>
    );
};

export default CorporateAgencyHeader;
