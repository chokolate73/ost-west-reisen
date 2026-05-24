import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import FloatingCall from "@/components/FloatingCall";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Ost-West Reisen - Автобусные туры из Германии",
  description:
    "Комфортные автобусные туры по Европе с отправлением из удобных городов Германии. Русскоязычное сопровождение на всём маршруте. На рынке с 2002 года.",
  icons: {
    icon: "/images/faviconV2.png",
    shortcut: "/images/faviconV2.png",
    apple: "/images/faviconV2.png",
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
      </body>
    </html>
  );
}
