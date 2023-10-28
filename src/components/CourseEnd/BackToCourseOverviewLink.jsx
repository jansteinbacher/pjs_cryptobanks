import { Link } from 'react-router-dom';
import CourseIcon from '../../images/courseIcon.png';

// Display the Link and Icon on the End Pages of the Courses to get back to the Course Overview Page
function BackToCourseOverviewLink() {
  return (
    <div className="text-center lg:w-2/3">
      <h3 className="text-xl font-semibold">Zurück zur Kursübersicht</h3>
      <img
        src={CourseIcon}
        alt="Business Model"
        className="w-32 md:w-64 rounded-lg mx-auto mt-4"
      />
      <Link to="/course-overview">
        <button
          type="button"
          className="bg-green-400 text-white hover:bg-green-500 rounded px-4 py-2 mt-4"
        >
          Zur Kursübersicht
        </button>
      </Link>
    </div>
  );
}

export default BackToCourseOverviewLink;
