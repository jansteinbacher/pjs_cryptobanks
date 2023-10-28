import PropTypes from 'prop-types';

function FactCheckMyth({ myth, onToggle }) {
  return (
    <div className="sources border border-gray-400 rounded p-4 mb-12">
      <button
        type="button"
        className="text-lg font-semibold text-gray-800 mb-4 cursor-pointer hover:underline"
        onClick={onToggle}
        onKeyPress={onToggle}
      >
        {myth.title} {myth.isOpen ? '↓' : '→'}
      </button>
      {myth.isOpen && <p className="text-justify">{myth.content}</p>}
    </div>
  );
}

FactCheckMyth.propTypes = {
  myth: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default FactCheckMyth;
