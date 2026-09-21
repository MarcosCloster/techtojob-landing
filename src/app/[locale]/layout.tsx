import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/src/i18n/routing";
import { notFound } from "next/navigation";

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-sora',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000', // Modifícalo al color de fondo principal de tu app
};

export const metadata: Metadata = {
  metadataBase: new URL('https://techtojob.vercel.app'),

  title: {
    default: 'TechToJob | Comunidad de Talentos y Empresas Tech', // 51 caracteres
    template: '%s | TechToJob',
  },

  description: 'Únete a la comunidad tech en español donde desarrolladores y empresas conectan sin filtros automáticos. Construye, participa en torneos y destaca hoy.', // 156 caracteres

  alternates: {
    canonical: './',
  },

  openGraph: {
    title: 'TechToJob | Comunidad de Talentos y Empresas Tech',
    description: 'Únete a la comunidad tech en español donde desarrolladores y empresas conectan sin filtros automáticos. Construye, participa en torneos y destaca hoy.',
    url: 'https://techtojob.vercel.app',
    siteName: 'TechToJob',
    images: [
      {
        url: '/../images/SímboloPositivo.webp', 
        width: 1200,
        height: 630,
        alt: 'TechToJob - Comunidad de talentos y empresas tech',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'TechToJob | Comunidad de Talentos y Empresas Tech',
    description: 'Únete a la comunidad tech en español donde desarrolladores y empresas conectan sin filtros automáticos.',
    images: ['/../images/SímboloPositivo.webp'],
  },

  icons: {
    icon: [
      {
        url: "/../images/SímboloPositivo.svg", 
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/../images/SímboloNegativo.svg", 
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
  
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) return notFound();

  // Objeto con los datos estructurados JSON-LD de tipo Organization
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TechToJob',
    url: 'https://techtojob.vercel.app',
    logo: 'https://techtojob.vercel.app/logo.png', // Modifica por la URL/ruta de tu logo
    sameAs: [
      'https://discord.gg/h9FFgKdkRd', // Ajusta las redes según tus enlaces reales
      'https://github.com',
      'https://linkedin.com',
    ],
  };

  return (
    <html
      lang={locale}
      className={`${sora.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}