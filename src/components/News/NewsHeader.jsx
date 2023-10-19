import PropTypes from 'prop-types';

function NewsHeader({ query, setQuery }) {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">News aus der Kryptowelt</h1>
      <div className="flex justify-center space-x-4">
        <button
          type="button"
          className={`px-4 py-2 rounded-lg font-semibold ${
            query === 'crypto&lang=en'
              ? 'bg-green-500 text-white'
              : 'bg-gray-300 text-gray-700'
          }`}
          onClick={() => setQuery('crypto&lang=en')}
        >
          Aus aller Welt
        </button>
        <button
          type="button"
          className={`px-4 py-2 rounded-lg font-semibold ${
            query === 'Krypto Deutschland&lang=de'
              ? 'bg-green-500 text-white'
              : 'bg-gray-300 text-gray-700'
          }`}
          onClick={() => setQuery('Krypto Deutschland&lang=de')}
        >
          Deutschland
        </button>
      </div>
    </div>
  );
}

NewsHeader.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default NewsHeader;
