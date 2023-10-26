import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

function ExpertInsights({ title, items }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <ul className="mb-12 list-disc ml-4">
        {items.map((item) => (
          <li key={uuidv4()}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
ExpertInsights.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ExpertInsights;
