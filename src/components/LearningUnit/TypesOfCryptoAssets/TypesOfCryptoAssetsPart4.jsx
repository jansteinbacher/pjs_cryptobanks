import { useState } from 'react';
import CryptoSecurity from '../../../images/courseBeginner/ewpg.png';
import TypesOfCryptoAssetsSources from './TypesOfCryptoAssetsSources';
import { StoryBoxBernd } from '../../StoryBox';

function TypesOfCryptoAssetsPart4() {
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
    'Auf seiner weiteren Recherche begibt sich Bernd auf die Webseite von der Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin). Bereits zu traditionellen Finanzprodukten hatte er zahlreiche Informationen von dort bezogen, vielleicht hat er auch Glück und findet etwas zu Kryptoassets.',
    'Auf der Webseite entdeckt er unter anderem eine Liste von Kryptowertpapieren, welche bei der Bundesanstalt registriert sind. Mit traditionellen Wertpapieren konnte Bernd bereits viel Erfahrung sammeln, daher fragt er sich, inwiefern sich Kryptowertpapiere in Kryptoassets einordnen lassen.',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Security Token
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
        <img
          src={CryptoSecurity}
          alt="List of Crypto Securities in Germany"
          className="w-full md:w-7/8 mb-4"
        />

        {hovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 opacity-90">
            <div className="ml-4 mr-4">
              <p className="text-justify mb-8 mr-4 font-semibold text-gray-800">
                Im Gegensatz zu Utility Token handelt es sich bei Security Token
                um Vermögenswerte. Die regulatorischen Bestimmungen von Security
                Token sind vergleichbar mit denen der traditionellen
                Wertpapiere. Somit unterliegen sie den Kriterien des
                Wertpapierhandelsgesetz. Diese sind:
              </p>
              <ul className="mb-8 font-semibold list-disc ml-8">
                <li>
                  Ein Token gilt als Wertpapier nach § 2 Abs. 1 WpHG, wenn es
                  ein verbrieftes Recht darstellt und dem Inhaber einen Anspruch
                  gegenüber dem Emittenten vermittelt.{' '}
                </li>
                <li>
                  Ein Token wird als Wertpapier betrachtet, wenn das verbriefte
                  Recht übertragbar ist.{' '}
                </li>
                <li>
                  Wenn ein verbrieftes Recht handelbar oder mit einem Preis
                  versehen ist, der sich aus Angebot und Nachfrage ergibt,
                  erfüllt ein Token gemäß § 2 Abs. 1 WpHG die Kriterien eines
                  Wertpapiers
                </li>
              </ul>
              <p className="font-semibold">
                Zu den Security Token gehören die Unterarten Equity Token und
                Asset-Backed Token. Von Equity Token spricht man, wenn reale
                Vermögenswerte tokenisiert werden. Asset-Backed Token sind an
                ein Anlagegut (Asset) gebunden. Sie gewähren den Anspruch an
                einem physischen Vermögenswert <a href="#sources">[9]</a>.
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center mb-12">
        <p className="text-sm font-semibold">
          Liste der Kryptowertpapiere <a href="#sources">[8]</a>
        </p>
      </div>
      <TypesOfCryptoAssetsSources />
    </div>
  );
}

export default TypesOfCryptoAssetsPart4;
