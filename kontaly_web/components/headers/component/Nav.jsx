"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  return (
    <>
      <li>
        <Link href={`/page-caracteristicas`}>Características</Link>
      </li>
      <li>
        <Link href={`/page-pricing`}>Precios</Link>
      </li>
      <li>
        <Link href={`/blog`}>Blog</Link>
      </li>
      <li>
        <Link href={`/page-colaboradores`}>Colaboradores</Link>
      </li>
      <li>
        <Link href={`/page-contact`}>Contacto</Link>
      </li>
    </>
  );
}
