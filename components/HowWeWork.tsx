import {
  Phone,
  ClipboardList,
  CreditCard,
  Smile,
  type LucideIcon,
} from "lucide-react";

type Step = {
  icon: LucideIcon;
  num: string;
  title: string;
  text: string;
};

const steps: Step[] = [
  {
    icon: Phone,
    num: "01",
    title: "Позвоните или оставьте заявку",
    text: "Расскажите нам о Ваших пожеланиях - направление, даты, количество человек.",
  },
  {
    icon: ClipboardList,
    num: "02",
    title: "Мы подберём лучший вариант",
    text: "Наши специалисты предложат подходящие туры с учётом Ваших предпочтений и бюджета.",
  },
  {
    icon: CreditCard,
    num: "03",
    title: "Бронирование и оплата",
    text: "Забронируем тур и оформим все документы. До бронирования подробно объясняем, что входит в стоимость и какие дополнительные расходы возможны.",
  },
  {
    icon: Smile,
    num: "04",
    title: "Приятного отдыха!",
    text: "Вам останется только собрать чемодан. Мы позаботимся об остальном.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-bold text-ink sm:text-[2.75rem]">
            Как мы работаем
          </h2>
          <p className="mt-4 text-lg text-muted">
            Четыре простых шага до Вашего отпуска
          </p>
        </div>

        <div className="relative mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* connecting dashed line on large screens */}
          <div
            className="absolute left-0 right-0 top-10 hidden border-t border-dashed border-slate-300 lg:block"
            aria-hidden
          />
          {steps.map(({ icon: Icon, num, title, text }) => (
            <div key={num} className="relative flex flex-col items-center text-center">
              <div className="relative">
                <div className="flex size-20 items-center justify-center rounded-full bg-brand-100/70 ring-8 ring-white">
                  <Icon className="size-8 text-brand-600" />
                </div>
                <span className="absolute -right-1 -top-1 flex size-7 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
                  {num}
                </span>
              </div>
              <h3 className="mt-6 font-sans text-lg font-bold text-ink">
                {title}
              </h3>
              <p className="mt-3 max-w-xs leading-relaxed text-muted">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
