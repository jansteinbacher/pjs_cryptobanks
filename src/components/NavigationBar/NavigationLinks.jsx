import PropTypes from 'prop-types';

function NavLinks() {
  return (
    <div className="sm:flex flex-col mt-4 sm:flex-row sm:mt-0 sm:space-x-12">
      <NavLink to="/course-overview">Kurse</NavLink>
      <NavLink to="/decisiontree">Individueller Lernplan</NavLink>
      <NavLink to="/overview">Übersicht</NavLink>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/#about">Über das Projekt</NavLink>
    </div>
  );
}

function NavLink({ to, children }) {
  return (
    <a href={to}>
      <span className="hover-underline text-center border-b border-transparent hover:border-green-500">
        {children}
      </span>
    </a>
  );
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default NavLinks;
