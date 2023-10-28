import PropTypes from 'prop-types';

// This component represents a search input box with search suggestions.
function SearchBox({
  searchQuery,
  handleSearch,
  searchSuggestions,
  showSuggestions,
  setSearchQuery,
  setShowSuggestions,
}) {
  return (
    <div className="flex justify-center">
      <div className="w-1/2 relative">
        <input
          type="text"
          placeholder="Was möchtest du wissen?..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full p-2 border rounded-md mb-4"
        />
        {showSuggestions && (
          <ul
            className="list-none p-2 bg-white border border-gray-300 absolute"
            style={{ width: '100%', left: '0' }}
          >
            {searchSuggestions.map((suggestion) => (
              <li
                key={suggestion}
                className="cursor-pointer hover:bg-gray-200 p-2"
              >
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery(suggestion);
                    setShowSuggestions(false);
                  }}
                >
                  {suggestion}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

// PropTypes for documenting the expected props.
SearchBox.propTypes = {
  searchQuery: PropTypes.string.isRequired, // The current search query.
  handleSearch: PropTypes.func.isRequired, // The function to handle search input.
  searchSuggestions: PropTypes.arrayOf(PropTypes.string).isRequired, // An array of search suggestions.
  showSuggestions: PropTypes.bool.isRequired, // Flag to show/hide search suggestions.
  setSearchQuery: PropTypes.func.isRequired, // The function to set the search query.
  setShowSuggestions: PropTypes.func.isRequired, // The function to set the showSuggestions flag.
};

export default SearchBox;
