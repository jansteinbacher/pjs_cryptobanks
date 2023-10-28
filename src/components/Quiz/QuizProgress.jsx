import PropTypes from 'prop-types';

// This component displays the progress of a quiz, including the number of answered questions, correct answers, and remaining questions.
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

// PropTypes for documenting the expected props.
ProgressComponent.propTypes = {
  userAnswers: PropTypes.arrayOf(PropTypes.number).isRequired, // An array of user answers.
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
      pairs: PropTypes.arrayOf(
        PropTypes.shape({
          // Define pair prop types here if needed.
        }),
      ), // An optional array of pair-based questions and answers.
    }),
  ).isRequired, // An array of quiz questions.
  currentQuestionIndex: PropTypes.number.isRequired, // The index of the current question.
};

export default ProgressComponent;
