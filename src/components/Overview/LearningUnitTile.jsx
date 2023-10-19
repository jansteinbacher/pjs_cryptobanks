import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function LearningUnitTile({ term, explanation, link }) {
  return (
    <div id={term} className="mb-8 border rounded p-4 bg-gray-100">
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
};

export default LearningUnitTile;
