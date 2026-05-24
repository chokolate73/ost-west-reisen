"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Направления", href: "/#destinations" },
  { label: "О нас", href: "/#why" },
  { label: "Предложения", href: "/#destinations" },
  { label: "Заявка", href: "/#form" },
  { label: "Контакты", href: "/#contacts" },
];

const PHONE = "0203 / 29 888-0";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/#top" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Ost-West Reisen — Exklusiv Agentur Köln"
            width={899}
            height={460}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
            className="flex items-center gap-2 text-sm font-semibold text-ink"
          >
            <Phone className="size-4 text-brand-500" />
            {PHONE}
          </a>
          <Link
            href="/#form"
            className="rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-600"
          >
            Забронировать
          </Link>
        </div>

        <button
          type="button"
          aria-label="Меню"
          onClick={() => setOpen((v) => !v)}
          className="text-ink lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-600"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
              className="mt-2 flex items-center gap-2 px-3 py-2 text-sm font-semibold text-ink"
            >
              <Phone className="size-4 text-brand-500" />
              {PHONE}
            </a>
            <Link
              href="/#form"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-brand-500 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Забронировать
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
