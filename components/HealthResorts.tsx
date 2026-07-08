import { HeartPulse, Check, ArrowRight } from "lucide-react";

const points = [
  "Карловы Вары и Марианске-Лазне в Чехии",
  "Баден-Баден и термальные курорты Германии",
  "Программы оздоровления, реабилитации и SPA",
  "Подбор отеля и русскоязычное сопровождение",
];

export default function HealthResorts() {
  return (
    <section id="health" className="bg-brand-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div
            className="order-1 aspect-[4/3] rounded-2xl bg-cover bg-center shadow-md ring-1 ring-black/5"
            style={{
              backgroundImage:
                "url('/images/kurorty-illustration.svg'), linear-gradient(135deg, #cfeede 0%, #2f9e8e 100%)",
            }}
            role="img"
            aria-label="Лечебный курорт: санаторий у термального источника"
          />

          <div className="order-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-brand-700 ring-1 ring-brand-200/60">
              <HeartPulse className="size-4" />
              Здоровье и отдых
            </span>

            <h2 className="mt-6 font-serif text-4xl font-bold text-ink sm:text-[2.75rem]">
              Лечебные курорты
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-muted">
              Отдых, который заботится о Вашем здоровье. Мы организуем поездки на
              лучшие лечебные и оздоровительные курорты Европы - с термальными
              источниками, минеральными водами и профессиональными
              SPA-программами.
            </p>

            <ul className="mt-7 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-100">
                    <Check className="size-4 text-brand-600" />
                  </span>
                  <span className="text-ink">{point}</span>
                </li>
              ))}
            </ul>

            <a
              href="#form"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-base font-semibold text-white shadow-md shadow-brand-500/20 transition-colors hover:bg-brand-600"
            >
              Подобрать лечебный тур
              <ArrowRight className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
