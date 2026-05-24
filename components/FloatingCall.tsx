import { Phone } from "lucide-react";

const PHONE = "0203 / 29 888-0";

export default function FloatingCall() {
  return (
    <a
      href={`tel:${PHONE.replace(/[^\d+]/g, "")}`}
      aria-label="Позвонить нам"
      className="fixed bottom-5 right-5 z-50 hidden size-14 items-center justify-center sm:bottom-6 sm:right-6 md:flex"
    >
      <span
        className="absolute inline-flex size-full animate-ping rounded-full bg-brand-400 opacity-60 motion-reduce:hidden"
        aria-hidden
      />
      <span className="relative inline-flex size-14 items-center justify-center rounded-full bg-brand-500 text-white shadow-lg transition-colors hover:bg-brand-600">
        <Phone className="size-6" />
      </span>
    </a>
  );
}
