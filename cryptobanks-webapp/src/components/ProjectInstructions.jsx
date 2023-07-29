import React, { useState } from 'react';
import Crypto from '../images/crypto.png';

const ProjectInstructions = () => {
  const [isTooltipStep1Visible, setTooltipStep1Visible] = useState(true);
  const [isTooltipStep2Visible, setTooltipStep2Visible] = useState(false);
  const [isTooltipStep3Visible, setTooltipStep3Visible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleTooltipClickStep1 = () => {
    setTooltipStep1Visible(false);
    setTooltipStep2Visible(true);
  };

  const handleTooltipClickStep2 = () => {
    setTooltipStep2Visible(false);
    setTooltipStep3Visible(true);
  };

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
      {/* Tooltip step 1 */}
      {isTooltipStep1Visible && (
        <div className="fixed bottom-10 right-10 bg-white text-black px-4 py-2 border border-gray-400 rounded hidden md:block">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
          </span>

          <p className='mt-4 mb-4 text-center'>Brauchst Du Hilfe?</p>
          
          <div className='flex items-center justify-center'>
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded mt-2" onClick={handleTooltipClickStep1}>
              Anleitung
            </button>
          </div>
          
        </div>
      )}

      {/* Rest of the component */}
      <div className="flex flex-col md:flex-row items-center px-4 md:px-20 bg-white text-black">
        <div className="md:w-2/3 md:mr-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 ">
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
          <h3 className="text-xl md:text-2xl font-semibold mb-2 mt-6 md:mt-0">
            Wie möchtest du deinen Weg beschreiten?
          </h3>

          <div className="flex flex-col md:flex-row">
            <div className='left-align'>
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
            </div>

                        {/* Tooltip step 2 */}
            <div className="relative">
              {isTooltipStep2Visible && (
                <span className="absolute top-0 right-1 mt-2 ml-2">
                  {/* Add the animated span here */}
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                  </span>
                  {/* End of animated span */}
                </span>
              )}
              <div className={isTooltipStep2Visible ? "bg-white text-black px-4 py-2 border border-gray-400 rounded mt-2 md:mt-0 ml-0 md:ml-12 hidden md:block" : "bg-white text-white px-4 py-2 border border-white rounded mt-2 md:mt-0 ml-0 md:ml-12 hidden md:block"}>
                <p className='text-center'>Entscheide dich</p>
                <p className='text-center'>für eine Option:</p>
                <div className='flex items-center justify-center'>
                  <button className={isTooltipStep2Visible ? "bg-blue-500 text-white font-semibold py-2 px-4 rounded mt-2" : "bg-white text-white font-semibold py-2 px-4 rounded mt-2"} onClick={handleTooltipClickStep2}>
                    Wählen
                  </button>
                </div>
              </div>
            </div>


          </div>

          <div className='flex'>
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

            {/* Tooltip step 3 */}
            <div className="relative">
              {isTooltipStep3Visible && (
                <span className="absolute top-0 right-1 mt-2 ml-2">
                  {/* Add the animated span here */}
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                  </span>
                  {/* End of animated span */}
                </span>
              )}
            <div className={isTooltipStep3Visible ? "bg-white text-black px-4 py-2 border border-gray-400 rounded ml-4 hidden md:block" : "bg-white text-white px-4 py-2 border border-white rounded ml-4 hidden md:block"}>
              <p className='text-center'>&#8592; Gelange zu deinem ausgewählten Bereich.</p>
            </div>
            </div>
          </div>
        </div>

        <div className="w-2/3 md:w-1/3 mt-8 md:mt-0">
          <div className="flex items-center justify-center">
            <img
              src={Crypto}
              alt="Crypto Hero"
              className="w-full md:w-3/4 rounded-lg animate-wiggle animate-thrice"
            />
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center mb-4 mt-8'>
        <hr className="w-2/3 md:w-3/5 border-t-2 border-gray-400 my-8" />
      </div>
    </>
  );
};

export default ProjectInstructions;
