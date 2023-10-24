// DecisionTree.js
import { useState } from 'react';
import Question from './Question';
import ResourceList from './ResourceList';

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
            <ResourceList
              title="Kryptoassets"
              links={[
                {
                  id: '1',
                  to: '/introduction-crypto-assets?from=decisiontree',
                  label: 'Einführung in Kryptoassets',
                  duration: '30 Minuten',
                },
                {
                  id: '2',
                  to: '/types-of-crypto-assets?from=decisiontree',
                  label: 'Arten von Kryptoassets',
                  duration: '30 Minuten',
                },
                {
                  id: '3',
                  to: '/opportunities-challenges-crypto-assets?from=decisiontree',
                  label:
                    'Herausforderungen und Zukunftsaussichten von Kryptoassets',
                  duration: '30 Minuten',
                },
              ]}
            />
          )}

          {answers.blockchain === 'Ja' && (
            <ResourceList
              title="Blockchain-Technologie"
              links={[
                {
                  id: '4',
                  to: '/introduction-blockchain?from=decisiontree',
                  label: 'Einführung in die Blockchain-Technologie',
                  duration: '30 Minuten',
                },
              ]}
            />
          )}

          {answers.regulatorik === 'Ja' && (
            <ResourceList
              title="Regulatorik"
              links={[
                {
                  id: '5',
                  to: '/crypto-asset-regulation?from=decisiontree',
                  label:
                    'Regulatorische Landschaft auf nationaler und internationaler Ebene',
                  duration: '30 Minuten',
                },
              ]}
            />
          )}

          {answers.anwendungsmöglichkeiten === 'Ja' && (
            <ResourceList
              title="Anwendungsmöglichkeiten"
              links={[
                {
                  id: '6',
                  to: '/crypto-asset-services?from=decisiontree',
                  label: 'Potenzielle Anwendungsfelder von Kryptoassets',
                  duration: '30 Minuten',
                },
              ]}
            />
          )}

          {answers.verwahrung === 'Ja' && (
            <ResourceList
              title="Kryptoasset-Verwahrung"
              links={[
                {
                  id: '7',
                  to: '/introduction-crypto-custody?from=decisiontree',
                  label: 'Einführung in die Kryptoasset-Verwahrung',
                  duration: '30 Minuten',
                },
                {
                  id: '8',
                  to: '/crypto-custody-application-areas?from=decisiontree',
                  label: 'Arten von Verwahrlösungen',
                  duration: '1 Stunde',
                },
                {
                  id: '9',
                  to: '/crypto-custody-regulation?from=decisiontree',
                  label: 'Regulatorik zu Kryptoasset-Verwahrung',
                  duration: '30 Minuten',
                },
                {
                  id: '10',
                  to: '/crypto-custody-challenges?from=decisiontree',
                  label:
                    'Herausforderungen und Zukunftsaussichten der Kryptoasset-Verwahrung',
                  duration: '30 Minuten',
                },
              ]}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default DecisionTree;
