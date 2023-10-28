import { useState } from 'react';

import AssetCategories from '../../../images/courseBeginner/assetcategories.png';
import TypesOfCryptoAssetsSources from './TypesOfCryptoAssetsSources';
import { StoryBoxBernd } from '../../StoryBox';

function TypesOfCryptoAssetsPart1() {
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
    'Mit einem Grundverständnis für Kryptoassets begibt sich Bernd auf die weitere Suche nach realen Kryptoassets. Schnell gelangt er auf verschiedene Kryptoasset-Handelsbörsen und -Übersichtsseiten, auf der verschiedene Token und Coins aufgelistet sind.',
    'Er fühlt sich erstmal erschlagen von der großen Menge an Kryptoassets, in welche er investieren kann. Jedoch hat Bernd von Tobias einen schlauen Helfer in seinen Internetbrowser installiert bekommen. Jetzt muss er nur noch mit der Maus über die einzelnen Webseiteninhalte fahren und erhält zusätzliche Informationen.',
    'Mit Tatendrang beginnt Bernd sich durch die verschiedenen Reiter der Webseiten zu klicken, um mehr zu erfahren.',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Arten von Kryptoassets und ihre Verbindung zu traditionellen
        Finanzprodukten
      </h1>
      {isComingFromPreviousPage && <StoryBoxBernd paragraphs={berndStory} />}

      <p className="mb-8 font-bold">
        Fahre mit deiner Maus über das Bild und erfahre mehr!
      </p>

      <div
        className="flex justify-center items-center relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={AssetCategories}
          alt="assetcategories"
          className="w-full md:w-7/8 mb-4"
        />

        {hovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 opacity-90">
            <div className=" ml-4 mr-4 text-black">
              <p className="mb-4">
                <strong>
                  Es existiert eine vielfältige Auswahl an Kryptoassets.
                </strong>{' '}
                Zu den prominentesten zählen <strong>Kryptowährungen</strong>,{' '}
                <strong>NFTs (Non-Fungible Tokens)</strong> sowie{' '}
                <strong>Stablecoins</strong> – um nur einige zu nennen. Diese
                Kryptoassets lassen sich grundlegend in zwei Kategorien
                unterteilen: <strong>fungibel</strong> und{' '}
                <strong>nicht-fungibel</strong> <a href="#sources">[1]</a>.
              </p>
              <p>
                <strong>Fungible Tokens</strong> sind in ihrer Funktion
                identisch und können nahtlos untereinander ausgetauscht werden.
                Demgegenüber sind <strong>nicht-fungible Tokens</strong>{' '}
                einzigartig und individuell. Innerhalb der fungiblen Tokens
                lassen sich <strong>Utility Tokens</strong>,{' '}
                <strong>Security Tokens</strong> und{' '}
                <strong>Payment Tokens</strong> unterscheiden. Im Bereich der
                nicht-fungiblen Tokens gibt es wiederum jene, die übertragbar
                sind, sowie solche, die es nicht sind. Zur besseren Übersicht
                veranschaulicht die nachfolgende Abbildung die verschiedenen
                Kategorien von Kryptoassets <a href="#sources">[1]</a>.
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center mb-12">
        <p className="text-sm font-semibold">
          Kryptoasset Taxonomie <a href="#sources">[1]</a>
        </p>
      </div>
      <TypesOfCryptoAssetsSources />
    </div>
  );
}

export default TypesOfCryptoAssetsPart1;
