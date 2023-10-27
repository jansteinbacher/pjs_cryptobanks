import PropTypes from 'prop-types';

function ExpertOpinion({ showFootnote, showHeadline, paragraphs }) {
  return (
    <div>
      {showHeadline && (
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Aus diesem Grund ist für dich und deine Bank das Thema relevant:
        </h2>
      )}
      <div className="p-6 mb-12 bg-indigo-200 rounded-lg">
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

ExpertOpinion.propTypes = {
  showFootnote: PropTypes.bool.isRequired,
  showHeadline: PropTypes.bool.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ExpertOpinion;
