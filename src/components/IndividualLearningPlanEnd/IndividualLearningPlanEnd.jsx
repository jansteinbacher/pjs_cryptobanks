import { Link } from 'react-router-dom';
import { VscChecklist } from 'react-icons/vsc';
import CelebrationVideo from '../../videos/fireworkCourseCompleted.mp4';
import CourseIcon from '../../images/courseIcon.png';
import Logo from '../../images/Logo.png';
import DownloadButton from '../DownloadButton';

function IndividualLearningPlanEnd() {
  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg min-h-screen">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-12 tracking-tight text-center">
        Vielen Dank für die Teilnahme an deinem individuellen Kurs!
      </h2>
      <div className="flex items-center justify-center mb-24">
        <div>
          <h3 className="text-xl text-center font-semibold mb-4">
            Checkliste:
          </h3>
          <p className="mb-8 text-center">
            Du möchstest direkt starten und deiner Bank helfen
            Kryptoasset-Dienstleisungen anzubieten? Hier findest du eine
            Checkliste für dich und deine Bank als Download.
          </p>

          <DownloadButton
            icon={<VscChecklist />}
            downloadLink="downloads/checklist.pdf"
            text="Checkliste herunterladen"
          />
        </div>
        <div>
          <video autoPlay loop muted className="w-full">
            <source src={CelebrationVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-48">
        <div className="text-center">
          <img
            src={CourseIcon}
            alt="Course Icon"
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
