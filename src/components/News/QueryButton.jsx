import PropTypes from 'prop-types';

// QueryButton component for rendering a button to change the news query
function QueryButton({ query, setQuery, text, activeQuery }) {
  // Check if the button is currently active
  const isActive = query === activeQuery;
  const buttonClass = isActive
    ? 'bg-green-300 text-black' // CSS classes for an active button
    : 'bg-gray-100 text-gray-700'; // CSS classes for an inactive button

  // Function to handle button click and update the query
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

// Define prop types for the QueryButton component
QueryButton.propTypes = {
  query: PropTypes.string.isRequired, // The current query
  setQuery: PropTypes.func.isRequired, // Function to update the query
  text: PropTypes.string.isRequired, // The text displayed on the button
  activeQuery: PropTypes.string.isRequired, // The query to activate when clicked
};

export default QueryButton;
