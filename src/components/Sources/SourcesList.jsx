import PropTypes from 'prop-types';
import SourceItem from './SourceItem';

// This component renders a list of source items based on the provided sources data.
function SourcesList({ sources }) {
  return (
    <div className="source-list leading-relaxed mt-4">
      <ul>
        {sources.map((source) => (
          // Render each source item using the SourceItem component.
          <SourceItem key={source.id} id={source.id} text={source.text} />
        ))}
      </ul>
    </div>
  );
}

// PropTypes for documenting the expected props.
SourcesList.propTypes = {
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // A unique identifier for the source.
      text: PropTypes.string.isRequired, // The text content of the source.
    }),
  ).isRequired, // An array of source objects.
};

export default SourcesList;
