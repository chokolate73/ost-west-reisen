import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AGB - Allgemeine Geschäftsbedingungen | Ost-West Reisen",
  description:
    "Allgemeine Geschäftsbedingungen (Reisebedingungen) der Ost-West Reisen GmbH.",
};

const sectionCls = "mt-10";
const h2Cls = "font-serif text-xl font-bold text-ink";
const olCls = "mt-3 list-decimal space-y-3 pl-5 marker:text-muted";
const subOlCls = "mt-2 list-[lower-alpha] space-y-2 pl-5 marker:text-muted";
const ulCls = "mt-2 list-disc space-y-1 pl-5 marker:text-muted";

export default function AgbPage() {
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
            Allgemeine Geschäftsbedingungen
          </h1>

          <section className={sectionCls}>
            <h2 className={h2Cls}>I. Abschluss des Reisevertrages</h2>
            <ol className={olCls}>
              <li>
                Die Reisebeschreibung im Katalog oder Internet (im Folgenden
                „Ausschreibung“; vgl. Ziffer XIV) ist kein Angebot im Rechtssinn,
                sondern geht den Vertragserklärungen voraus (invitatio ad
                offerendum). Die Anmeldung des Kunden stellt rechtlich das
                Angebot auf Abschluss eines Reisevertrages dar. An sein Angebot
                ist der Kunde bis zur Annahme in Form des nachfolgenden Absatzes
                2 durch die Ost-West Reisen GmbH (im Folgenden „Ost-West
                Reisen“), jedoch maximal 7 Tage ab Anmeldung gebunden.
              </li>
              <li>
                Der Reisevertrag kommt erst mit Zugang einer inhaltlich
                deckungsgleichen Reisebestätigung in Textform durch Ost-West
                Reisen zustande. Eine durch ein Computerreservierungssystem im
                Reisebüro erstellte Vormerkungs-, Anmeldungs- oder
                Optionsbestätigung ersetzt diese Reisebestätigung nicht.
              </li>
              <li>
                Reisebüros sind nicht bevollmächtigt, vom Inhalt der
                Ausschreibung, dieser Reisebedingungen oder der Reisebestätigung
                abweichende Zusicherungen oder Vereinbarungen vorzunehmen.
              </li>
            </ol>
          </section>

          <section className={sectionCls}>
            <h2 className={h2Cls}>II. Sonderfall Vermittlung</h2>
            <ol className={olCls}>
              <li>
                Vermittelt Ost-West Reisen ausdrücklich in fremdem Namen
                Reiseprogramme fremder Veranstalter oder einzelne Fremdleistungen
                wie Flüge, Mietwagen, Versicherungen etc. im Zusammenhang mit der
                Reise, so richten sich Zustandekommen und Inhalt solcher Verträge
                nach den einschlägigen gesetzlichen Bestimmungen und etwaigen
                Bedingungen des fremden Vertragspartners, soweit diese einbezogen
                wurden.
              </li>
              <li>
                Bei Vermittlung haftet Ost-West Reisen nur für die ordnungsgemäße
                Vermittlung, nicht für die vertragsgemäße Leistungserbringung im
                vermittelten Vertrag selbst.
              </li>
            </ol>
          </section>

          <section className={sectionCls}>
            <h2 className={h2Cls}>
              III. Datenschutz / Ausführendes Luftfahrtunternehmen
            </h2>
            <ol className={olCls}>
              <li>
                Ost-West Reisen erfasst und speichert Kundendaten ausschließlich
                zur Reisedurchführung, Vertragsabwicklung, Kundenbetreuung und zu
                Werbezwecken im Rahmen der Kundenpflege. Der Verwendung zu
                Werbezwecken kann der Kunde jederzeit widersprechen (§ 28 Abs. 4
                Bundesdatenschutzgesetz). Ebenso wie für die Ausübung der
                weiteren Rechte nach §§ 34, 35 Bundesdatenschutzgesetz genügt
                dazu eine kurze Mitteilung. Die Kontaktdaten finden Sie am Ende
                dieser Reisebedingungen.
              </li>
              <li>
                Die EU-Verordnung Nr. 2111/2005 vom 14.12.2005 verpflichtet
                Reiseveranstalter, Reisevermittler und Vermittler von
                Beförderungsverträgen, die Kunden über die Identität jeder
                ausführenden Fluggesellschaft vor der entsprechenden
                vertraglichen Flugbeförderungsleistung zu unterrichten, sobald
                diese feststeht. Soweit dies bei Anmeldung noch nicht der Fall
                ist, muss zunächst die wahrscheinlich ausführende
                Fluggesellschaft angegeben werden. Bei Wechsel der
                Fluggesellschaft nach erfolgter Anmeldung ist der Kunde
                unverzüglich zu unterrichten.
              </li>
            </ol>
          </section>

          <section className={sectionCls}>
            <h2 className={h2Cls}>IV. Vertragliche Leistungen</h2>
            <ol className={olCls}>
              <li>
                Die von Ost-West Reisen geschuldeten einzelnen vertraglichen
                Leistungen ergeben sich aus der Reisebestätigung (vgl. Ziffer I
                Abs. 2), ergänzt (im Rahmen der Vertragserklärung des Kunden)
                durch die zugrunde liegende Ausschreibung. Eventuelle besondere
                Vereinbarungen mit Ost-West Reisen, die aus Beweisgründen in
                Textform getroffen werden sollten, gelten vorrangig.
              </li>
              <li>
                Unternehmungen, die in den maßgeblichen Vertragsdokumenten als
                „Gelegenheit“, „Möglichkeit“ oder „Extratour“ bezeichnet werden,
                sind selbst nicht Bestandteil der geplanten vertraglichen
                Leistungen, evtl. mit ihnen verbundene Kosten sind nicht im
                Reisepreis enthalten.
              </li>
              <li>
                Soweit Ost-West Reisen gemäß den maßgeblichen Vertragsdokumenten
                die Beantragung von Visa oder ähnlichen Dokumenten übernimmt,
                erfolgt dies im Auftrag des Kunden (Geschäftsbesorgung). Die
                Erteilung von Visa selbst durch die zuständigen nationalen oder
                ausländischen Behörden ist nicht Bestandteil der
                Leistungsverpflichtung von Ost-West Reisen.
              </li>
              <li>
                Im Falle einer logistischen Unumgänglichkeit behält der
                Veranstalter es sich vor einen Teil der Reisestrecke per Zug,
                Transferbus zu organisieren.
              </li>
              <li>
                Die exakte Abfahrtszeit wird vom Veranstalter zwei Tage vor
                Abreise bekanntgegeben.
              </li>
            </ol>
          </section>

          <section className={sectionCls}>
            <h2 className={h2Cls}>V. Sicherungsschein / Anzahlung / Zahlung</h2>
            <ol className={olCls}>
              <li>
                Wenn Reiseleistungen infolge von Zahlungsunfähigkeit oder
                Insolvenz des Reiseveranstalters ausfallen, ist über den
                Sicherungsschein die Rückzahlung des gezahlten Reisepreises und
                (nach Reiseantritt) zusätzlich notwendiger Aufwendungen für die
                Rückreise abgesichert. Alle Zahlungen auf den Reisepreis sind nur
                bei Vorliegen des Sicherungsscheines zu leisten. Er findet sich
                auf der Rückseite des ersten Blattes der Reisebestätigung.
              </li>
              <li>
                Mit Zugang von Reisebestätigung und Sicherungsschein ist eine
                Anzahlung von 25 %, höchstens jedoch ein Betrag von 1500 € pro
                Reiseteilnehmer fällig. Der restliche Reisepreis wird am 30. Tag
                vor Reiseantritt (also nach Ablauf der Frist in Ziffer VIII Abs.
                1) bzw. bei späterer Buchung bei Erhalt der Reiseunterlagen
                fällig.
              </li>
              <li>
                Zeitgleich mit der Anzahlung sind die fälligen Prämien für
                vermittelte Versicherungen in voller Höhe auszugleichen.
              </li>
              <li>
                Ohne vollständige Zahlung des fälligen Reisepreises besteht kein
                Anspruch auf Erbringung der Reiseleistung durch Ost-West Reisen.
              </li>
              <li>
                Rücktrittsentschädigungen, Bearbeitungs- und Umbuchungsentgelte
                sind sofort fällig.
              </li>
            </ol>
          </section>

          <section className={sectionCls}>
            <h2 className={h2Cls}>VI. Preisänderung nach Vertragsschluss</h2>
            <ol className={olCls}>
              <li>
                Ost-West Reisen ist berechtigt, den bestätigten Reisepreis zu
                erhöhen, soweit die begehrte Erhöhung sich unmittelbar aus einer
                nach Vertragsschluss erfolgten
                <ol className={subOlCls}>
                  <li>
                    Änderung des Preises für die Beförderung von Personen
                    aufgrund höherer Kosten für Treibstoff oder andere
                    Energieträger
                  </li>
                  <li>
                    einer Änderung der Steuern und sonstigen Abgaben für
                    vereinbarte Reiseleistungen (Touristenabgaben; Hafen- oder
                    Flughafengebühren sowie Sicherheitsgebühren im Zusammenhang
                    mit der Beförderung; Einreise-, Aufenthalts- und
                    öffentlich-rechtliche Eintrittsgebühren)
                  </li>
                  <li>
                    oder der Änderung der für die betreffende Pauschalreise
                    geltenden Wechselkurse ergibt.
                  </li>
                </ol>
                <p className="mt-2">
                  Bei Verträgen, die ab dem 1.7.2018 geschlossen werden, kann der
                  Kunde eine Senkung des Reisepreises und Berechnung des neuen
                  Reisepreises nach dem folgenden Absatz 2 verlangen, soweit eine
                  begehrte Senkung sich unmittelbar aus einer nach
                  Vertragsschluss erfolgten Änderung der in Absatz 1 aufgeführten
                  Positionen ergibt und dies zu niedrigeren Kosten für Ost-West
                  Reisen führt. Soweit für Ost-West Reisen dadurch
                  Verwaltungskosten entstehen, können diese in tatsächlich
                  entstandener Höhe vom errechneten Ermäßigungs- bzw.
                  Erstattungsbetrag abgezogen werden, sie sind auf Verlangen des
                  Kunden nachzuweisen.
                </p>
              </li>
              <li>
                Der Reisepreis wird maximal um den Betrag verändert, der sich bei
                Addition der Änderungsbeträge der in Abs. 1 genannten
                Kostenbestandteile ergibt. Soweit einschlägige Änderungen die
                Reisegruppe als Gesamtheit betreffen, werden sie zunächst pro
                Kopf umgelegt. Zur Ermittlung des Umlagebetrages wird – je
                nachdem, was für die Kunden günstiger ist – entweder die konkret
                erwartete oder die ursprünglich kalkulierte durchschnittliche
                Teilnehmerzahl zugrunde gelegt. Auf Anforderung ist Ost-West
                Reisen verpflichtet, dem Kunden entsprechende Nachweise zu
                übermitteln.
              </li>
              <li>
                Ost-West Reisen muss dem Kunden eine begehrte Preiserhöhung
                unverzüglich nach Kenntnis des Erhöhungsgrundes, spätestens
                jedoch am 21. Tag vor Reisebeginn auf einem dauerhaften
                Datenträger klar und verständlich unter Mitteilung der Berechnung
                mitteilen. Bei Verträgen, die vor dem 1.7.2018 geschlossen
                wurden, muss zusätzlich ein Zeitraum von mehr als vier Monaten
                zwischen Vertragsschluss und Beginn der Reise liegen.
              </li>
              <li>
                Erhöht sich der Reisepreis um mehr als 5 %, ist der Kunde
                berechtigt, ohne Zahlung einer Entschädigung vom Vertrag
                zurückzutreten. Stattdessen kann er bei vor dem 1.7.2018
                geschlossenen Verträgen sein Recht gemäß § 651 a Abs. 4 Satz 3
                BGB (Ersatzreise) geltend machen. Der Rücktritt oder das
                Verlangen einer Ersatzreise müssen unverzüglich gegenüber
                Ost-West Reisen oder dem vermittelnden Reisebüro erklärt werden.
              </li>
            </ol>
          </section>

          <section className={sectionCls}>
            <h2 className={h2Cls}>
              VII. Rücktritt des Kunden / Umbuchung / Zusatzkosten
            </h2>
            <ol className={olCls}>
              <li>
                Bei Rücktritt des Kunden vor Reisebeginn (Storno) hat Ost-West
                Reisen bis zum Versand der Stornorechnung ein Wahlrecht zwischen
                der konkret ermittelten angemessenen Entschädigung (§ 651 i Abs.
                2 BGB bzw. – ab 1.7.2018 – § 651 h Abs. 2 BGB) und der
                nachstehenden pauschalierten Entschädigung. Die einmal getroffene
                Wahl kann Ost-West Reisen nur mit Einverständnis des Kunden
                ändern. Wählt Ost-West Reisen die pauschalierte Entschädigung, so
                gilt für die Abrechnung Folgendes:
                <h3 className="mt-4 font-semibold text-ink">
                  A. Busreisen, Bahnreisen und nur Hotel
                </h3>
                <ul className={ulCls}>
                  <li>bis inkl. 30. Tag vor Reisebeginn 25 % des Reisepreises</li>
                  <li>
                    ab 30. bis inkl. 15. Tag vor Reisebeginn 35 % des
                    Reisepreises
                  </li>
                  <li>
                    ab 14. bis inkl. 8. Tag vor Reisebeginn 50 % des Reisepreises
                  </li>
                  <li>
                    ab 7. bis inkl. 1. Tag vor Reisebeginn 85 % des Reisepreises
                  </li>
                  <li>bei Nichtantritt 90 % des Reisepreises</li>
                </ul>
                <h3 className="mt-4 font-semibold text-ink">B. Flugreisen</h3>
                <ul className={ulCls}>
                  <li>
                    bis 30 Tage vor Reisebeginn 50 % des Reisepreises (mind. 250 €
                    p. P.)
                  </li>
                  <li>
                    ab 29. Tag bis inkl. 9. Tag vor Reisebeginn 75 % des
                    Reisepreises
                  </li>
                  <li>ab 8. Tag bis Nichtantritt 90 % des Reisepreises</li>
                </ul>
                <p className="mt-3">
                  Bei Pauschalreisen mit Low-Cost-Flügen oder mit nicht
                  erstattbaren Zimmertarifen im Hotel – 90 % des Reisepreises ab
                  Buchungstag.
                </p>
                <p className="mt-3">
                  Die Berechnung des Entschädigungsbetrags erfolgt dabei
                  entsprechend dem Zeitpunkt des Zugangs der Rücktrittserklärung
                  und prozentual aus dem Gesamtreisepreis des betroffenen Kunden.
                  Dem Kunden bleibt freigestellt, nachzuweisen, dass kein oder
                  ein wesentlich geringerer Entschädigungsanspruch als die
                  geforderte Pauschale entstanden ist. Bei ab 1.7.2018
                  geschlossenen Verträgen ist der Reiseveranstalter auf Verlangen
                  des Reisenden unabhängig von der gewählten Abrechnungsart
                  verpflichtet, die Höhe der Entschädigung zu begründen. Bei
                  Auftreten unvermeidbarer, außergewöhnlicher Umstände am
                  Bestimmungsort oder in dessen unmittelbarer Nähe kann der
                  Anspruch auf eine angemessene Entschädigung gemäß des dann
                  geltenden § 651 h Abs. 3 BGB neuer Fassung auch ganz entfallen.
                </p>
              </li>
              <li>
                Umbuchungen (z. B. von Reisetermin, Reiseziel, Unterkunft,
                Beförderungs- oder Tarifart, bei Flugreisen auch der
                Buchungsklasse und der Flugverbindungen) sind grundsätzlich nur
                durch Rücktritt vom Reisevertrag (Storno) zu den in Abs. 1
                genannten Bedingungen (Rücktrittsentschädigung) und parallele
                Neuanmeldung möglich. Voraussetzung jeder Umbuchung ist die
                Verfügbarkeit der Leistung. Ändert sich bei Bus- und Bahnreisen
                lediglich der Abreiseort, werden bis zum 8. Tag vor Reisebeginn
                neben dem neu berechneten Reisepreis zusätzlich lediglich 25 €
                pro Person in Rechnung gestellt.
              </li>
              <li>
                Fallen durch vom Kunden zu vertretende Umstände ohne mitwirkendes
                Verschulden durch Ost-West Reisen bei der Vorbereitung oder
                Durchführung der Reise zusätzliche Kosten für Vertragsleistungen
                an (z. B. wegen einer erforderlichen kostenpflichtigen
                Flugreservierungs-/Ticketänderung bei fehlerhaften Namensangaben
                des Kunden), kann Ost-West Reisen verlangen, dass der Kunde diese
                ersetzt.
              </li>
              <li>
                Zahlungspflicht und Fälligkeit hinsichtlich der
                Rücktrittsentschädigung sind unabhängig von Erstattungspflichten
                durch eine Reiserücktritt-Versicherung, vgl. Ziffer V Abs.
              </li>
              <li>
                Die Pflicht zur Zahlung der Versicherungsprämie wird vom
                Rücktritt nicht berührt.
              </li>
            </ol>
          </section>

          <section className={sectionCls}>
            <h2 className={h2Cls}>VIII. Absagevorbehalt bei Mindestteilnehmerzahl</h2>
            <ol className={olCls}>
              <li>
                Wird eine in der Ausschreibung oder im sonstigen Inhalt des
                Reisevertrages festgelegte Mindestteilnehmerzahl nicht erreicht,
                so kann Ost-West Reisen bis spätestens am 21. Tag vor Reisebeginn
                vom Reisevertrag zurücktreten.
              </li>
              <li>
                In diesem Fall kann der Kunde die Teilnahme an einer anderen von
                Ost-West Reisen ausgeschriebenen Reise verlangen, sofern Ost-West
                Reisen in der Lage ist, diese ohne Mehrpreis bereitzustellen.
              </li>
              <li>
                Die bei der Reise festgelegte Mindestteilnehmerzahl gilt auch für
                zusätzlich buchbare Ausflüge.
              </li>
            </ol>
          </section>

          <section className={sectionCls}>
            <h2 className={h2Cls}>IX. Kündigung wegen besonderer Umstände</h2>
            <ol className={olCls}>
              <li>
                Wird die Reise durch höhere Gewalt, die bei Vertragsschluss nicht
                vorhersehbar war, erheblich erschwert, gefährdet oder
                beeinträchtigt, so können sowohl der Kunde als auch Ost-West
                Reisen bei vor dem 1.7.2018 geschlossenen Reiseverträgen den
                Reisevertrag kündigen. Die gegenseitigen Rechte und Pflichten bei
                einer solchen Kündigung ergeben sich aus den bis einschließlich
                30.6.2018 geltenden gesetzlichen Vorschriften.
              </li>
              <li>
                Ost-West Reisen kann aus ansonsten gegebenem wichtigem Grund vor
                Reiseantritt und während der Reise jederzeit den Reisevertrag
                unter Beachtung der gesetzlichen Bestimmungen (nach deutschem
                Recht § 314 BGB) kündigen. Ein wichtiger Grund kann insbesondere
                vorliegen, wenn der Reiseablauf vom Kunden nachhaltig gestört
                oder gefährdet wird und dem auch nach Abmahnung nicht abgeholfen
                wird oder nicht abgeholfen werden kann.
              </li>
              <li>
                Zum Kündigungsausspruch durch Ost-West Reisen gilt Ziffer XII
                Abs. 2.
              </li>
            </ol>
          </section>

          <section className={sectionCls}>
            <h2 className={h2Cls}>X. Haftung von Ost-West Reisen</h2>
            <ol className={olCls}>
              <li>
                Die vertragliche Haftung von Ost-West Reisen für Schäden, die
                nicht Körperschäden sind, ist für vor dem 1.7.2018 geschlossene
                Verträge auf den dreifachen Reisepreis beschränkt, soweit a) ein
                Schaden weder grob fahrlässig noch vorsätzlich herbeigeführt wird
                oder b) Ost-West Reisen für einen Schaden allein wegen
                Verschuldens eines Leistungsträgers verantwortlich ist. Bei
                danach geschlossenen Verträgen ist die vertragliche Haftung von
                Ost-West Reisen für Schäden, die nicht Körperschäden sind, auf
                den dreifachen Reisepreis beschränkt, soweit ein Schaden nicht
                schuldhaft von Ost-West Reisen herbeigeführt wurde.
              </li>
              <li>
                Die Haftung von Ost-West Reisen auf Schadensersatz aus unerlaubter
                Handlung wird, soweit diese nicht auf Vorsatz oder grober
                Fahrlässigkeit beruht, für Schäden, die nicht Körperschäden sind,
                auf den dreifachen Reisepreis des Kunden beschränkt. Für Schäden
                bis 3000 € haftet Ost-West Reisen insoweit unbeschränkt.
              </li>
              <li>
                Weitere Haftungsbeschränkungen können sich (nach deutschem Recht
                gemäß § 651 h Abs. 2 BGB bzw. – ab 1.7.2018 – § 651p BGB) aus
                internationalen Übereinkommen oder auf solchen beruhenden
                gesetzlichen Vorschriften ergeben.
              </li>
              <li>
                Soweit sich aus rechtlichen Regelungen zwingend weitergehende
                Ansprüche des Kunden gegenüber Ost-West Reisen ergeben, bleiben
                diese von den Haftungsbeschränkungen der Absätze 1 und 2
                unberührt.
              </li>
            </ol>
          </section>

          <section className={sectionCls}>
            <h2 className={h2Cls}>
              XI. Obliegenheit und Rechte des Reisenden bei mangelhafter Reise
            </h2>
            <ol className={olCls}>
              <li>
                Wird die Reise nicht vertragsgerecht erbracht, so kann der Kunde
                Abhilfe verlangen. Ost-West Reisen kann diese verweigern, wenn sie
                unverhältnismäßigen Aufwand erfordert.
              </li>
              <li>
                Leistet Ost-West Reisen nicht innerhalb einer vom Kunden
                bestimmten angemessenen Frist Abhilfe, kann dieser selbst Abhilfe
                schaffen und Ersatz für erforderliche Aufwendungen verlangen. Die
                Fristsetzung ist unnötig, wenn Ost-West Reisen Abhilfe verweigert
                oder sofortige Abhilfe durch ein besonderes Interesse des Kunden
                geboten ist.
              </li>
              <li>
                Für die Dauer einer nicht vertragsgemäßen Leistung kann der Kunde
                einen Anspruch auf Herabsetzung des Reisepreises (Minderung)
                geltend machen. Der Anspruch entfällt, soweit der Kunde schuldhaft
                den Mangel nicht anzeigt.
              </li>
              <li>
                Ist infolge eines Mangels dem Kunden die Reise oder ihre
                Fortsetzung aus wichtigem Grund nicht zumutbar oder ist sie durch
                einen Mangel erheblich beeinträchtigt, kann der Kunde im Rahmen
                der gesetzlichen Bestimmungen den Reisevertrag kündigen. Zuvor hat
                er eine angemessene Frist zur Abhilfe zu setzen. Die Fristsetzung
                ist unnötig, wenn Abhilfe unmöglich ist, von Ost-West Reisen
                verweigert wird oder die sofortige Kündigung des Vertrages durch
                ein besonderes Interesse des Kunden gerechtfertigt ist.
              </li>
            </ol>
          </section>

          <section className={sectionCls}>
            <h2 className={h2Cls}>XII. Rechte und Pflichten der Reiseleitung</h2>
            <ol className={olCls}>
              <li>
                Reiseleitungen und/oder örtliche Vertretungen sind beauftragt,
                während der Reise Mängelanzeigen und Abhilfeverlangen
                entgegenzunehmen und für Abhilfe zu sorgen, sofern diese möglich
                und erforderlich ist. Sie sind nicht befugt oder bevollmächtigt,
                Ansprüche auf Minderung oder Schadensersatz mit Wirkung gegen
                Ost-West Reisen anzuerkennen oder entgegenzunehmen.
              </li>
              <li>
                Die Kündigung des Reisevertrages durch Ost-West Reisen (vgl.
                insbesondere Ziffer IX) kann auch durch die Reiseleitung und/oder
                örtliche Vertretung ausgesprochen werden; diese sind insoweit von
                Ost-West Reisen bevollmächtigt.
              </li>
            </ol>
          </section>

          <section className={sectionCls}>
            <h2 className={h2Cls}>
              XIII. Anspruchstellung / Ausschlussfrist / Verjährung
            </h2>
            <ol className={olCls}>
              <li>
                Vertragliche Ansprüche wegen nicht vertragsgerechter Erbringung
                von Reiseleistungen nach §§ 651 c bis 651 f BGB muss der Kunde bei
                vor dem 1.7.2018 geschlossenen Verträgen innerhalb eines Monats
                nach der vertraglich vorgesehenen Beendigung der Reise Ost-West
                Reisen gegenüber geltend machen (siehe hierzu die Kontaktdaten am
                Ende dieser Reisebedingungen). Nur bei unverschuldeter
                Fristversäumung ist eine Geltendmachung von Ansprüchen nach
                Fristablauf möglich.
              </li>
              <li>
                Vertragliche Ansprüche wegen nicht vertragsgerechter Erbringung
                von Reiseleistungen des Kunden verjähren in zwei Jahren. Die
                Verjährung beginnt mit dem Tag, an dem die Reise dem Vertrag nach
                enden sollte.
              </li>
            </ol>
          </section>

          <section className={sectionCls}>
            <h2 className={h2Cls}>XIV. Sonstiges</h2>
            <p className="mt-3">
              Ergänzend gelten die gesetzlichen Bestimmungen für von Ost-West
              Reisen veranstaltete Reisen, also insbesondere die §§ 651 a ff. des
              Bürgerlichen Gesetzbuches (BGB), soweit für den Vertrag deutsches
              Recht anwendbar ist.
            </p>
          </section>

          <div className="mt-12 border-t border-slate-200 pt-8">
            <p className="font-semibold text-ink">Ost-West Reisen GmbH</p>
            <p className="mt-2">Köhnenstr. 1, 47057 Duisburg</p>
            <p>Telefon 0049 203 / 29888-0</p>
            <p>Telefax 0049 0203 / 29888-63</p>
            <p>
              E-Mail:{" "}
              <a
                href="mailto:reise@ost-prospekt.de"
                className="text-brand-600 hover:text-brand-700"
              >
                reise@ost-prospekt.de
              </a>
            </p>
            <div className="mt-4 space-y-1">
              <p>Handelsregister Duisburg HRB 19897</p>
              <p>St.-Nr.: 109-5928-1364</p>
              <p>USt.-ID: DE252620367</p>
              <p>IBAN: DE25350800700242577400</p>
              <p>BIC: DRESDEFF 350</p>
              <p>Geschäftsführer: Vadym Coldshmidt</p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className={h2Cls}>Außergerichtliche Streitbeilegung</h2>
            <p className="mt-3">
              Ost-West Reisen ist derzeit gesetzlich nicht verpflichtet, an
              außergerichtlichen Streitbeilegungsverfahren teilzunehmen, und
              behält sich die Entscheidung über eine freiwillige Teilnahme an
              einem solchen Verfahren im Einzelfall vor. Nach den gesetzlichen
              Vorschriften ist jedoch trotzdem der Link auf die Plattform der
              EU-Kommission zur Online-Streitbeilegung anzugeben:{" "}
              <a
                href="https://ec.europa.eu/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:text-brand-700"
              >
                http://ec.europa.eu/odr
              </a>
              . Abdruck und digitale Übernahme der Inhalte – auch auszugsweise –,
              insbesondere von Fotos und Bildmaterial, bedürfen der
              ausdrücklichen Genehmigung der Ost-West Reisen GmbH, da hierbei ggf.
              auch fremde Rechte verletzt werden könnten.
            </p>
          </div>

          <p className="mt-10 text-sm text-muted">
            Stand: 01.07.2018 – Allgemeine Reisebedingungen
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
