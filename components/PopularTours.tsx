"use client";

import { CalendarDays, BusFront, Tag, ArrowRight } from "lucide-react";

const GRADIENT =
  "linear-gradient(135deg, #cfeede 0%, #2f9e8e 100%)";

type Tour = {
  country: string;
  place: string;
  category: string;
  duration: string;
  departure: string;
  price: string;
};

// Placeholder tours — to be confirmed/corrected. Country must match a
// "Направление" option so the form prefill works.
const tours: Tour[] = [
  {
    country: "Болгария",
    place: "Золотые пески",
    category: "Популярное",
    duration: "12 дней / 11 ночей",
    departure: "Отправление из Кёльна",
    price: "от 499 €",
  },
  {
    country: "Италия",
    place: "Римини",
    category: "Семейный",
    duration: "10 дней / 9 ночей",
    departure: "Отправление из Дюссельдорфа",
    price: "от 549 €",
  },
  {
    country: "Чехия",
    place: "Карловы Вары",
    category: "Лечебный",
    duration: "8 дней / 7 ночей",
    departure: "Отправление из Кёльна",
    price: "от 629 €",
  },
  {
    country: "Хорватия",
    place: "Дубровник",
    category: "Спокойный отдых",
    duration: "11 дней / 10 ночей",
    departure: "Отправление из Эссена",
    price: "от 579 €",
  },
];

function prefillForm(country: string) {
  document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
  const select = document.getElementById(
    "destination",
  ) as HTMLSelectElement | null;
  if (select && Array.from(select.options).some((o) => o.value === country)) {
    select.value = country;
  }
  const nameInput = document.getElementById("name") as HTMLInputElement | null;
  nameInput?.focus({ preventScroll: true });
}

export default function PopularTours() {
  return (
    <section id="tours" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-bold text-ink sm:text-[2.75rem]">
            Популярные туры этого сезона
          </h2>
          <p className="mt-4 text-lg text-muted">
            Несколько вариантов с проверенными отелями. Конкретную стоимость
            рассчитаем по запросу
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tours.map((tour) => (
            <article
              key={`${tour.country}-${tour.place}`}
              className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className="relative aspect-[16/10]"
                style={{ backgroundImage: GRADIENT }}
              >
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-brand-700 shadow-sm">
                  {tour.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-sans text-lg font-bold text-ink">
                  {tour.country} · {tour.place}
                </h3>

                <div className="mt-3 space-y-2 text-sm text-muted">
                  <p className="flex items-center gap-2">
                    <CalendarDays className="size-4 shrink-0 text-brand-500" />
                    {tour.duration}
                  </p>
                  <p className="flex items-center gap-2">
                    <BusFront className="size-4 shrink-0 text-brand-500" />
                    {tour.departure}
                  </p>
                  <p className="flex items-center gap-2">
                    <Tag className="size-4 shrink-0 text-brand-500" />
                    {tour.price}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => prefillForm(tour.country)}
                  aria-label={`Узнать подробности: ${tour.country}, ${tour.place}`}
                  className="mt-auto inline-flex items-center gap-1.5 self-start pt-5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
                >
                  Узнать подробности
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
