import CryptoAssetServicesSources from './CryptoAssetServicesSources';
import { StoryBoxSimone } from '../../StoryBox';

function CryptoAssetServicesPart5() {
  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course',
  );

  const simoneStory = [
    'Einen Stand weiter erfährt Simone von der Einführung eines Stablecoins, welcher entscheidend für die Zahlungsabwicklung in dezentalisierten Netzwerken in programmierbarer Form ist. Fasziniert lauscht sie gespannt auf die weiteren Details.',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Stablecoins</h2>
      {isComingFromPreviousPage && <StoryBoxSimone paragraphs={simoneStory} />}
      <div className="flex items-center justify-center mb-12">
        <a
          className="font-semibold text-sm"
          href="https://pixabay.com/de/illustrations/recht-und-ordnung-gesetz-klausel-6311493/"
        >
          Bild folgt noch
        </a>
      </div>

      <p className="mb-8">
        Damit Distributed-Ledger-Technologie mithilfe von Smart Contracts
        Geschäftsprozesse automatisieren kann, ist programmierbares oder
        tokenisiertes Geld erforderlich. Kryptowährungen, die nicht vollständig
        gedeckt sind, eignen sich dafür nicht, da sie zu hohe Volatilität
        aufweisen. Im Gegensatz dazu können Stablecoins aufgrund ihrer
        Wertstabilität für die vollständige Abwicklung von Geschäftsprozessen
        verwendet werden <a href="#sources">[8]</a>. Ein konkretes
        Anwendungsbeispiel hierfür ist die Durchführung von On-Chain
        Delivery-versus-Payment (DvP)-Transaktionen. Dabei können Vermögenswerte
        in Form von Security Tokens in Echtzeit und automatisiert gegen
        Stablecoins ausgetauscht werden. Dies bietet den Vorteil geringerer
        Wechselkursrisiken im Vergleich zu herkömmlichen Kryptowährungen wie
        Bitcoin und Ether sowie einer Vereinfachung der Buchführungsprozesse und
        Wertanpassungen für On-Chain-Transaktionen <a href="#sources">[9]</a>.
        Ein weiteres Anwendungsbeispiel für Stablecoins ist das Bezahlen vom
        Handel von Kryptowährungen. Indem die Kryptowährungen in Stablecoins
        umgetauscht werden, kann der Betrag in Fiatwährung ausbezahlt werden{' '}
        <a href="#sources">[10]</a>.
      </p>

      <CryptoAssetServicesSources />
    </div>
  );
}

export default CryptoAssetServicesPart5;
