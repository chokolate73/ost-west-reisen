import { Quote, MapPin } from "lucide-react";

type Review = {
  name: string;
  initials: string;
  city: string;
  age?: string;
  route: string;
  text: string;
};

const reviews: Review[] = [
  {
    name: "Ольга Викторовна",
    initials: "ОВ",
    city: "Дюссельдорф",
    age: "68 лет",
    route: "Болгария, Золотые пески",
    text: "Боялась далеко ехать - впервые за десять лет решилась. Лариса из агентства всё подробно объяснила по телефону, успокоила. Автобус оказался очень удобный, водители всю дорогу заботились о нас. Отель прямо на пляже - как и обещали. В следующем году обязательно поеду снова.",
  },
  {
    name: "Виктор Иванович",
    initials: "ВИ",
    city: "Кёльн",
    age: "72 года",
    route: "Чехия, Карловы Вары",
    text: "Третий год подряд ездим с женой в Карловы Вары. Лечение в санатории прекрасное, всё на русском, никаких сложностей. Ребята помогают со всеми мелочами - от трансфера до бронирования процедур. Спасибо!",
  },
  {
    name: "Тамара Григорьевна",
    initials: "ТГ",
    city: "Эссен",
    age: "65 лет",
    route: "Италия, Римини",
    text: "Долго не могла выбрать между Италией и Испанией. Девушки в агентстве терпеливо объяснили разницу, помогли выбрать подходящий отель. Италия не разочаровала - море, еда, прогулки. И - важно! - всё общение на русском, для нас это было решающим.",
  },
  {
    name: "Семья Шмидт-Петренко",
    initials: "ШП",
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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              aria-label={`Отзыв: ${review.name}`}
              className="relative flex flex-col rounded-xl border-[0.5px] border-slate-200 bg-white p-6 shadow-sm"
            >
              <Quote
                className="absolute right-6 top-6 size-7 text-brand-200"
                aria-hidden
              />

              <div
                className="flex size-14 items-center justify-center rounded-full bg-brand-100 text-lg font-medium text-brand-700"
                aria-hidden
              >
                {review.initials}
              </div>

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
      </div>
    </section>
  );
}
