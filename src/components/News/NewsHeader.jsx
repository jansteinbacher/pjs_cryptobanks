import PropTypes from 'prop-types';
import QueryButton from './QueryButton';

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

NewsHeader.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default NewsHeader;
