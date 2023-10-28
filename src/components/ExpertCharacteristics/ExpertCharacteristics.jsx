import PropTypes from 'prop-types';

// ExpertCharacteristics component displays a person's name, image, and characteristics
function ExpertCharacteristics({ name, imageSrc, characteristics }) {
  return (
    <div className="person-container mb-16">
      <img
        className="rounded-image mb-8"
        src={imageSrc}
        alt={name}
        width="140"
      />
      <p className="text-justify">
        <strong>{name}</strong> {characteristics}
      </p>
    </div>
  );
}

// Define the expected prop types for the ExpertCharacteristics component
ExpertCharacteristics.propTypes = {
  name: PropTypes.string.isRequired, // Requires a string for the name
  imageSrc: PropTypes.string.isRequired, // Requires a string for the image source
  characteristics: PropTypes.string.isRequired, // Requires a string for the characteristics
};

export default ExpertCharacteristics; // Export the ExpertCharacteristics component
