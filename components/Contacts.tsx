import { Phone, Mail, MapPin, Clock } from "lucide-react";

const PHONE = "+49 2212 725 3591";

type Card = {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
};

const cards: Card[] = [
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

export default function Contacts() {
  return (
    <section id="contacts" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-bold text-ink sm:text-[2.75rem]">
            Свяжитесь с нами
          </h2>
          <p className="mt-4 text-lg text-muted">
            Мы всегда рады помочь Вам с выбором тура. Звоните — мы говорим
            по-русски!
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
          {cards.map(({ icon: Icon, label, value, href }) => {
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
              "flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm";
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

        <p className="mt-10 flex items-center justify-center gap-2 text-brand-600">
          <Clock className="size-5" />
          Кёльн и Северный Рейн-Вестфалия
        </p>
      </div>
    </section>
  );
}
