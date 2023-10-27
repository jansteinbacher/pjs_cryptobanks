import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

function StoryBox({ imageSrc, paragraphs }) {
  return (
    <div className="p-4 mb-8 bg-green-200 rounded-lg flex items-start">
      <img src={imageSrc} alt="Charakterbild" className="w-1/12 h-auto mr-4" />
      <div className="italic text-justify flex-grow">
        {paragraphs.map((paragraph) => (
          <p key={uuidv4()} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

StoryBox.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default StoryBox;
