import PropTypes from 'prop-types';
import SourceItem from './SourceItem';

function SourcesList({ sources }) {
  return (
    <div className="source-list leading-relaxed mt-4">
      <ul>
        {sources.map((source) => (
          <SourceItem key={source.id} id={source.id} text={source.text} />
        ))}
      </ul>
    </div>
  );
}

SourcesList.propTypes = {
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default SourcesList;
