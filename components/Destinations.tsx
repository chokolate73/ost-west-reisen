"use client";

import { useState } from "react";
import { destinations, type Destination } from "@/lib/destinations";

function DestinationCard({ dest }: { dest: Destination }) {
  const [imgOk, setImgOk] = useState(true);

  return (
    <a
      href="#form"
      className="group relative block aspect-[3/4] overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(135deg, ${dest.from} 0%, ${dest.to} 100%)`,
        }}
      />
      {imgOk && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/destinations/${dest.slug}.jpg`}
          alt={dest.name}
          loading="lazy"
          onError={() => setImgOk(false)}
          className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
      <h3 className="absolute bottom-4 left-4 font-sans text-lg font-bold text-white drop-shadow">
        {dest.name}
      </h3>
    </a>
  );
}

export default function Destinations() {
  return (
    <section id="destinations" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-bold text-ink sm:text-[2.75rem]">
            Наши направления
          </h2>
          <p className="mt-4 text-lg text-muted">
            Лучшие курорты Европы и не только - автобусные туры к самым тёплым
            морям
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {destinations.map((dest) => (
            <DestinationCard key={dest.slug} dest={dest} />
          ))}
        </div>
      </div>
    </section>
  );
}
