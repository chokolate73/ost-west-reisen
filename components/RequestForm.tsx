"use client";

import { useState } from "react";
import { CheckCircle2, ShieldCheck, Clock, MessageCircle } from "lucide-react";
import { destinations } from "@/lib/destinations";

export default function RequestForm() {
  const [submitted, setSubmitted] = useState(false);

  // NOTE: no backend wired up yet — submission just shows a confirmation.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="form" className="bg-brand-600 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-white">
            <h2 className="font-serif text-4xl font-bold sm:text-[2.75rem]">
              Оставьте заявку
            </h2>
            <p className="mt-4 max-w-md text-lg text-brand-50">
              Расскажите о Ваших планах — мы подберём идеальный тур и перезвоним
              в течение рабочего дня.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                { icon: ShieldCheck, text: "Без предоплаты за консультацию" },
                { icon: Clock, text: "Перезвоним в течение рабочего дня" },
                { icon: MessageCircle, text: "Всё общение на русском языке" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-brand-50">
                  <Icon className="size-5 shrink-0 text-white" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-7 shadow-xl sm:p-9">
            {submitted ? (
              <div className="flex flex-col items-center py-10 text-center">
                <CheckCircle2 className="size-14 text-brand-500" />
                <h3 className="mt-4 font-sans text-2xl font-bold text-ink">
                  Спасибо за заявку!
                </h3>
                <p className="mt-2 text-muted">
                  Мы свяжемся с Вами в ближайшее время.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Как к Вам обращаться"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-ink outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+49"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-ink outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink">
                    Направление
                  </label>
                  <select
                    name="destination"
                    defaultValue=""
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-ink outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                  >
                    <option value="" disabled>
                      Выберите направление
                    </option>
                    {destinations.map((d) => (
                      <option key={d.slug} value={d.name}>
                        {d.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-ink">
                    Комментарий
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Даты, количество человек, пожелания"
                    className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-ink outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-brand-500 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-600"
                >
                  Отправить заявку
                </button>
                <p className="text-center text-xs text-muted">
                  Нажимая кнопку, Вы соглашаетесь с обработкой персональных
                  данных.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
