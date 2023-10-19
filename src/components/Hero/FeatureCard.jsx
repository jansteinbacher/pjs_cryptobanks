import PropTypes from 'prop-types';

function FeatureCard({ image, title, description, linkText, linkUrl }) {
  return (
    <div className="block p-8 border rounded-md hover:bg-green-200 transition">
      <img src={image} alt={title} className="w-24 h-24 mx-auto mb-4" />
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="mt-3 text-gray-600">{description}</p>
      <a
        href={linkUrl}
        className="inline-flex items-center mt-4 space-x-2 bg-green-400 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-green-500 transition"
      >
        {linkText} &rarr;
      </a>
    </div>
  );
}

FeatureCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
};

export default FeatureCard;
