import PropTypes from 'prop-types';

function AssessmentQuestion({
  question,
  options,
  handleAnswerSelect,
  answered,
}) {
  return (
    <>
      <h3 className="text-xl font-bold mb-8">{question}</h3>
      <div className="flex items-center justify-center">
        <div className="space-y-4">
          {options.map((option, index) => (
            <button
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              type="button"
              className={`bg-green-400 hover-bg-green-600 text-white w-[85%] font-bold py-3 px-4 rounded ${
                answered ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              onClick={() => handleAnswerSelect(index)}
              disabled={answered}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

AssessmentQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleAnswerSelect: PropTypes.func.isRequired,
  answered: PropTypes.bool.isRequired,
};

export default AssessmentQuestion;
