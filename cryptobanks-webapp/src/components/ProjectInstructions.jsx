import Crypto from '../images/crypto.png';
import React, { useState, useEffect, useRef } from 'react';

function ProjectInstructions() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show the popup after 2 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1500);

    // Clear the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  const popupRef = useRef(null);

  const handleOutsideClick = (event) => {
    // Close the popup if clicked outside of it
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopup(false);
    }
  };

  const handleCloseClick = () => {
    // Close the popup when the 'x' button is clicked
    setShowPopup(false);
  };

  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-2/3">
        <div className="p-4">
          <h2 className="text-2xl font-bold">Kurzanleitung</h2>
          <p className="mt-4">
            Auf dieser Website findest du strukturierte Informationen zu Kryptoassets und deren Integration in das traditionelle Bankwesen.
            Die Seite dient als Lernplattform und bietet verschiedene Elemente, wie sich das Wissen angeeignet werden kann.
          </p>
          <ul className="mt-4 list-disc list-inside">
            <li>
              <a className='hover:underline' href='/#kurse'><strong>Kurse:</strong></a>
              Hier findest du drei vorgefertigte Kurse in den Bereichen Einstieg in Kryptoassets, Geschäftsmodelle und Regulatorik.
            </li>
            <li>
            <a className='hover:underline' href='/#decisiontree'><strong>Individueller Lernplan:</strong></a>
              Hier kannst Du dir mit dem Beantworten von verschiedenen Fragen einen individuellen Lernplan erstellen.
            </li>
            <li>
            <a className='hover:underline' href='/#glossar'><strong>Glossar:</strong></a>
              Hier findest Du die einzelnen Artikel nach Themengebiet aufgelistet.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-1/3 md:w-1/3 flex items-center justify-center">
        <img
          src={Crypto}
          alt="Logo with Cryprocurrencies"
          className="w-1/2 h-auto"
        />
      </div>

      {showPopup && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-800 bg-opacity-50"
          ref={popupRef}
          onClick={handleOutsideClick}
        >
          <div className="relative bg-white p-8 rounded-lg">
            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={handleCloseClick}
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <div class="text-center">
              <h2 class="text-2xl font-bold">Unser Kryptokurs für Beginner</h2>
              <p class="mt-4 text-lg">Jetzt mit unserem Kurs in die Welt der Kryptoassets, Tokens und Coins einsteigen!</p>
              <a href="/course-beginner" class="inline-block mt-6 px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600">Zum Beginnerkurs
              -&gt;</a>
            </div>


          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Cryptobanks</h1>
      <ProjectInstructions />
      <div className='flex items-center justify-center mt-12'>
        <hr className="w-3/5 border-t-2 border-gray-400 my-8" />
      </div>
    </div>
  );
}

export default App;
