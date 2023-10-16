import Quiz from '../../Quiz';

const questions = [
  {
    question: 'Warum sind private Schlüssel bei Krypto-Assets wichtig?',
    options: [
      { id: 0, text: 'Sie ermöglichen den Zugang zu Zentralbankreserven.' },
      { id: 1, text: 'Sie sind erforderlich, um Krypto-Assets zu erzeugen.' },
      {
        id: 2,
        text: 'Private Schlüssel ermöglichen den Zugang und die Verfügungsgewalt über Kryptoassets.',
      },
      {
        id: 3,
        text: 'Private Schlüssel dienen als Identifikationsmerkmal für Steuerzwecke.',
      },
    ],
    correctAnswerIndex: 2,
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
