import Quiz from '../../Quiz';

const questions = [
  {
    question: 'Was sind mögliche Herausforderungen von Kryptoassets?',
    options: [
      {
        id: 0,
        text: 'Verzögerte Transaktionen und hohe Transaktionskosten.',
      },
      {
        id: 1,
        text: 'Hohe Volatilität von Kryptoassets.',
      },
      {
        id: 2,
        text: 'Fehlendende Gesetze zu Kryptoasset-Dienstleistungen.',
      },
      {
        id: 3,
        text: 'Alle oben genannten Punkte.',
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    question: 'Was sorgt für den hohen Energieverbrauch von Kryptoassets?',
    options: [
      {
        id: 0,
        text: 'Der Konsensmechanismus Proof of Work',
      },
      {
        id: 1,
        text: 'Der Versand und Empfang von Transaktionen.',
      },
      {
        id: 2,
        text: 'Der Konsensmechanismus Proof of Stake',
      },
      {
        id: 3,
        text: 'Die Verwendung von QR-Codes in Transaktionen.',
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    question:
      'Welche möglichen Lösungen gibt es zu dem Skalierungsproblem der Blockchain?',
    options: [
      {
        id: 0,
        text: 'Die Skalierung der Blockchain wird durch den Einsatz von physischen Serverfarmen gelöst, um die Rechenleistung zu erhöhen.',
      },
      {
        id: 1,
        text: 'Die Verwendung von Second-Layer-Lösungen wie dem Lightning Network, um Transaktionen außerhalb der Hauptblockchain abzuwickeln.',
      },
      {
        id: 2,
        text: 'Das Skalierungsproblem der Blockchain wird durch die Begrenzung der Anzahl der Benutzer gelöst, um die Netzwerkbelastung zu reduzieren.',
      },
      {
        id: 3,
        text: 'Das Skalierungsproblem wird beseitigt, indem Blockchain-Transaktionen ausschließlich in langen Zeitintervallen verarbeitet werden.',
      },
    ],
    correctAnswerIndex: 1,
  },
];

function OpportunitiesAndChallengesCryptoAssetsQuiz() {
  return (
    <div className="App">
      <Quiz questions={questions} />
    </div>
  );
}

export default OpportunitiesAndChallengesCryptoAssetsQuiz;
