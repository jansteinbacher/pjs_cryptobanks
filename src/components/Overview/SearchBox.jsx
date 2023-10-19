import PropTypes from 'prop-types';

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

SearchBox.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  searchSuggestions: PropTypes.arrayOf(PropTypes.string).isRequired,
  showSuggestions: PropTypes.bool.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  setShowSuggestions: PropTypes.func.isRequired,
};

export default SearchBox;
