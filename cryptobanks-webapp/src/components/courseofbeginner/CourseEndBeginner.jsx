import React, { useState } from "react";
import { Link } from "react-router-dom";
import Regulation from "../../images/regulation.png";
import BusinessModel from "../../images/businessModel.png";
import CourseCompleted from "../../images/firework_course_completed.mp4";

const CourseEndBeginner = () => {
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
          className={`${
            isSummaryVisible ? "bg-green-400 text-white" : "bg-gray-200"
          } rounded px-4 py-2 font-semibold text-lg`}
          onClick={handleButtonSectionVisibility2}
        >
          📝 Zusammenfassung
        </button>
        <button
          className={`${
            isCourseMaterialVisible ? "bg-green-400 text-white" : "bg-gray-200"
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
              <h2 className="text-2xl font-semibold">
                Zusammenfassung der gelernten Inhalte:
              </h2>
              <a
                href="src/images/Kryptoassets.pdf"
                className="inline-block mt-4 px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-green-600 transition duration-300"
                download
              >
                Download
              </a>
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
              <h3 className="text-lg font-semibold">Weitere Kurse:</h3>
              <img
                src={BusinessModel}
                alt="Business Model"
                className="w-32 md:w-64 rounded-lg mx-auto mt-4"
              />
              <Link to="/course1">
                <button className="bg-green-400 text-white rounded px-4 py-2 mt-4">
                  Lernplan
                </button>
              </Link>
            </div>

            <div className="text-center lg:w-2/3">
              <h3 className="text-lg font-semibold">Kurs 2</h3>
              <img
                src={Regulation}
                alt="Regulation"
                className="w-32 md:w-64 rounded-lg mx-auto mt-4"
              />
              <Link to="/course2">
                <button className="bg-green-400 text-white rounded px-4 py-2 mt-4">
                  Lernplan
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
                <button className="bg-green-400 text-white rounded px-4 py-2 mt-4">
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
                Lektion 1: Grundverständnis zu Kryptoassets
              </p>
              <ul className="list-disc mt-2 space-y-2 ml-6"></ul>
            </div>
            <div className="mb-8">
              <p className="mt-4 font-semibold">
                Lektion 2: Blockchain-Technologie
              </p>

              <ul className="list-disc mt-2 space-y-2 ml-6">
                <li>
                  Beispiel permissioned Blockchain:{" "}
                  <a
                    className="hover:underline"
                    href="https://www.swiat.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.swiat.io/
                  </a>
                </li>
                <li>
                  Beispiel permissionless Blockchain:{" "}
                  <a
                    className="hover:underline"
                    href="https://ethereum.org/de/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://ethereum.org/de/
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <p className="mt-4 font-semibold">
                Lektion 3: Arten von Kryptoassets und ihre Verbindung zu
                traditionellen Finanzprodukten
              </p>
              <ul className="list-disc mt-2 space-y-2 ml-6">
                <li>
                  Kryptoassets Überblick:{" "}
                  <a
                    className="hover:underline"
                    href="https://www.blockchain.com/explorer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.blockchain.com/explorer
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <p className="mt-4 font-semibold">
                Lektion 4: Herausforderungen und Zukunftsaussichten von
                Kryptoassets:
              </p>
              <ul className="list-disc mt-2 space-y-2 ml-6">
                <li>
                  ss:{" "}
                  <a
                    className="hover:underline"
                    href="https://triple-a.io/crypto-ownership-data/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://triple-a.io/crypto-ownership-data/
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseEndBeginner;
