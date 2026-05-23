"use client";

import { useState } from "react";
import { BookOpen, CheckCircle2 } from "lucide-react";

export default function CatalogCta() {
  const [sent, setSent] = useState(false);

  // No backend — open the user's mail client addressed to the agency.
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    const subject = encodeURIComponent("Запрос каталога 2026");
    const body = encodeURIComponent(
      `Здравствуйте! Прошу выслать каталог 2026 на адрес: ${email ?? ""}`,
    );
    window.location.href = `mailto:info@ostwesttravel.de?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-brand-100 px-6 py-10 text-center sm:px-10 sm:py-12">
          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-white">
            <BookOpen className="size-6 text-brand-600" />
          </div>
          <h2 className="mt-5 font-serif text-3xl font-bold text-ink">
            Закажите бесплатный каталог 2026
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Все направления, цены и спецпредложения сезона - на электронную
            почту
          </p>

          {sent ? (
            <p className="mx-auto mt-7 flex items-center justify-center gap-2 text-brand-700">
              <CheckCircle2 className="size-5" />
              Спасибо! Мы пришлём каталог на Вашу почту.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="catalog-email" className="sr-only">
                Ваш e-mail
              </label>
              <input
                id="catalog-email"
                name="email"
                type="email"
                required
                placeholder="Ваш e-mail"
                className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 text-ink placeholder:text-slate-400 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
              />
              <button
                type="submit"
                className="rounded-lg bg-brand-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-600"
              >
                Получить каталог
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
