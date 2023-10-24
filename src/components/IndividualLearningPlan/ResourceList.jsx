import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ResourceListComponent({ title, links }) {
  return (
    <li className="mb-8">
      <strong>{title}</strong>
      <ul className="list-disc pl-6 mt-4">
        {links.map((link) => (
          <li key={link.id}>
            <Link className="hover:underline" to={link.to}>
              {link.label} (Dauer {link.duration})
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

ResourceListComponent.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ResourceListComponent;
