import React, { useState, useEffect } from 'react';

const Quiz = () => {
    const questions = [
        {
          question: 'Was versteht man unter Kryptowährungen?',
          options: [
            'Digitale Währungen, die auf Kryptografie basieren',
            'Physische Münzen mit eingebauter Technologie',
            'Ein Börsenindex für den Handel mit Aktien',
            'Eine Art Kreditkarte für internationale Zahlungen',
          ],
          correctAnswerIndex: 0,
        },
        {
          question: 'Was ist Bitcoin?',
          options: [
            'Eine digitale Währung, die auf Blockchain-Technologie basiert',
            'Eine neue Form von physischem Bargeld',
            'Ein Aktienindex für Technologieunternehmen',
            'Eine Art virtuelles Sammelalbum',
          ],
          correctAnswerIndex: 0,
        },
        {
          question: 'Was sind Token im Zusammenhang mit Blockchain?',
          options: [
            'Digitale Vermögenswerte, die auf einer bestehenden Blockchain ausgegeben werden',
            'Physische Gegenstände, die in der virtuellen Realität gehandelt werden',
            'Ein Index für den Handel mit Kryptowährungen',
            'Eine Art geheime Passwörter für die Authentifizierung',
          ],
          correctAnswerIndex: 0,
        },
        {
          question: 'Wie wird eine Bitcoin-Transaktion verifiziert und in die Blockchain eingefügt?',
          options: [
            'Durch Mining, bei dem Rechenleistung verwendet wird, um komplexe mathematische Probleme zu lösen',
            'Durch die physische Übergabe von Bitcoin-Münzen',
            'Durch den Kauf von Bitcoin-Aktien an der Börse',
            'Durch das Drucken einer physischen Quittung für die Transaktion',
          ],
          correctAnswerIndex: 0,
        },
        {
          question: 'Welche Bedeutung hat der Begriff "Dezentralisierung" in Bezug auf Kryptowährungen?',
          options: [
            'Das Fehlen einer zentralen Autorität oder einer Kontrollinstanz, die die Kryptowährung steuert',
            'Der Handel mit Kryptowährungen an verschiedenen Börsenplätzen',
            'Die Kombination mehrerer Kryptowährungen zu einem neuen digitalen Vermögenswert',
            'Die geheime Verschlüsselung von Kryptowährungstransaktionen',
          ],
          correctAnswerIndex: 0,
        },

        {
          question: 'Was passt zusammen?',
          pairs: [
            { text: 'Smart Contract', options: ['Select an option','Ethereum', 'Hardware', 'Software'], correctOptionIndex: 2 },
            { text: 'Proof of Work', options: ['Select an option','Konsensalgorithmus', 'Identitätsprüfung', 'Passwort'], correctOptionIndex: 2 },
            // Add more pairs here...
          ],
        },
        
        // Add more questions here...
      ];
    

      const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
      const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
      const [answered, setAnswered] = useState(false);
      const [quizFinished, setQuizFinished] = useState(false);
      const [pairResults, setPairResults] = useState(Array(questions.length).fill([]));
      const numPairs = questions[currentQuestionIndex]?.pairs?.length || 0;

      const handleAnswerSelect = (answerIndex) => {
        if (!answered) {
          const newUserAnswers = [...userAnswers];
          newUserAnswers[currentQuestionIndex] = answerIndex;
          setUserAnswers(newUserAnswers);
          setAnswered(true);

          setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
              setCurrentQuestionIndex(currentQuestionIndex + 1);
              setAnswered(false);
            } else {
              setQuizFinished(true);
            }
          }, 10);
        }
      };

      const checkPairAnswers = () => {
        const newPairResults = [...pairResults];
        newPairResults[currentQuestionIndex] = questions[currentQuestionIndex].pairs.map(
          (pair, pairIndex) =>
            userAnswers[currentQuestionIndex]?.[pairIndex] === pair.correctOptionIndex
        );
        setPairResults(newPairResults);

        setTimeout(() => {
          if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setAnswered(false);
          } else {
            setQuizFinished(true);
          }
        }, 10);
      };

      const handlePairAnswerSelect = (event, pairIndex) => {
        const newUserAnswers = [...userAnswers];
        const selectedOptionIndex = parseInt(event.target.value);
        newUserAnswers[currentQuestionIndex] = newUserAnswers[currentQuestionIndex] || []; // Initialize the array if it's not already
        newUserAnswers[currentQuestionIndex][pairIndex] = selectedOptionIndex;
        setUserAnswers(newUserAnswers);
      };

      const numCorrectAnswers = userAnswers.map((userAnswer, index) => {
        if (questions[index].options) {
          return userAnswer === questions[index].correctAnswerIndex ? 1 : 0;
        } else {
          return (pairResults[index]?.filter((result) => result === true)?.length)/numPairs || 0;
        }
      }).reduce((acc, val) => acc + val, 0);

      const percentageCorrect = (numCorrectAnswers / questions.length) * 100;

      const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setUserAnswers(Array(questions.length).fill(null));
        setAnswered(false);
        setQuizFinished(false);
        setPairResults(Array(questions.length).fill([]));
      };

      useEffect(() => {
        if (currentQuestionIndex === questions.length) {
          setAnswered(false);
          setQuizFinished(true);
        }
      }, [currentQuestionIndex, questions.length]);
        
          return (
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-3/4 p-4 md:pr-8">
                <h2 className="text-3xl font-bold mb-4">🧠 Abschlussquiz</h2>
                <div className="mb-8">
                  {!quizFinished ? (
                    <>
                      <h3 className="text-xl font-bold mb-2">{questions[currentQuestionIndex].question}</h3>
                      {questions[currentQuestionIndex].options ? (
                        // For standard multiple-choice questions
                        questions[currentQuestionIndex].options.map((option, index) => (
                          <button
                            key={index}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 mb-2 rounded"
                            onClick={() => handleAnswerSelect(index)}
                          >
                            {option}
                          </button>
                        ))
                      ) : (
                        // For new text-dropdown pairs
                        questions[currentQuestionIndex].pairs.map((pair, pairIndex) => (
                          <div key={pairIndex} className="flex mb-2">
                            <div className="w-1/2 pr-2">{pair.text}</div>
                            <div className="w-1/2 pl-2">
                              <select
                                value={userAnswers[currentQuestionIndex]?.[pairIndex] || ''}
                                onChange={(event) => handlePairAnswerSelect(event, pairIndex)}
                              >
                                {pair.options.map((option, optionIndex) => (
                                  <option key={optionIndex} value={optionIndex}>
                                    {option}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        ))
                      )}
                      {questions[currentQuestionIndex].pairs && (
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 mt-4 rounded"
                          onClick={checkPairAnswers}
                        >
                          Check Pairs
                        </button>
                      )}
                    </>
                  ) : (
                  // Show the final score and appropriate message after all questions are answered
                  <>
                    <h3 className="text-xl font-bold mb-2">🏆 Quiz beendet!</h3>
                    {percentageCorrect >= 50 ? (
                      <p>Herzlichen Glückwunsch! Du hast {numCorrectAnswers} von {questions.length} Fragen richtig beantwortet. 🎉🥳</p>
                    ) : (
                      <>
                        <p>Versuche es noch einmal. Du hast {numCorrectAnswers} von {questions.length} Fragen richtig beantwortet. 🙌</p>
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 mt-4 rounded"
                          onClick={restartQuiz}
                        >
                          Quiz neu starten
                        </button>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="w-full md:w-1/4 p-4 md:pl-8">
              <div className="bg-gray-200 p-4 rounded">
                <h3 className="text-xl font-bold mb-4">📈 Quiz Fortschritt</h3>
                <p>Beantwortete Fragen: {userAnswers.filter((answer) => answer !== null).length}</p>
                <p>Richtige Antworten: {numCorrectAnswers}</p>
                <p>Verbleibende Fragen: {questions.length - currentQuestionIndex}</p>
              </div>
            </div>
          </div>
        );
      };
      
      export default Quiz;