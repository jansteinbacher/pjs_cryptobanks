import PropTypes from 'prop-types';
import VideoPlayer from './VideoPlayer';

function CharacterSection({ title, text, invitation, videoSource }) {
  return (
    <div className="p-6 mb-12 bg-green-200 rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">{title}</h2>
      <p className="italic text-justify mb-4">{text}</p>
      <p className="italic text-justify font-semibold mb-8">{invitation}</p>
      <VideoPlayer videoSource={videoSource} />
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
