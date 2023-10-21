import PropTypes from 'prop-types';

function VideoPlayer({ videoSource }) {
  return (
    <div>
      {/* eslint-disable jsx-a11y/media-has-caption */}
      <video controls className="w-full h-full rounded-lg">
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

VideoPlayer.propTypes = {
  videoSource: PropTypes.string.isRequired,
};

export default VideoPlayer;
