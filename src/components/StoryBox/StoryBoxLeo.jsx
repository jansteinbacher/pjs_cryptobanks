import PropTypes from 'prop-types';
import Leo from '../../images/courseAdvanced/characterLeo.png';
import StoryBox from './StoryBox';

// This component uses the StoryBox component to represent the character "Leo."
// It accepts a list of paragraphs that contain the text for Leo's story.
function StoryBoxLeo({ paragraphs }) {
  return (
    <div>
      <StoryBox imageSrc={Leo} paragraphs={paragraphs} />
    </div>
  );
}

// PropTypes for documenting the expected props.
StoryBoxLeo.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired, // A list of paragraphs for Leo's story.
};

export default StoryBoxLeo;
