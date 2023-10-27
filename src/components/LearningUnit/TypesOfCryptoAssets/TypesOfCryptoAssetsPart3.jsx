import { useState } from 'react';
import UtlityToken from '../../../images/courseBeginner/sand.png';
import TypesOfCryptoAssetsSources from './TypesOfCryptoAssetsSources';
import { StoryBoxBernd } from '../../StoryBox';

function TypesOfCryptoAssetsPart3() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const isComingFromPreviousPage = window.location.search.includes(
    'from=beginner-course',
  );

  const berndStory = [
    'Nachdem Bernd sich mehrere Kryptowährungen (Payment Tokens) angeschaut hat, stößt er auf ein Kryptoasset, welches sich von denen zuvor unterscheidet.',
    'Er fragt sich, unter welcher Kategorie der Token The Sandbox fällt. Laut der Beschreibung kann der Eigentümer damit an den Entscheidungen über den Betrieb der gleichnamigen Plattform “The Sandbox” teilnehmen.',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Utility Token
      </h2>
      {isComingFromPreviousPage && <StoryBoxBernd paragraphs={berndStory} />}
      <p className="mb-8 font-bold">
        Fahre mit deiner Maus über das Bild und erfahre mehr!
      </p>
      <div
        className="flex justify-center items-center relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={UtlityToken} alt="sand" className="w-full md:w-7/8 mb-4" />

        {hovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 opacity-90">
            <p className="text-justify font-semibold ml-4 mr-4 text-gray-800">
              Utility Token werden auch als “App-Token” bzw. “Nutzungstoken”
              bezeichnet. Dabei wird dem Investor ein bestimmtes Nutzungsrecht
              zur Verfügung gestellt. Er kann also mithilfe des Tokens eine
              bestimmte Blockchain-Anwendung durchführen. Ein konkretes Beispiel
              wäre der Exchange Token, der auf der Krypto-Börse für die
              permanente Reduzierung der Handelsgebühren sorgt. Aufgrund der
              vielfältigen Anwendungsmöglichkeiten von Utility Token, ist es
              schwierig diese zu kategorisieren <a href="#sources">[7]</a>.
            </p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center mb-12">
        <p className="text-sm font-semibold">
          Kursverlauf Token der Sandbox Plattform <a href="#sources">[6]</a>
        </p>
      </div>
      <TypesOfCryptoAssetsSources />
    </div>
  );
}

export default TypesOfCryptoAssetsPart3;
