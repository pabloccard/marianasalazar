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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
