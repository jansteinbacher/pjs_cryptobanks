import Quiz from '../../Quiz';

const questions = [
  {
    question: 'Was versteht man unter Tokenisierung?',
    options: [
      {
        text: 'Die Schaffung von physischen Münzen für Kryptowährungen',
        id: 0,
      },
      {
        text: 'Der Prozess, bei dem digitale Vermögenswerte in standardisierte Tokens umgewandelt werden',
        id: 1,
      },
      {
        text: 'Die Verschlüsselung von Blockchain-Transaktionen für zusätzliche Sicherheit.',
        id: 2,
      },
      {
        text: 'Der Austausch von Kryptoassets zwischen verschiedenen Börsenplätzen',
        id: 3,
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    question: 'Was ist der Hauptunterschied zwischen "Token" und "Coin"?',
    options: [
      { text: 'Token werden mit Coins gezahlt.', id: 0 },
      {
        text: 'Bitcoin basiert auf der Etherum-Blockchain, wohingegen Ether auf der Blockchain basiert.',
        id: 1,
      },
      {
        text: 'Coins sind hauptsächlich als Zahlungsmittel konzipiert, während Token vielfältige Anwendungsmöglichkeiten haben',
        id: 2,
      },
      {
        text: 'Der Austausch von Kryptoassets zwischen verschiedenen Börsenplätzen',
        id: 3,
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    question: 'Was ist die Blockchain-Technologie?',
    options: [
      {
        text: 'Eine kryptografisch gesicherte Videostreaming-Technologie',
        id: 0,
      },
      { text: 'Ein soziales Netzwerk für Kryptowährungen', id: 1 },
      { text: 'Eine digitale Wettervorhersageplattform', id: 2 },
      { text: 'Eine unveränderliche Kette von Transaktionen', id: 3 },
    ],
    correctAnswerIndex: 3,
  },
];

function IntroductionCryptoAssetsQuiz() {
  return (
    <div className="App">
      <Quiz questions={questions} />
    </div>
  );
}

export default IntroductionCryptoAssetsQuiz;
