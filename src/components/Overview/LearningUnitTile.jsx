import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
    <div
      id={term}
      className={`mb-8 border rounded p-4 border-4 ${backgroundColor}`}
    >
      <h2 className="text-2xl font-bold">
        <Link to={link} className="text-blue-500 hover:underline">
          {term}
        </Link>
      </h2>
      <p>{explanation}</p>
    </div>
  );
}

LearningUnitTile.propTypes = {
  term: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
};

export default LearningUnitTile;
