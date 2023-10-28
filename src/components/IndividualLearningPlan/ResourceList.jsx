import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// ResourceListComponent component can be used to display a list of resources with titles, links, and durations
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

// Define the expected prop types for the ResourceListComponent component
ResourceListComponent.propTypes = {
  title: PropTypes.string.isRequired, // Requires a string for the title
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Requires an ID which can be a string or number
      to: PropTypes.string.isRequired, // Requires a string for the link destination
      label: PropTypes.string.isRequired, // Requires a string for the link label
      duration: PropTypes.string.isRequired, // Requires a string for the duration
    }),
  ).isRequired,
};

export default ResourceListComponent; // Export the ResourceListComponent component
