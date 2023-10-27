import ExpertOpinion from '../../ExpertOpinion';

function IntroductionCryptoAssetsExpert() {
  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Aus diesem Grund ist für dich und deine Bank das Thema relevant:
      </h2>
      <ExpertOpinion
        paragraphs={[
          '„Bevor ich jetzt vielleicht da näher darauf eingehe, habe ich noch mal eine Rückfrage zu der Begriffsdefinition. Kryptoassets ist was, das muss man erstmal vielleicht klar abgrenzen. Also reden wir rein von Bitcoin, Ether, Matic und so weiter. Oder meinen Sie damit auch so was wie tokenisierte Immobilien, Blockchain-Technologie und deren Anwendung allgemein? Wie grenzen Sie den Begriff denn ab?“',
          '„Bei Kryptoassets muss man auch die Rückfrage stellen. Mein Definitionsverständnis davon wäre alles, was sich auf der Blockchain bewegen kann. In der Regulatorik wird der Begriff Kryptowerte verwendet für alles, was halt nicht Kryptowährung ist und kein Kryptowertpapier ist und hat ja noch mal einen eigenen, regulatorischen Aspekt. Deswegen muss man da beim Wording, also mit den Vokabeln, relativ trennscharf sein.“',
        ]}
        showFootnote
      />
    </div>
  );
}

export default IntroductionCryptoAssetsExpert;
