import { useState } from 'react';
import Stablecoin from '../../../images/courseBeginner/stablecoin.png';
import CurrencyPrices from '../../../images/courseBeginner/currencyprices.png';
import TypesOfCryptoAssetsSources from './TypesOfCryptoAssetsSources';

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

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Payment Token
      </h2>
      {isComingFromPreviousPage && (
        <div className="p-4 mb-12 bg-green-200 rounded-lg">
          <p className="italic text-justify">
            Unter dem Reiter “Kryptowährungen” auf einer
            Kryptoasset-Handelsbörse fällt Bernds Blick sofort auf den Namen
            “Bitcoin”. Er erinnert sich an sein Gespräch mit Simone und Tobias
            zurück über Satoshi Nakamoto dem Erfinder von Bitcoin. Unter Bitcoin
            findet er noch weitere Währungen wie “Dodgecoin”, “SHIBA INU” oder
            auch “Litecoin”.
          </p>
        </div>
      )}
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
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 opacity-90">
            <p className="text-justify font-semibold ml-4 mr-4 text-gray-800">
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
          </div>
        )}
      </div>
      <div className="flex items-center justify-center mb-12">
        <p className="text-sm font-semibold">
          Handelsseite Kryptowährungen <a href="#sources">[2]</a>
        </p>
      </div>
      <div className="p-4 mb-12 bg-green-200 rounded-lg">
        <p className="italic text-justify">
          Bernd klickt sich weiter durch die einzelnen Reiter der Handelsbörse
          und stößt auf den Begriff Stablecoins. Er wundert sich, inwiefern sich
          diese von den Kryptowährungen unterscheidet
        </p>
      </div>
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
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 opacity-90">
            <p className="text-justify font-semibold ml-4 mr-4 text-gray-800">
              Im Unterschied zu Kryptowährungen ist die Wertentwicklung von
              Stablecoins an einen externen Vermögenswert gebunden, wie etwa
              gesetzliche Zahlungsmittel (z. B. US-Dollar oder Euro) oder andere
              Vermögenswerte (z.B. Gold, Wertpapiere, andere Kryptoassets oder
              eine beliebige Mischung hiervon). Der Hauptzweck von Stablecoins
              liegt darin, volatiles Krypto-Vermögen in einen Stablecoin
              umzuwandeln, ohne das Krypto-Ökosystem verlassen zu müssen.
              Insbesondere angesichts der starken Schwankungen von Kryptoassets
              wie Bitcoin ist das Ziel von Stablecoins Preisstabilität zu
              erreichen <a href="#sources">[1]</a>.
            </p>
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
