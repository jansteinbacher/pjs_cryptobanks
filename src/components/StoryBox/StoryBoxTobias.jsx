import PropTypes from 'prop-types';
import Tobias from '../../images/courseExpert/characterTobias.png';
import StoryBox from './StoryBox';

// This component uses the StoryBox component to represent the character "Tobias."
// It accepts a list of paragraphs that contain the text for Tobias's story.
function StoryBoxTobias({ paragraphs }) {
  return (
    <div>
      <StoryBox imageSrc={Tobias} paragraphs={paragraphs} />
    </div>
  );
}

// PropTypes for documenting the expected props.
StoryBoxTobias.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired, // A list of paragraphs for Tobias's story.
};

export default StoryBoxTobias;
