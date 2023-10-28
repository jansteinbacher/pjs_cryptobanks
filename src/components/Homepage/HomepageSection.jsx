import PropTypes from 'prop-types';

// This component represents a section on the homepage with an image, title, description, and a link.
function HomepageSection({
  image,
  title,
  description,
  linkText,
  linkUrl,
  isIconOnRight,
}) {
  const imageElement = (
    // Display an image on the left or right, depending on the 'isIconOnRight' prop.
    <div className="md:col-span-1 flex justify-center">
      <img src={image} alt={title} className="w-32 h-auto p-2" />
    </div>
  );

  const textContent = (
    // Display the text content on the opposite side of the image.
    <div className={`md:col-span-1 ${isIconOnRight ? 'pl-10' : 'pr-10'}`}>
      <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      <a
        href={linkUrl}
        className="inline-flex items-center space-x-2 bg-green-400 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-green-500 transition"
      >
        {linkText} &rarr;
      </a>
    </div>
  );

  return (
    // Create a grid layout for the section, with image and text content, which can be on the left or right.
    <div className="grid grid-cols-1 py-16 md:grid-cols-2 gap-8 items-center rounded-lg border border-gray-300 p-8 hover:bg-green-100 mb-16">
      {isIconOnRight ? textContent : imageElement}
      {isIconOnRight ? imageElement : textContent}
    </div>
  );
}

HomepageSection.propTypes = {
  image: PropTypes.string.isRequired, // Requires a URL string for the image.
  title: PropTypes.string.isRequired, // Requires a string for the title.
  description: PropTypes.string.isRequired, // Requires a string for the description.
  linkText: PropTypes.string.isRequired, // Requires a string for the link text.
  linkUrl: PropTypes.string.isRequired, // Requires a URL string for the link.
  isIconOnRight: PropTypes.bool, // Indicates whether the icon is on the right (optional).
};

HomepageSection.defaultProps = {
  isIconOnRight: false, // Default value for 'isIconOnRight' is false.
};

export default HomepageSection;
