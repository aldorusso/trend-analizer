import React from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageSelect from "../common/LanguageSelect";
import { footerLinks, socialLinks } from "@/data/footer";

export default function Footer1() {
  return (
    <footer id="uc-footer" className="uc-footer panel overflow-hidden">
      <div className="footer-outer py-4 lg:py-6 xl:py-9 dark:bg-gray-900 dark:text-white">
        <div className="container max-w-xl">
          <div className="footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
            <div className="uc-footer-widgets panel">
              <div className="row child-cols-6 md:child-cols col-match g-4">
                <div className="col-12 lg:col-4">
                  <div className="panel vstack items-start gap-4 ltr:md:pe-8 rtl:md:ps-8">
                    <div className="vstack gap-2">
                      <Link href={`/`}>
                        <Image
                          className="dark:d-none"
                          alt="Kontaly"
                          src="/assets/images/common/kontaly-logo.png"
                          width="120"
                          height="34"
                        />
                        <Image
                          className="d-none dark:d-block"
                          alt="Kontaly"
                          src="/assets/images/common/kontaly-logo-white.png"
                          width="120"
                          height="34"
                        />
                      </Link>
                      <p>
                        La plataforma todo-en-uno para gestionar tu negocio. CRM, proyectos, facturación y más en un solo lugar.
                      </p>
                    </div>
                    <div className="vstack gap-2">
                      <p className="fs-7 fw-bold text-uppercase opacity-60">Próximamente</p>
                      <div className="hstack items-start gap-1">
                        <div className="opacity-40">
                          <Image
                            className="text-gray-900 dark:text-white"
                            alt="Google Play Store"
                            data-uc-svg=""
                            src="/assets/images/common/playstore.svg"
                            width="135"
                            height="40"
                          />
                        </div>
                        <div className="opacity-40">
                          <Image
                            className="text-gray-900 dark:text-white"
                            alt="Apple Store"
                            data-uc-svg=""
                            src="/assets/images/common/appstore.svg"
                            width="134"
                            height="40"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {footerLinks.map((section, index) => (
                  <div key={index}>
                    <ul className="nav-y gap-1 fw-medium">
                      {section.links.map((link, i) => (
                        <li key={i}>
                          <Link href={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="uc-footer-bottom panel vstack lg:hstack gap-4 justify-center lg:justify-between pt-4 lg:pt-6 border-top dark:text-white">
              <div className="vstack sm:hstack justify-center lg:justify-start items-center lg:items-start gap-1 lg:gap-2">
                <p className="opacity-60">
                  © {new Date().getFullYear()} Kontaly. Todos los derechos reservados.
                </p>
                <ul className="nav-x gap-2 fw-medium">
                  <li>
                    <Link href="/page-privacy">Privacidad</Link>
                  </li>
                  <li>
                    <Link href="/page-terms">Términos</Link>
                  </li>
                  <li>
                    <Link href="/page-cookies">Cookies</Link>
                  </li>
                </ul>
              </div>
              <div className="hstack justify-center lg:justify-end gap-2 lg:gap-3">
                <ul className="nav-x gap-2">
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href}>
                        <i className={`icon icon-2 ${link.iconClass}`} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
