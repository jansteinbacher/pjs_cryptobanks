import React from 'react';
import { Link } from 'react-router-dom';

const DecisionTreeMainPage = () => {
  return (
    <div id='decisiontree' className="flex flex-col items-center justify-center max-w-screen-lg mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Lerninhalte individuell auswählen!</h2>
      <p className="text-lg text-justify mb-8 md:ml-20 md:mr-20">
        Dieses Projekt stellt Information zur Anbindung von Kryptoassets an das traditionelle Bankenwesen dar. 
        Dafür haben wir aus verschiedenen Bereichen Informationen gesammelt, um diese gebündelt an einem Ort darzustellen.

        Um Dir persönlich die passenden Informationen zu deinem Interessensschwerpunkt und Wissensstand darzustellen, 
        beantworte bitte zunächst die unten stehenden Fragen. Falls Du direkt auf einen Artikel zugreifen willst, 
        findest du eine Liste weiter unten oder über unsere Suche.
      </p>
      <Link
        to="/decisiontree"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8"
      >
        Jetzt eigenen Kurs erstellen!
      </Link>

      <hr className="w-4/5 border-t-2 border-gray-400 my-8 mb-16" />

    </div>
  );
};

export default DecisionTreeMainPage;
