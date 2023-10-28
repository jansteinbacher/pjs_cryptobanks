import PropTypes from 'prop-types';

// RewardBanner component to display an achievement message
function RewardBanner({ sectionIndex }) {
  return (
    <div className="reward-banner">
      <span className="mr-2" role="img" aria-label="Achievement Icon">
        🏆
      </span>
      Glückwunsch! Sie haben den {sectionIndex}. Artikel abgeschlossen.
    </div>
  );
}

// Define prop types for the RewardBanner component
RewardBanner.propTypes = {
  sectionIndex: PropTypes.number.isRequired, // The index of the completed section
};

export default RewardBanner;
