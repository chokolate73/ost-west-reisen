import {
  ShieldCheck,
  MapPin,
  MessageCircle,
  Building2,
  BusFront,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: "24 года на рынке",
    text: "Работаем с 2002 года. Тысячи довольных клиентов, проверенные маршруты и надёжные партнёры.",
  },
  {
    icon: MapPin,
    title: "Эксклюзив в Кёльне",
    text: "Единственное официальное представительство Ost-West Reisen GmbH в Кёльне и регионе.",
  },
  {
    icon: MessageCircle,
    title: "Всё на русском языке",
    text: "Консультация, бронирование, сопровождение — на родном языке от начала до конца.",
  },
  {
    icon: Building2,
    title: "Проверенные отели",
    text: "Только проверенные временем отели, где нашим клиентам всегда комфортно.",
  },
  {
    icon: BusFront,
    title: "Удобное отправление",
    text: "Посадка в комфортабельные автобусы из городов Северного Рейн-Вестфалии и других регионов.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-bold text-ink sm:text-[2.75rem]">
            Почему выбирают нас
          </h2>
          <p className="mt-4 text-lg text-muted">
            Мы делаем всё, чтобы Ваш отпуск прошёл спокойно и без сюрпризов
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-brand-100">
                <Icon className="size-6 text-brand-600" />
              </div>
              <h3 className="mt-6 font-sans text-xl font-bold text-ink">
                {title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
