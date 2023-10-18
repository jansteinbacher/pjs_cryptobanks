import Bafin from '../../../images/courseExpert/bafin.png';
import CryptoCustodyRegulationSources from './CryptoCustodyRegulationSources';

function CryptoCustodyRegulationPart1() {
  const isComingFromPreviousPage =
    window.location.search.includes('from=expert-course');

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Regulatorik zu Kryptoverwahrung
      </h1>

      {isComingFromPreviousPage && (
        <div className="p-4 mb-12 bg-green-200 rounded-lg">
          <p className=" italic text-justify">
            Da Tobias mehr zu der Regulatorik zur Verwahrung von Kryptoassets
            herausfinden möchte, recherchiert er im Internet und trifft auf die
            Informationsseite der BaFin. Da er sich nicht sicher ist, welcher
            Artikel für ihn relevant ist entschließt er sich eine eine Mail mit
            seinen Anliegen an die auf der Webseite angegenene Adresse
            abzusenden. Am Folgetag erhält in der Antwort folgende
            Informationen:
          </p>
        </div>
      )}
      <div className="flex justify-center items-center mb-8">
        <img src={Bafin} alt="Bafin Logo" className="w-full md:w-1/2" />
      </div>

      <p className="mb-8">
        Das Kryptoverwahrgeschäft bezieht sich auf eine Finanzdienstleistung,
        bei der es um die sichere Aufbewahrung, Verwaltung und Sicherung von
        Kryptowerten und den zugehörigen privaten kryptografischen Schlüsseln
        geht. Dieser Service wird in der Regel von spezialisierten Unternehmen,
        oft als &ldquo;Krypto-Wallet-Anbieter&rdquo; oder
        &ldquo;Krypto-Custodians&rdquo; bezeichnet, angeboten.
      </p>

      <p className="mb-8">
        Das Kryptoverwahrgeschäft wird nach § 1 Abs. 1a Satz 2 Nr. 6 des
        Gesetzes über das Kreditwesen (Kreditwesengesetz - KWG) definiert als:
      </p>

      <p className="mb-8">
        “Die jeweils für andere erbrachte Verwahrung, Verwaltung und Sicherung
        von Kryptowerten oder privaten kryptografischen Schlüsseln, die dazu
        dienen, Kryptowerte zu halten, zu speichern oder darüber zu verfügen,
        für andere oder Sicherung von privaten kryptografischen Schlüsseln, die
        dazu dienen, für andere Kryptowertpapiere zu halten”{' '}
        <a href="#sources">[1]</a>.
      </p>

      <p className="mb-8">
        Tatsächlich stellt die Bilanzierung von Kryptoassets für Banken und
        Finanzinstitute eine komplexe Herausforderung dar, da die bestehenden
        IFRS-Standards nicht explizit auf diese Art von Vermögenswerten
        zugeschnitten sind. Hier sind einige Punkte, beachtet werden sollten{' '}
        <a href="#sources">[2]</a> :
      </p>

      <p className="mb-8">
        <strong className="text-bold">Anwendbare IFRS-Standards: </strong>
        Kryptoassets könnten je nach den spezifischen Eigenschaften als
        immaterielle Vermögenswerte oder Vorräte behandelt werden, was zu einer
        Bilanzierung nach IAS 38 (Immaterielle Vermögenswerte) oder IAS 2
        (Vorräte) führen könnte.
      </p>

      <p className="mb-8">
        <strong className="text-bold">Separierungskritierien: </strong>
        Da Kryptoassets digital sind und oft von verschiedenen Nutzern oder
        Kunden verwahrt werden, ist die Abgrenzung zwischen eigenen
        Vermögenswerten und fremden Vermögenswerten eine entscheidende
        Herausforderung. Hierbei müssen rechtlich-ökonomische und
        technisch-digitale Kriterien entwickelt werden, um sicherzustellen, dass
        die Bilanzierung korrekt erfolgt.
      </p>

      <p className="mb-8">
        <strong className="text-bold">Bewertung: </strong>
        Die Bewertung von Kryptoassets ist ebenfalls kompliziert, da der Markt
        oft volatil ist und es keine etablierten Preise gibt. Eine angemessene
        Bewertung muss unter Berücksichtigung der Marktbedingungen und anderer
        relevanter Faktoren vorgenommen werden.
      </p>

      <p className="mb-8">
        <strong className="text-bold">Offenlegung: </strong>
        IFRS erfordern umfassende Offenlegungen, insbesondere bei komplexen oder
        ungewöhnlichen Transaktionen. Banken müssen daher klare Angaben zur
        Bilanzierung und Bewertung von Kryptoassets in ihren Finanzausweisen
        machen.
      </p>

      <p className="mb-8">
        <strong className="text-bold">Weiterentwicklung: </strong>
        Da die Welt der Kryptoassets sich schnell entwickelt, könnten zukünftig
        spezifische IFRS-Standards oder -Leitlinien entwickelt werden, um die
        Bilanzierung dieser Vermögenswerte genauer zu regeln.
      </p>

      <p className="mb-8">
        Die Definition von Kryptowerten im Rahmen des Kreditwesengesetzes (KWG)
        umfasst digitale Darstellungen von Werten, die nicht von Zentralbanken
        emittiert oder garantiert werden, jedoch von natürlichen oder
        juristischen Personen als Tauschmittel akzeptiert werden können.
        Kryptoassets können je nach ihrer Ausgestaltung verschiedenen
        Finanzinstrumentenkategorien zugeordnet werden, was die rechtliche und
        bilanzielle Klassifikation komplex gestaltet. Die Definition von
        Kryptowerten schließt gesetzliche Zahlungsmittel und E-Geld aus, umfasst
        jedoch Tausch- und Investment-Token, um verschiedene Typen von
        Krypto-Assets zu berücksichtigen. Aufgrund der technologischen Vielfalt
        und vielseitigen Funktionen dieser Vermögenswerte erfordert ihre
        rechtliche Abgrenzung besondere Aufmerksamkeit. Die Definition reagiert
        auf die dynamische Entwicklung von Kryptoassets und ihre zunehmende
        Bedeutung als potenzielle Finanzinstrumente. Banken müssen die
        Definition berücksichtigen, um ihre Rechnungslegung und Bilanzierung
        korrekt zu handhaben und den rechtlichen Anforderungen gerecht zu werden{' '}
        <a href="#sources">[3]</a>.
      </p>

      <CryptoCustodyRegulationSources />
    </div>
  );
}

export default CryptoCustodyRegulationPart1;
