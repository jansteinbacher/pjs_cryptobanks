import Crypto from '../images/crypto.png';
import React from 'react';

function ProjectInstructions() {
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
