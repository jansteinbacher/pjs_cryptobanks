import PropTypes from 'prop-types';

// NavigationButtons component for navigating between sections in a module
function NavigationButtons({
  isFirstSection,
  isLastSection,
  handlePreviousSection,
  handleNextSection,
  buttonDestination,
}) {
  return (
    <div className="flex flex-col md:flex-row justify-center mt-4 space-y-2 md:space-y-0 md:space-x-2">
      {/* Display a "Zurück" (Back) button if it's not the first section */}
      {!isFirstSection && (
        <button
          type="button"
          onClick={handlePreviousSection}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded"
        >
          Zurück
        </button>
      )}
      {/* Display an "Abschließen" (Complete) button if it's the last section, 
      otherwise, display a "Weiter" (Next) button */}
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

// Define prop types for the NavigationButtons component
NavigationButtons.propTypes = {
  isFirstSection: PropTypes.bool.isRequired, // Indicates if it's the first section
  isLastSection: PropTypes.bool.isRequired, // Indicates if it's the last section
  handlePreviousSection: PropTypes.func.isRequired, // Function to go to the previous section
  handleNextSection: PropTypes.func.isRequired, // Function to go to the next section
  buttonDestination: PropTypes.string.isRequired, // URL for the completion button
};

export default NavigationButtons;
