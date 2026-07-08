import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PHONE, PHONE_TEL, EMAIL, EMAIL_MAILTO } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Impressum | Ost-West Logistik & Travel e.K.",
  description:
    "Impressum und Anbieterkennzeichnung der Ost-West Logistik & Travel e.K., Erftstadt.",
};

const h2Cls = "font-serif text-xl font-bold text-ink";
const linkCls = "text-brand-600 hover:text-brand-700";

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-[15px] leading-relaxed text-slate-600 sm:px-6 sm:py-20 lg:px-8">
          <Link
            href="/#top"
            className="text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            ← Zurück zur Startseite
          </Link>

          <h1 className="mt-6 font-serif text-3xl font-bold text-ink sm:text-4xl">
            Impressum
          </h1>

          <p className="mt-6">Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz):</p>

          <div className="mt-6">
            <p className="text-lg font-bold text-ink">
              Ost-West Logistik &amp; Travel e.K.
            </p>
            <p className="mt-2">Inhaberin: Vasilya Nigmatova</p>
            <p className="mt-2">Franz-Xaver-Mauer-Str. 34</p>
            <p>50374 Erftstadt</p>

            <p className="mt-4">
              Tel:{" "}
              <a href={PHONE_TEL} className={linkCls}>
                {PHONE}
              </a>
            </p>
            <p>Fax: 0221 27253597</p>
            <p className="mt-1">
              E-Mail:{" "}
              <a href={EMAIL_MAILTO} className={linkCls}>
                {EMAIL}
              </a>
            </p>
          </div>

          <section className="mt-8">
            <h2 className={h2Cls}>Registereintrag</h2>
            <p className="mt-3">Eingetragen im Handelsregister.</p>
            <p>Registergericht: Amtsgericht Köln</p>
            <p>Registernummer: HRA 27729</p>
            <p className="mt-3">Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:</p>
            <p>DE340001987</p>
          </section>

          <section className="mt-8">
            <h2 className={h2Cls}>Aufsichtsbehörde / Kammer</h2>
            <p className="mt-3">Industrie- und Handelskammer zu Köln</p>
            <p>Unter Sachsenhausen 10–26, 50667 Köln</p>
            <p className="mt-3">
              Berufsbezeichnung: Reiseverkehrskauffrau (verliehen in der
              Bundesrepublik Deutschland)
            </p>
          </section>

          <section className="mt-8">
            <h2 className={h2Cls}>
              Verantwortlich für den Inhalt gemäß § 18 Abs. 2 MStV
            </h2>
            <p className="mt-3">Vasilya Nigmatova</p>
            <p>Franz-Xaver-Mauer-Str. 34, 50374 Erftstadt</p>
          </section>

          <section className="mt-8 rounded-xl bg-brand-50 p-5">
            <h2 className={h2Cls}>Hinweis zur Reisevermittlung</h2>
            <p className="mt-3">
              Diese Website sowie die Kontakt- und Buchungsstelle werden betrieben
              von der Ost-West Logistik &amp; Travel e.K. Wir vermitteln
              Pauschalreisen und Einzelleistungen – unter anderem für die Ost-West
              Reisen GmbH und weitere Reiseveranstalter. Für die jeweilige Reise
              gelten die Reisebedingungen (AGB) des durchführenden
              Reiseveranstalters (siehe{" "}
              <Link href="/agb" className={linkCls}>
                AGB
              </Link>
              ).
            </p>
          </section>

          <section className="mt-8">
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
                https://ec.europa.eu/consumers/odr/
              </a>
              .
            </p>
            <p className="mt-3">
              Gemäß § 36 VSBG weisen wir darauf hin, dass wir nicht verpflichtet
              und nicht bereit sind, an einem Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
