import Quiz from '../../Quiz';

const questions = [
  {
    question: 'Welche Arten von Blockchain gibt es?',
    options: [
      { id: 0, text: 'Zentrale und dezentrale Blockchain.' },
      { id: 1, text: 'Kryptografische und nicht-kryptografische Blockchain.' },
      { id: 2, text: 'Permissioned und permissionless Blockchain.' },
      { id: 3, text: 'Hyperledger und Ethereum Blockchain.' },
    ],
    correctAnswerIndex: 2,
  },
  {
    question: 'Welche Bedeutung hat "Proof of Stake"?',
    options: [
      {
        id: 0,
        text: 'Proof of Stake erfordert von den Teilnehmern, komplexe mathematische Rätsel zu lösen, um die Blockchain zu sichern.',
      },
      {
        id: 1,
        text: 'Im Proof of Stake-Verfahren werden Blöcke basierend auf der verbrauchten Energiemenge zur Validierung ausgewählt.',
      },
      {
        id: 2,
        text: 'Ein Konsensmechanismus, bei dem Teilnehmer Kryptoassets als Einsatz verwenden, um Transaktionen in einer Blockchain zu validieren.',
      },
      {
        id: 3,
        text: 'Proof of Stake ist ein Konsensmechanismus in der Blockchain, bei dem Teilnehmer Münzen besitzen und halten, um Transaktionen zu validieren.',
      },
    ],
    correctAnswerIndex: 3,
  },
  {
    question:
      'Was ist der Unterschied von Distributed Ledger Technology (DLT) und Blockchain?',
    options: [
      {
        id: 0,
        text: 'DLT ermöglicht die gemeinsame Datenverwaltung in einem verteilten Netzwerk, während Blockchain speziell auf die Verkettung von Blöcken fokussiert ist.',
      },
      {
        id: 1,
        text: 'Der Hauptunterschied zwischen DLT und Blockchain liegt darin, dass DLT auf zzentralisierten Servern basiert, während Blockchain dezentral ist.',
      },
      {
        id: 2,
        text: 'In einer Blockchain können nur bestimmte, vertrauenswürdige Teilnehmer Transaktionen durchführen, während DLT allen Benutzern offensteht.',
      },
      {
        id: 3,
        text: 'DLT und Blockchain sind identische Begriffe und können austauschbar verwendet werden.',
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    question: 'Welche Anwendungsbereiche haben Blockchain-Technologien?',
    options: [
      { id: 0, text: 'Finanzsektor' },
      { id: 1, text: 'Supply-Chain Management' },
      { id: 2, text: 'Smarte Verträge' },
      { id: 3, text: 'Alle oben genannten Möglichkeiten.' },
    ],
    correctAnswerIndex: 3,
  },
  // Add more questions here...
];

function IntroductionCryptoAssetsQuiz() {
  return (
    <div className="App">
      <Quiz questions={questions} />
    </div>
  );
}

export default IntroductionCryptoAssetsQuiz;
