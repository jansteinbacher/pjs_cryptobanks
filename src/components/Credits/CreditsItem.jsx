import PropTypes from 'prop-types';

function CreditItem({ href, title, text }) {
  return (
    <li>
      <a href={href} title={title}>
        {text}
      </a>
    </li>
  );
}

CreditItem.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default CreditItem;
