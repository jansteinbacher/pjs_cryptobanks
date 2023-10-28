import PropTypes from 'prop-types';
import QueryButton from './QueryButton';

// NewsHeader component for displaying the news section title and query buttons
function NewsHeader({ query, setQuery }) {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">News aus der Kryptowelt</h1>
      <div className="flex justify-center space-x-4">
        <QueryButton
          query={query}
          setQuery={setQuery}
          text="Aus aller Welt"
          activeQuery="crypto&lang=en"
        />
        <QueryButton
          query={query}
          setQuery={setQuery}
          text="Deutschland"
          activeQuery="Krypto Deutschland&lang=de"
        />
      </div>
    </div>
  );
}

// Define prop types for the NewsHeader component
NewsHeader.propTypes = {
  query: PropTypes.string.isRequired, // The current search query
  setQuery: PropTypes.func.isRequired, // Function to update the search query
};

export default NewsHeader;
