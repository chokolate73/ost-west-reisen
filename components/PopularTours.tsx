"use client";

import { useEffect, useRef, useState } from "react";
import {
  CalendarDays,
  BusFront,
  Tag,
  ArrowRight,
  Check,
  Phone,
  ChevronUp,
} from "lucide-react";

const GRADIENT = "linear-gradient(135deg, #cfeede 0%, #2f9e8e 100%)";
const PHONE = "+49 2212 725 3591";

type Tour = {
  country: string;
  place: string;
  category: string;
  duration: string;
  departure: string;
  departureCity: string;
  price: string;
  included: string[];
  description: string;
  suitable: string;
};

// Placeholder tours — to be confirmed/corrected. `country`/`departureCity`
// must match the form options so the prefill works.
const tours: Tour[] = [
  {
    country: "Болгария",
    place: "Золотые пески",
    category: "Популярное",
    duration: "12 дней / 11 ночей",
    departure: "Отправление из Кёльна",
    departureCity: "Кёльн",
    price: "от 499 €",
    included: [
      "Автобус из Кёльна и обратно",
      "Проживание в отеле 3*",
      "Завтраки в отеле",
      "Медицинская страховка",
      "Русскоязычное сопровождение",
      "Все трансферы по маршруту",
    ],
    description:
      "Золотые пески - один из самых популярных болгарских курортов. Широкий песчаный пляж тянется на 3,5 километра, море тёплое и спокойное, инфраструктура развитая, цены ниже, чем в Италии или Греции. Курорт давно ценим русскоязычными путешественниками.",
    suitable:
      "Подойдёт для спокойного отдыха семьям, парам и одиночным путешественникам",
  },
  {
    country: "Италия",
    place: "Римини",
    category: "Семейный",
    duration: "10 дней / 9 ночей",
    departure: "Отправление из Дюссельдорфа",
    departureCity: "Дюссельдорф",
    price: "от 549 €",
    included: [
      "Автобус из Дюссельдорфа и обратно",
      "Проживание в отеле 3*",
      "Полупансион (завтрак + ужин)",
      "Медицинская страховка",
      "Русскоязычное сопровождение",
      "Все трансферы по маршруту",
    ],
    description:
      "Римини - сердце Адриатического побережья Италии. Длинные песчаные пляжи, тёплое мелкое море (особенно комфортно для пожилых), отличная итальянская кухня и прогулки по живописному историческому центру. Близко к Сан-Марино и Венеции.",
    suitable: "Подойдёт для тех, кто хочет совместить пляж и культуру",
  },
  {
    country: "Чехия",
    place: "Карловы Вары",
    category: "Лечебный",
    duration: "8 дней / 7 ночей",
    departure: "Отправление из Кёльна",
    departureCity: "Кёльн",
    price: "от 629 €",
    included: [
      "Автобус из Кёльна и обратно",
      "Проживание в санаторном отеле 4*",
      "Полный пансион",
      "Лечебные процедуры по программе",
      "Консультация русскоязычного врача",
      "Все трансферы",
    ],
    description:
      "Карловы Вары - всемирно известный бальнеологический курорт с 12 минеральными источниками. Спокойная атмосфера, прогулки по живописному городу, минеральные воды, термальные процедуры и SPA. Идеально для оздоровления и отдыха в спокойном темпе.",
    suitable: "Подойдёт для оздоровления, реабилитации и спокойного отдыха",
  },
  {
    country: "Хорватия",
    place: "Дубровник",
    category: "Спокойный отдых",
    duration: "11 дней / 10 ночей",
    departure: "Отправление из Эссена",
    departureCity: "Эссен",
    price: "от 579 €",
    included: [
      "Автобус из Эссена и обратно",
      "Проживание в отеле 4*",
      "Завтраки в отеле",
      "Медицинская страховка",
      "Русскоязычное сопровождение",
      "Все трансферы по маршруту",
    ],
    description:
      "Дубровник называют «жемчужиной Адриатики» - это древний город-крепость на берегу кристально чистого моря. Узкие улочки старого города, прогулки по крепостным стенам, чистейшее море и средиземноморская кухня. ЮНЕСКО внесла Дубровник в список Всемирного наследия.",
    suitable:
      "Подойдёт для тех, кто ценит культуру, историю и пляжный отдых одновременно",
  },
];

function setSelect(id: string, value: string) {
  const el = document.getElementById(id) as HTMLSelectElement | null;
  if (el && Array.from(el.options).some((o) => o.value === value)) {
    el.value = value;
  }
}

export default function PopularTours() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (openIndex !== null) {
      cardRefs.current[openIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [openIndex]);

  function requestTour(tour: Tour) {
    setOpenIndex(null);
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
    setSelect("destination", tour.country);
    setSelect("departure", tour.departureCity);
    (document.getElementById("name") as HTMLInputElement | null)?.focus({
      preventScroll: true,
    });
  }

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

        <div className="mt-14 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tours.map((tour, i) => {
            const isOpen = openIndex === i;
            const panelId = `tour-panel-${i}`;
            const titleId = `tour-title-${i}`;
            return (
              <article
                key={`${tour.country}-${tour.place}`}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="flex scroll-mt-24 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
              >
                <div
                  className="relative aspect-[16/10]"
                  style={{ backgroundImage: GRADIENT }}
                >
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-brand-700 shadow-sm">
                    {tour.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3
                    id={titleId}
                    className="font-sans text-lg font-bold text-ink"
                  >
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

                  {!isOpen && (
                    <button
                      type="button"
                      onClick={() => setOpenIndex(i)}
                      aria-expanded={false}
                      aria-controls={panelId}
                      className="mt-auto inline-flex min-h-11 items-center gap-1.5 self-start pt-5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
                    >
                      Узнать подробности
                      <ArrowRight className="size-4" />
                    </button>
                  )}

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={titleId}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="space-y-6 pt-6 text-[16px] leading-[1.7] text-slate-600">
                        <div>
                          <h4 className="font-sans text-base font-bold text-ink">
                            Что входит в тур
                          </h4>
                          <ul className="mt-3 space-y-2">
                            {tour.included.map((item) => (
                              <li key={item} className="flex items-start gap-2">
                                <Check className="mt-1 size-4 shrink-0 text-brand-600" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-sans text-base font-bold text-ink">
                            О направлении
                          </h4>
                          <p className="mt-3">{tour.description}</p>
                        </div>

                        <div>
                          <h4 className="font-sans text-base font-bold text-ink">
                            Кому подойдёт
                          </h4>
                          <p className="mt-3">{tour.suitable}</p>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row">
                          <button
                            type="button"
                            onClick={() => requestTour(tour)}
                            className="flex min-h-12 flex-1 items-center justify-center rounded-lg bg-brand-500 px-4 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-600"
                          >
                            Оставить заявку на этот тур
                          </button>
                          <a
                            href={`tel:${PHONE.replace(/\s/g, "")}`}
                            className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg border border-brand-500 px-4 text-center text-sm font-semibold text-brand-600 transition-colors hover:bg-brand-50"
                          >
                            <Phone className="size-4" />
                            Позвонить
                          </a>
                        </div>

                        <button
                          type="button"
                          onClick={() => setOpenIndex(null)}
                          aria-expanded
                          aria-controls={panelId}
                          className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
                        >
                          <ChevronUp className="size-4" />
                          Свернуть
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
