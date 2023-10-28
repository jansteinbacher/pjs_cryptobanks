import PropTypes from 'prop-types';

// ExpertOpinion component displays a blue element in which expert opinions are displayed in the courses
function ExpertOpinion({ showFootnote, showHeadline, paragraphs }) {
  return (
    <div>
      {showHeadline && (
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Aus diesem Grund ist für dich und deine Bank das Thema relevant:
        </h2>
      )}
      <div className="p-6 mb-12 bg-indigo-200 rounded-lg"> {/* Blue background for the expert opinion */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4 underline">
          Expertenmeinungen{showFootnote ? '*' : ''}
        </h3>
        {paragraphs.map((text) => (
          <p className="italic mb-4" key={text}>
            {text}
          </p>
        ))}
        {showFootnote && (
          <p className="text-sm italic ">
            *Die Expertenmeinungen entstammen aus vom Projektseminar-Team
            geführten Interviews mit Experten aus dem Finanzsektor, welche im
            Reiter Experteninterviews zu finden sind.
          </p>
        )}
      </div>
    </div>
  );
}

// Define the expected prop types for the ExpertOpinion component
ExpertOpinion.propTypes = {
  showFootnote: PropTypes.bool.isRequired, // Requires a boolean for showFootnote
  showHeadline: PropTypes.bool.isRequired, // Requires a boolean for showHeadline
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired, // Requires an array of strings for paragraphs
};

export default ExpertOpinion; // Export the ExpertOpinion component
