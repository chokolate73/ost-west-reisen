import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Ost-West Reisen",
  description: "Datenschutzerklärung der Ost-West Reisen GmbH.",
};

const h2Cls = "font-serif text-xl font-bold text-ink";

export default function DatenschutzPage() {
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
            Datenschutzerklärung
          </h1>

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
            verpflichtet sind. Wir weisen jedoch darauf hin, dass es bei der
            Übermittlung von Daten im Internet immer dazu kommen kann, dass
            Dritte Ihre Daten zur Kenntnis nehmen oder verfälschen. Sofern Sie es
            von uns verlangen, gewähren wir Ihnen Einblick in die über Sie
            gespeicherten Daten, beziehungsweise löschen diese. Wenn Sie Daten
            berichtigen, löschen oder einsehen wollen, genügt hierfür ein
            Schreiben an die im Impressum angegebene Adresse. Im Rahmen der
            Benachrichtigung unserer Kunden über Produktneuheiten, etc. senden
            wir Ihnen E-Mails nur zu, sofern Sie uns Ihre E-Mail-Adresse zur
            Verfügung stellen.
          </p>

          <section className="mt-10">
            <h2 className={h2Cls}>Verwendung von Google Analytics</h2>
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
              vollumfänglich nutzen können. Durch die Nutzung dieser Website
              erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten
              durch Google in der zuvor beschriebenen Art und Weise und zu dem
              zuvor benannten Zweck einverstanden. Der Erhebung und Nutzung Ihrer
              IP-Adresse durch Google Analytics können Sie jederzeit mit Wirkung
              für die Zukunft widersprechen. Nähere Informationen hierzu finden
              Sie unter Browser-Add-on zur Deaktivierung von Google Analytics.
            </p>
          </section>

          <section className="mt-10">
            <h2 className={h2Cls}>Verwendung von Facebook Social Plugins</h2>
            <p className="mt-3">
              Unser Internetauftritt verwendet Social Plugins („Plugins“) des
              sozialen Netzwerkes facebook.com, welches von der Facebook Inc.,
              1601 S. California Ave, Palo Alto, CA 94304, USA betrieben wird
              („Facebook“). Die Plugins sind an einem der Facebook Logos erkennbar
              (weißes „f“ auf blauer Kachel oder ein „Daumen hoch“-Zeichen) oder
              sind mit dem Zusatz „Facebook Social Plugin“ gekennzeichnet. Die
              Liste und das Aussehen der Facebook Social Plugins kann hier
              eingesehen werden. Wenn Sie eine Webseite unseres Internetauftritts
              aufrufen, die ein solches Plugin enthält, baut Ihr Browser eine
              direkte Verbindung mit den Servern von Facebook auf. Der Inhalt des
              Plugins wird von Facebook direkt an Ihren Browser übermittelt und
              von diesem in die Webseite eingebunden. Wir haben daher keinen
              Einfluss auf den Umfang der Daten, die Facebook mit Hilfe dieses
              Plugins erhebt und informieren Sie daher entsprechend unserem
              Kenntnisstand: Durch die Einbindung der Plugins erhält Facebook die
              Information, dass Sie die entsprechende Seite unseres
              Internetauftritts aufgerufen haben. Sind Sie bei Facebook
              eingeloggt, kann Facebook den Besuch Ihrem Facebook-Konto zuordnen.
              Wenn Sie mit den Plugins interagieren, zum Beispiel den Like Button
              betätigen oder einen Kommentar abgeben, wird die entsprechende
              Information von Ihrem Browser direkt an Facebook übermittelt und
              dort gespeichert. Falls Sie kein Mitglied von Facebook sind,
              besteht trotzdem die Möglichkeit, dass Facebook Ihre IP-Adresse in
              Erfahrung bringt und speichert. Zweck und Umfang der Datenerhebung
              und die weitere Verarbeitung und Nutzung der Daten durch Facebook
              sowie Ihre diesbezüglichen Rechte und Einstellungsmöglichkeiten zum
              Schutz Ihrer Privatssphäre entnehmen Sie bitte den
              Datenschutzhinweisen von Facebook. Wenn Sie Facebookmitglied sind
              und nicht möchten, dass Facebook über unseren Internetauftritt
              Daten über Sie sammelt und mit Ihren bei Facebook gespeicherten
              Mitgliedsdaten verknüpft, müssen Sie sich vor Ihrem Besuch unseres
              Internetauftritts bei Facebook ausloggen.
            </p>
            <p className="mt-3">
              Ebenfalls ist es möglich Facebook-Social-Plugins mit Add-ons für
              Ihren Browser zu blocken, zum Beispiel mit dem „Facebook Blocker“.
            </p>
          </section>

          <section className="mt-10">
            <h2 className={h2Cls}>Cookies</h2>
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
        </div>
      </main>
      <Footer />
    </>
  );
}
