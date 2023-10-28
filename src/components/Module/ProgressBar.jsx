import PropTypes from 'prop-types';

// ProgressBar component for visualizing the progress of a module
function ProgressBar({ progress }) {
  return (
    <div className="w-full bg-gray-300 rounded overflow-hidden h-2">
      <div className="bg-green-400 h-full" style={{ width: `${progress}%` }} />
    </div>
  );
}

// Define prop types for the ProgressBar component
ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired, // The progress value to be displayed (in percentage)
};

export default ProgressBar;
