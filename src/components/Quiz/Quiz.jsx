import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import QuizQuestion from './QuizQuestion';
import QuizResult from './QuizResult';
import QuizProgress from './QuizProgress';

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
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          🧠 Quiz
        </h2>
        <div className="mb-8">
          {!quizFinished ? (
            <>
              <QuizQuestion
                question={questions[currentQuestionIndex].question}
                options={questions[currentQuestionIndex].options}
                answered={answered}
                handleAnswerSelect={handleAnswerSelect}
              />
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
            <QuizResult
              percentageCorrect={percentageCorrect}
              numCorrectAnswers={numCorrectAnswers}
              questions={questions}
              restartQuiz={restartQuiz}
            />
          )}
        </div>
      </div>
      <div className="w-full p-4 md:pl-8 mt-4">
        <QuizProgress
          userAnswers={userAnswers}
          numCorrectAnswers={numCorrectAnswers}
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
        />
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
      pairs: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  ).isRequired,
};

export default Quiz;
