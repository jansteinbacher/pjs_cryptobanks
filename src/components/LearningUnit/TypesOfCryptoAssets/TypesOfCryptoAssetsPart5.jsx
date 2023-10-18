import { useState } from 'react';
import NFT from '../../../images/courseBeginner/nft.png';
import TypesOfCryptoAssetsSources from './TypesOfCryptoAssetsSources';

function TypesOfCryptoAssetsPart5() {
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
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Non-Fungible Token (NFT)
      </h2>
      {isComingFromPreviousPage && (
        <div className="p-4 mb-12 bg-green-200 rounded-lg">
          <p className="italic text-justify">
            Nach Stunden der Recherche erinnert sich Bernd an ein Gespräch mit
            seinem Freund Heiko, der als Künstler sein Lebensunterhalt verdient.
            Dieser hatte ihm von digitalen Kunstwerken erzählt, die
            ausschließlich durch den Computer erschaffen werden. Zudem mache er
            sich Sorgen, dass er dadurch sein Job als Künstler an den Nagel
            hängen müsse. Bernd macht sich auf die Suche nach diesen digitalen
            Kunstwerken und findet diese auf einer Überssichtsseite unter dem
            Reiter “NFT”. Als ihm Bilder von Affenköpfen entgegenblicken, fragt
            er sich, was nun so spannend daran sein soll.
          </p>
        </div>
      )}
      <div
        className="flex justify-center items-center relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={NFT} alt="nft" className="w-full md:w-7/8 mb-4" />

        {hovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 opacity-90">
            <p className="text-justify font-semibold ml-4 mr-4 text-gray-800">
              NFTs sind Non-fungible Token. Das Besondere an diesen Token ist,
              dass jeder NFT einzigartig ist. Ein NFT stellt also das Eigentum
              an einem Vermögensgegenstand mit bestimmten Eigenschaften dar, wie
              z. B. ein digitales Kunstwerk. NFTs werden unterteilt in
              transferable oder non-transferable Token. Es wird demnach zwischen
              handelbaren und nicht-handelbaren Token unterschieden. Ein
              Beispiel für einen nicht-handelbaren Token ist die Darstellung der
              Reputation einer Firma. Dieser Ruf kann nicht an andere
              Unternehmen veräußert werden und ist dementsprechend nicht
              handelbar <a href="#sources">[11]</a>.
            </p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center mb-12">
        <p className="text-sm font-semibold">
          Übersichtsseite Non-Fungible Token <a href="#sources">[10]</a>
        </p>
      </div>
      <TypesOfCryptoAssetsSources />
    </div>
  );
}

export default TypesOfCryptoAssetsPart5;
