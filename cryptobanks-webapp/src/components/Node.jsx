import React from 'react';

const Node = ({ nodeData, onInputChange, onSubmitAnswer, onShowAnswer }) => {
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
        <button onClick={handleSubmitAnswer}>Submit Answer</button>
      )}
      {nodeData.showAnswer && (
        <div>
          Correct Answer: {nodeData.correctAnswer}
          <button onClick={handleShowAnswer}>Show Answer</button>
        </div>
      )}
    </div>
  );
};

export default Node;
