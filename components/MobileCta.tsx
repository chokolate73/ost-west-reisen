import Link from "next/link";
import { Phone } from "lucide-react";
import { PHONE_TEL } from "@/lib/contact";

export default function MobileCta() {
  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 md:hidden">
      <div className="flex items-center gap-2 rounded-full bg-brand-600/85 p-1.5 shadow-xl ring-1 ring-white/15 backdrop-blur-md">
        <Link
          href="/#form"
          className="rounded-full bg-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/25"
        >
          Заявка
        </Link>
        <a
          href={PHONE_TEL}
          className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
        >
          <Phone className="size-4" />
          Позвонить
        </a>
      </div>
    </div>
  );
}
