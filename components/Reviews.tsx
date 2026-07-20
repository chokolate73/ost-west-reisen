"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Quote, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

type Review = {
  name: string;
  initials: string;
  photo?: string;
  city: string;
  age?: string;
  route: string;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Ольга Викторовна",
    initials: "ОВ",
    photo: "/images/review-olga.jpeg",
    city: "Дюссельдорф",
    age: "68 лет",
    route: "Болгария, Золотые пески",
    text: "Боялась далеко ехать - впервые за десять лет решилась. Лариса из агентства всё подробно объяснила по телефону, успокоила. Автобус оказался очень удобный, водители всю дорогу заботились о нас. Отель прямо на пляже - как и обещали. В следующем году обязательно поеду снова.",
  },
  {
    name: "Виктор Иванович",
    initials: "ВИ",
    photo: "/images/review-viktor.jpg",
    city: "Кёльн",
    age: "72 года",
    route: "Чехия, Карловы Вары",
    text: "Третий год подряд ездим с женой в Карловы Вары. Лечение в санатории прекрасное, всё на русском, никаких сложностей. Ребята помогают со всеми мелочами - от трансфера до бронирования процедур. Спасибо!",
  },
  {
    name: "Тамара Григорьевна",
    initials: "ТГ",
    photo: "/images/review-tamara.jpg",
    city: "Эссен",
    age: "65 лет",
    route: "Италия, Римини",
    text: "Долго не могла выбрать между Италией и Испанией. Девушки в агентстве терпеливо объяснили разницу, помогли выбрать подходящий отель. Италия не разочаровала - море, еда, прогулки. И - важно! - всё общение на русском, для нас это было решающим.",
  },
  {
    name: "Семья Шмидт-Петренко",
    initials: "ШП",
    photo: "/images/review-shmidt.jpg",
    city: "Бонн",
    route: "Хорватия, Дубровник",
    text: "Брали тур всей семьёй с пожилыми родителями. Очень переживали, как они перенесут дорогу. Автобус был с кондиционером, частыми остановками, очень комфортный. Гид была внимательной. Папа сказал, что чувствовал себя как дома.",
  },
  {
    name: "Любовь Петровна",
    initials: "ЛП",
    city: "Леверкузен",
    age: "71 год",
    route: "Греция, Халкидики",
    text: "Всю жизнь работала, наконец вышла на пенсию и решила съездить к морю. Боялась - одна, без языка. В агентстве меня прямо за руку провели по всем шагам. В группе оказались такие же - поговорили, подружились. Море было голубое-голубое, как обещали.",
  },
];

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function step() {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>("[data-card]");
    return card ? card.offsetWidth + 24 : track?.clientWidth ?? 1;
  }

  function scroll(direction: 1 | -1) {
    trackRef.current?.scrollBy({ left: direction * step(), behavior: "smooth" });
  }

  function goTo(i: number) {
    trackRef.current?.scrollTo({ left: i * step(), behavior: "smooth" });
  }

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    setActive(Math.round(track.scrollLeft / step()));
  }

  return (
    <section id="reviews" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-bold text-ink sm:text-[2.75rem]">
            Отзывы наших путешественников
          </h2>
          <p className="mt-4 text-lg text-muted">
            Что говорят о нас люди, которые с нами съездили
          </p>
        </div>

        <div className="relative mt-12 sm:px-16">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Предыдущие отзывы"
            className="absolute left-0 top-1/2 z-10 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-300 bg-white text-ink shadow-md transition-colors hover:bg-brand-50 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 sm:flex"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Следующие отзывы"
            className="absolute right-0 top-1/2 z-10 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-300 bg-white text-ink shadow-md transition-colors hover:bg-brand-50 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 sm:flex"
          >
            <ChevronRight className="size-6" />
          </button>

          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
            role="region"
            aria-label="Карусель отзывов"
            tabIndex={0}
          >
          {reviews.map((review) => (
            <article
              key={review.name}
              data-card
              aria-label={`Отзыв: ${review.name}`}
              className="relative flex shrink-0 basis-[86%] snap-start flex-col rounded-xl border-[0.5px] border-slate-200 bg-white p-6 shadow-sm sm:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)]"
            >
              <Quote
                className="absolute right-6 top-6 size-7 text-brand-200"
                aria-hidden
              />

              {review.photo ? (
                <Image
                  src={review.photo}
                  alt=""
                  width={56}
                  height={56}
                  sizes="56px"
                  className="size-14 rounded-full object-cover"
                />
              ) : (
                <div
                  className="flex size-14 items-center justify-center rounded-full bg-brand-100 text-lg font-medium text-brand-700"
                  aria-hidden
                >
                  {review.initials}
                </div>
              )}

              <div className="mt-4">
                <p className="font-semibold text-ink">{review.name}</p>
                <p className="text-sm text-muted">
                  {review.age ? `${review.city} · ${review.age}` : review.city}
                </p>
              </div>

              <p className="mt-3 flex items-center gap-1.5 text-sm font-medium text-brand-600">
                <MapPin className="size-4 shrink-0" aria-hidden />
                {review.route}
              </p>

              <blockquote className="mt-4 text-base leading-relaxed text-slate-600">
                «{review.text}»
              </blockquote>
            </article>
          ))}
          </div>

          {/* Точки-индикаторы (особенно важны для свайпа на мобильном) */}
          <div className="mt-6 flex justify-center gap-2">
            {reviews.map((review, i) => (
              <button
                key={review.name}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Перейти к отзыву ${i + 1}`}
                aria-current={active === i}
                className={`h-2.5 rounded-full transition-all ${
                  active === i ? "w-6 bg-brand-500" : "w-2.5 bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
