import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

// This component renders a box with a character image and paragraphs.
function StoryBox({ imageSrc, paragraphs }) {
  return (
    <div className="p-4 mb-12 bg-green-200 rounded-lg flex items-start">
      <img src={imageSrc} alt="Charakterbild" className="w-1/12 h-auto mr-4" />
      <div className="italic flex-grow">
        {paragraphs.map((paragraph) => (
          <p key={uuidv4()} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

// PropTypes for documenting the expected props.
StoryBox.propTypes = {
  imageSrc: PropTypes.string.isRequired, // The character's image.
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired, // A list of paragraphs.
};

export default StoryBox;
