'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface TopBarProps {
  address?: string;
  clientLoginUrl?: string;
  businessLoginUrl?: string;
  clientLoginText?: string;
  businessLoginText?: string;
}

const TopBar: React.FC<TopBarProps> = ({
  address = 'FACEBANK International Corp. 17 Calle 2 STE 600 Guaynabo, Puerto Rico 00968-1787',
  clientLoginUrl = '/area-privada/clientes',
  businessLoginUrl = '/area-privada/empresas',
  clientLoginText = 'Clientes',
  businessLoginText = 'Empresas'
}) => {
  const [currentDate, setCurrentDate] = useState('');
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Actualizar la fecha en el cliente
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    const formattedDate = date.toLocaleDateString('es-ES', options);
    setCurrentDate(formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1));

    // Ocultar Top Bar al hacer scroll
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="tp-top-bar d-none d-lg-block" style={{
      backgroundColor: '#2A4C3A',
      color: 'white',
      padding: '12px 0',
      fontSize: '14px',
      borderBottom: '2px solid rgba(233, 255, 72, 0.2)',
      position: 'fixed',
      top: isHidden ? '-60px' : '0',
      left: 0,
      right: 0,
      zIndex: 10,
      width: '100%',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      transition: 'top 0.3s ease-in-out'
    }}>
      <div className="container-fluid" style={{ maxWidth: '1800px' }}>
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="tp-top-bar-left d-flex align-items-center">
              <div className="tp-top-bar-address" style={{ marginRight: '25px' }}>
                <i className="fa-solid fa-location-dot" style={{ marginRight: '8px', color: '#E9FF48' }}></i>
                <span>{address}</span>
              </div>
              <div className="tp-top-bar-date">
                <i className="fa-regular fa-calendar" style={{ marginRight: '8px', color: '#E9FF48' }}></i>
                <span>{currentDate || 'Cargando...'}</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="tp-top-bar-right d-flex align-items-center justify-content-end">
              <div className="tp-top-bar-login">
                <Link
                  href={clientLoginUrl}
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    marginRight: '20px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#E9FF48';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'white';
                  }}
                >
                  <i className="fa-regular fa-user" style={{ marginRight: '6px' }}></i>
                  {clientLoginText}
                </Link>
                <Link
                  href={businessLoginUrl}
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#E9FF48';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'white';
                  }}
                >
                  <i className="fa-regular fa-building" style={{ marginRight: '6px' }}></i>
                  {businessLoginText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
