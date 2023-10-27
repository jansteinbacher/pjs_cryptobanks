import PropTypes from 'prop-types';
import Simone from '../../images/courseAdvanced/characterSimone.png';
import StoryBox from './StoryBox';

function StoryBoxSimone({ paragraphs }) {
  return (
    <div>
      <StoryBox imageSrc={Simone} paragraphs={paragraphs} />
    </div>
  );
}

StoryBoxSimone.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default StoryBoxSimone;
