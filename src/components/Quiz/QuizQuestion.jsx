import PropTypes from 'prop-types';

function QuizQuestion({ question, options, answered, handleAnswerSelect }) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-8">{question}</h3>
      <div className="space-y-4">
        {options.map((option) => (
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
    </div>
  );
}

QuizQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  answered: PropTypes.bool.isRequired,
  handleAnswerSelect: PropTypes.func.isRequired,
};

export default QuizQuestion;
