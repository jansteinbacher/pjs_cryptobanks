import PropTypes from 'prop-types';

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

PersonCharacteristics.propTypes = {
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  characteristics: PropTypes.string.isRequired,
};

export default PersonCharacteristics;
