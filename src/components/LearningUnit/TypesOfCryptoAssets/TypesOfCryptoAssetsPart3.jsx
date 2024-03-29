import { useState } from 'react';
import UtlityToken from '../../../images/courseBeginner/sand.png';
import TypesOfCryptoAssetsSources from './TypesOfCryptoAssetsSources';
import { StoryBoxBernd } from '../../StoryBox';

/**
 * Component representing the third part of the "Types of Crypto Assets and Their Connection to Traditional Financial Products" section. This part introduces Utility Tokens, provides an image with interactive hover functionality to reveal additional information about this crypto asset category, and includes a story element for context.
 */

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
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 opacity-90">
            <div className="ml-4 mr-4 text-black">
              <p className="mb-4 font-bold">
                Utility Token werden auch als “App-Token” bzw. “Nutzungstoken”
                bezeichnet.
              </p>
              <p className="mb-4">
                Dabei wird dem Investor ein{' '}
                <strong>bestimmtes Nutzungsrecht</strong> zur Verfügung
                gestellt. Er kann also mithilfe des Tokens eine{' '}
                <strong>bestimmte Blockchain-Anwendung durchführen</strong>. Ein
                konkretes Beispiel wäre der Exchange Token, der auf der
                Krypto-Börse für die permanente Reduzierung der Handelsgebühren
                sorgt.
              </p>
              <p className="mb-4 font-bold">
                Aufgrund der vielfältigen Anwendungsmöglichkeiten von Utility
                Token, ist es schwierig diese zu kategorisieren{' '}
                <a href="#sources">[7]</a>.
              </p>
            </div>
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
