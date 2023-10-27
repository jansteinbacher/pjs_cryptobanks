import { Link } from 'react-router-dom';
import CelebrationVideo from '../../videos/fireworkCourseCompleted.mp4';
import CourseIcon from '../../images/courseIcon.png';
import Logo from '../../images/Logo.png';

function IndividualLearningPlanEnd() {
  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-12 tracking-tight text-center">
        Vielen Dank für die Teilnahme an deinem individuellen Kurs!
      </h2>
      <div className="lg:w-1/2">
        <video autoPlay loop muted className="w-full">
          <source src={CelebrationVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex items-center justify-center space-x-12">
        <div className="text-center">
          <img
            src={CourseIcon}
            alt="Business Model"
            className="w-32 md:w-32 rounded-lg mx-auto mt-4"
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
        <div className="text-center">
          <img
            src={Logo}
            alt="Business Model"
            className="w-32 md:w-32 rounded-lg mx-auto mt-4"
          />
          <Link to="/">
            <button
              type="button"
              className="bg-green-400 text-white hover:bg-green-500 rounded px-4 py-2 mt-4"
            >
              Zur Startseite
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IndividualLearningPlanEnd;
