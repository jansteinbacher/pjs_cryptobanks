import PropTypes from 'prop-types';

function NavigationLink({ to, children }) {
  return (
    <a href={to}>
      <span className="hover-underline text-center border-b border-transparent hover:border-green-500">
        {children}
      </span>
    </a>
  );
}

NavigationLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default NavigationLink;
