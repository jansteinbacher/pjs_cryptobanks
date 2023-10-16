import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Quiz({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill(null),
  );
  const [answered, setAnswered] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [pairResults, setPairResults] = useState(
    Array(questions.length).fill([]),
  );
  const numPairs = (questions[currentQuestionIndex]?.pairs || []).length;

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
        pair.correctOptionIndex,
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

  const numCorrectAnswers = userAnswers.reduce((acc, userAnswer, index) => {
    if (questions[index].options) {
      return acc + (userAnswer === questions[index].correctAnswerIndex ? 1 : 0);
    }

    const pairResult = pairResults[index];
    const trueCount =
      pairResult?.filter((result) => result === true)?.length || 0;
    return acc + trueCount / numPairs;
  }, 0);

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
    <div className="container mx-auto py-6 px-4 md:px-12 max-w-screen-lg">
      <div className="w-full p-4 md:pr-8">
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
                {questions[currentQuestionIndex].options.map((option) => (
                  <button
                    type="button"
                    key={option.id}
                    className={`bg-green-400 hover:bg-green-600 text-white w-[85%] font-bold py-3 px-4 rounded ${
                      answered ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    onClick={() => handleAnswerSelect(option.id)}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
              {questions[currentQuestionIndex].pairs && (
                <button
                  type="button"
                  className="bg-green-400 hover:bg-green-600 text-white font-bold py-3 px-4 mt-4 rounded"
                  onClick={checkPairAnswers}
                >
                  Check Pairs
                </button>
              )}
            </>
          ) : (
            <>
              <h3 className="text-xl font-bold mb-8">🏆 Quiz beendet!</h3>
              {percentageCorrect >= 50 ? (
                <p>
                  Herzlichen Glückwunsch! Du hast {numCorrectAnswers} von{' '}
                  {questions.length} Fragen richtig beantwortet. 🎉🥳
                </p>
              ) : (
                <>
                  <p>
                    Versuche es noch einmal. Du hast {numCorrectAnswers} von{' '}
                    {questions.length} Fragen richtig beantwortet. 🙌
                  </p>
                  <button
                    type="button"
                    className="bg-green-500 hover-bg-green-700 text-white font-bold py-3 px-4 rounded"
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
            Beantwortete Fragen:{' '}
            {userAnswers.filter((answer) => answer !== null).length}
          </p>
          <p>Richtige Antworten: {numCorrectAnswers}</p>
          <p>Verbleibende Fragen: {questions.length - currentQuestionIndex}</p>
        </div>
      </div>
    </div>
  );
}

Quiz.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          id: PropTypes.number.isRequired,
        }),
      ).isRequired,
      correctAnswerIndex: PropTypes.number.isRequired,
      pairs: PropTypes.arrayOf(
        PropTypes.shape({
          // Define pair prop types here
        }),
      ),
    }),
  ).isRequired,
};

export default Quiz;
