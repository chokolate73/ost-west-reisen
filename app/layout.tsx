import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import FloatingCall from "@/components/FloatingCall";
import MobileCta from "@/components/MobileCta";
import CookieConsent from "@/components/CookieConsent";
import { SITE_URL } from "@/lib/site";
import { EMAIL } from "@/lib/contact";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const title =
  "Ost-West Reisen — Автобусные туры из Германии. Отдых на море и санаторно-курортное лечение в Европе";
const description =
  "Отдых на море в Испании, Италии, Греции, Турции, Болгарии и Хорватии. Санаторно-курортное лечение в Европе. Комфортные автобусные туры с отправлением из многих городов Германии, обслуживание на русском языке. Ost-West Reisen — туроператор с 2002 года; ваш эксклюзивный партнёр в Кёльне консультирует клиентов по всей Германии с 2010 года.";

// Local-business data mirrors /impressum and the company's directory listings.
const travelAgencySchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Ost-West Logistik & Travel e.K.",
  alternateName: "Ost-West Reisen Köln",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/og-image.jpg`,
  telephone: "+49 221 27253591",
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Franz-Xaver-Mauer-Str. 34",
    postalCode: "50374",
    addressLocality: "Erftstadt",
    addressCountry: "DE",
  },
  areaServed: "DE",
  availableLanguage: ["ru", "de"],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  icons: {
    icon: "/images/faviconV2.png",
    shortcut: "/images/faviconV2.png",
    apple: "/images/faviconV2.png",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Ost-West Reisen",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ost-West Reisen — автобусные туры из Германии",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-white text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(travelAgencySchema),
          }}
        />
        {children}
        <FloatingCall />
        <MobileCta />
        <CookieConsent />
      </body>
    </html>
  );
}
