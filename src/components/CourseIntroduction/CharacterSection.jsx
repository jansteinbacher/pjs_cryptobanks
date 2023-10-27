import PropTypes from 'prop-types';

function CharacterSection({ title, text, invitation, videoSource }) {
  return (
    <div className="p-6 mb-12 bg-green-200 rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">{title}</h2>
      <p className="italic mb-4">{text}</p>
      <p className="italic font-semibold mb-8">{invitation}</p>
      {/* eslint-disable jsx-a11y/media-has-caption */}
      <video controls className="w-full h-full rounded-lg">
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

CharacterSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  invitation: PropTypes.string.isRequired,
  videoSource: PropTypes.string.isRequired,
};

export default CharacterSection;
