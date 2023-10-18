import Safekeeping from '../../../images/courseAdvanced/cryptoassetSafekeeping.jpg';
import CryptoAssetServicesSources from './CryptoAssetServicesSources';

function CryptoAssetServicesPart4() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-courses',
  );

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Kryptoasset-Verwahrung
      </h2>
      {isComingFromPreviousPage && (
        <div className="p-4 mb-12 bg-green-200 rounded-lg">
          <p className=" italic text-justify">
            Simone hat nun eine Menge Informationen über den Erwerb von Tokens
            und Coins sowie die Funktion der Registerführung bei
            Kryptowertpapieren erhalten. Auf dieser Grundlage tauchen bei ihr
            Fragen auf, wie genau eigentlich die Verwahrung von Kryptoassets
            abläuft. In ihrer Bank haben Kunden die Option, Schließfächer,
            Bankkonten oder Wertpapierdepots zu nutzen, doch wie dies für
            Kryptoassets funktioniert, stellt für sie noch ein Rätsel dar.
            Glücklicherweise stößt sie beim nächsten Stand auf eine Lösung. Die
            Aussteller erklären Simone ihre Krypto-Dienstleistung zur Verwahrung
            von Tokens.
          </p>
        </div>
      )}
      <div className="flex justify-center items-center">
        <img
          src={Safekeeping}
          alt="Crypto Assets Safekeeping"
          className="w-full md:w-1/2"
        />
      </div>
      <div className="flex items-center justify-center mb-12">
        <a
          className="font-semibold text-sm"
          href="https://pixabay.com/de/illustrations/tresor-safe-sicherheit-wohlstand-1904759/"
        >
          Pixabay
        </a>
      </div>

      <p className="mb-8">
        Bei der Token-Verwahrung handelt es sich genauer gesagt, um die
        Aufbewahrung des kryptographischen Schlüssel, der als Zugang zu den
        Kryptoassets dient. Dadurch kann auf die gekauften Kryptowährungen,
        Token sowie Kryptowertpapiere zugegriffen werden. Die Dienstleistung ist
        aktuell durch die im Kreditwesengesetz (KWG) <a href="#sources">[6]</a>{' '}
        geregelte Kryptoverwahrung reguliert. Dadurch bietet die Bank einen
        beaufsichtigten Zugang zu den Kryptoassets. Zusätzlich bietet die Bank
        eine Verknüpfung zu regulierten und lizensierten Handelspartner für
        Kryptowährungen <a href="#sources">[7]</a>
      </p>

      <CryptoAssetServicesSources />
    </div>
  );
}

export default CryptoAssetServicesPart4;
