import PropTypes from 'prop-types';

// This component renders a list item displaying the "id" and "text" properties.
function SourceItem({ id, text }) {
  return (
    <li className="mb-4">
      [{id}] {text}
    </li>
  );
}

// PropTypes for documenting the expected props.
SourceItem.propTypes = {
  id: PropTypes.string.isRequired, // The unique identifier for the item.
  text: PropTypes.string.isRequired, // The text content to be displayed.
};

export default SourceItem;
