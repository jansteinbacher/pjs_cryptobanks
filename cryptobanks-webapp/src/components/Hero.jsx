import React from "react";
import KursIcon from "../images/Kurs_Icon.png";
import IndividuellIcon from "../images/Individuell_Icon.png";
import Header from "../images/header.jpg";
import GlossarIcon from "../images/Glossar_Icon.png";

const Hero = () => {
  return (
    <div className="bg-white">
      <div
        className="bg-cover bg-center relative" // Verwenden Sie relative Positionierung
        style={{
          backgroundImage: `url(${Header})`,
          minHeight: "60vh", // Stellen Sie sicher, dass die Höhe ausreichend ist
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-start text-white">
          {/* Den Text linksbündig ausrichten und horizontal weiter links von der Mitte zentrieren */}
          <div
            className="text-left mb-8 max-w-xl mx-auto"
            style={{ marginLeft: "20%" }}
          >
            <h1 className="text-2xl md:text-4xl font-bold text-gray-200 mb-4 tracking-tight">
              Kryptoinformationen für Mitarbeitende im Bankenwesen
            </h1>
            <p className="text-2xl text-gray-300">
              Werde ein{" "}
              <span className="text-[#00DFA2] font-bold">Krypto-Experte</span>!
              Wähle aus verschiedenen Lernmöglichkeiten!
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-12 px-12 max-w-screen-xl">
        <div>
          <p className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Wie möchtest du deinen Weg beschreiten?
          </p>
          <div className="grid grid-cols-1 gap-8 mt-4 md:grid-cols-3">
            {/* Column 1 */}
            <div
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

              <a
                href="/course-overview"
                className="inline-flex items-center mt-4 space-x-2 bg-green-400 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-green-500 transition"
              >
                Zu den Kursen &rarr;
              </a>
            </div>

            {/* Column 2 */}
            <div className="block p-8 border rounded-md hover:bg-green-200 transition">
              <img
                src={IndividuellIcon}
                alt="Individuell"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800">
                Individueller Lernplan
              </h2>
              <p className="mt-3 text-gray-600">
                Erstelle deinen eigenen Kurs aus verschiedenen Lerneinheiten!
              </p>
              <a
                href="/decisiontree"
                className="inline-flex items-center mt-4 space-x-2 bg-green-400 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-green-500 transition"
              >
                Kurs erstellen &rarr;
              </a>
            </div>

            {/* Column 3 */}
            <div className="block p-8 border rounded-md hover:bg-green-200 transition">
              <img
                src={GlossarIcon}
                alt="Glossar"
                className="w-24 h-24 mx-auto mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800">Glossar</h2>
              <p className="mt-3 text-gray-600">
                Erhalte direkten Zugriff auf verschiedene Lerneinheiten!
              </p>
              <a
                href="/overview"
                className="inline-flex items-center mt-4 space-x-2 bg-green-400 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-green-500 transition"
              >
                Zum Glossar &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
