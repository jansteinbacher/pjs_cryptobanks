import CryptoAssetServicesSources from './CryptoAssetServicesSources';
import { StoryBoxSimone } from '../../StoryBox';
import Stablecoins from '../../../images/courseAdvanced/Stablecoins.jpg';

/**
 * Component representing the fifth part of the Crypto Asset Services module.
 * It discusses Stablecoins and their role in decentralized networks and programmable business processes.
 * Various use cases for Stablecoins, including On-Chain DvP transactions and cryptocurrency trading, are explained.
 */

function CryptoAssetServicesPart5() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course',
  );

  const simoneStory = [
    'Einen Stand weiter erfährt Simone von der Einführung eines Stablecoins, welcher entscheidend für die Zahlungsabwicklung in dezentalisierten Netzwerken in programmierbarer Form ist. Fasziniert lauscht sie gespannt nach weiteren Details.',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Stablecoins</h2>
      {isComingFromPreviousPage && <StoryBoxSimone paragraphs={simoneStory} />}
      <div className="flex justify-center items-center mb-12">
        <img
          src={Stablecoins}
          alt="Verschiedene Kryptoassets"
          className="w-full md:w-1/2"
        />
      </div>

      <p className="mb-4">
        Damit Distributed-Ledger-Technologie mithilfe von Smart Contracts{' '}
        <strong>Geschäftsprozesse automatisieren</strong> kann, ist
        programmierbares oder tokenisiertes Geld erforderlich. Kryptowährungen,
        die nicht vollständig gedeckt sind, eignen sich dafür nicht, da sie zu
        hohe Volatilität aufweisen. Im Gegensatz dazu können Stablecoins
        aufgrund ihrer Wertstabilität für die{' '}
        <strong>vollständige Abwicklung von Geschäftsprozessen</strong>{' '}
        verwendet werden <a href="#sources">[8]</a>.
      </p>
      <p className="mb-4">
        Ein konkretes Anwendungsbeispiel hierfür ist die Durchführung von{' '}
        <strong>On-Chain Delivery-versus-Payment (DvP)-Transaktionen</strong>.
        Dabei können Vermögenswerte in Form von Security Tokens in Echtzeit und
        automatisiert gegen Stablecoins ausgetauscht werden. Dies bietet den
        Vorteil geringerer Wechselkursrisiken im Vergleich zu herkömmlichen
        Kryptowährungen wie Bitcoin und Ether sowie einer{' '}
        <strong>
          Vereinfachung der Buchführungsprozesse und Wertanpassungen für
          On-Chain-Transaktionen
        </strong>{' '}
        <a href="#sources">[9]</a>.
      </p>
      <p className="mb-12">
        Ein weiteres Anwendungsbeispiel für Stablecoins ist das{' '}
        <strong>Bezahlen vom Handel von Kryptowährungen</strong>. Indem die
        Kryptowährungen in Stablecoins umgetauscht werden, kann der Betrag in
        Fiatwährung ausbezahlt werden <a href="#sources">[10]</a>.
      </p>

      <CryptoAssetServicesSources />
    </div>
  );
}

export default CryptoAssetServicesPart5;
