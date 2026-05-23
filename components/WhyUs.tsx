import {
  Users,
  MapPin,
  MessageCircle,
  Building2,
  BusFront,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

const stats = [
  { value: "24 года", label: "на рынке" },
  { value: "10+", label: "направлений" },
  { value: "100%", label: "по-русски" },
];

type Feature = {
  icon: LucideIcon;
  title: string;
  text: ReactNode;
};

const features: Feature[] = [
  {
    icon: Users,
    title: "С 2002 года рядом",
    text: "24 года организуем туры для русскоязычных. Тысячи путешественников вернулись довольными.",
  },
  {
    icon: MapPin,
    title: "Эксклюзив в Кёльне",
    text: (
      <>
        Единственное официальное представительство{" "}
        <strong className="font-semibold text-ink">Ost-West Reisen GmbH</strong>{" "}
        в Кёльне и регионе.
      </>
    ),
  },
  {
    icon: MessageCircle,
    title: "Всё на русском",
    text: "От первого звонка до возвращения домой - без языковых барьеров и недопониманий.",
  },
  {
    icon: Building2,
    title: "Проверенные отели",
    text: "Мы лично знаем каждый отель из программы. Никаких неприятных сюрпризов по приезде.",
  },
  {
    icon: BusFront,
    title: "Удобная посадка",
    text: "Отправление из Кёльна, Дюссельдорфа, Эссена и других городов. Без аэропортных хлопот.",
  },
  {
    icon: ShieldCheck,
    title: "Страховка включена",
    text: "Медицинская страховка пассажиров в стоимости каждого тура. Спокойствие на всём маршруте.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#f5f2ea] px-5 py-14 sm:px-10 sm:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-4xl font-bold text-ink sm:text-[2.75rem]">
              Почему выбирают нас
            </h2>
            <p className="mt-4 text-lg text-muted">
              Мы делаем всё, чтобы Ваш отпуск прошёл спокойно и без сюрпризов
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[#ece8dc] bg-white px-4 py-6 shadow-sm">
            <div className="grid grid-cols-3 divide-x divide-slate-200">
              {stats.map((stat) => (
                <div key={stat.label} className="px-2 text-center sm:px-4">
                  <div className="font-serif text-2xl font-bold text-brand-600 sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-muted sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-[#ece8dc] bg-white p-6"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand-100">
                  <Icon className="size-5 text-brand-600" />
                </div>
                <h3 className="mt-4 font-sans text-lg font-bold text-ink">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
