import PropTypes from 'prop-types';

// display the course celebration Video on the End Page of the Courses in a muted loop
function CourseCelebrationVideo({ videoSource }) {
  return (
    <div className="lg:w-1/2">
      <video autoPlay loop muted className="w-full">
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

CourseCelebrationVideo.propTypes = {
  videoSource: PropTypes.string.isRequired, // Define prop type for videoSource
};

export default CourseCelebrationVideo;
