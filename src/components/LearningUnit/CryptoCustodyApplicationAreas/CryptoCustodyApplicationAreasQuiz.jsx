import Quiz from '../../Quiz';

const questions = [
  {
    question:
      'Was kennzeichnet den Ansatz des Self-Custody bei der Aufbewahrung von Kryptoassets?',
    options: [
      {
        id: 0,
        text: 'Die Kontrolle über private Schlüssel wird an eine dritte Partei abgegeben.',
      },
      {
        id: 1,
        text: 'Es gibt keine Notwendigkeit, private Schlüssel zu verwenden.',
      },
      {
        id: 2,
        text: 'Der Nutzer trägt die gesamte Verantwortung für die Sicherheit des privaten Schlüssels.',
      },
      {
        id: 3,
        text: 'Kryptoassets werden automatisch verschlüsselt und geschützt.',
      },
    ],
    correctAnswerIndex: 2,
  },
  {
    question: 'Welche Verwendungssituation ist typisch für Hot Wallets?',
    options: [
      {
        id: 0,
        text: 'Langfristige Speicherung von Kryptoassets.',
      },
      {
        id: 1,
        text: 'Gelegentliche Transaktionen mit größerem Vermögen.',
      },
      {
        id: 2,
        text: 'Sicherung großer Mengen an Kryptoassets.',
      },
      {
        id: 3,
        text: 'Hochsichere Verwahrung von Kryptoassets.',
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    question:
      'Welche Art von Gerät speichert den privaten Schlüssel bei einer Hardware-Wallet?',
    options: [
      {
        id: 0,
        text: 'Cloud-Server',
      },
      {
        id: 1,
        text: 'Physische Festplatte',
      },
      {
        id: 2,
        text: 'Blockchain-Netzwerk',
      },
      {
        id: 3,
        text: 'Mobiltelefon',
      },
    ],
    correctAnswerIndex: 1,
  },
  {
    question: 'Wie funktioniert die Multi-Signature-Technologie?',
    options: [
      {
        id: 0,
        text: 'Es braucht eine spezifische Teilmenge der Teilnehmer, um das Ergebnis zu reproduzieren',
      },
      {
        id: 1,
        text: 'Es braucht mehrere private Schlüssel um eine Transaktion zu autorisieren',
      },
      {
        id: 2,
        text: 'Mehrere Schlüssel können alleine auf ein Wallet zugreifen',
      },
      {
        id: 3,
        text: 'Jeder Teilnehmer an einer kryptografischen Operation besitzt ein Teil des privaten Schlüssels',
      },
    ],
    correctAnswerIndex: 3,
  },
];

function CryptoCustodyApplicationAreasQuiz() {
  return (
    <div className="App">
      <Quiz questions={questions} />
    </div>
  );
}

export default CryptoCustodyApplicationAreasQuiz;
