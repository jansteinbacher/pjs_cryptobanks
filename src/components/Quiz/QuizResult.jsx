import PropTypes from 'prop-types';

function QuizResult({
  percentageCorrect,
  numCorrectAnswers,
  questions,
  restartQuiz,
}) {
  return (
    <div>
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
    </div>
  );
}

QuizResult.propTypes = {
  percentageCorrect: PropTypes.number.isRequired,
  numCorrectAnswers: PropTypes.number.isRequired,
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
  restartQuiz: PropTypes.func.isRequired,
};

export default QuizResult;
