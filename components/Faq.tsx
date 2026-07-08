"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: "Кто будет ехать в автобусе со мной?",
    a: "В наших группах в основном такие же русскоязычные путешественники из Германии - семьи, пары, пенсионеры. Атмосфера дружелюбная и спокойная, многие за время дороги становятся приятелями.",
  },
  {
    q: "Насколько удобен автобус для долгой дороги?",
    a: "Мы работаем только с современными автобусами комфорт-класса: кондиционер, удобные откидные кресла, туалет, горячие напитки.",
  },
  {
    q: "А что, если мне станет плохо в дороге или на отдыхе?",
    a: "На маршруте всегда есть наш сопровождающий, говорящий по-русски, который поможет вызвать врача или решить любую ситуацию. Вы не остаётесь один на один с проблемой.",
  },
  {
    q: "Из каких городов отправляются автобусы?",
    a: "Основные точки отправления - Кёльн, Дюссельдорф, Эссен, Бонн, Дортмунд. Также возможно подсесть в других городах по пути. Точный маршрут согласуется при бронировании.",
  },
  {
    q: "Как происходит оплата? Безопасно ли это?",
    a: "Оплата производится переводом на счёт нашей фирмы или наличными при подписании договора в офисе. Никаких онлайн-форм с картой не требуется. Вы получаете официальные документы - договор и счёт.",
  },
  {
    q: "А если я захочу отменить тур? Деньги вернутся?",
    a: "Условия отмены зависят от того, насколько близко к дате выезда вы отменяете. Подробно объясним все детали при бронировании - никаких сюрпризов в этом вопросе.",
  },
  {
    q: "Нужна ли мне виза?",
    a: "Для большинства наших направлений (страны Шенгена, ЕС) виза не требуется, если вы постоянно проживаете в Германии. Для отдельных стран (например, Турция, Египет) - поможем оформить визу или подскажем процедуру.",
  },
  {
    q: "Можно ли поехать одному? Не будет ли мне скучно?",
    a: "Конечно, можно! Около трети наших клиентов едут в туры одни. Атмосфера в группе очень тёплая - большинство к концу поездки уже общаются как старые знакомые. Также можем подобрать туры специально для путешественников-одиночек.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Faq() {
  const [open, setOpen] = useState<number[]>([]);

  function toggle(i: number) {
    setOpen((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i],
    );
  }

  return (
    <section id="faq" className="bg-white py-20 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-bold text-ink sm:text-[2.75rem]">
            Часто задаваемые вопросы
          </h2>
          <p className="mt-4 text-lg text-muted">
            Ответы на главные вопросы, которые задают наши клиенты
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = open.includes(i);
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-md border-[0.5px] border-slate-200 bg-white"
              >
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-400 sm:px-6"
                  >
                    <span className="text-base font-medium text-ink sm:text-[17px]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`size-5 shrink-0 text-brand-600 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                </h3>
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[15px] leading-[1.7] text-muted sm:px-6 sm:text-base">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
