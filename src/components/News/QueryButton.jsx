import PropTypes from 'prop-types';

function QueryButton({ query, setQuery, text, activeQuery }) {
  const isActive = query === activeQuery;
  const buttonClass = isActive
    ? 'bg-green-300 text-black'
    : 'bg-gray-100 text-gray-700';

  const handleClick = () => {
    if (!isActive) {
      setQuery(activeQuery);
    }
  };

  return (
    <button
      type="button"
      className={`px-4 py-2 rounded-lg font-semibold ${buttonClass}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

QueryButton.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  activeQuery: PropTypes.string.isRequired,
};

export default QueryButton;
