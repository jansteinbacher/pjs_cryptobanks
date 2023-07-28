import React from 'react';
import UndrawSurvey from "../../images/undraw_survey.png";
import UndrawConnectedWorld from "../../images/undraw_connected_world.png";


const TableOfContents = () => {
  return (
    <div className="">
      <h3 className="text-lg font-bold mb-4">Inhaltsverzeichnis</h3>
      <ul>
        <li className="mb-2"><a href="#introduction">1. Einleitung</a></li>
        <li className="mb-2"><a href="#surveyResults">2. Umfrageergebnisse</a></li>
        <li className="mb-2"><a href="#integrationPotential">3. Potenzial der Integration</a></li>
        <li className="mb-2"><a href="#considerations">4. Wichtige Überlegungen</a></li>
        <li><a href="#conclusion">5. Fazit</a></li>
      </ul>
    </div>
  );
};

const SurveyResultsDiagram = ({ surveyResults }) => {
  return (
    <div className="my-8" id="surveyResults">
      <h4 className="text-lg font-bold mb-4">Umfrageergebnisse</h4>
      <img src={UndrawSurvey} alt="Umfrageergebnisse" className="w-full mb-4" />
      <p className="mt-4">
        Unsere aktuelle Umfrage ergab, dass {surveyResults.adoptionPercentage}% der Teilnehmer bereits Bitcoin besitzen oder in Erwägung ziehen, Bitcoin in Zukunft zu erwerben. Dies verdeutlicht die steigende Akzeptanz und Attraktivität von Bitcoin als digitale Anlageklasse.
      </p>
      <p>
        Zusätzlich sind {surveyResults.awarenessPercentage}% der Befragten sich bewusst, was Bitcoin ist und wie es funktioniert.
      </p>
      <p>
        Außerdem gaben beeindruckende {surveyResults.P2PTransactions}% der Befragten an, dass sie bereits Bitcoin für Peer-to-Peer-Transaktionen verwendet haben.
      </p>
    </div>
  );
};

const IntegrationPotential = () => {
  return (
    <div className="my-8">
      <h3 className="text-xl font-bold mb-4" id="integrationPotential">3. Potenzial der Integration</h3>
      <p>
        Angesichts dieser vielversprechenden Umfrageergebnisse ist es entscheidend für unsere Bank, die Potenziale von Bitcoin zu erkennen und entsprechende Integrationsmaßnahmen zu erwägen. Die Blockchain-Technologie, die hinter Bitcoin steht, bietet zahlreiche Vorteile wie erhöhte Sicherheit, Transparenz und Effizienz bei Finanztransaktionen.
      </p>
      <img src={UndrawConnectedWorld} alt="Vernetzte Welt" className="w-full mb-4" />
      <p>
        Ein möglicher Ansatz wäre die Schaffung eines speziellen Bitcoin-Wallets für unsere Kunden, das es ihnen ermöglicht, Bitcoin sicher zu verwalten und zu handeln. Dies könnte eine zusätzliche Einnahmequelle für unsere Bank darstellen und uns gleichzeitig als innovative und zukunftsorientierte Finanzinstitution positionieren.
      </p>
      <p>
        Darüber hinaus könnten wir die Möglichkeit in Betracht ziehen, Bitcoin als Teil unseres Anlageportfolios anzubieten. Immer mehr institutionelle Anleger erkennen das Potenzial von Bitcoin als Diversifikation ihres Portfolios. Indem wir diesen Kundenstamm ansprechen, könnten wir unseren Servicebereich erweitern und neue Geschäftsmöglichkeiten erschließen.
      </p>
      <p>
        Die Integration von Bitcoin in unser Bankensystem bietet die Chance, unseren Kunden modernste Finanzlösungen anzubieten und sie von der steigenden Beliebtheit digitaler Währungen profitieren zu lassen.
      </p>
    </div>
  );
};

