"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { destinations } from "@/lib/destinations";

const labelCls = "mb-2 block text-sm font-semibold text-ink";
const fieldCls =
  "w-full rounded-lg border border-slate-300 px-4 py-2.5 text-ink placeholder:text-slate-400 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-200";

export default function RequestForm() {
  const [submitted, setSubmitted] = useState(false);

  // No backend wired up yet — submission just shows a confirmation.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="form" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-bold text-ink sm:text-[2.75rem]">
            Оставьте заявку
          </h2>
          <p className="mt-4 text-lg text-muted">
            Заполните форму, и мы подберём для Вас лучший вариант отдыха
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
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
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelCls}>
                  Ваше имя <span className="text-rose-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Как к Вам обращаться?"
                  className={fieldCls}
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelCls}>
                  Телефон <span className="text-rose-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+49..."
                  className={fieldCls}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className={labelCls}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Ваш email"
                  className={fieldCls}
                />
              </div>

              <div>
                <label htmlFor="destination" className={labelCls}>
                  Направление
                </label>
                <select
                  id="destination"
                  name="destination"
                  defaultValue=""
                  className={`${fieldCls} bg-white`}
                >
                  <option value="" disabled>
                    Куда хотите поехать?
                  </option>
                  {destinations.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="people" className={labelCls}>
                  Количество человек
                </label>
                <input
                  id="people"
                  name="people"
                  type="number"
                  min={1}
                  defaultValue={1}
                  className={fieldCls}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="dates" className={labelCls}>
                  Желаемые даты
                </label>
                <input
                  id="dates"
                  name="dates"
                  type="text"
                  placeholder="Например: июнь 2026, 10–14 дней"
                  className={fieldCls}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className={labelCls}>
                  Комментарий
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Дополнительные пожелания..."
                  className={`${fieldCls} resize-y`}
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-500 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-600"
                >
                  <Send className="size-5" />
                  Отправить заявку
                </button>
                <p className="mt-4 text-center text-xs text-muted">
                  Нажимая кнопку, Вы соглашаетесь с обработкой персональных
                  данных
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
