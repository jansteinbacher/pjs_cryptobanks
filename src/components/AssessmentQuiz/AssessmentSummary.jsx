import PropTypes from 'prop-types';

// This component displays a summary of assessment results with a recommendation and buttons for recommended courses.
function AssessmentSummary({
  recommendationText,
  recommendedCourseLink,
  recommendedCourseText,
}) {
  return (
    <>
      <p className="text-lg mt-4">{recommendationText}</p>
      <div className="flex space-x-4 mt-2">
        <a href={recommendedCourseLink}>
          <button
            type="button"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded"
          >
            {recommendedCourseText}
          </button>
        </a>
        <a href="/course-overview">
          <button
            type="button"
            className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded"
          >
            Kursübersicht
          </button>
        </a>
      </div>
    </>
  );
}

// PropTypes for documenting the expected props.
AssessmentSummary.propTypes = {
  recommendationText: PropTypes.string.isRequired, // The text of the assessment recommendation.
  recommendedCourseLink: PropTypes.string.isRequired, // The link to the recommended course.
  recommendedCourseText: PropTypes.string.isRequired, // The text for the recommended course button.
};

export default AssessmentSummary; // Export the AssessmentSummary component
