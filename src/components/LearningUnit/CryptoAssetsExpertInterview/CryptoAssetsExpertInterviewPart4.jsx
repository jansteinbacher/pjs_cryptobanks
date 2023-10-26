import ExpertInsights from '../../ExpertInsights';
import ExpertOpinion from '../../ExpertOpinion';

function CryptoAssetsExpertInterviewPart4() {
  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Arten von Kryptoasset-Dienstleistungen:
      </h2>
      <ExpertOpinion
        paragraphs={[
          '„Ah genau, das elektronische Wertpapiergesetz ist eigentlich das Pilotregime in Deutsch und geht sogar noch ein paar Schritte weiter. Wurde jetzt, meine ich, auch erweitert, dass man damit nicht nur Anleihen tokenisieren kann, sondern ich weiß nicht, ob es schon in Kraft ist, aber perspektivisch in Kraft auch Aktien. Und das ist tatsächlich eine sehr, sehr große Sache. Weil wenn man sich überlegt, dass man auf einer Blockchain wie Ethereum oder Polygon eine Aktie tokenisiert begibt, dann eliminiert es nicht nur einen Haufen Intermediäre, die da dazwischenstehen.”',
        ]}
      />
      <ExpertInsights
        items={[
          'Kryptoassets-Dienstleistungen variieren je nach Kunde und Definition von Kryptoassets.',
          'Traditionelle Banken werden zukünftig auf Grund der zugrundeliegenden Regulierung vor allem Kryptoverwahrung und Tokenisierung anbieten.',
          'Kryptoverwahrung kann lizenziert sein, während Tokenisierung Vermögenswerte meist auf der Blockchain abbildet.',
          'Kunden müssen an diese Assetklasse herangeführt werden, unter Berücksichtigung ihres Profils und ihrer technischen Kenntnisse.',
          'Klassische tokenisierte Assets werden regulatorisch ähnlich wie traditionelle Vermögenswerte behandelt.',
          'Eine weitere Dienstleistung ist Staking.',
        ]}
      />

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Herausforderungen von Kryptoasset-Dienstleistungen:
      </h2>
      <ExpertInsights
        items={[
          'Herausforderung bei der Erlangung einer Kryptoverwahrungslizenz, da die Antragsbearbeitung oft lange dauert.',
          'Banken sollten sich frühzeitig mit den regulatorischen Anforderungen und technischen Voraussetzungen auseinandersetzen.',
          'Sicherheit beim Verwahren von Kryptoassets ist entscheidend, insbesondere bei der Verwahrung von Schlüsseln in Wallets.',
          'Kunden sollten bei Verlust von Schlüsseln weiterhin auf ihre Assets zugreifen können.',
        ]}
      />
    </div>
  );
}

export default CryptoAssetsExpertInterviewPart4;
