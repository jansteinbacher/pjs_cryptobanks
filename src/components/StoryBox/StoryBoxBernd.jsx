import PropTypes from 'prop-types';
import Bernd from '../../images/courseBeginner/charakterBernd.png';
import StoryBox from './StoryBox';

function StoryBoxBernd({ paragraphs }) {
  return (
    <div>
      <StoryBox imageSrc={Bernd} paragraphs={paragraphs} />
    </div>
  );
}

StoryBoxBernd.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default StoryBoxBernd;
