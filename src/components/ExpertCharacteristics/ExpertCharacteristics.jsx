// Import PropTypes library to define prop types for the component
import PropTypes from 'prop-types';

// PersonCharacteristics component displays a person's name, image, and characteristics
function PersonCharacteristics({ name, imageSrc, characteristics }) {
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

// Define the expected prop types for the PersonCharacteristics component
PersonCharacteristics.propTypes = {
  name: PropTypes.string.isRequired, // Requires a string for the name
  imageSrc: PropTypes.string.isRequired, // Requires a string for the image source
  characteristics: PropTypes.string.isRequired, // Requires a string for the characteristics
};

export default PersonCharacteristics; // Export the PersonCharacteristics component
