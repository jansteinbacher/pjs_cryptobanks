import Quiz from '../../Quiz';

const questions = [
  {
    question:
      'Was muss erfüllt sein, damit ein Kryptoverwahrgeschäft rechtlich definiert ist?',
    options: [
      { id: 0, text: 'Die Nutzung von Kryptoassets als Zahlungsmittel.' },
      {
        id: 1,
        text: 'Die Speicherung von Kryptoassets auf persönlichen Computern.',
      },
      {
        id: 2,
        text: 'Die Aufbewahrung, Verwaltung und Sicherung von Kryptoassets oder geheimen kryptografischen Schlüsseln im Auftrag von Dritten.',
      },
      {
        id: 3,
        text: 'Die Verwendung von Kryptoassets für den Tausch von physischen Gütern.',
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    question:
      'Was umfasst die Definition von Kryptowerten im Kreditwesengesetz?',
    options: [
      {
        id: 0,
        text: 'Digitale Darstellungen von Werten, die von Zentralbanken emittiert werden.',
      },
      {
        id: 1,
        text: 'Digitale Darstellungen von Werten, die von natürlichen oder juristischen Personen garantiert werden.',
      },
      {
        id: 2,
        text: 'Digitale Darstellungen von Werten, die von Zentralbanken emittiert werden und von natürlichen oder juristischen Personen als Tauschmittel akzeptiert werden können.',
      },
      {
        id: 3,
        text: 'Digitale Darstellungen von Werten, die nicht von Zentralbanken emittiert oder garantiert werden, jedoch von natürlichen oder juristischen Personen als Tauschmittel akzeptiert werden können.',
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    question: 'Warum ist die Bewertung von Kryptoassets kompliziert?',
    options: [
      { id: 0, text: 'Weil der Markt für Kryptoassets nicht volatil ist.' },
      {
        id: 1,
        text: 'Weil es klare und etablierte Preise für Kryptoassets gibt.',
      },
      {
        id: 2,
        text: 'Weil die Marktpreise von Kryptoassets oft schwanken und keine festen Preise existieren.',
      },
      {
        id: 3,
        text: 'Weil Kryptoassets nicht bewertet werden müssen nach IFRS.',
      },
    ],
    correctAnswerIndex: 2,
  },
];

function CryptoCustodyRegulationQuiz() {
  return (
    <div className="App">
      <Quiz questions={questions} />
    </div>
  );
}

export default CryptoCustodyRegulationQuiz;
