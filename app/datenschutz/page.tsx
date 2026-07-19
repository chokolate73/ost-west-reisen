import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { EMAIL, EMAIL_MAILTO } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Ost-West Reisen",
  description:
    "Datenschutz der Ost-West Logistik & Travel e.K. sowie des Reiseveranstalters Ost-West Reisen GmbH.",
};

const h2Cls = "font-serif text-xl font-bold text-ink";
const partCls = "mt-14 font-serif text-2xl font-bold text-ink sm:text-[1.75rem]";
const linkCls = "text-brand-600 hover:text-brand-700";

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-[15px] leading-relaxed text-slate-600 sm:px-6 sm:py-20 lg:px-8">
          <Link href="/#top" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
            ← Вернуться на главную
          </Link>

          <h1 className="mt-6 font-serif text-3xl font-bold text-ink sm:text-4xl">
            Datenschutzerklärung
          </h1>

          {/* Struktur-Hinweis: wer ist wer */}
          <div className="mt-6 rounded-2xl bg-brand-50 p-5 sm:p-6">
            <p className="text-ink">
              An der Verarbeitung Ihrer Daten können zwei Stellen beteiligt sein:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-brand-500">
              <li>
                Diese Website, die Kontaktstelle und Ihre Buchungsanfrage laufen
                über die{" "}
                <strong className="font-semibold text-ink">
                  Ost-West Logistik &amp; Travel e.K.
                </strong>{" "}
                Sie ist für diese Website verantwortlich (Teil A).
              </li>
              <li>
                Wird Ihre Buchung zur Durchführung der Reise an den
                Reiseveranstalter{" "}
                <strong className="font-semibold text-ink">
                  Ost-West Reisen GmbH
                </strong>{" "}
                weitergegeben, verarbeitet dieser Ihre Daten in eigener
                Verantwortung (Teil B).
              </li>
            </ul>
          </div>

          {/* ── Teil A — Ost-West Logistik & Travel e.K. ── */}
          <h2 className={partCls}>
            Teil A — Datenschutz der Ost-West Logistik &amp; Travel e.K.
          </h2>

          <section className="mt-6">
            <h3 className={h2Cls}>Verantwortlicher</h3>
            <p className="mt-3">Verantwortlicher im Sinne der DSGVO ist:</p>
            <p className="mt-3 font-medium text-ink">
              Ost-West Logistik &amp; Travel e.K.
            </p>
            <p>Inhaberin: Vasilya Nigmatova</p>
            <p>Franz-Xaver-Mauer-Str. 34, 50374 Erftstadt</p>
            <p className="mt-1">
              E-Mail:{" "}
              <a href={EMAIL_MAILTO} className={linkCls}>
                {EMAIL}
              </a>
            </p>
          </section>

          <p className="mt-6 font-medium text-ink">
            Wir erheben, verarbeiten und nutzen Ihre Daten nur im Rahmen der
            gesetzlichen Bestimmungen.
          </p>

          <p className="mt-4">
            Diese Datenschutzerklärung gilt ausschließlich für die Nutzung der
            von uns angebotenen Webseiten. Sie gilt nicht für die Webseiten
            anderer Dienstanbieter, auf die wir lediglich durch einen Link
            verweisen. Bei der Nutzung unserer Webseiten bleiben Sie anonym,
            solange Sie uns nicht von sich aus freiwillig personenbezogene Daten
            zur Verfügung stellen. Personenbezogene Daten werden nur dann
            erhoben, wenn dies für die Nutzung der auf der Webseite angebotenen
            Leistungen, insbesondere Formularangebote, erforderlich ist. Wir
            werden die von Ihnen zur Verfügung gestellten Daten streng
            vertraulich behandeln. Ohne Ihre ausdrückliche Einwilligung geben wir
            keine persönlichen Daten weiter, es sei denn, dass wir rechtlich dazu
            verpflichtet sind oder die Weitergabe für die von Ihnen gewünschte
            Buchung erforderlich ist. Sofern Sie es von uns verlangen, gewähren
            wir Ihnen Einblick in die über Sie gespeicherten Daten,
            beziehungsweise berichtigen oder löschen diese. Wenn Sie Daten
            berichtigen, löschen oder einsehen wollen, genügt hierfür ein
            Schreiben an die im Impressum angegebene Adresse oder eine E-Mail an
            die oben genannte Adresse.
          </p>

          <section className="mt-10">
            <h3 className={h2Cls}>Kontaktaufnahme und Buchungsanfrage</h3>
            <p className="mt-3">
              Wenn Sie uns über das Anfrageformular oder per E-Mail
              kontaktieren, verarbeiten wir die von Ihnen angegebenen Daten (z.
              B. Name, Telefonnummer, E-Mail-Adresse sowie Ihre Reisewünsche),
              um Ihre Anfrage zu bearbeiten und Ihnen ein passendes Angebot zu
              unterbreiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
              (Anbahnung bzw. Durchführung eines Vertrages) sowie Art. 6 Abs. 1
              lit. f DSGVO (Bearbeitung Ihrer Anfrage). Zur Buchung und
              Durchführung der Reise geben wir die erforderlichen Daten an den
              jeweiligen Reiseveranstalter – insbesondere die Ost-West Reisen
              GmbH – weiter (siehe Teil B).
            </p>
          </section>

          <section className="mt-10">
            <h3 className={h2Cls}>Verwendung von Google Analytics</h3>
            <p className="mt-3">
              Diese Website benutzt Google Analytics, einen Webanalysedienst der
              Google Inc. („Google“). Google Analytics verwendet sog. „Cookies“,
              Textdateien, die auf Ihrem Computer gespeichert werden und die eine
              Analyse der Benutzung der Website durch Sie ermöglichen. Die durch
              den Cookie erzeugten Informationen über Ihre Benutzung dieser
              Website (einschließlich Ihrer IP-Adresse) wird an einen Server von
              Google in den USA übertragen und dort gespeichert. Google wird
              diese Informationen benutzen, um Ihre Nutzung der Website
              auszuwerten, um Reports über die Websiteaktivitäten für die
              Websitebetreiber zusammenzustellen und um weitere mit der
              Websitenutzung und der Internetnutzung verbundene Dienstleistungen
              zu erbringen. Auch wird Google diese Informationen gegebenenfalls
              an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder
              soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google
              wird in keinem Fall Ihre IP-Adresse mit anderen Daten von Google in
              Verbindung bringen. Sie können die Installation der Cookies durch
              eine entsprechende Einstellung Ihrer Browser Software verhindern;
              wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall
              gegebenenfalls nicht sämtliche Funktionen dieser Website
              vollumfänglich nutzen können. Der Erhebung und Nutzung Ihrer
              IP-Adresse durch Google Analytics können Sie jederzeit mit Wirkung
              für die Zukunft widersprechen.
            </p>
          </section>

          <section className="mt-10">
            <h3 className={h2Cls}>Cookies</h3>
            <p className="mt-3">
              Auf einigen unserer Seiten verwenden wir sog. „Session-Cookies“, um
              Ihnen die Nutzung unserer Webseiten zu erleichtern. Dabei handelt
              es sich um kleine Textdateien, die nur für die Dauer Ihres Besuchs
              unserer Webseite auf Ihrer Festplatte hinterlegt und abhängig von
              der Einstellung Ihres Browser-Programms beim Beenden des Browsers
              wieder gelöscht werden. Diese Cookies rufen keine auf Ihrer
              Festplatte über Sie gespeicherten Informationen ab und
              beeinträchtigen nicht Ihren PC oder ihre Dateien. Die meisten
              Browser sind so eingestellt, dass sie Cookies automatisch
              akzeptieren. Sie können das Speichern von Cookies jedoch
              deaktivieren oder ihren Browser so einstellen, dass er Sie auf die
              Sendung von Cookies hinweist.
            </p>
          </section>

          <section className="mt-10">
            <h3 className={h2Cls}>Ihre Rechte</h3>
            <p className="mt-3">
              Sie haben im Rahmen der gesetzlichen Bestimmungen das Recht auf
              Auskunft über Ihre gespeicherten personenbezogenen Daten (Art. 15
              DSGVO), auf Berichtigung (Art. 16 DSGVO), auf Löschung (Art. 17
              DSGVO), auf Einschränkung der Verarbeitung (Art. 18 DSGVO), auf
              Datenübertragbarkeit (Art. 20 DSGVO) sowie ein Widerspruchsrecht
              (Art. 21 DSGVO). Zudem steht Ihnen ein Beschwerderecht bei einer
              Datenschutz-Aufsichtsbehörde zu.
            </p>
          </section>

          {/* ── Teil B — Ost-West Reisen GmbH ── */}
          <h2 className={partCls}>
            Teil B — Datenschutz der Ost-West Reisen GmbH (Reiseveranstalter)
          </h2>
          <p className="mt-3">
            Zur Buchung und Durchführung der von Ihnen gewünschten Reise geben
            wir die hierfür erforderlichen Daten an den Reiseveranstalter
            weiter. Dieser verarbeitet Ihre Daten als eigenständig
            Verantwortlicher zur Reisedurchführung, Vertragsabwicklung und
            Kundenbetreuung im Rahmen der gesetzlichen Bestimmungen.
          </p>
          <div className="mt-4">
            <p className="font-medium text-ink">Ost-West Reisen GmbH</p>
            <p className="mt-1">Grabenstraße 1, 47057 Duisburg</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
