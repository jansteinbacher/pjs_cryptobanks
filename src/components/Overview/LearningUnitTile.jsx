import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// This component represents a learning unit tile with a term, explanation, and link.
function LearningUnitTile({ term, explanation, link, level }) {
  // Define a variable to hold the background color based on the level prop
  let backgroundColor = '';

  // Set the background color based on the level
  if (level === 'beginner') {
    backgroundColor = 'border-blue-100';
  } else if (level === 'advanced') {
    backgroundColor = 'border-blue-300';
  } else if (level === 'expert') {
    backgroundColor = 'border-blue-500';
  }

  return (
    <div id={term} className={`mb-8 rounded p-4 border-4 ${backgroundColor}`}>
      <h2 className="text-2xl font-bold">
        <Link to={link} className="text-blue-500 hover:underline">
          {term}
        </Link>
      </h2>
      <p>{explanation}</p>
    </div>
  );
}

// PropTypes for documenting the expected props.
LearningUnitTile.propTypes = {
  term: PropTypes.string.isRequired, // The term or title of the learning unit.
  explanation: PropTypes.string.isRequired, // An explanation or description of the learning unit.
  link: PropTypes.string.isRequired, // The link to navigate to when the tile is clicked.
  level: PropTypes.string.isRequired, // The level of the learning unit (e.g., 'beginner', 'advanced', 'expert').
};

export default LearningUnitTile;
