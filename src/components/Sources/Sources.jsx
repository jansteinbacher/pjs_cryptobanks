import { useState } from 'react';
import PropTypes from 'prop-types';
import SourcesList from './SourcesList';

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
        Quellen {showSources ? 'ausblenden' : 'anzeigen'}{' '}
        {showSources ? '↓' : '→'}
      </button>
      {showSources && <SourcesList sources={sources} />}
    </div>
  );
}

Sources.propTypes = {
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Sources;
