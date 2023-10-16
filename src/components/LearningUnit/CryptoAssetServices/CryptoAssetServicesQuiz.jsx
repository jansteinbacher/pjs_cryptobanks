import Quiz from '../../Quiz';

const questions = [
  {
    question:
      'Was stellt eine potenzielle Krypto-Dienstleistung für Banken dar?',
    options: [
      {
        id: 0,
        text: 'Das Minen von neuen Kryptowährungen.',
      },
      {
        id: 1,
        text: 'Teilnahme in einer Blockchain.',
      },
      {
        id: 2,
        text: 'Ausgabe von Kryptowertpapieren.',
      },
      {
        id: 3,
        text: 'Alle oben genannten Punkte.',
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    question: 'Wie zeichnen sich Kredite auf der Blockchain-Technologie aus?',
    options: [
      {
        id: 0,
        text: 'Kredite auf der Blockchain-Technologie benötigen keine Besicherung.',
      },
      {
        id: 1,
        text: 'Bei Krediten auf der Blockchain-Technologie erfolgt die Berücksichtigung der Kreditwürdigkeit durch das Hinterlegen von Kryptoassets als Besicherung.',
      },
      {
        id: 2,
        text: 'Sie sind 1:1 mit traditionellen Krediten vergleichbar.',
      },
      {
        id: 3,
        text: 'Keines der oben genannten Punkte.',
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    question:
      'Welche Art von Kryptowährungen eignet sich für die Automatisierung von Geschäftsprozessen mithilfe von Smart Contracts?',
    options: [
      {
        id: 0,
        text: 'Vollständig gedeckte Kryptowährungen.',
      },
      {
        id: 1,
        text: 'Kryptowährungen mit hoher Volatilität.',
      },
      {
        id: 2,
        text: 'Nicht gedeckte Kryptowährungen.',
      },
      {
        id: 3,
        text: 'Fiatwährungen.',
      },
    ],
    correctAnswerIndex: 0,
  },
];

function CryptoAssetServicesQuiz() {
  return (
    <div className="App">
      <Quiz questions={questions} />
    </div>
  );
}

export default CryptoAssetServicesQuiz;