const Considerations = () => {
  return (
    <div className="my-8">
      <h3 className="text-xl font-bold mb-4" id="considerations">4. Wichtige Überlegungen</h3>
      <p>
        Natürlich ist es wichtig, die damit verbundenen Risiken nicht außer Acht zu lassen. Die Volatilität des Bitcoin-Marktes und Sicherheitsaspekte müssen gründlich analysiert und bewertet werden. Hier ist eine umfassende Risikoanalyse und eine Zusammenarbeit mit Experten aus dem Bereich der Kryptowährungen unerlässlich.
      </p>
      <p>
        Die Regulierung von Kryptoassets und Kryptowährungen ist ein weiterer wichtiger Aspekt, den wir berücksichtigen müssen. Ein genaues Verständnis der rechtlichen Rahmenbedingungen ist unerlässlich, um potenzielle Risiken zu minimieren und Compliance-Anforderungen zu erfüllen.
      </p>
      <p>
        Darüber hinaus sollten wir auch die Auswirkungen auf unsere bestehenden Geschäftsmodelle und Kundenbeziehungen sorgfältig prüfen. Die Integration von Bitcoin könnte sich auf unsere traditionellen Bankdienstleistungen auswirken und erfordert möglicherweise eine Anpassung unserer Strategien und Prozesse.
      </p>
      <p>
        Eine enge Zusammenarbeit mit unseren Kunden und die Bereitstellung von Schulungen und Informationen sind ebenfalls von großer Bedeutung, um das Vertrauen unserer Kunden zu gewinnen und sie über die Chancen und Risiken von Bitcoin aufzuklären.
      </p>
    </div>
  );
};

const Conclusion = () => {
  return (
    <div className="my-8">
      <h3 className="text-xl font-bold mb-4" id="conclusion">5. Fazit</h3>
      <p>
        Die Integration von Kryptoassets und Kryptowährungen in unser Bankensystem stellt eine aufregende Möglichkeit dar, unsere Position als innovative Finanzinstitution zu stärken und unseren Kunden modernste Finanzlösungen anzubieten. Die steigende Akzeptanz und Beliebtheit von Bitcoin zeigen deutlich das Potenzial dieser aufstrebenden Technologie.
      </p>
      <p>
        Indem wir die Potenziale von Bitcoin erkennen, wichtige Überlegungen anstellen und eng mit unseren Kunden zusammenarbeiten, können wir die Chancen nutzen, die uns die Welt der Kryptowährungen bietet. Die Zukunft der Finanzwelt liegt in der digitalen Transformation, und wir als Bank haben die Möglichkeit, eine Vorreiterrolle einzunehmen und unsere Kunden auf diesem spannenden Weg zu begleiten.
      </p>
      <p>
        Viel Erfolg auf diesem Weg in die Zukunft der Finanzwelt!
      </p>
    </div>
  );
};

const IntroductionTrade = () => {
  // Mock survey results and questions (you can replace these with actual data)
  const surveyResults = {
    totalParticipants: 1200,
    adoptionPercentage: 68,
    awarenessPercentage: 92,
    P2PTransactions: 78,
  };

  return (
    <div className='ml-20 mr-20'>
      <h2 className="text-2xl font-bold mb-12">Integration von Kryptoassets und Kryptowährungen in traditionelle Bankensysteme</h2>

      <TableOfContents />

      <div className="my-8">
        <h3 className="text-xl font-bold mb-4" id="introduction">1. Einleitung</h3>
        <p>
          Herzlich willkommen! Dieser Artikel richtet sich an unsere geschätzten Mitarbeiter in traditionellen Banken, die darüber nachdenken, Kryptoassets und Kryptowährungen in unser Bankensystem zu integrieren. Wir wollen Ihnen in diesem Artikel einen fundierten Einblick in die Welt der Kryptowährungen geben und Ihnen aufzeigen, wie unsere Bank von dieser aufstrebenden Technologie profitieren kann.
        </p>
        <p>
          Digitale Währungen haben in den letzten Jahren stark an Bedeutung gewonnen und sind zu einem integralen Bestandteil des globalen Finanzsystems geworden. Besonders Bitcoin, als die bekannteste Kryptowährung, hat eine rasante Entwicklung erlebt und eine breite Akzeptanz bei Investoren, Unternehmen und Verbrauchern gefunden.
        </p>
        <p>
          Bevor wir uns in die Details stürzen, lassen Sie uns zunächst einen Blick auf unsere Umfrageergebnisse werfen, um die Relevanz von Bitcoin in der Gesellschaft zu verstehen.
        </p>
      </div>

      <SurveyResultsDiagram surveyResults={surveyResults} />

      <IntegrationPotential />

      <Considerations />

      <Conclusion />

    </div>
  );
};

export default IntroductionTrade;
