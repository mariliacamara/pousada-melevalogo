import type { Metadata } from 'next';
import './globals.css';
import { Geist } from "next/font/google";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const siteUrl = 'https://seudominio.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Pousada Me Leva Logo | Araruama, RJ',
    template: '%s | Pousada Me Leva Logo',
  },
  description:
    'Pousada Me Leva Logo em Araruama. Hospedagem confortável, atendimento rápido pelo WhatsApp e página otimizada para SEO local e Google Ads.',
  keywords: [
    'pousada em Araruama',
    'hospedagem em Araruama',
    'pousada no Rio de Janeiro',
    'reservas por WhatsApp',
    'pousada Me Leva Logo',
  ],
  applicationName: 'Pousada Me Leva Logo',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Pousada Me Leva Logo',
    description:
      'Landing page pronta para reservas via WhatsApp, SEO local e tráfego pago.',
    url: siteUrl,
    siteName: 'Pousada Me Leva Logo',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Pousada Me Leva Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pousada Me Leva Logo',
    description:
      'Página de hospedagem em Araruama com foco em conversão e SEO.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
