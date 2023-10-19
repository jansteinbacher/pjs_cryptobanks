import PropTypes from 'prop-types';

function HomepageSection({
  image,
  title,
  description,
  linkText,
  linkUrl,
  isIconOnRight,
  width,
}) {
  const imageElement = (
    <div className="md:col-span-1 flex justify-center">
      <img src={image} alt={title} className={`w-${width} h-auto p-2`} />
    </div>
  );

  const textContent = (
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
    <div className="grid grid-cols-1 py-16 md:grid-cols-2 gap-8 items-center rounded-lg border border-gray-300 p-8 hover:bg-green-100 mb-16">
      {isIconOnRight ? textContent : imageElement}
      {isIconOnRight ? imageElement : textContent}
    </div>
  );
}

HomepageSection.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  isIconOnRight: PropTypes.bool,
  width: PropTypes.string.isRequired,
};

HomepageSection.defaultProps = {
  isIconOnRight: false,
};
export default HomepageSection;
