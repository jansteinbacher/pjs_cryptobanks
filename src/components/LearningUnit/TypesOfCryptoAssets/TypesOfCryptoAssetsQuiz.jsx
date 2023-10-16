import Quiz from '../../Quiz';

const questions = [
  {
    question: 'Was sind NFTs?',
    options: [
      {
        id: 0,
        text: 'Fungible Token mit identischen Funktionen',
      },
      {
        id: 1,
        text: 'Einzigartige Token, die den Besitz spezifischer Vermögenswerte repräsentieren',
      },
      {
        id: 2,
        text: 'Token, die ausschließlich für Zahlungen verwendet werden',
      },
      {
        id: 3,
        text: 'Token, die als Sicherheitswerte kategorisiert sind',
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    question: 'Was ist der Hauptzweck von Stablecoins?',
    options: [
      {
        id: 0,
        text: 'Die Erreichung von Preisstabilität auf dem Kryptowährungsmarkt',
      },
      {
        id: 1,
        text: 'Die Ermöglichung schneller und kostengünstiger Transaktionen',
      },
      {
        id: 2,
        text: 'Die Repräsentation des Eigentums an physischen Vermögenswerten',
      },
      {
        id: 3,
        text: 'Die Verwendung als Utility-Token für Blockchain-Anwendungen',
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    question: 'Was unterscheidet Utility Tokens von anderen Token-Typen?',
    options: [
      {
        id: 0,
        text: 'Sie repräsentieren das Eigentum an physischen Vermögenswerten.',
      },
      {
        id: 1,
        text: 'Sie sind immer nicht übertragbar.',
      },
      {
        id: 2,
        text: 'Sie gewähren spezifische Nutzungsrechte innerhalb einer Blockchain-Anwendung.',
      },
      {
        id: 3,
        text: 'Sie werden ausschließlich für den Handel auf Kryptowährungsbörsen verwendet.',
      },
    ],
    correctAnswerIndex: 2,
  },
];

function TypesOfCryptoAssetsQuiz() {
  return (
    <div className="App">
      <Quiz questions={questions} />
    </div>
  );
}

export default TypesOfCryptoAssetsQuiz;
