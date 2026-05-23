import { Phone, Mail, MapPin, Clock } from "lucide-react";

const PHONE = "+49 2212 725 3591";

// NOTE: address / email / hours are placeholders — replace with real data.
const items = [
  {
    icon: Phone,
    title: "Телефон",
    lines: [PHONE],
    href: `tel:${PHONE.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    title: "E-mail",
    lines: ["info@ost-west-reisen.de"],
    href: "mailto:info@ost-west-reisen.de",
  },
  {
    icon: MapPin,
    title: "Адрес",
    lines: ["Köln, Германия"],
  },
  {
    icon: Clock,
    title: "Часы работы",
    lines: ["Пн–Пт: 9:00–18:00", "Сб: 10:00–15:00"],
  },
];

export default function Contacts() {
  return (
    <section id="contacts" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-bold text-ink sm:text-[2.75rem]">
            Контакты
          </h2>
          <p className="mt-4 text-lg text-muted">
            Свяжитесь с нами удобным способом — мы всегда рады помочь
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, lines, href }) => {
            const content = (
              <>
                <div className="flex size-12 items-center justify-center rounded-xl bg-brand-100">
                  <Icon className="size-6 text-brand-600" />
                </div>
                <h3 className="mt-5 font-sans text-lg font-bold text-ink">
                  {title}
                </h3>
                <div className="mt-2 space-y-0.5 text-muted">
                  {lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </>
            );
            return href ? (
              <a
                key={title}
                href={href}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-7 transition-colors hover:bg-brand-50"
              >
                {content}
              </a>
            ) : (
              <div
                key={title}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-7"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
