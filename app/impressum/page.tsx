import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum | Ost-West Reisen",
  description: "Impressum und Anbieterkennzeichnung der Ost-West Reisen GmbH.",
};

const h2Cls = "font-serif text-xl font-bold text-ink";
const linkCls = "text-brand-600 hover:text-brand-700";

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-[15px] leading-relaxed text-slate-600 sm:px-6 sm:py-20 lg:px-8">
          <Link href="/#top" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
            ← Zurück zur Startseite
          </Link>

          <h1 className="mt-6 font-serif text-3xl font-bold text-ink sm:text-4xl">
            Impressum
          </h1>

          <div className="mt-8">
            <p className="text-lg font-bold text-ink">OST-WEST REISEN GmbH</p>
            <p className="mt-2">Grabenstraße 1</p>
            <p>47057 Duisburg</p>

            <p className="mt-4">Tel: 0203 / 29 888 0</p>
            <p>Fax: 0203 / 29 888 63</p>

            <p className="mt-4 font-semibold text-ink">Geschäftsführer:</p>
            <p>Vadim Goldschmidt</p>

            <p className="mt-4">Steuernummer: 109-5928-1364</p>
            <p>HRB: 19897</p>

            <p className="mt-4">
              E-Mail:{" "}
              <a href="mailto:reise@ost-prospekt.de" className={linkCls}>
                reise@ost-prospekt.de
              </a>
            </p>

            <p className="mt-4">
              <Link href="/agb" className={linkCls}>
                Unsere AGB
              </Link>
            </p>
          </div>

          <section className="mt-10">
            <h2 className={h2Cls}>Versicherungsombudsmann e. V.</h2>
            <p className="mt-3">Postfach 080632, 10006 Berlin</p>
            <p>Tel: 0800 3696000</p>
            <p>Fax: 0800 3699000</p>
            <p>
              E-Mail:{" "}
              <a
                href="mailto:beschwerde@versicherungsombudsmann.de"
                className={linkCls}
              >
                beschwerde@versicherungsombudsmann.de
              </a>
            </p>
            <p>
              Homepage:{" "}
              <a
                href="https://www.versicherungsombudsmann.de"
                target="_blank"
                rel="noopener noreferrer"
                className={linkCls}
              >
                https://www.versicherungsombudsmann.de
              </a>
            </p>
          </section>

          <section className="mt-10">
            <h2 className={h2Cls}>
              Online-Streitbeilegung gemäß Art. 14 Abs. 1 ODR-Verordnung
            </h2>
            <p className="mt-3">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS-Plattform) bereit. Sie erreichen diese
              unter{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className={linkCls}
              >
                http://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="mt-3">
              Gemäß § 37 VSBG sind wir verpflichtet, Sie darauf hinzuweisen, dass
              für Streitigkeiten zwischen Verbrauchern und Unternehmen
              Streitschlichtungsstellen eingerichtet wurden. Die allgemeine
              Verbraucherschlichtungsstelle ist das Zentrum für Schlichtung e.V.
              - Straßburger Str. 8 - 77694 Kehl (E-Mail:{" "}
              <a
                href="mailto:mail@verbraucher-schlichter.de"
                className={linkCls}
              >
                mail@verbraucher-schlichter.de
              </a>
              ). Sie können sich an diese Stelle wenden, die Teilnahme ist für
              beide Seiten aber freiwillig. Wir nehmen derzeit nicht an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teil.
            </p>
          </section>

          <section className="mt-10">
            <p>
              Wir vermitteln Reiseversicherungen im Status eines erlaubnisfreien
              Annexvermittlers gemäß § 34d Abs. 8 Nr. 1 Gewerbeordnung (GewO).
            </p>
          </section>

          <section className="mt-10">
            <h2 className={h2Cls}>
              Beschwerdestelle bei Streitigkeiten mit Versicherungsvermittlern
            </h2>
            <p className="mt-3">Versicherungsombudsmann e.V.</p>
            <p>Postfach 08 06 32</p>
            <p>10006 Berlin</p>
            <p>
              <a
                href="https://www.versicherungsombudsmann.de"
                target="_blank"
                rel="noopener noreferrer"
                className={linkCls}
              >
                www.versicherungsombudsmann.de
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
