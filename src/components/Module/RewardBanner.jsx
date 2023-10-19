import PropTypes from 'prop-types';

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

RewardBanner.propTypes = {
  sectionIndex: PropTypes.number.isRequired,
};

export default RewardBanner;
