import { useState, useEffect } from 'react';
import NewsHeader from './NewsHeader';
import NewsArticle from './NewsArticle';

// News component for displaying news articles based on a search query
function News() {
  // State for storing the news articles and the search query
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('crypto&lang=en');

  // Use useEffect to fetch news articles based on the query
  useEffect(() => {
    fetch(
      `https://gnews.io/api/v4/search?q=${query}&token=5247b3e888209f2ccee89baa0b2d86c0`,
    )
      .then((response) => response.json())
      .then((data) => setArticles(data.articles))
      .catch((error) => console.error('Error fetching news:', error));
  }, [query]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-8 px-4">
      <div className="mb-8">
        <NewsHeader query={query} setQuery={setQuery} />
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
        {articles && articles.length > 0 ? (
          articles.map((article) => (
            <NewsArticle key={article.url} article={article} />
          ))
        ) : (
          <p>Keine Artikel vorhanden. Versuche die Webseite neu zu laden</p>
        )}
      </div>
    </div>
  );
}

export default News;
