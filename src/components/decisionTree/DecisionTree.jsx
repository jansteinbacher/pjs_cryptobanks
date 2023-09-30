import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Question({ question, answers, updateAnswer }) {
  return (
    <div
      id="decisiontree"
      className="container mx-auto py-12 px-12 max-w-screen-xl h-screen w-screen flex flex-col justify-center items-center mt-[-8rem]"
    >
      <p className="text-xl mb-8 text-center">{question}</p>
      <div className="flex flex-col justify-center md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        {answers.map((answer) => (
          <button
            key={answer}
            onClick={() => updateAnswer(answer)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}

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
                  <Link className="hover:underline" to="/course-cryptoassets">
                    Einführung in Kryptoassets (Dauer 2 Stunden)
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
                  <Link className="hover:underline" to="/course-blockchain">
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
                    to="/course-cryptoassetsregulation"
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
                    to="/course-cryptoassetservices"
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
                    to="/course-cryptoassetssafeguarding"
                  >
                    Einführung in die Kryptoasset-Verwahrung
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

function App() {
  return (
    <div className="container mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Individueller Lernplan</h1>
      <p className="mb-8">
        Beantworte die Fragen und erhalte individuell auf dich zugeschnittenen
        Lerneinheiten.
      </p>
      <DecisionTree />
    </div>
  );
}

export default App;
