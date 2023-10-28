import PropTypes from 'prop-types';
//Display the start button on the intro page

function StartButton({ link }) {
  return (
    <div className="flex justify-center items-center">
      <a href={link}>
        <button
          type="button"
          className="bg-green-400 hover-bg-green-500 text-white font-bold py-2 px-4 rounded"
        >
          Beginne die Reise
        </button>
      </a>
    </div>
  );
}

// Define the expected prop type for the StartButton component
StartButton.propTypes = {
  link: PropTypes.string.isRequired, // Requires a string for the link
};

export default StartButton;
