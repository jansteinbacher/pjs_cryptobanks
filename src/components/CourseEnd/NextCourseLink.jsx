import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Regulation from '../../images/regulation.png';

function NextCourseLink({ followingCourseLink, followingCourseDescription }) {
  return (
    <div className="text-center lg:w-2/3">
      <h3 className="text-lg font-semibold">Werde zum Krypto-Experte</h3>
      <img
        src={Regulation}
        alt="Regulation"
        className="w-32 md:w-64 rounded-lg mx-auto mt-4"
      />
      <Link to={followingCourseLink}>
        <button
          type="button"
          className="bg-green-400 text-white hover:bg-green-500 rounded px-4 py-2 mt-4"
        >
          {followingCourseDescription}
        </button>
      </Link>
    </div>
  );
}

NextCourseLink.propTypes = {
  followingCourseLink: PropTypes.string.isRequired,
  followingCourseDescription: PropTypes.string.isRequired,
};

export default NextCourseLink;
