import PropTypes from 'prop-types';

// This component displays the result of the quiz, including the percentage of correct answers and options for restarting the quiz.
function QuizResult({
  percentageCorrect,
  numCorrectAnswers,
  questions,
  restartQuiz,
}) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-8">🏆 Quiz Completed!</h3>
      {percentageCorrect >= 50 ? (
        <p>
          Congratulations! You answered {numCorrectAnswers} out of{' '}
          {questions.length} questions correctly. 🎉🥳
        </p>
      ) : (
        <>
          <p>
            Try again. You answered {numCorrectAnswers} out of{' '}
            {questions.length} questions correctly. 🙌
          </p>
          <button
            type="button"
            className="bg-green-500 hover-bg-green-700 text-white font-bold py-3 px-4 rounded"
            onClick={restartQuiz}
          >
            Restart Quiz
          </button>
        </>
      )}
    </div>
  );
}

// PropTypes for documenting the expected props.
QuizResult.propTypes = {
  percentageCorrect: PropTypes.number.isRequired, // The percentage of correct answers.
  numCorrectAnswers: PropTypes.number.isRequired, // The number of correct answers.
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired, // The text of the quiz question.
      options: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired, // The text of the answer option.
          id: PropTypes.number.isRequired, // A unique identifier for the option.
        }),
      ).isRequired, // An array of answer options.
      correctAnswerIndex: PropTypes.number.isRequired, // The index of the correct answer option.
      pairs: PropTypes.arrayOf(PropTypes.shape({})), // An optional array of pair-based questions and answers.
    }),
  ).isRequired, // An array of quiz questions.
  restartQuiz: PropTypes.func.isRequired, // A function to restart the quiz.
};

export default QuizResult;
