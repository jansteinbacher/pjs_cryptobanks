import PropTypes from 'prop-types';
import Simone from '../../images/courseAdvanced/characterSimone.png';
import StoryBox from './StoryBox';

// This component uses the StoryBox component to represent the character "Simone."
// It accepts a list of paragraphs that contain the text for Simone's story.
function StoryBoxSimone({ paragraphs }) {
  return (
    <div>
      <StoryBox imageSrc={Simone} paragraphs={paragraphs} />
    </div>
  );
}

// PropTypes for documenting the expected props.
StoryBoxSimone.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired, // A list of paragraphs for Simone's story.
};

export default StoryBoxSimone;
