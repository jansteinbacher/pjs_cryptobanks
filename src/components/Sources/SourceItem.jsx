import PropTypes from 'prop-types';

function SourceItem({ id, text }) {
  return (
    <li className="mb-4">
      [{id}] {text}
    </li>
  );
}

SourceItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SourceItem;
