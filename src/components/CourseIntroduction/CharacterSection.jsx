import PropTypes from 'prop-types';

// CharacterSection component is used to display a video on the course introduction page
function CharacterSection({ title, text, invitation, videoSource }) {
  return (
    <div className="p-6 mb-12 bg-green-200 rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        {title} {/* Display the title */}
      </h2>
      <p className="italic mb-4">
        {text} {/* Display the text */}
      </p>
      <p className="italic font-semibold mb-8">
        {invitation} {/* Display the invitation */}
      </p>
      {/* eslint-disable jsx-a11y/media-has-caption */}
      <video controls className="w-full h-full rounded-lg">
        <source src={videoSource} type="video/mp4" />{' '}
        {/* Display the video with the source link */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

// Define the expected prop types for the CharacterSection component
CharacterSection.propTypes = {
  title: PropTypes.string.isRequired, // Requires a string for the title
  text: PropTypes.string.isRequired, // Requires a string for the text
  invitation: PropTypes.string.isRequired, // Requires a string for the invitation
  videoSource: PropTypes.string.isRequired, // Requires a string for the video source
};

export default CharacterSection;
