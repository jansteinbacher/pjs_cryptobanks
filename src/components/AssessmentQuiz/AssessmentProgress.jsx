import PropTypes from 'prop-types';

// Display the progress of the Quiz with number of answered questions, right answers and remaining questions
function AssessmentProgress({ numAnswered, numCorrect, remainingQuestions }) {
  return (
    <div className="bg-gray-200 p-4 rounded">
      <h3 className="text-xl font-bold mb-4">📈 Quiz Fortschritt</h3>
      <p>Beantwortete Fragen: {numAnswered}</p>
      <p>Richtige Antworten: {numCorrect}</p>
      <p>Verbleibende Fragen: {remainingQuestions}</p>
    </div>
  );
}

// Define the expected prop types for the AssessmentProgress component
AssessmentProgress.propTypes = {
  numAnswered: PropTypes.number.isRequired, // Requires a number for numAnswered
  numCorrect: PropTypes.number.isRequired, // Requires a number for numCorrect
  remainingQuestions: PropTypes.number.isRequired, // Requires a number for remainingQuestions
};

export default AssessmentProgress;
