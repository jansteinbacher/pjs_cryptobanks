import PropTypes from 'prop-types';

function ProgressComponent({
  userAnswers,
  numCorrectAnswers,
  questions,
  currentQuestionIndex,
}) {
  return (
    <div className="bg-gray-200 p-4 rounded">
      <h3 className="text-xl font-bold mb-4">📈 Quiz Fortschritt</h3>
      <p>
        Beantwortete Fragen:{' '}
        {userAnswers.filter((answer) => answer !== null).length}
      </p>
      <p>Richtige Antworten: {numCorrectAnswers}</p>
      <p>Verbleibende Fragen: {questions.length - currentQuestionIndex}</p>
    </div>
  );
}

ProgressComponent.propTypes = {
  userAnswers: PropTypes.arrayOf(PropTypes.number).isRequired,
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
      pairs: PropTypes.arrayOf(
        PropTypes.shape({
          // Define pair prop types here
        }),
      ),
    }),
  ).isRequired,
  currentQuestionIndex: PropTypes.number.isRequired,
};

export default ProgressComponent;
