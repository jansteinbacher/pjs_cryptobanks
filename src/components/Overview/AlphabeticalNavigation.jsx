import PropTypes from 'prop-types';

function AlphabetNavigation({ selectedLetter, handleSelectLetter }) {
  return (
    <div className="w-1/10 bg-gray-100 p-4">
      <ul className="uppercase">
        {Array.from(Array(26)).map((_, index) => {
          const letter = String.fromCharCode(65 + index);
          return (
            <button
              type="button"
              key={letter}
              className={`cursor-pointer ${
                selectedLetter === letter ? 'text-blue-500' : 'text-black'
              }`}
              onClick={() => handleSelectLetter(letter)}
            >
              {letter}
            </button>
          );
        })}
      </ul>
    </div>
  );
}

AlphabetNavigation.propTypes = {
  selectedLetter: PropTypes.string.isRequired,
  handleSelectLetter: PropTypes.func.isRequired,
};

export default AlphabetNavigation;
