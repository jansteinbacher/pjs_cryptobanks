import PropTypes from 'prop-types';

// This component represents an assessment question with answer options.
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

// PropTypes for documenting the expected props.
AssessmentQuestion.propTypes = {
  question: PropTypes.string.isRequired, // The assessment question text.
  options: PropTypes.arrayOf(PropTypes.string).isRequired, // An array of answer options.
  handleAnswerSelect: PropTypes.func.isRequired, // The function to handle answer selection.
  answered: PropTypes.bool.isRequired, // A flag indicating whether the question has been answered.
};

export default AssessmentQuestion;
