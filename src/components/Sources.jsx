import PropTypes from 'prop-types';
import { useState } from 'react';

// Define the generateUniqueId function before using it
function generateUniqueId() {
  // You can use a library like uuid or generate a unique ID as needed
  // For simplicity, we'll generate a basic unique ID here.
  return Math.random().toString(36).substring(2, 9);
}

function Sources({ sources }) {
  const [showSources, setShowSources] = useState(false);

  const toggleSources = () => {
    setShowSources(!showSources);
  };

  return (
    <div className="sources border border-gray-400 rounded p-4">
      <button
        type="button"
        className="text-lg font-semibold"
        id="sources"
        onClick={toggleSources}
      >
        Quellen:
      </button>
      {showSources && (
        <div className="source-list leading-relaxed mt-4">
          <ul>
            {sources.map((source) => (
              <li key={generateUniqueId()}>{source}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

Sources.propTypes = {
  sources: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Sources;
