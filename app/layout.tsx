import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import FloatingCall from "@/components/FloatingCall";
import MobileCta from "@/components/MobileCta";
import CookieConsent from "@/components/CookieConsent";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ost-west-reisen.vercel.app";

const title = "Ost-West Reisen - Автобусные туры из Германии";
const description =
  "Комфортные автобусные туры по Европе с отправлением из удобных городов Германии. Русскоязычное сопровождение на всём маршруте. На рынке с 2002 года.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
        {children}
        <FloatingCall />
        <MobileCta />
        <CookieConsent />
      </body>
    </html>
  );
}
