import Regulation from "../../images/regulation.png";
import BusinessModel from "../../images/businessModel.png";
import CourseCompleted from "../../images/firework_course_completed.mp4";

const CourseEndBeginner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white px-20 py-4 rounded-lg mb-4">
        <div className="mb-10">
          <div className="flex items-center justify-center mb-6">
          <video autoPlay loop muted className="w-1/2">
            <source
              src={CourseCompleted} // Replace "your-video-source.mp4" with the URL of your video file
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          </div>

          <p className="text-lg mb-4">
            Sie haben den Kurs erfolgreich abgeschlossen.
          </p>
          <p className="text-lg">
            Hier ist eine kurze Zusammenfassung der gelernten Inhalte:
          </p>
          <ul className="list-disc pl-6 mt-4 text-lg mb-4">
            <li>
              Neben Kryptowährungen wie Bitcoin existieren auch Tokens als
              digitale Vermögenswerte auf Blockchain-Basis
            </li>
            <li>Punkt 2</li>
            <li>Punkt 3</li>
          </ul>
        </div>
        <div className="flex items-center justify-center mt-12">
          <hr className="w-3/5 border-t-2 border-gray-400 my-8" />
        </div>
        <div className="mt-10">
          <h3 className="text-3xl font-bold mb-4">Nächste Schritte</h3>
          <p className="text-lg mb-4">
            Hier sind einige Möglichkeiten, wie Sie Ihr Wissen weiter vertiefen
            können:
          </p>
          <div className="flex justify-between space-x-2 mb-10">
            <div className="flex-1 flex items-center justify-center mb-4">
              <a href="/integrationoverview">
                <div className="bg-white p-4 rounded-lg hover:underline">
                  <div className="rounded-full p-4">
                    <h2 className="text-center text-2xl">
                      Adaptionsmöglichkeiten und Geschäftsmodelle
                    </h2>
                  </div>
                  <img
                    src={BusinessModel}
                    alt="BusinessModel"
                    className="mt-4 mx-auto w-32 transform scale-100 hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-center max-w-[500px]">
                  Dieser Kurs beleuchtet die Adaptionsmöglichkeiten von
                  Kryptoassets in einer traditionellen Bank und die daraus
                  entstehenden Geschäftsmodelle.
                </p>
              </a>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg">
                <div className="border-l border-gray-300 h-20 mx-8"></div>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center mb-10">
              <a href="/integrationoverview">
                <div className="bg-white p-4 rounded-lg hover:underline">
                  <div className="rounded-full p-4">
                    <h2 className="text-center text-2xl">
                      Regulatorik und technologische Grundlagen
                    </h2>
                  </div>
                  <img
                    src={Regulation}
                    alt="BusinessModel"
                    className="mt-4 mx-auto w-32 transform scale-100 hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-center max-w-[500px]">
                  Dieser Kurs gibt einen Überblick über die aktuelle Regulatorik
                  mit Fokus auf Deutschland und stellt technologische Grundlagen
                  dar.
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center my-8>">
          <hr className="w-3/5 border-t-2 border-gray-400" />
        </div>
      </div>
    </div>
  );
};
export default CourseEndBeginner;
