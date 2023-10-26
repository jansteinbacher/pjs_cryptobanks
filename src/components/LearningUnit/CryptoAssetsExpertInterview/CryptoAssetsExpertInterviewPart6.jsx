import ExpertInsights from '../../ExpertInsights';
import ExpertOpinion from '../../ExpertOpinion';

function CryptoAssetsExpertInterviewPart6() {
  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Regulatorisches Optimierungspotenzial und internationaler Vergleich im
        Zusammenhang mit Kryptoassets:
      </h2>
      <ExpertOpinion
        paragraphs={[
          '„Nee, also ganz hinten dran auf jeden Fall nicht, grad in der EU. Also Schweiz ist ja nicht in der EU. Da ist Deutschland dann Vorreiter-Land. Also gerade mit dem eWpG oder auch mit dem Kryptoverwahrgeschäft, dem KWG oder dem Krypto-Wertpapier-Register. Also Deutschland hat Erlaubnistatbestände geschaffen mit Kryptobezug und die gibt es bisher in keinem anderen EU-Land. Also da haben sich die anderen Länder bisher zurückgelehnt und ja nicht viel reguliert. Das ändert sich jetzt bald durch die MICA, die das Ganze vereinheitlicht. Aber da hat Deutschland auf jeden Fall eine Vorreiterrolle.”',
        ]}
      />
      <ExpertInsights
        title="Regulatorisches Optimierungspotenzial:"
        items={[
          'DeFi-Plattformen operieren oft in einer regulatorischen Grauzone, da es keine klaren Vorschriften für DeFi gibt.',
          'Eine bessere Harmonisierung der Kryptoasset-Regulierung auf internationaler Ebene könnte regulatorische Fragmentierung reduzieren.',
          'Das Pilotregime kann frühzeitig Risiken erkennen und den Banken ermöglichen, ihre Modelle anzupassen.',
          'Die Schaffung globaler Standards für Kryptoassets und Blockchain-Technologie könnte die regulatorische Fragmentierung reduzieren.',
        ]}
      />
      <ExpertInsights
        title="Internationaler Vergleich:"
        items={[
          'Deutschland hat eine Vorreiterrolle in der Regulierung von Kryptoassets in der EU übernommen.',
          'Gesetze wie das eWpG, das KWG und das Krypto-Wertpapier-Register schaffen Erlaubnistatbestände für Krypto-bezogene Geschäftsmodelle.',
          'Deutschland ermöglicht Banken, im Krypto-Sektor tätig zu sein, während andere EU-Länder noch in den Anfängen der Regulierung stehen.',
          'Die MiCA-Verordnung auf EU-Ebene wird die Regulierung von Kryptoassets in der gesamten EU vereinheitlichen.',
        ]}
      />
      <p className="font-bold">
        Diese Maßnahmen zielen darauf ab, die regulatorische Unsicherheit zu
        verringern, das Vertrauen der Anleger zu stärken und die Akzeptanz von
        Kryptoassets zu fördern.
      </p>
    </div>
  );
}

export default CryptoAssetsExpertInterviewPart6;
