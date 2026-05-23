"use client";

import { useState } from "react";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";

// NOTE: placeholder offers — replace with real tours/prices once confirmed.
type Offer = {
  slug: string;
  title: string;
  region: string;
  dates: string;
  price: string;
  from: string;
  to: string;
};

const offers: Offer[] = [
  {
    slug: "bulgaria",
    title: "Болгария, Золотые Пески",
    region: "Чёрное море",
    dates: "10 дней • выезд 14 июня",
    price: "от 399 €",
    from: "#f4d8a8",
    to: "#3f9fb5",
  },
  {
    slug: "greece",
    title: "Греция, Халкидики",
    region: "Эгейское море",
    dates: "12 дней • выезд 21 июня",
    price: "от 549 €",
    from: "#bfe3f2",
    to: "#2f6fb0",
  },
  {
    slug: "spain",
    title: "Испания, Коста-Брава",
    region: "Средиземное море",
    dates: "11 дней • выезд 28 июня",
    price: "от 599 €",
    from: "#f6c89a",
    to: "#3f93bd",
  },
];

function OfferCard({ offer }: { offer: Offer }) {
  const [imgOk, setImgOk] = useState(true);

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative h-48">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(135deg, ${offer.from} 0%, ${offer.to} 100%)`,
          }}
        />
        {imgOk && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`/destinations/${offer.slug}.jpg`}
            alt={offer.title}
            loading="lazy"
            onError={() => setImgOk(false)}
            className="absolute inset-0 size-full object-cover"
          />
        )}
        <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-sm font-bold text-brand-600 shadow">
          {offer.price}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-sans text-xl font-bold text-ink">{offer.title}</h3>
        <div className="mt-3 space-y-2 text-sm text-muted">
          <p className="flex items-center gap-2">
            <MapPin className="size-4 text-brand-500" />
            {offer.region}
          </p>
          <p className="flex items-center gap-2">
            <CalendarDays className="size-4 text-brand-500" />
            {offer.dates}
          </p>
        </div>
        <a
          href="#form"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
        >
          Узнать подробнее
          <ArrowRight className="size-4" />
        </a>
      </div>
    </div>
  );
}

export default function Offers() {
  return (
    <section id="offers" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-bold text-ink sm:text-[2.75rem]">
            Горящие предложения
          </h2>
          <p className="mt-4 text-lg text-muted">
            Популярные туры этого сезона по специальным ценам
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <OfferCard key={offer.slug} offer={offer} />
          ))}
        </div>
      </div>
    </section>
  );
}
