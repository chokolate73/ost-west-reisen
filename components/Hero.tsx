import { ArrowRight, Phone } from "lucide-react";

const PHONE = "+49 2212 725 3591";

export default function Hero() {
  return (
    <section id="top" className="hero-watercolor relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          <h1 className="font-serif text-5xl font-bold leading-[1.08] text-ink sm:text-6xl">
            Доступный отдых у моря —{" "}
            <span className="text-brand-500">
              без перелётов и лишних забот
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Комфортные автобусные туры по Европе с отправлением из удобных
            городов Германии. Русскоязычное сопровождение на всём маршруте.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#form"
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-base font-semibold text-white shadow-md shadow-brand-500/20 transition-colors hover:bg-brand-600"
            >
              Подобрать тур
              <ArrowRight className="size-5" />
            </a>
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-7 py-3.5 text-base font-semibold text-ink backdrop-blur transition-colors hover:bg-white"
            >
              <Phone className="size-4 text-brand-500" />
              Позвонить нам
            </a>
          </div>

          <p className="mt-9 text-sm text-slate-500">
            На рынке с 2002 года • Эксклюзивное агентство в Кёльне
          </p>
        </div>
      </div>
    </section>
  );
}
