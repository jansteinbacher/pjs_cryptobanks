import { useState } from 'react';
import PropTypes from 'prop-types';
import SourcesList from './SourcesList';

// This component displays a list of sources and allows users to toggle their visibility.
function Sources({ sources }) {
  const [showSources, setShowSources] = useState(false);

  // Function to toggle the visibility of sources.
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
        Quellen {showSources ? 'einklappen' : 'anzeigen'}{' '}
        {showSources ? '↓' : '→'}
      </button>
      {showSources && <SourcesList sources={sources} />}
    </div>
  );
}

// PropTypes for documenting the expected props.
Sources.propTypes = {
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Sources;
