import PropTypes from 'prop-types';

function Question({ question, answers, updateAnswer }) {
  return (
    <div
      id="decisiontree"
      className="container mx-auto py-12 px-12 max-w-screen-xl h-screen w-screen flex flex-col justify-center items-center mt-[-8rem]"
    >
      <p className="text-xl mb-8 text-center">{question}</p>
      <div className="flex flex-col justify-center md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        {answers.map((answer) => (
          <button
            key={answer}
            type="button" // Add this line
            onClick={() => updateAnswer(answer)}
            className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}
Question.propTypes = {
  question: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateAnswer: PropTypes.func.isRequired,
};

export default Question;
