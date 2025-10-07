import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Kontaly CRM - Gestiona todo tu negocio desde un solo lugar",
  description: "CRM completo, gestión de proyectos, facturación profesional y más. La plataforma todo-en-uno para empresas modernas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${manrope.variable} antialiased`}
        style={{ fontFamily: 'var(--font-manrope), Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
