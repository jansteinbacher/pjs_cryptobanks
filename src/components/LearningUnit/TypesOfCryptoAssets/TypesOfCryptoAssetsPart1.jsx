import { useState } from 'react';

import AssetCategories from '../../../images/courseBeginner/assetcategories.png';
import TypesOfCryptoAssetsSources from './TypesOfCryptoAssetsSources';

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

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Arten von Kryptoassets und ihre Verbindung zu traditionellen
        Finanzprodukten
      </h1>
      {isComingFromPreviousPage && (
        <div className="p-4 mb-12 bg-green-200 rounded-lg">
          <p className="italic text-justify">
            Mit einem Grundverständnis für Kryptoassets begibt sich Bernd auf
            die weitere Suche nach realen Kryptoassets. Schnell gelangt er auf
            verschiedene Kryptoasset-Handelsbörsen und -Übersichtsseiten, auf
            der verschiedene Token und Coins aufgelistet sind. Er fühlt sich
            erstmal erschlagen von der großen Menge an Kryptoassets, in welche
            er investieren kann. Jedoch hat Bernd von Tobias einen schlauen
            Helfer in seinen Internetbrowser installiert bekommen. Jetzt muss er
            nur noch mit der Maus über die einzelnen Webseiteninhalte fahren und
            erhält zusätzliche Informationen. Mit Tatendrang beginnt Bernd sich
            durch die verschiedenen Reiter der Webseiten zu klicken, um mehr zu
            erfahren.
          </p>
        </div>
      )}

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
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 opacity-90">
            <p className="text-justify font-semibold ml-4 mr-4 text-gray-800">
              Es existiert eine vielfältige Auswahl an Kryptoassets. Zu den
              prominentesten zählen Kryptowährungen, NFTs (Non-Fungible Tokens)
              sowie Stablecoins – um nur einige zu nennen. Diese Kryptoassets
              lassen sich grundlegend in zwei Kategorien unterteilen: fungibel
              und nicht-fungibel <a href="#sources">[1]</a>.
              <br />
              <br />
              Fungible Tokens sind in ihrer Funktion identisch und können
              nahtlos untereinander ausgetauscht werden. Demgegenüber sind
              nicht-fungible Tokens einzigartig und individuell. Innerhalb der
              fungiblen Tokens lassen sich Utility Tokens, Security Tokens und
              Payment Tokens unterscheiden. Im Bereich der nicht-fungiblen
              Tokens gibt es wiederum jene, die übertragbar sind, sowie solche,
              die es nicht sind. Zur besseren Übersicht veranschaulicht die
              nachfolgende Abbildung die verschiedenen Kategorien von
              Kryptoassets <a href="#sources">[1]</a>.
            </p>
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
