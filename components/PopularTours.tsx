"use client";

import { useEffect, useRef, useState } from "react";
import {
  CalendarDays,
  Hotel,
  Tag,
  ArrowRight,
  Check,
  Phone,
  ChevronUp,
} from "lucide-react";

const GRADIENT = "linear-gradient(135deg, #cfeede 0%, #2f9e8e 100%)";
const PHONE = "0203 / 29 888-0";
const TEL = `tel:${PHONE.replace(/[^\d+]/g, "")}`;

type Tour = {
  slug: string;
  country: string;
  place: string;
  category: string;
  duration: string;
  departureCity: string;
  hotel: string;
  price: string;
  included: string[];
  description: string;
  suitable: string;
};

// Placeholder tours — to be confirmed/corrected. `country`/`departureCity`
// must match the form options so the prefill works.
const tours: Tour[] = [
  {
    slug: "bulgaria",
    country: "Болгария",
    place: "Золотые пески",
    category: "Популярное",
    duration: "12 дней / 11 ночей",
    departureCity: "Кёльн",
    hotel: "Отель 3*",
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
    slug: "italy",
    country: "Италия",
    place: "Римини",
    category: "Семейный",
    duration: "10 дней / 9 ночей",
    departureCity: "Дюссельдорф",
    hotel: "Отель 3*",
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
    slug: "czech",
    country: "Чехия",
    place: "Карловы Вары",
    category: "Лечебный",
    duration: "8 дней / 7 ночей",
    departureCity: "Кёльн",
    hotel: "Санаторный отель 4*",
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
    slug: "croatia",
    country: "Хорватия",
    place: "Дубровник",
    category: "Спокойный отдых",
    duration: "11 дней / 10 ночей",
    departureCity: "Эссен",
    hotel: "Отель 4*",
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

function TourInfo({ tour }: { tour: Tour }) {
  return (
    <div className="space-y-6 text-[16px] leading-[1.7] text-slate-600">
      <div>
        <h4 className="font-sans text-base font-bold text-ink">
          Что входит в тур
        </h4>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {tour.included.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Check className="mt-1 size-4 shrink-0 text-brand-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-sans text-base font-bold text-ink">О направлении</h4>
        <p className="mt-3">{tour.description}</p>
      </div>
      <div>
        <h4 className="font-sans text-base font-bold text-ink">Кому подойдёт</h4>
        <p className="mt-3">{tour.suitable}</p>
      </div>
    </div>
  );
}

export default function PopularTours() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [shown, setShown] = useState(0);
  const [fade, setFade] = useState(true);
  const drawerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const prevOpen = useRef<number | null>(null);

  function handleToggle(i: number) {
    if (openIndex === i) {
      setOpenIndex(null);
      return;
    }
    if (openIndex === null) {
      setShown(i);
      setFade(true);
      setOpenIndex(i);
    } else {
      // crossfade content without closing
      setFade(false);
      window.setTimeout(() => {
        setShown(i);
        setFade(true);
      }, 200);
      setOpenIndex(i);
    }
  }

  // On desktop the details show in the wide drawer below the row, so scroll
  // it into view on first open. On mobile they expand inline under the card,
  // so we deliberately do not scroll.
  useEffect(() => {
    const wasClosed = prevOpen.current === null;
    prevOpen.current = openIndex;
    if (openIndex === null) return;
    const isDesktop =
      typeof window !== "undefined" &&
      window.matchMedia("(min-width: 1024px)").matches;

    if (isDesktop) {
      // Drawer is below the row; only scroll to it on the first open.
      if (!wasClosed) return;
      const t = window.setTimeout(() => {
        drawerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        headingRef.current?.focus({ preventScroll: true });
      }, 60);
      return () => window.clearTimeout(t);
    }

    // Mobile: scroll to the opened card on every open (including switching
    // straight from another card). When switching, wait for the previously
    // open card to finish collapsing so the target position is settled.
    const target = openIndex;
    const delay = wasClosed ? 60 : 340;
    const t = window.setTimeout(() => {
      cardRefs.current[target]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, delay);
    return () => window.clearTimeout(t);
  }, [openIndex]);

  // Esc closes the drawer.
  useEffect(() => {
    if (openIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenIndex(null);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
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

  const tour = tours[shown];

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
          {tours.map((t, i) => {
            const active = openIndex === i;
            return (
              <article
                key={`${t.country}-${t.place}`}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className={`flex scroll-mt-24 flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition ${
                  active
                    ? "border-brand-500 ring-2 ring-brand-500"
                    : "border-slate-200 hover:-translate-y-1 hover:shadow-md"
                }`}
              >
                <div
                  className="relative aspect-[16/10] bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/images/tour-${t.slug}.jpg'), ${GRADIENT}`,
                  }}
                >
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-brand-700 shadow-sm">
                    {t.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-sans text-lg font-bold text-ink">
                    {t.country} · {t.place}
                  </h3>

                  <div className="mt-3 space-y-2 text-sm text-muted">
                    <p className="flex items-center gap-2">
                      <CalendarDays className="size-4 shrink-0 text-brand-500" />
                      {t.duration}
                    </p>
                    <p className="flex items-center gap-2">
                      <Tag className="size-4 shrink-0 text-brand-500" />
                      {t.price}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleToggle(i)}
                    aria-expanded={active}
                    aria-controls={`tour-panel-${i} tours-drawer`}
                    className="mt-auto inline-flex min-h-11 items-center gap-1.5 self-start pt-5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
                  >
                    {active ? "Скрыть подробности" : "Узнать подробности"}
                    <ArrowRight className="size-4" />
                  </button>

                  {/* Мобильное: детали раскрываются прямо под карточкой */}
                  <div
                    id={`tour-panel-${i}`}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
                      active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-5">
                        <TourInfo tour={t} />
                        <div className="mt-6 flex flex-col gap-3">
                          <button
                            type="button"
                            onClick={() => requestTour(t)}
                            className="flex min-h-12 w-full items-center justify-center rounded-lg bg-brand-500 px-4 text-center font-semibold text-white transition-colors hover:bg-brand-600"
                          >
                            Оставить заявку на этот тур
                          </button>
                          <a
                            href={TEL}
                            className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-brand-500 px-4 font-semibold text-brand-600 transition-colors hover:bg-brand-50"
                          >
                            <Phone className="size-5" />
                            Позвонить
                          </a>
                        </div>
                        <button
                          type="button"
                          onClick={() => setOpenIndex(null)}
                          className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
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

        {/* Десктоп: широкий drawer на всю ширину секции */}
        <div
          id="tours-drawer"
          role="region"
          aria-labelledby="tours-drawer-heading"
          className={`hidden transition-[grid-template-rows] duration-300 ease-out lg:grid ${
            openIndex !== null ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div
              ref={drawerRef}
              className="mt-5 scroll-mt-24 rounded-2xl border border-brand-200 bg-[#f0faf6] p-6 sm:p-8"
            >
              <div
                className={`grid gap-8 transition-opacity duration-200 lg:grid-cols-5 ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Левая колонка: изображение + CTA */}
                <div className="lg:col-span-2">
                  <div
                    className="aspect-[16/10] w-full rounded-xl bg-cover bg-center"
                    style={{
                      backgroundImage: `url('/images/tour-${tour.slug}.jpg'), ${GRADIENT}`,
                    }}
                    role="img"
                    aria-label={`${tour.country}, ${tour.place}`}
                  />
                  <div className="mt-4 flex flex-col gap-3">
                    <button
                      type="button"
                      onClick={() => requestTour(tour)}
                      className="flex min-h-12 w-full items-center justify-center rounded-lg bg-brand-500 px-4 font-semibold text-white transition-colors hover:bg-brand-600"
                    >
                      Оставить заявку на этот тур
                    </button>
                    <a
                      href={TEL}
                      className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-brand-500 px-4 font-semibold text-brand-600 transition-colors hover:bg-brand-50"
                    >
                      <Phone className="size-5" />
                      Позвонить
                    </a>
                  </div>
                </div>

                {/* Правая колонка: текст */}
                <div className="lg:col-span-3">
                  <h3
                    id="tours-drawer-heading"
                    ref={headingRef}
                    tabIndex={-1}
                    className="font-serif text-2xl font-bold text-ink outline-none sm:text-3xl"
                  >
                    {tour.country} · {tour.place}
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="size-4 text-brand-500" />
                      {tour.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Hotel className="size-4 text-brand-500" />
                      {tour.hotel}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Tag className="size-4 text-brand-500" />
                      {tour.price}
                    </span>
                  </div>

                  <div className="mt-6">
                    <TourInfo tour={tour} />

                    <button
                      type="button"
                      onClick={() => setOpenIndex(null)}
                      className="mt-6 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
                    >
                      <ChevronUp className="size-4" />
                      Свернуть
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
