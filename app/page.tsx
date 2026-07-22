import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import HealthResorts from "@/components/HealthResorts";
import PopularTours from "@/components/PopularTours";
import WhyUs from "@/components/WhyUs";
import HowWeWork from "@/components/HowWeWork";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Destinations />
        <HealthResorts />
        <PopularTours />
        <WhyUs />
        <HowWeWork />
        <Reviews />
        <Faq />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
