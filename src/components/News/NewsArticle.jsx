import PropTypes from 'prop-types';

function NewsArticle({ article }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-lg shadow-md p-4 mb-4 block hover-bg-green-100 transition duration-300"
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

NewsArticle.propTypes = {
  article: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    source: PropTypes.shape({
      name: PropTypes.string,
    }),
    publishedAt: PropTypes.string,
  }).isRequired,
};

export default NewsArticle;
