import Quiz from '../../Quiz';

// Array of questions for the CryptoAssets Regulation Quiz
const questions = [
  {
    question:
      'Wie fortgeschritten ist die Regulatorische Landschaft im Bezug auf Kryptoassets?',
    options: [
      {
        id: 0,
        text: 'Es gibt bisher noch keine Gesetze.',
      },
      {
        id: 1,
        text: 'Die derzeitigen Gesetze konzentrieren sich hauptsächlich auf die Bekämpfung von Geldwäsche und Terrorismusfinanzierung (AML/CTF).',
      },
      {
        id: 2,
        text: 'Ein EU-Regulierungsrahmen ist bereits in Kraft getreten.',
      },
      {
        id: 3,
        text: 'Regulatorik ist in der Philosophie von Kryptoassets ausgeschlossen und findet daher keine Anwendung.',
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    question:
      'Welche Regulatorik tritt bereits oder in naher Zukunft in Kraft?',
    options: [
      {
        id: 0,
        text: 'MiFID II / MiFIR.',
      },
      {
        id: 1,
        text: 'MiCA.',
      },
      {
        id: 2,
        text: 'eWpG.',
      },
      {
        id: 3,
        text: 'Alle oben genannten Punkte.',
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    question: 'Wozu dient die MiCA-Verordnung?',
    options: [
      {
        id: 0,
        text: 'Mit MiCA wird ein ganzheitlicher Regulierungsrahmen in der EU geschaffen.',
      },
      {
        id: 1,
        text: 'MiCA stellt eine weitere deutsche Verordnung dar.',
      },
      {
        id: 2,
        text: 'Mit MiCA unterliegen Kryptoasset-Dienstleister weniger Verpflichtungen.',
      },
      {
        id: 3,
        text: 'Alle oben genannten Punkte.',
      },
    ],
    correctAnswerIndex: 1,
  },
];

// Component for the CryptoAssets Regulation Quiz
function CryptoAssetsRegulationQuiz() {
  return (
    <div className="App">
      <Quiz questions={questions} />
    </div>
  );
}

export default CryptoAssetsRegulationQuiz;
