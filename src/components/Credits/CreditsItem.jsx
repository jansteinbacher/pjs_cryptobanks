import PropTypes from 'prop-types';

// CreditsItem component displays an HTML list item with a link
function CreditsItem({ href, title, text }) {
  return (
    <li>
      <a href={href} title={title}>
        {text}
      </a>
    </li>
  );
}

// Define the expected prop types for the CreditsItem component
CreditsItem.propTypes = {
  href: PropTypes.string.isRequired, // Requires a string for the link href
  title: PropTypes.string.isRequired, // Requires a string for the link title
  text: PropTypes.string.isRequired, // Requires a string for the link text
};

export default CreditsItem;
