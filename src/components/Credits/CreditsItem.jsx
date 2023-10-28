// Import PropTypes library to define prop types for the component
import PropTypes from 'prop-types';

// CreditItem component displays an HTML list item with a link
function CreditItem({ href, title, text }) {
  return (
    <li>
      <a href={href} title={title}>
        {text}
      </a>
    </li>
  );
}

// Define the expected prop types for the CreditItem component
CreditItem.propTypes = {
  href: PropTypes.string.isRequired, // Requires a string for the link href
  title: PropTypes.string.isRequired, // Requires a string for the link title
  text: PropTypes.string.isRequired, // Requires a string for the link text
};

export default CreditItem; // Export the CreditItem component
