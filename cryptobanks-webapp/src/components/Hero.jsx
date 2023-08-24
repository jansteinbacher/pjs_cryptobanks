import React from 'react';
import KursIcon from '../images/Kurs_Icon.png';
import IndividuellIcon from '../images/Individuell_Icon.png';
import GlossarIcon from '../images/Glossar_Icon.png';

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-12 px-12 max-w-screen-lg">
        <div className="text-center md:text-left mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
            Kryptoinformationen für Mitarbeitende im Bankenwesen
          </h1>
          <p className="text-xl text-gray-400">
            Werde ein <span className="text-[#00DFA2] font-bold">Krypto-Experte</span>! Wähle aus verschiedenen Lernmöglichkeiten!
          </p>
        </div>
        <div>
          <p className="text-xl font-semibold text-gray-800 text-center">
            Wie möchtest du deinen Weg beschreiten?
          </p>
          <div className="grid grid-cols-1 gap-8 mt-4 md:grid-cols-3">
            {/* Column 1 */}
            <a
              href="/course-overview"
              className="block p-8 border rounded-md hover:bg-green-200 transition"
            >
              <img
                src={KursIcon}
                alt="Kursübersicht"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800">
                Kursübersicht
              </h2>
              <p className="mt-3 text-gray-600">
                Absolviere vorgefertigte Kurse von Beginner bis Experte.
              </p>
            </a>

            {/* Column 2 */}
            <a
              href="/decisiontree"
              className="block p-8 border rounded-md hover:bg-green-200 transition"
            >
              <img
                src={IndividuellIcon}
                alt="Individuell"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800">
                Eigenen Kurs
              </h2>
              <p className="mt-3 text-gray-600">
                Erstelle deinen eigenen Kurs aus verschiedenen Lerneinheiten!
              </p>
            </a>

            {/* Column 3 */}
            <a
              href="/glossar"
              className="block p-8 border rounded-md hover:bg-green-200 transition"
            >
              <img
                src={GlossarIcon}
                alt="Glossar"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800">Glossar</h2>
              <p className="mt-3 text-gray-600">
                Erhalte direkten Zugriff auf verschiedene Lerneinheiten!
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
