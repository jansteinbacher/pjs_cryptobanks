import Safekeeping from '../../../images/courseAdvanced/cryptoassetSafekeeping.jpg';
import CryptoAssetServicesSources from './CryptoAssetServicesSources';
import { StoryBoxSimone } from '../../StoryBox';

function CryptoAssetServicesPart4() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course',
  );

  const simoneStory = [
    'Simone hat nun eine Menge Informationen über den Erwerb von Tokens und Coins sowie die Funktion der Registerführung bei Kryptowertpapieren erhalten. Auf dieser Grundlage tauchen bei ihr Fragen auf, wie genau eigentlich die Verwahrung von Kryptoassets abläuft.',
    'In ihrer Bank haben Kunden die Option, Schließfächer, Bankkonten oder Wertpapierdepots zu nutzen, doch wie dies für Kryptoassets funktioniert, stellt für sie noch ein Rätsel dar. Glücklicherweise stößt sie beim nächsten Stand auf eine Lösung. Die Aussteller erklären Simone ihre Krypto-Dienstleistung zur Verwahrung von Tokens.',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Kryptoasset-Verwahrung
      </h2>
      {isComingFromPreviousPage && <StoryBoxSimone paragraphs={simoneStory} />}
      <div className="flex justify-center items-center mb-12">
        <img
          src={Safekeeping}
          alt="Crypto Assets Safekeeping"
          className="w-full md:w-1/2"
        />
      </div>

      <p className="mb-4">
        Bei der Token-Verwahrung handelt es sich genauer gesagt, um die{' '}
        <strong>Aufbewahrung des kryptographischen Schlüssel</strong>, der als
        Zugang zu den Kryptoassets dient. Dadurch kann auf die gekauften
        Kryptowährungen, Token sowie Kryptowertpapiere zugegriffen werden.
      </p>
      <p className="mb-12">
        Die Dienstleistung ist aktuell durch die im{' '}
        <strong>
          Kreditwesengesetz (KWG) <a href="#sources">[6]</a> geregelte
          Kryptoverwahrung
        </strong>{' '}
        reguliert. Dadurch bietet die Bank einen{' '}
        <strong>beaufsichtigten Zugang</strong> zu den Kryptoassets. Zusätzlich
        bietet die Bank eine Verknüpfung zu <strong>regulierten</strong> und{' '}
        <strong>lizensierten Handelspartner für Kryptowährungen</strong>{' '}
        <a href="#sources">[7]</a>
      </p>

      <CryptoAssetServicesSources />
    </div>
  );
}

export default CryptoAssetServicesPart4;
