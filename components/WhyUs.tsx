import {
  Users,
  MapPin,
  MessageCircle,
  Building2,
  BusFront,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";

const stats = [
  { value: "С 2002 года", label: "работает туроператор Ost-West Reisen" },
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
    title: "С 2010 года с вами",
    text: (
      <>
        Мы, ваш эксклюзивный партнёр{" "}
        <strong className="font-semibold text-ink">Ost-West Reisen</strong> в
        Кёльне, консультируем и обслуживаем клиентов по всей Германии.
      </>
    ),
  },
  {
    icon: MapPin,
    title: "Эксклюзивный партнёр в Кёльне",
    text: (
      <>
        Консультация и бронирование туров{" "}
        <strong className="font-semibold text-ink">Ost-West Reisen</strong> для
        клиентов по всей Германии.
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
    text: "Мы хорошо знаем программу Ost-West Reisen и помогаем выбрать подходящий отель с учётом ваших пожеланий.",
  },
  {
    icon: BusFront,
    title: "Удобная посадка",
    text: "Отправление из Кёльна, Дюссельдорфа, Эссена и многих других городов Германии. Мы поможем подобрать удобную точку отправления.",
  },
  {
    icon: HeartHandshake,
    title: "Забота на всём пути",
    text: "Сопровождаем Вас от первой заявки до возвращения домой - подскажем, поможем и будем на связи.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-50 px-5 py-14 sm:px-10 sm:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-4xl font-bold text-ink sm:text-[2.75rem]">
              Почему выбирают нас
            </h2>
            <p className="mt-4 text-lg text-muted">
              Мы делаем всё, чтобы Ваш отпуск прошёл спокойно и без сюрпризов
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-100 bg-white px-4 py-6 shadow-sm">
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
                className="rounded-2xl border border-slate-100 bg-white p-6"
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
