import PropTypes from 'prop-types';

function ProgressBar({ progress }) {
  return (
    <div className="w-full bg-gray-300 rounded overflow-hidden h-2">
      <div className="bg-green-400 h-full" style={{ width: `${progress}%` }} />
    </div>
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
};

export default ProgressBar;
