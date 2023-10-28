import PropTypes from 'prop-types';
import Bernd from '../../images/courseBeginner/charakterBernd.png';
import StoryBox from './StoryBox';

// This component uses the StoryBox component to represent the character "Bernd."
// It accepts a list of paragraphs that contain the text for Bernd's story.
function StoryBoxBernd({ paragraphs }) {
  return (
    <div>
      <StoryBox imageSrc={Bernd} paragraphs={paragraphs} />
    </div>
  );
}

// PropTypes for documenting the expected props.
StoryBoxBernd.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired, // A list of paragraphs for Bernd's story.
};

export default StoryBoxBernd;
