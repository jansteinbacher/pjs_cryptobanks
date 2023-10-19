import PropTypes from 'prop-types';

function NavigationButtons({
  isFirstSection,
  isLastSection,
  handlePreviousSection,
  handleNextSection,
  buttonDestination,
}) {
  return (
    <div className="flex flex-col md:flex-row justify-center mt-4 space-y-2 md:space-y-0 md:space-x-2">
      {!isFirstSection && (
        <button
          type="button"
          onClick={handlePreviousSection}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded"
        >
          Zurück
        </button>
      )}
      {isLastSection ? (
        <a
          href={buttonDestination}
          className="bg-green-400 hover:bg-green-600 text-white font-bold py-3 px-6 rounded"
        >
          Abschließen
        </a>
      ) : (
        <button
          type="button"
          onClick={handleNextSection}
          className="bg-green-400 hover-bg-green-600 text-white font-bold py-3 px-6 rounded"
        >
          Weiter
        </button>
      )}
    </div>
  );
}

NavigationButtons.propTypes = {
  isFirstSection: PropTypes.bool.isRequired,
  isLastSection: PropTypes.bool.isRequired,
  handlePreviousSection: PropTypes.func.isRequired,
  handleNextSection: PropTypes.func.isRequired,
  buttonDestination: PropTypes.string.isRequired,
};

export default NavigationButtons;
