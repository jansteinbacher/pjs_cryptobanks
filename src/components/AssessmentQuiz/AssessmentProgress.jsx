import PropTypes from 'prop-types';

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

AssessmentProgress.propTypes = {
  numAnswered: PropTypes.number.isRequired,
  numCorrect: PropTypes.number.isRequired,
  remainingQuestions: PropTypes.number.isRequired,
};

export default AssessmentProgress;
