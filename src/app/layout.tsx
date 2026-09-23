import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Essentials Collection | Presets para Lightroom",
  description: "Transforma tus fotos en recuerdos aún más especiales con nuestra colección de presets profesionales para Lightroom. Consigue fotos increíbles en pocos clics, incluso si fueron tomadas con el celular y no tienes experiencia en edición.",
  keywords: ["presets", "lightroom", "fotografia", "edição de fotos", "instagram presets"],
  authors: [{ name: "Presets Creator" }],
  openGraph: {
    title: "Essentials Collection | Presets para Lightroom",
    description: "Transforma tus fotos en recuerdos aún más especiales con nuestra colección de presets profesionales para Lightroom. Consigue fotos increíbles en pocos clics, incluso si fueron tomadas con el celular y no tienes experiencia en edición.",
    type: "website",
    locale: "es_ES",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#08090b",
};

import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preconnect para acelerar a abertura do Checkout da Hotmart */}
        <link rel="preconnect" href="https://pay.hotmart.com" />
        <link rel="dns-prefetch" href="https://pay.hotmart.com" />

        {/* Google Tag Manager / Script de Trackeamento Customizado */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src="https://api.marianasalazar.site/1hlacdxvzy.js?"+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','bhjsn=EB5LPzAuTDgpPSwrUSAqSg9HRFZVRQUCRBcXCg0CDw0KGxoZHgITQgoTAh0%3D');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
