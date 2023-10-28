import PropTypes from 'prop-types';

// NewsArticle component for rendering an individual news article
function NewsArticle({ article }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-lg shadow-md p-4 mb-4 block border border-gray-300 hover:bg-green-100 transition duration-300"
    >
      <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
      <p className="text-gray-600">{article.description}</p>
      <div className="mt-2 flex items-center">
        <span className="text-gray-400">{article.source.name}</span>
        <span className="mx-2 text-gray-400">&middot;</span>
        <span className="text-gray-400">
          {new Date(article.publishedAt).toDateString()}
        </span>
      </div>
    </a>
  );
}

// Define prop types for the NewsArticle component
NewsArticle.propTypes = {
  article: PropTypes.shape({
    url: PropTypes.string.isRequired, // URL of the news article
    title: PropTypes.string.isRequired, // Title of the article
    description: PropTypes.string, // Description of the article (optional)
    source: PropTypes.shape({
      name: PropTypes.string, // Name of the news source
    }),
    publishedAt: PropTypes.string, // Date and time the article was published
  }).isRequired,
};

export default NewsArticle;
