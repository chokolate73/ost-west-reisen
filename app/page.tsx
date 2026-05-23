import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import HealthResorts from "@/components/HealthResorts";
import WhyUs from "@/components/WhyUs";
import HowWeWork from "@/components/HowWeWork";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import RequestForm from "@/components/RequestForm";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Destinations />
        <HealthResorts />
        <WhyUs />
        <HowWeWork />
        <Reviews />
        <Faq />
        <RequestForm />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
