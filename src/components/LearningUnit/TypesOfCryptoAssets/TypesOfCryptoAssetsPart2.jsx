import { useState } from 'react';
import Stablecoin from '../../../images/courseBeginner/stablecoin.png';
import CurrencyPrices from '../../../images/courseBeginner/currencyprices.png';
import TypesOfCryptoAssetsSources from './TypesOfCryptoAssetsSources';
import { StoryBoxBernd } from '../../StoryBox';

function TypesOfCryptoAssetsPart2() {
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

  const berndStoryPart1 = [
    'Unter dem Reiter “Kryptowährungen” auf einer Kryptoasset-Handelsbörse fällt Bernds Blick sofort auf den Namen “Bitcoin”.',
    'Er erinnert sich an sein Gespräch mit Simone und Tobias zurück über Satoshi Nakamoto dem Erfinder von Bitcoin. Unter Bitcoin findet er noch weitere Währungen wie “Dodgecoin”, “SHIBA INU” oder auch “Litecoin”.',
  ];

  const berndStoryPart2 = [
    'Bernd klickt sich weiter durch die einzelnen Reiter der Handelsbörse und stößt auf den Begriff Stablecoins. Er wundert sich, inwiefern sich diese von den Kryptowährungen unterscheidet.',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Payment Token
      </h2>
      {isComingFromPreviousPage && (
        <StoryBoxBernd paragraphs={berndStoryPart1} />
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
          src={CurrencyPrices}
          alt="currencyprices"
          className="w-full md:w-7/8 mb-4"
        />

        {hovered && (
<<<<<<< HEAD
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 opacity-90">
            <div className="ml-4 mr-4 text-black">
              <p className="mb-4">
                Unter Payment Token versteht man sogenannte{' '}
                <strong>Zahlungstoken</strong>. Mittels dieser können{' '}
                <strong>Finanztransaktionen</strong> durchgeführt werden.{' '}
                <strong>Kryptowährungen</strong> zählen zu den weltweit
                bekanntesten Payment Token. Mittlerweile gibt es eine Vielzahl
                an Kryptowährungen. Die wohl Bekanntesten sind{' '}
                <strong>Bitcoin und Ethereum</strong>. Zentralbanken, wie die
                EZB, sind außerdem gerade dabei über die Einführung einer{' '}
                <strong>
                  virtuellen Zentralbankwährung (Central Bank Digital Currency -
                  CBDC)
                </strong>
                , wie den <strong>digitalen Euro</strong>, zu diskutieren{' '}
                <a href="#sources">[3]</a>, <a href="#sources">[4]</a>.
              </p>
            </div>
=======
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 opacity-90">
            <p className="text-left font-semibold ml-4 mr-4 text-gray-800">
              Unter Payment Token versteht man sogenannte Zahlungstoken. Mittels
              dieser können Finanztransaktionen durchgeführt werden.
              Kryptowährungen zählen zu den weltweit bekanntesten Payment Token.
              Mittlerweile gibt es eine Vielzahl an Kryptowährungen. Die wohl
              Bekanntesten sind Bitcoin und Ethereum. Zentralbanken, wie die
              EZB, sind außerdem gerade dabei über die Einführung einer
              virtuellen Zentralbankwährung (Central Bank Digital Currency -
              CBDC), wie den digitalen Euro, zu diskutieren{' '}
              <a href="#sources">[3]</a>, <a href="#sources">[4]</a>.
            </p>
>>>>>>> main
          </div>
        )}
      </div>
      <div className="flex items-center justify-center mb-12">
        <p className="text-sm font-semibold">
          Handelsseite Kryptowährungen <a href="#sources">[2]</a>
        </p>
      </div>
      {isComingFromPreviousPage && (
        <StoryBoxBernd paragraphs={berndStoryPart2} />
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
          src={Stablecoin}
          alt="stablecoin"
          className="w-full md:w-7/8 mb-4"
        />

        {hovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 opacity-90">
            <div className="ml-4 mr-4 text-black">
              <p className="mb-4">
                Im Unterschied zu Kryptowährungen ist die{' '}
                <strong>
                  Wertentwicklung von Stablecoins an einen externen
                  Vermögenswert gebunden
                </strong>
                , wie etwa{' '}
                <strong>
                  gesetzliche Zahlungsmittel (z. B. US-Dollar oder Euro)
                </strong>{' '}
                oder{' '}
                <strong>
                  andere Vermögenswerte (z.B. Gold, Wertpapiere, andere
                  Kryptoassets oder eine beliebige Mischung hiervon)
                </strong>
                .
              </p>
              <p className="mb-4">
                Der Hauptzweck von Stablecoins liegt darin,{' '}
                <strong>
                  volatiles Krypto-Vermögen in einen Stablecoin umzuwandeln,
                  ohne das Krypto-Ökosystem verlassen zu müssen
                </strong>
                . Insbesondere angesichts der starken Schwankungen von
                Kryptoassets wie Bitcoin ist das{' '}
                <strong>
                  Ziel von Stablecoins Preisstabilität zu erreichen
                </strong>{' '}
                <a href="#sources">[1]</a>.
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center mb-12">
        <p className="text-sm font-semibold">
          Handelsseite Stablecoins <a href="#sources">[5]</a>
        </p>
      </div>
      <TypesOfCryptoAssetsSources />
    </div>
  );
}

export default TypesOfCryptoAssetsPart2;
