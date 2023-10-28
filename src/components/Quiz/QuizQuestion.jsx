import PropTypes from 'prop-types';

// This component displays a quiz question and answer options, allowing users to select answers.
function QuizQuestion({ question, options, answered, handleAnswerSelect }) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-8">{question}</h3>
      <div className="space-y-4">
        {options.map((option) => (
          <button
            type="button"
            key={option.id}
            className={`bg-green-400 hover-bg-green-600 text-white w-[85%] font-bold py-3 px-4 rounded ${
              answered ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={() => handleAnswerSelect(option.id)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
}

// PropTypes for documenting the expected props.
QuizQuestion.propTypes = {
  question: PropTypes.string.isRequired, // The text of the quiz question.
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired, // The text of the answer option.
      id: PropTypes.number.isRequired, // A unique identifier for the option.
    }),
  ).isRequired, // An array of answer options.
  answered: PropTypes.bool.isRequired, // Indicates whether the question has been answered.
  handleAnswerSelect: PropTypes.func.isRequired, // A function to handle answer selection.
};

export default QuizQuestion;
