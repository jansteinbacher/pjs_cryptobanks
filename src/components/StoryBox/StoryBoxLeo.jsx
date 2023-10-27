import PropTypes from 'prop-types';
import Leo from '../../images/courseAdvanced/characterLeo.png';
import StoryBox from './StoryBox';

function StoryBoxLeo({ paragraphs }) {
  return (
    <div>
      <StoryBox imageSrc={Leo} paragraphs={paragraphs} />
    </div>
  );
}

StoryBoxLeo.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default StoryBoxLeo;
