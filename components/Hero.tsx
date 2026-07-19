import { Phone, CalendarCheck } from "lucide-react";
import { PHONE_TEL, ONLINE_BOOKING_URL } from "@/lib/contact";

export default function Hero() {
  return (
    <section id="top" className="hero-watercolor relative overflow-hidden">
      {/* Фото */}
      <div
        className="absolute inset-0 bg-cover bg-[position:30%_50%] md:bg-center"
        style={{ backgroundImage: "url('/images/hero.png')" }}
        aria-hidden
      />
      {/* Мобильный: тёмный overlay для читаемости текста на фото */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,15,30,0.45) 0%, rgba(0,15,30,0.55) 60%, rgba(0,15,30,0.7) 100%)",
        }}
        aria-hidden
      />
      {/* Десктоп: пастельная подложка слева */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.92) 38%, rgba(255,255,255,0.6) 58%, rgba(255,255,255,0) 82%)",
        }}
        aria-hidden
      />
      {/* Десктоп: мягкий переход в белую секцию ниже */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-40 bg-gradient-to-b from-transparent to-white sm:h-56 md:block"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          <h1 className="text-balance font-serif text-[clamp(2.25rem,8vw,3.75rem)] font-bold leading-[1.12] text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.45)] md:text-ink md:[text-shadow:none]">
            Доступный отдых у&nbsp;моря —{" "}
            <span className="text-brand-200 md:text-brand-500">
              без&nbsp;перелётов и лишних&nbsp;забот
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 [text-shadow:0_1px_3px_rgba(0,0,0,0.4)] md:mt-6 md:text-lg md:text-muted md:[text-shadow:none]">
            <span className="md:hidden">
              Автобусные туры по Европе из Германии. Всё на русском языке.
            </span>
            <span className="hidden md:inline">
              Комфортные автобусные туры по Европе с отправлением из удобных
              городов Германии. Обслуживание и поддержка на русском языке.
            </span>
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 md:mt-9 md:gap-4">
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-base font-semibold text-white shadow-md shadow-brand-500/20 transition-colors hover:bg-brand-600"
            >
              <Phone className="size-5" />
              Позвонить нам
            </a>
            <a
              href={ONLINE_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand-500 bg-white px-7 py-3.5 text-base font-semibold text-brand-700 shadow-sm transition-colors hover:bg-brand-50"
            >
              <CalendarCheck className="size-5 text-brand-500" />
              Онлайн-бронирование тура
            </a>
          </div>

          <p className="mt-3 text-xs text-white/80 [text-shadow:0_1px_3px_rgba(0,0,0,0.4)] md:text-slate-500 md:[text-shadow:none]">
            Онлайн-бронирование откроется на сайте туроператора Ost-West
            Reisen.
          </p>

          <p className="mt-7 text-sm text-white/90 [text-shadow:0_1px_3px_rgba(0,0,0,0.4)] md:mt-9 md:text-slate-500 md:[text-shadow:none]">
            Ost-West Reisen — туроператор с 2002 года.
            <br />
            Мы, ваш эксклюзивный партнёр в Кёльне, консультируем и обслуживаем
            клиентов по всей Германии с 2010 года.
          </p>
        </div>
      </div>
    </section>
  );
}
