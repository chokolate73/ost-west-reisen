import Link from "next/link";

const legalLinks = [
  { label: "AGB", href: "/agb" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Impressum", href: "/impressum" },
];

export default function Footer() {
  return (
    <footer className="bg-[#26303c] text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 pb-28 pt-8 sm:px-6 md:flex-row md:items-center md:justify-between md:pb-8 lg:px-8">
        <div>
          <p className="font-sans font-bold text-white">
            Ost-West Travel
          </p>
          <p className="mt-2 max-w-md text-xs leading-relaxed text-slate-400">
            Сайт и приём заявок — Ost-West Logistik &amp; Travel e.K.
            <br />
            Туры проводятся по условиям (AGB) Ost-West Reisen GmbH.
          </p>
          <p className="mt-2 text-sm text-slate-400">
            © {new Date().getFullYear()} Все права защищены
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Made by{" "}
            <a
              href="https://www.vlad-weby.sk/de"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-white"
            >
              vlad-weby
            </a>
          </p>
        </div>

        <nav className="flex items-center gap-3 text-sm text-slate-400">
          {legalLinks.map((link, i) => (
            <span key={link.label} className="flex items-center gap-3">
              {i > 0 && <span aria-hidden>·</span>}
              <Link
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </nav>
      </div>
    </footer>
  );
}
