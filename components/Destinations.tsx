"use client";

import { destinations, extraDestinations } from "@/lib/destinations";

const pills = [...destinations, ...extraDestinations];

export default function Destinations() {
  function handlePick(name: string) {
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });

    const select = document.getElementById(
      "destination",
    ) as HTMLSelectElement | null;
    if (select && Array.from(select.options).some((o) => o.value === name)) {
      select.value = name;
    }

    const nameInput = document.getElementById("name") as HTMLInputElement | null;
    nameInput?.focus({ preventScroll: true });
  }

  return (
    <section id="destinations" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-bold text-ink sm:text-[2.75rem]">
            Наши направления
          </h2>
          <p className="mt-4 text-lg text-muted">
            Автобусные туры к самым тёплым морям и не только
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-[600px] flex-wrap justify-center gap-3">
          {pills.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => handlePick(name)}
              aria-label={`Выбрать направление: ${name}`}
              className="cursor-pointer rounded-full bg-brand-100 px-4 py-2 text-sm font-medium text-brand-700 transition-colors duration-150 hover:bg-brand-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
