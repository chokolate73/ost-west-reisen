import Link from "next/link";

const legalLinks = [
  { label: "AGB", href: "/agb" },
  { label: "Datenschutz", href: "#" },
  { label: "Impressum", href: "/impressum" },
];

export default function Footer() {
  return (
    <footer className="bg-[#26303c] text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-sans font-bold text-white">
            Ost-West Reisen
          </p>
          <p className="mt-1 text-sm text-slate-400">
            © {new Date().getFullYear()} Все права защищены
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
