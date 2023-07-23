import React, { useState } from 'react';
import Crypto from '../images/crypto.png';

const ProjectInstructions = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  // Define the link URL based on the selected option
  const getLinkForOption = () => {
    switch (selectedOption) {
      case 'Vorgefertigte Kurse':
        return '/course-overview';
      case 'Individuelle Lerninhalte auswählen':
        return '/decisiontreestart';
      case 'Direkt Informationen erhalten':
        return '/#glossar';
      default:
        return '/';
    }
  };

  return (
    <>
    <div className="flex flex-col md:flex-row items-center px-10 md:px-20 bg-white text-black">
      <div className="md:w-2/3 md:mr-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Kryptoinformationen für Mitarbeiter im Bankenwesen
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Dein Weg zum Krypto-Experten
        </h2>
        <p className="text-sm md:text-base mb-6">
          Unsere Lernplattform versteht die Bedeutung von maßgeschneiderten Kursen,
          die dir genau das Wissen vermittelt, das du benötigst, um in der Welt
          der Kryptoassets erfolgreich zu sein. Egal, ob du ein Anfänger in diesem
          Bereich bist oder bereits über Vorkenntnisse verfügst - unsere Plattform
          ist so gestaltet, dass sie sich auf deine individuellen Bedürfnisse und
          deinem Kenntnisstand anpassen lässt.
        </p>
        <h3 className="text-xl md:text-2xl font-semibold mb-2">
          Wie möchtest du deinen Weg beschreiten?
        </h3>
        <ul className="list-disc list-inside mb-6">
          <li
            className={`text-sm md:text-base flex items-center ${
              selectedOption === 'Vorgefertigte Kurse'
                ? 'text-blue-500 font-bold'
                : 'cursor-pointer'
            }`}
            onClick={() => handleOptionClick('Vorgefertigte Kurse')}
          >
            <span
              className={`w-4 h-4 border-2 border-black rounded-full mr-2 ${
                selectedOption === 'Vorgefertigte Kurse' ? 'bg-black' : 'bg-transparent'
              }`}
            ></span>
            Ich möchte bereits vorgefertigte Kurse absolvieren
          </li>
          <li
            className={`text-sm md:text-base flex items-center ${
              selectedOption === 'Individuelle Lerninhalte auswählen'
                ? 'text-blue-500 font-bold'
                : 'cursor-pointer'
            }`}
            onClick={() => handleOptionClick('Individuelle Lerninhalte auswählen')}
          >
            <span
              className={`w-4 h-4 border-2 border-black rounded-full mr-2 ${
                selectedOption === 'Individuelle Lerninhalte auswählen' ? 'bg-black' : 'bg-transparent'
              }`}
            ></span>
            Ich möchte mir meine Lerninhalte individuell auswählen
          </li>
          <li
            className={`text-sm md:text-base flex items-center ${
              selectedOption === 'Direkt Informationen erhalten'
                ? 'text-blue-500 font-bold'
                : 'cursor-pointer'
            }`}
            onClick={() => handleOptionClick('Direkt Informationen erhalten')}
          >
            <span
              className={`w-4 h-4 border-2 border-black rounded-full mr-2 ${
                selectedOption === 'Direkt Informationen erhalten' ? 'bg-black' : 'bg-transparent'
              }`}
            ></span>
            Ich möchte direkt meine Informationen erhalten
          </li>
        </ul>
        <a href={getLinkForOption()}>
          <button
            className={`bg-blue-500 text-white font-semibold py-2 px-4 rounded ${
              !selectedOption && 'opacity-50 cursor-not-allowed'
            }`}
            disabled={!selectedOption}
          >
            {selectedOption ? `${selectedOption}` : 'Wähle eine Option'}
          </button>
        </a>
      </div>
      <div className="w-1/3 mt-8 md:mt-0">
        <div className="flex items-center justify-center">
          <img
            src={Crypto}
            alt="Crypto Hero"
            className="w-1/2 md:w-3/4 rounded-lg animate-bounce"
            style={{ animationDuration: '4s', animationIterationCount: 'infinite' }}
          />
        </div>
      </div>
    </div>

    <div className='flex items-center justify-center mb-4 mt-8'>
        <hr className="w-3/5 border-t-2 border-gray-400 my-8" />
      </div>

    </>
  );
};

export default ProjectInstructions;
