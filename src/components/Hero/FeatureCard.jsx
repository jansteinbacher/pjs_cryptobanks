import PropTypes from 'prop-types';

// FeatureCard component displays a styled card used under the hero element
// It's typically used for navigating to courses, overview, or individual course
function FeatureCard({ image, title, description, linkText, linkUrl }) {
  return (
    <div className="block p-8 border rounded-md hover:bg-green-200 transition">
      <img src={image} alt={title} className="w-24 h-24 mx-auto mb-4" />{' '}
      {/* Display the image */}
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>{' '}
      {/* Display the title */}
      <p className="mt-3 text-gray-600">{description}</p>{' '}
      {/* Display the description */}
      <a
        href={linkUrl}
        className="inline-flex items-center mt-4 space-x-2 bg-green-400 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-green-500 transition"
      >
        {linkText} &rarr; {/* Display the link text with a right arrow */}
      </a>
    </div>
  );
}

// Define the expected prop types for the FeatureCard component
FeatureCard.propTypes = {
  image: PropTypes.string.isRequired, // Requires a string for the image source
  title: PropTypes.string.isRequired, // Requires a string for the title
  description: PropTypes.string.isRequired, // Requires a string for the description
  linkText: PropTypes.string.isRequired, // Requires a string for the link text
  linkUrl: PropTypes.string.isRequired, // Requires a string for the link URL
};

export default FeatureCard; // Export the FeatureCard component
