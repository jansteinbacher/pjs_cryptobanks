import PropTypes from 'prop-types';
import Tobias from '../../images/courseExpert/characterTobias.png';
import StoryBox from './StoryBox';

function StoryBoxTobias({ paragraphs }) {
  return (
    <div>
      <StoryBox imageSrc={Tobias} paragraphs={paragraphs} />
    </div>
  );
}

StoryBoxTobias.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default StoryBoxTobias;
