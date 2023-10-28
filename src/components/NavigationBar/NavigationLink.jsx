import PropTypes from 'prop-types';

// NavigationLink component for rendering a navigation link
function NavigationLink({ to, children }) {
  return (
    <a href={to}>
      <span className="hover-underline text-center border-b border-transparent hover:border-green-500">
        {children}
      </span>
    </a>
  );
}

// Define prop types for the NavigationLink component
NavigationLink.propTypes = {
  to: PropTypes.string.isRequired, // The URL destination of the link
  children: PropTypes.string.isRequired, // The text content of the link
};

export default NavigationLink;
