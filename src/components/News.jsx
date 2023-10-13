import { useState, useEffect } from 'react';

function News() {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('crypto&lang=en');

  useEffect(() => {
    fetch(
      `https://gnews.io/api/v4/search?q=${query}&token=5247b3e888209f2ccee89baa0b2d86c0`,
    )
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error('Error fetching news:', error));
  }, [query]);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-8 px-4">
      <h1 className="text-4xl font-bold mb-4">News aus der Kryptowelt</h1>
      <div className="flex space-x-4 mb-4">
        <button
          type="button"
          className={`px-4 py-2 rounded-lg font-semibold ${
            query === 'crypto&lang=en'
              ? 'bg-green-500 text-white'
              : 'bg-gray-300 text-gray-700'
          }`}
          onClick={() => setQuery('crypto&lang=en')}
        >
          Aus aller Welt
        </button>
        <button
          type="button"
          className={`px-4 py-2 rounded-lg font-semibold ${
            query === 'Krypto Deutschland&lang=de'
              ? 'bg-green-500 text-white'
              : 'bg-gray-300 text-gray-700'
          }`}
          onClick={() => setQuery('Krypto Deutschland&lang=de')}
        >
          Deutschland
        </button>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
        {articles.map((article) => (
          <a
            key={article.url}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-md p-4 mb-4 block hover:bg-green-100 transition duration-300"
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
        ))}
      </div>
    </div>
  );
}

export default News;
