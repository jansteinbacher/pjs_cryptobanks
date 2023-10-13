import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFilePdf } from 'react-icons/fa';
import { PiCertificate } from 'react-icons/pi';
import Regulation from '../../../images/regulation.png';
import BusinessModel from '../../../images/businessModel.png';
import CourseCompleted from '../../../images/firework_course_completed.mp4';

function CourseAdvancedEnd() {
  const [isSummaryVisible, setSummaryVisible] = useState(true);
  const [isCourseMaterialVisible, setCourseMaterialVisible] = useState(false);

  const handleButtonSectionVisibility1 = () => {
    setSummaryVisible(false);
    setCourseMaterialVisible(true);
  };

  const handleButtonSectionVisibility2 = () => {
    setSummaryVisible(true);
    setCourseMaterialVisible(false);
  };

  return (
    <div className="px-8 md:px-20 py-4 md:py-8">
      <div className="flex flex-col md:items-center md:justify-center md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <button
          type="button"
          className={`${
            isSummaryVisible ? 'bg-green-400 text-white' : 'bg-gray-200'
          } rounded px-4 py-2 font-semibold text-lg`}
          onClick={handleButtonSectionVisibility2}
        >
          📝 Zusammenfassung
        </button>
        <button
          type="button"
          className={`${
            isCourseMaterialVisible ? 'bg-green-400 text-white' : 'bg-gray-200'
          } rounded px-4 py-2 font-semibold text-lg`}
          onClick={handleButtonSectionVisibility1}
        >
          📚 Weitere Informationsquellen
        </button>
      </div>

      {isSummaryVisible && (
        <div className="bg-white p-8 rounded-lg space-y-8 text-gray-800">
          <div className="lg:flex lg:items-center space-y-8 lg:space-y-0">
            <div className="lg:w-1/2">
              <div className="text-center">
                <div className="flex flex-col items-center">
                  <FaFilePdf className="text-5xl text-green-400 mb-2" />{' '}
                  <a
                    href="src/images/Kryptoassets.pdf"
                    className="inline-block px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-green-500 transition duration-300"
                    download
                  >
                    Zusammenfassung herunterladen
                  </a>
                </div>
              </div>
              <div className="text-center mt-8">
                <div className="flex flex-col items-center">
                  <PiCertificate className="text-5xl text-green-400 mb-2" />{' '}
                  <a
                    href="/weitere-ressourcen"
                    className="inline-block px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-green-500 transition duration-300"
                  >
                    Zertifikat herunterladen
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <video autoPlay loop muted className="w-full">
                <source src={CourseCompleted} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <hr className="border-t-2 border-gray-400" />

          <div className="lg:flex space-x-8">
            <div className="text-center lg:w-2/3">
              <h3 className="text-lg font-semibold">
                Zurück zur Kursübersicht
              </h3>
              <img
                src={BusinessModel}
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

            <div className="text-center lg:w-2/3">
              <h3 className="text-lg font-semibold">
                Werde zum Krypto-Experte
              </h3>
              <img
                src={Regulation}
                alt="Regulation"
                className="w-32 md:w-64 rounded-lg mx-auto mt-4"
              />
              <Link to="/course-advanced-introduction">
                <button
                  type="button"
                  className="bg-green-400 text-white hover:bg-green-500 rounded px-4 py-2 mt-4"
                >
                  Zum Experten Kurs
                </button>
              </Link>
            </div>

            <div className="text-center lg:w-1/3">
              <h3 className="text-lg font-semibold">
                Lerninhalte individuell auswählen
              </h3>
              <p className="mt-4">
                Wähle aus verschiedenen Modulen ganz individuell die
                Informationen aus, die du erlernen möchtest.
              </p>
              <Link to="/decisiontree">
                <button
                  type="button"
                  className="bg-green-400 text-white hover:bg-green-500 rounded px-4 py-2 mt-4"
                >
                  Individuellen Lernplan erstellen
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {isCourseMaterialVisible && (
        <div className="bg-white p-8 rounded-lg space-y-4 text-gray-800">
          <div>
            <h2 className="text-2xl font-semibold mb-8">
              Zusätzliche Materialien:
            </h2>
            <div className="mb-8">
              <p className="mt-4 font-semibold">
                Lektion 1: Regulatorische Landschaft auf nationaler und
                internationaler Ebene
              </p>
              <ul className="list-disc mt-2 space-y-2 ml-6" />
            </div>
            <div className="mb-8">
              <p className="mt-4 font-semibold">
                Lektion 2: Potenzielle Kryptoasset-Diensleistungen
              </p>

              <ul className="list-disc mt-2 space-y-2 ml-6">
                <li>
                  Krypto-Banken in Deutschland:{' '}
                  <a
                    className="hover:underline"
                    href="https://f5crypto.com/blog/deutsche-banken-in-der-krypto-welt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://f5crypto.com/blog/deutsche-banken-in-der-krypto-welt
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <p className="mt-4 font-semibold">
                Lektion 3: Trends & Anwendung in der Gesellschaft
              </p>
              <ul className="list-disc mt-2 space-y-2 ml-6" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseAdvancedEnd;
