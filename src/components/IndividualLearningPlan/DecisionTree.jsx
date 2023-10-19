import { useState } from 'react';
import { Link } from 'react-router-dom';
import Question from './Question';

// TODO: Links should open in new window
// Download Document with Lernplan
// Make it prettier

function DecisionTree() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({
    kryptoassets: null,
    regulatorik: null,
    anwendungsmöglichkeiten: null,
    verwahrung: null,
    blockchain: null,
  });

  const questions = [
    {
      question: 'Hast du dich bereits mit Kryptoassets beschäftigt?',
      answers: ['Ja', 'Nein'],
      stateKey: 'kryptoassets',
    },
    {
      question:
        'Möchtest du mehr über die zugrundeliegende Blockchain-Technologie erfahren?',
      answers: ['Ja', 'Nein'],
      stateKey: 'blockchain',
    },
    {
      question: 'Möchtest Du mehr über Regulatorik erfahren?',
      answers: ['Ja', 'Nein'],
      stateKey: 'regulatorik',
    },
    {
      question: 'Möchtest du mehr über Anwendungsmöglichkeiten erfahren?',
      answers: ['Ja', 'Nein'],
      stateKey: 'anwendungsmöglichkeiten',
    },
    {
      question:
        'Möchtest du mehr über die Verwahrung von Kryptoassets erfahren?',
      answers: ['Ja', 'Nein'],
      stateKey: 'verwahrung',
    },
  ];

  const handleAnswerUpdate = (stateKey, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [stateKey]: answer,
    }));
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const currentQuestionData = questions[currentQuestion];

  return (
    <div>
      {currentQuestion < questions.length ? (
        <Question
          question={currentQuestionData.question}
          answers={currentQuestionData.answers}
          updateAnswer={(answer) =>
            handleAnswerUpdate(currentQuestionData.stateKey, answer)
          }
        />
      ) : (
        <div>
          {answers.kryptoassets === 'Nein' && (
            <li className="mb-8">
              <strong>Kryptoassets</strong>
              <ul className="list-disc pl-6 mt-4">
                <li>
                  <Link
                    className="hover:underline"
                    to="/introduction-crypto-assets?from=decisiontree"
                  >
                    Einführung in Kryptoassets (Dauer 30 Minuten)
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline"
                    to="/types-of-crypto-assets?from=decisiontree"
                  >
                    Arten von Kryptoassets (Dauer 30 Minuten)
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline"
                    to="/opportunities-challenges-crypto-assets?from=decisiontree"
                  >
                    Herausforderungen und Zukunftsaussichten von Kryptoassets
                    (Dauer 30 Minuten)
                  </Link>
                </li>
              </ul>
            </li>
          )}
          {answers.blockchain === 'Ja' && (
            <li className="mb-8">
              <strong>Blockchain-Technologie</strong>
              <ul className="list-disc pl-6 mt-4">
                <li>
                  <Link
                    className="hover:underline"
                    to="/introduction-blockchain?from=decisiontree"
                  >
                    Einführung in die Blockchain-Technologie (Dauer 30 Minuten)
                  </Link>
                </li>
              </ul>
            </li>
          )}
          {answers.regulatorik === 'Ja' && (
            <li className="mb-8">
              <strong>Regulatorik</strong>
              <ul className="list-disc pl-6 mt-4">
                <li>
                  <Link
                    className="hover:underline"
                    to="/crypto-asset-regulation?from=decisiontree"
                  >
                    Regulatorische Landschaft auf nationaler und internationaler
                    Ebene (Dauer 30 Minuten)
                  </Link>
                </li>
              </ul>
            </li>
          )}
          {answers.anwendungsmöglichkeiten === 'Ja' && (
            <li className="mb-8">
              <strong>Anwendungsmöglichkeiten</strong>
              <ul className="list-disc pl-6 mt-4">
                <li>
                  <Link
                    className="hover:underline"
                    to="/crypto-asset-services?from=decisiontree"
                  >
                    Potenzielle Anwendungsfelder von Kryptoassets (Dauer 30
                    Minuten)
                  </Link>
                </li>
              </ul>
            </li>
          )}
          {answers.verwahrung === 'Ja' && (
            <li className="mb-8">
              <strong>Kryptoasset-Verwahrung</strong>
              <ul className="list-disc pl-6 mt-4">
                <li>
                  <Link
                    className="hover:underline"
                    to="/introduction-crypto-custody?from=decisiontree"
                  >
                    Einführung in die Kryptoasset-Verwahrung (Dauer 30 Minuten)
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline"
                    to="/crypto-custody-application-areas?from=decisiontree"
                  >
                    Arten von Verwahrlösungen (Dauer 1 Stunde)
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline"
                    to="/crypto-custody-regulation?from=decisiontree"
                  >
                    Regulatorik zu Kryptoasset-Verwahrung (Dauer 30 Minuten)
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:underline"
                    to="/crypto-custody-challenges?from=decisiontree"
                  >
                    Herausforderungen und Zukunftsaussichten der
                    Kryptoasset-Verwahrung (Dauer 30 Minuten)
                  </Link>
                </li>
              </ul>
            </li>
          )}
        </div>
      )}
    </div>
  );
}

export default DecisionTree;
