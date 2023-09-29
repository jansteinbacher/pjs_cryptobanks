import React, { useState, useEffect } from "react";

const CryptoAssetServicesQuiz = () => {
  const questions = [
    {
      question:
        "Was stellt eine potenzielle Krypto-Dienstleistung für Banken dar?",
      options: [
        "Das Minen von neuen Kryptowährungen.",
        "Teilnahme in einer Blockchain.",
        "Ausgabe von Kryptowertpapieren.",
        "Alle oben genannten Punkte.",
      ],
      correctAnswerIndex: 2,
    },
    {
      question: "Wie zeichnen sich Kredite auf der Blockchain-Technologie aus?",
      options: [
        "Kredite auf der Blockchain-Technologie benötigen keine Besicherung.",
        "Bei Krediten auf der Blockchain-Technologie erfolgt die Berücksichtigung der Kreditwürdigkeit durch das Hinterlegen von Kryptoassets als Besicherung.",
        "Sie sind 1:1 mit traditionellen Krediten vergleichbar",
        "Keines der oben genannten Punkte.",
      ],
      correctAnswerIndex: 1,
    },
    {
      question:
        "Welche Art von Kryptowährungen eignet sich für die Automatisierung von Geschäftsprozessen mithilfe von Smart Contracts?",
      options: [
        "Vollständig gedeckte Kryptowährungen.",
        "Kryptowährungen mit hoher Volatilität.",
        "Nicht gedeckte Kryptowährungen.",
        "Fiatwährungen.",
      ],
      correctAnswerIndex: 0,
    },

    // Add more questions here...
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill(null)
  );
  const [answered, setAnswered] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [pairResults, setPairResults] = useState(
    Array(questions.length).fill([])
  );
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
    newPairResults[currentQuestionIndex] = questions[
      currentQuestionIndex
    ].pairs.map(
      (pair, pairIndex) =>
        userAnswers[currentQuestionIndex]?.[pairIndex] ===
        pair.correctOptionIndex
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
    newUserAnswers[currentQuestionIndex] =
      newUserAnswers[currentQuestionIndex] || []; // Initialize the array if it's not already
    newUserAnswers[currentQuestionIndex][pairIndex] = selectedOptionIndex;
    setUserAnswers(newUserAnswers);
  };

  const numCorrectAnswers = userAnswers
    .map((userAnswer, index) => {
      if (questions[index].options) {
        return userAnswer === questions[index].correctAnswerIndex ? 1 : 0;
      } else {
        return (
          pairResults[index]?.filter((result) => result === true)?.length /
            numPairs || 0
        );
      }
    })
    .reduce((acc, val) => acc + val, 0);

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
    <div className="container mx-auto py-6 px-4 md:px-12 max-w-screen-lg ">
      <div className="w-full p-4 md:pr-8 ">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          🧠 Quiz
        </h2>
        <div className="mb-8">
          {!quizFinished ? (
            <>
              <h3 className="text-xl font-bold mb-8">
                {questions[currentQuestionIndex].question}
              </h3>
              <div className="space-y-4">
                {questions[currentQuestionIndex].options
                  ? // For standard multiple-choice questions
                    questions[currentQuestionIndex].options.map(
                      (option, index) => (
                        <button
                          key={index}
                          className={`bg-green-400 hover:bg-green-600 text-white w-[85%] font-bold py-3 px-4 rounded ${
                            answered ? "opacity-50 cursor-not-allowed" : ""
                          }`}
                          onClick={() => handleAnswerSelect(index)}
                        >
                          {option}
                        </button>
                      )
                    )
                  : // For new text-dropdown pairs
                    questions[currentQuestionIndex].pairs.map(
                      (pair, pairIndex) => (
                        <div key={pairIndex} className="flex mb-2">
                          <div className="w-1/2 pr-2">{pair.text}</div>
                          <div className="w-1/2 pl-2">
                            <select
                              value={
                                userAnswers[currentQuestionIndex]?.[
                                  pairIndex
                                ] || ""
                              }
                              onChange={(event) =>
                                handlePairAnswerSelect(event, pairIndex)
                              }
                            >
                              {pair.options.map((option, optionIndex) => (
                                <option key={optionIndex} value={optionIndex}>
                                  {option}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      )
                    )}
              </div>
              {questions[currentQuestionIndex].pairs && (
                <button
                  className="bg-green-400 hover:bg-green-600 text-white font-bold py-3 px-4 mt-4 rounded"
                  onClick={checkPairAnswers}
                >
                  Check Pairs
                </button>
              )}
            </>
          ) : (
            // Show the final score and appropriate message after all questions are answered
            <>
              <h3 className="text-xl font-bold mb-8">🏆 Quiz beendet!</h3>
              {percentageCorrect >= 50 ? (
                <p>
                  Herzlichen Glückwunsch! Du hast {numCorrectAnswers} von{" "}
                  {questions.length} Fragen richtig beantwortet. 🎉🥳
                </p>
              ) : (
                <>
                  <p>
                    Versuche es noch einmal. Du hast {numCorrectAnswers} von{" "}
                    {questions.length} Fragen richtig beantwortet. 🙌
                  </p>
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded"
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
      <div className="w-full p-4 md:pl-8 mt-4">
        <div className="bg-gray-200 p-4 rounded">
          <h3 className="text-xl font-bold mb-4">📈 Quiz Fortschritt</h3>
          <p>
            Beantwortete Fragen:{" "}
            {userAnswers.filter((answer) => answer !== null).length}
          </p>
          <p>Richtige Antworten: {numCorrectAnswers}</p>
          <p>Verbleibende Fragen: {questions.length - currentQuestionIndex}</p>
        </div>
      </div>
    </div>
  );
};

export default CryptoAssetServicesQuiz;
