import PropTypes from 'prop-types';

function Node({ nodeData, onInputChange, onSubmitAnswer, onShowAnswer }) {
  const handleInputChange = (event) => {
    onInputChange(nodeData.name, event.target.value);
  };

  const handleSubmitAnswer = () => {
    onSubmitAnswer(nodeData.name);
  };

  const handleShowAnswer = () => {
    onShowAnswer(nodeData.name);
  };

  return (
    <div className="node">
      <h2>{nodeData.name}</h2>
      {nodeData.input !== undefined && (
        <input
          type="text"
          placeholder="Your guess"
          value={nodeData.input}
          onChange={handleInputChange}
        />
      )}
      {!nodeData.showAnswer && (
        <button type="button" onClick={handleSubmitAnswer}>
          Submit Answer
        </button>
      )}
      {nodeData.showAnswer && (
        <div>
          Correct Answer: {nodeData.correctAnswer}
          <button type="button" onClick={handleShowAnswer}>
            Show Answer
          </button>
        </div>
      )}
    </div>
  );
}

Node.propTypes = {
  nodeData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    input: PropTypes.string,
    showAnswer: PropTypes.bool.isRequired,
    correctAnswer: PropTypes.string,
  }).isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSubmitAnswer: PropTypes.func.isRequired,
  onShowAnswer: PropTypes.func.isRequired,
};

export default Node;
