import CryptoSet from '../../../images/courseAdvanced/cryptoSet.jpg';
import CryptoAssetServicesSources from './CryptoAssetServicesSources';
import { StoryBoxSimone } from '../../StoryBox';

/**
 * Component representing the first part of the Crypto Asset Services module.
 * It discusses potential crypto services with a focus on crypto trading.
 * It includes a story about Simone and references external sources.
 */

function CryptoAssetServicesPart1() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course',
  );

  const simoneStoryPart1 = [
    'Simone, die über ein umfassendes regulatorisches Wissen verfügt, interessiert sich dafür, welche möglichen Einsatzmöglichkeiten von Kryptoassets im Bereich des Bankwesens denkbar sind. Durch eine Unterhaltung mit ihrer Freundin erfährt sie von der bevorstehenden Digital Asset Conference in Frankfurt, auf der sie hoffentlich Antworten auf ihre Frage finden kann.',
    'Fasziniert von dieser Idee, entschließt sich Simone dazu, zwei Wochen später an dieser Konferenz teilzunehmen.Nach ihrer Ankunft auf der Konferenz entdeckt sie zahlreiche Stände verschiedener Unternehmen. Mit wachsender Begeisterung nähert sich Simone Stand um Stand, während die Mitarbeiter der Unternehmen ihr ihre jeweiligen Krypto-Dienstleistungen erläutern.',
    'Nach ihrer Ankunft auf der Konferenz entdeckt sie zahlreiche Stände verschiedener Unternehmen. Mit wachsender Begeisterung nähert sich Simone Stand um Stand, während die Mitarbeiter der Unternehmen ihr ihre jeweiligen Krypto-Dienstleistungen erläutern.',
  ];

  const simoneStoryPart2 = [
    'Am ersten Stand präsentieren die Aussteller Simone den Krypto-Handel, der es Investoren ermöglicht, Kryptowährungen mühelos zu erwerben und zu veräußern. Dies erinnert Simone an ein vergangenes Projekt, bei dem sie aktiv an der Integration von Kauf- und Verkaufsoptionen für ETFs in einer Online-Banking-App beteiligt war. Gespannt verfolgt sie aufmerksam die Ausführungen der Unternehmensvertreter.',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Potenzielle Krypto-Dienstleistungen
      </h1>
      {isComingFromPreviousPage && (
        <StoryBoxSimone paragraphs={simoneStoryPart1} />
      )}
      <h2 className="text-2xl font-semibold text-gray-800 mb-12">
        Handel mit Kryptoassets
      </h2>
      <div className="flex justify-center items-center mb-12">
        <img
          src={CryptoSet}
          alt="Verschiedene Kryptoassets"
          className="w-full md:w-1/2"
        />
      </div>

      {isComingFromPreviousPage && (
        <StoryBoxSimone paragraphs={simoneStoryPart2} />
      )}
      <p className="mb-12">
        Die Bank bietet den <strong>Handel von führenden Kryptoassets</strong>{' '}
        an. Neben klassischen Coins, wie Bitcoin (BTC) oder Ethereum (ETH)
        werden auch Token, wie Cardano (ADA) oder Polkadot (DOT). Die
        Kryptoassets können mittels Fiat-Währungen getauscht werden{' '}
        <a href="#sources">[1]</a>.
      </p>

      <CryptoAssetServicesSources />
    </div>
  );
}

export default CryptoAssetServicesPart1;
