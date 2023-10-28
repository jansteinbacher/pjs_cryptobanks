import ExpertOpinion from '../../ExpertOpinion';

/**
 * Component displaying expert opinions and insights related to the impact of crypto assets on traditional banking.
 * This component forms part of the Crypto Assets Expert Interview section, showcasing key points and expert commentary.
 */

function CryptoAssetsExpertInterviewPart3() {
  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Kernaussagen:
      </h2>
      <p className="font-bold">
        Folgend findest du die Kernaussagen der Interviewpartner zu den Themen:
      </p>
      <ul className="mb-12 list-disc ml-4">
        <li>
          Auswirkungen von Kryptoassets auf das Geschäftsmodell von Banken
        </li>
        <li>Integration von Kryptoassets in das traditionelle Bankensystem</li>
        <li>Arten und Herausforderungen von Kryptoasset-Dienstleistungen</li>
        <li>
          Regulatorisches Optimierungspotenzial und internationaler Vergleich im
          Zusammenhang mit Kryptoassets{' '}
        </li>
        <li>
          Wissensmanagement in der Bankenbranche in Bezug auf Kryptoassets
        </li>
      </ul>
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Auswirkungen von Kryptoassets auf das Geschäftsmodell von Banken:
      </h2>
      <ExpertOpinion
        paragraphs={[
          '„Wenn man das Thema bespricht, muss man sich zwei größere Kategorien anschauen. Die eine Kategorie sind die Kryptowerte. Diese sind im Mainstream als Bitcoin, Ethereum und co. bekannt. Beispielsweise Coins und Tokens, die es jetzt schon gibt. Was ein bisschen mehr im Kommen ist und wahrscheinlich auch eine deutlich größere Rolle spielen wird für die klassische Welt sind die sogenannten Krypto-Wertpapiere. [...]”',
        ]}
      />

      <ul className="mb-12 list-disc ml-4">
        <li>
          <span className="font-bold">Rechtsrahmen entscheidend:</span> Der sich
          ständig ändernde Rechtsrahmen auf europäischer Ebene beeinflusst
          maßgeblich, wie Banken Kryptoassets integrieren. Er bietet Sicherheit
          und treibt das Interesse der Banken an dieser Assetklasse voran.
        </li>
        <li>
          <span className="font-bold">Neuausrichtung von Prozessen:</span>{' '}
          raditionelle Banken müssen ihre Geschäftsprozesse neu gestalten, um
          Kryptoassets zu integrieren.
        </li>
        <li>
          {' '}
          <span className="font-bold">
            Disruptives Potenzial und träge Reaktion:
          </span>{' '}
          Kryptoassets werden als disruptiv angesehen, haben aber bisher
          begrenzte Auswirkungen auf den Privatkundenmarkt, was zu einer
          langsamen Reaktion der Banken führt.
        </li>
        <li>
          <span className="font-bold">
            Blockchain-Technologie und Tokenisierung:
          </span>{' '}
          Die Blockchain-Technologie bietet Banken operationelle Vorteile und
          die Möglichkeit zur Integration von Financial Services. Die
          Tokenisierung von Assets eröffnet neue Geschäftspotenziale.
        </li>
        <li>
          <span className="font-bold">
            Notwendigkeit von Awareness und Wissensaufbau:
          </span>{' '}
          Banken müssen sich bewusst sein, dass Kryptoassets eine
          vergleichsweise neue Assetklasse sind und ihre Strategien und
          Kundenansprache entsprechend anpassen, um am Markt zu bestehen.
          Kryptoassets werden das traditionelle Bankengeschäft ergänzen, aber
          nicht ersetzen.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Integration von Kryptoassets ins traditionelle Bankensystem:
      </h2>
      <ExpertOpinion
        paragraphs={[
          '„Ich glaube noch mal ein bisschen befeuert durch die ganze Gesetzgebung, die es jetzt auch in den letzten Jahren sowohl in Deutschland mit eWPG und auch auf europäischer Ebene mit MICA und so gab. Man hat irgendwie gemerkt, okay, es gibt einen gewissen Rechtsrahmen, der ist abgesteckt und jetzt fangen die Banken, solange langsam mal an ihre Fühler auszustrecken und zu gucken, wo können wir was machen, wo wollen wir was machen? Und ja, also das ist tatsächlich auch eine Frage, wo viele Player sich in der alten Industrie, sage ich jetzt mal auf Fragen stellen. Wo wird überhaupt unser Platz in der Zukunft sein?"',
        ]}
      />
      <ul className="mb-8 list-disc ml-4">
        <li>
          <span className="font-bold">Kategorisierung von Kryptoassets:</span>{' '}
          Kryptoassets werden in Kryptowerte und Krypto-Wertpapiere unterteilt.
          Letztere haben in der traditionellen Bankenwelt aufgrund gesetzlicher
          Regelungen und Tokenisierung einen höheren Stellenwert.
        </li>
        <li>
          <span className="font-bold">
            Veränderung der Kundenschnittstelle:
          </span>{' '}
          Banken streben an, die Interaktionsmöglichkeiten zwischen Bank und
          Kunde weitgehend unverändert zu lassen, während sie gleichzeitig neue
          Technologien und Anwendungen integrieren.
        </li>
        <li>
          {' '}
          <span className="font-bold">
            Policy Layer und Smart Contracts:
          </span>{' '}
          Die Implementierung einer Policy Layer über Smart Contracts auf der
          Blockchain ermöglicht die Überwindung von Barrieren wie der Verwahrung
          von privaten Schlüsseln.
        </li>
        <li>
          <span className="font-bold">Herausforderungen der Integration:</span>{' '}
          Die Integration von Kryptoassets erfordert eine strategische
          Neuausrichtung, wobei höhere Kosten für den Aufbau paralleler
          Infrastrukturen berücksichtigt werden müssen.
        </li>
        <li>
          <span className="font-bold">Rechtlicher Rahmen und Regulierung:</span>{' '}
          Banken müssen sich frühzeitig über die rechtlichen Anforderungen
          informieren und diese parallel zur Geschäftsentwicklung umsetzen. Die
          Regulierung hat einen entscheidenden Einfluss auf die Integration von
          Kryptoassets. DeFi bleibt eine Herausforderung aufgrund fehlender
          Regulierung.
        </li>
      </ul>
    </div>
  );
}

export default CryptoAssetsExpertInterviewPart3;
