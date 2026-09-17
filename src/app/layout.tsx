import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Presets Exclusivos | Transforme suas Fotos com 1 Clique",
  description: "Eleve a qualidade visual do seu feed e dos seus ensaios com a coleção definitiva de presets profissionais.",
  keywords: ["presets", "lightroom", "fotografia", "edição de fotos", "instagram presets"],
  authors: [{ name: "Presets Creator" }],
  openGraph: {
    title: "Presets Exclusivos | Transforme suas Fotos com 1 Clique",
    description: "Eleve o nível das suas fotos instantaneamente com os melhores presets do mercado.",
    type: "website",
    locale: "pt_BR",
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
        {/* Google Tag Manager / Script de Trackeamento Customizado */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s);j.async=true;j.src=
            "https://api.marianasalazar.site/1hlacdxvzy.js?"+i;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','bhjsn=EB5LPzAuTDgpPSwrUSAqSg9HRFZVRQUCRBcXCg0CDw0KGxoZHgITQgoTAh0%3D');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
