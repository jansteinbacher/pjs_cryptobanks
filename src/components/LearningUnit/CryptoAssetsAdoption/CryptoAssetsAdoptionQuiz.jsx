import Quiz from '../../Quiz';

/**
 * Component that renders a quiz related to Cryptoassets adoption. It includes multiple-choice questions and provides feedback on the user's answers.
 */

const questions = [
  {
    question:
      'Welche Maßnahmen könnten Banken ergreifen, um wettbewerbsfähig zu bleiben und ihre Beratungsangebote zu Kryptoassets ansprechender zu gestalten?',
    options: [
      { id: 0, text: 'Erhöhung der Kryptotransaktionsgebühren' },
      {
        id: 1,
        text: 'Verbesserung der Online-Präsenz und Bereitstellung qualitativ hochwertiger Inhalte',
      },
      { id: 2, text: 'Reduzierung der Kundenservicezeiten' },
      {
        id: 3,
        text: 'Einführung neuer Bankgebühren für Kryptowährungstransaktionen',
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    question:
      'Welcher Schwerpunkt sollte laut den gegebenen Informationen bei den Banken in Bezug auf Kryptowährungen liegen?',
    options: [
      {
        id: 0,
        text: 'Konzentration auf NFTs und andere digitale Assets',
      },
      {
        id: 1,
        text: 'Fokussierung auf Altcoins und deren Integration',
      },
      {
        id: 2,
        text: 'Bereitstellung von Dienstleistungen für Bitcoin und Ethereum',
      },
      {
        id: 3,
        text: 'Reduzierung des Angebots von Kryptowährungsdiensten',
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    question:
      'Welche der folgenden Empfehlungen wurden von den Teilnehmern gegeben, um die Kryptodienstleistungen der Bank zu verbessern?',
    options: [
      {
        id: 0,
        text: 'Erweiterung des Filialnetzwerks für persönliche Kryptoberatung',
      },
      {
        id: 1,
        text: 'Verbesserte Aufklärung über Risiken und Regulierungen',
      },
      {
        id: 2,
        text: 'Einführung von Kryptowährungen für den Eigenhandel der Bank',
      },
      {
        id: 3,
        text: 'Erhöhung der Kreditlimits für Kryptokredite',
      },
    ],
    correctAnswerIndex: 2,
  },
  // Add more questions here...
];

function CryptoAssetsAdoptionQuiz() {
  return (
    <div className="App">
      <Quiz questions={questions} />
    </div>
  );
}

export default CryptoAssetsAdoptionQuiz;
