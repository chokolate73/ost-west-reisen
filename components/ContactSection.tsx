"use client";

import { useState } from "react";
import { Send, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import { destinations } from "@/lib/destinations";

const labelCls = "mb-2 block text-sm font-semibold text-ink";
const fieldCls =
  "w-full rounded-lg border border-slate-300 px-4 py-2.5 text-ink placeholder:text-slate-400 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-200";

const PHONE = "+49 2212 725 3591";

type Contact = {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
};

const contacts: Contact[] = [
  {
    icon: Phone,
    label: "Телефон",
    value: PHONE,
    href: `tel:${PHONE.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email для заявок",
    value: "info@ostwesttravel.de",
    href: "mailto:info@ostwesttravel.de",
  },
  {
    icon: Mail,
    label: "Прямая связь",
    value: "post@ostwesttravel.de",
    href: "mailto:post@ostwesttravel.de",
  },
  {
    icon: MapPin,
    label: "Адрес",
    value: "Franz-Xaver-Mauer-Str. 34, 50374 Erftstadt",
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-16 lg:px-8">
        {/* Заявка — слева */}
        <div id="form">
          <h2 className="font-serif text-3xl font-bold text-ink sm:text-4xl">
            Оставьте заявку
          </h2>
          <p className="mt-4 text-lg text-muted">
            Заполните форму, и мы подберём для Вас лучший вариант отдыха
          </p>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
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
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-5 sm:grid-cols-2"
              >
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
                    <option value="Другие страны">Другие страны</option>
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
                    placeholder="Например: июнь 2026, 10-14 дней"
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

        {/* Свяжитесь с нами — справа */}
        <div id="contacts">
          <h2 className="font-serif text-3xl font-bold text-ink sm:text-4xl">
            Свяжитесь с нами
          </h2>
          <p className="mt-4 text-lg text-muted">
            Мы всегда рады помочь Вам с выбором тура. Звоните - мы говорим
            по-русски!
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {contacts.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand-100">
                    <Icon className="size-6 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">{label}</p>
                    <p className="mt-0.5 text-lg font-bold text-ink">{value}</p>
                  </div>
                </>
              );
              const cls =
                "flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm";
              return href ? (
                <a
                  key={label}
                  href={href}
                  className={`${cls} transition-shadow hover:shadow-md`}
                >
                  {inner}
                </a>
              ) : (
                <div key={label} className={cls}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
