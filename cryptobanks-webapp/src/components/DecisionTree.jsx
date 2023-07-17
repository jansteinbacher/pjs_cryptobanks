import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Question({ question, answers, updateAnswer }) {
  return (
    <div className="flex flex-col items-center">
  <p className="text-xl mb-8 text-center">{question}</p>
  <div className="flex space-x-4">
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
    geschaeftsmodelle: null,
  });

  const questions = [
    {
      question: 'Hast du dich bereits mit Kryptoassets beschäftigt?',
      answers: ['Ja', 'Nein'],
      stateKey: 'kryptoassets',
    },
    {
      question: 'Möchtest Du mehr über Regulatorik erfahren?',
      answers: ['Ja', 'Nein'],
      stateKey: 'regulatorik',
    },
    {
      question: 'Möchtest du mehr über Geschäftsmodelle erfahren?',
      answers: ['Ja', 'Nein'],
      stateKey: 'geschaeftsmodelle',
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
          updateAnswer={(answer) => handleAnswerUpdate(currentQuestionData.stateKey, answer)}
        />
      ) : (
        <div>
          {answers.kryptoassets === 'Ja' && 

              <li className='mb-8'>
              <strong>Kryptoassets</strong>
              <ul className="list-disc pl-6 mt-4">
                <li>
                  <Link className='hover:underline' to="/articles/introductioncryptoassets">Einführung in Kryptoassets</Link>
                </li>
                <li>
                  <Link className='hover:underline'  to="/articles/introductionblockchain">Grundlagen der Blockchain-Technologie</Link>
                </li>
                <li>
                  <Link className='hover:underline'  to="/articles/introductiontoken">Token</Link>
                </li>
                <li>
                  <Link className='hover:underline'  to="/articles/introductiontrade">Handel mit Kryptowährungen</Link>
                </li>
              </ul>
              </li>

          }
          {answers.regulatorik === 'Ja' && 
          
            <li className='mb-8'>
            <strong>Regulatorik</strong>
            <ul className="list-disc pl-6 mt-4">
              <li>
                <Link className='hover:underline' to="/">Übersicht verschiedener Regulierungen in Deutschland</Link>
              </li>
              <li>
                <Link className='hover:underline'  to="/">Herausforderungen bei der Integration von Kryptoassets</Link>
              </li>
              <li>
                <Link className='hover:underline'  to="/">Globale Regulierungen</Link>
              </li>
            </ul>
            </li>
            
          }
          {answers.geschaeftsmodelle === 'Ja' && 
          
          <li className='mb-8'>
            <strong>Geschäftsmodelle</strong>
            <ul className="list-disc pl-6 mt-4">
              <li>
                <Link className='hover:underline' to="/">Marktreife verschiedener Kryptoassets-Dienstleistungen</Link>
              </li>
              <li>
                <Link className='hover:underline'  to="/">Geschäftsmodellinnovation</Link>
              </li>
              <li>
                <Link className='hover:underline'  to="/">Handlungsempfehlungen aus Experteninterviews</Link>
              </li>
            </ul>
            </li>

          }
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Individueller Lernplan</h1>
      <DecisionTree />
    </div>
  );
}

export default App;
