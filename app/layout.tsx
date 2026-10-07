import type { Metadata, Viewport } from "next";
import { Figtree, Silkscreen, Titan_One } from "next/font/google";

import Analytics from "@/components/analytics/Analytics";
import ConsentBanner from "@/components/analytics/ConsentBanner";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MobileBar from "@/components/layout/MobileBar";
import { isProduction, site } from "@/lib/site";

import "./globals.css";

// next/font baixa as fontes no build e serve do próprio domínio:
// nenhuma requisição ao Google na visita e sem salto de layout na troca.
const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree", display: "swap" });
const titan = Titan_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-titan",
  display: "swap",
});
const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-silkscreen",
  display: "swap",
  preload: false, // só aparece abaixo da primeira dobra
});

// Os IDs entram em <script> inline, então só passam se tiverem o formato esperado.
const gaId = /^G-[A-Z0-9]+$/.test(process.env.NEXT_PUBLIC_GA_ID ?? "")
  ? process.env.NEXT_PUBLIC_GA_ID
  : undefined;
const pixelId = /^\d{5,20}$/.test(process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "")
  ? process.env.NEXT_PUBLIC_META_PIXEL_ID
  : undefined;

// Medição só em produção: previews de branch não sujam os relatórios.
const tracking = isProduction ? { gaId, pixelId } : {};
const hasTracking = Boolean(tracking.gaId || tracking.pixelId);

const metaDomainVerification = process.env.META_DOMAIN_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    locale: site.locale,
    title: site.title,
    description: site.description,
    // A imagem vem de app/opengraph-image.jpg (JPG, que o WhatsApp exibe).
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: isProduction
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      }
    : { index: false, follow: false },
  verification: {
    // Search Console: cole aqui (via variável de ambiente) o código da metatag.
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: metaDomainVerification
      ? { "facebook-domain-verification": metaDomainVerification }
      : undefined,
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#1756c8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang={site.lang}
      className={`${figtree.variable} ${titan.variable} ${silkscreen.variable}`}
    >
      <body>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:font-bold"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer showCookiePreferences={hasTracking} />
        <MobileBar />
        {hasTracking && <ConsentBanner />}
        <Analytics {...tracking} />
      </body>
    </html>
  );
}
