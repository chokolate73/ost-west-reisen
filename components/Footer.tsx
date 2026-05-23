import { Phone, Mail } from "lucide-react";

const PHONE = "+49 2212 725 3591";

const navLinks = [
  { label: "Направления", href: "#destinations" },
  { label: "О нас", href: "#why" },
  { label: "Предложения", href: "#offers" },
  { label: "Заявка", href: "#form" },
  { label: "Контакты", href: "#contacts" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-xl font-bold text-white">
              Ost-West Reisen
            </p>
            <p className="mt-1 text-sm text-slate-400">Exklusiv Agentur Köln</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Комфортные автобусные туры по Европе из Германии. На рынке с 2002
              года.
            </p>
          </div>

          <div>
            <p className="font-sans font-semibold text-white">Разделы</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans font-semibold text-white">Контакты</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`tel:${PHONE.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
                >
                  <Phone className="size-4" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ost-west-reisen.de"
                  className="flex items-center gap-2 text-slate-400 transition-colors hover:text-white"
                >
                  <Mail className="size-4" />
                  info@ost-west-reisen.de
                </a>
              </li>
              <li className="text-slate-400">Köln, Германия</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Ost-West Reisen GmbH. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
