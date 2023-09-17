import React, { useState } from "react";
import Stablecoin from "../../../images/courseBeginner/stablecoin.png";
import CurrencyPrices from "../../../images/courseBeginner/currencyprices.png";

const Sources = ({ sources }) => {
  const [showSources, setShowSources] = useState(false);

  const toggleSources = () => {
    setShowSources(!showSources);
  };

  return (
    <div className="sources border border-gray-400 rounded p-4">
      <button
        className="text-lg font-semibold"
        id="sources"
        onClick={toggleSources}
      >
        Quellen:
      </button>
      {showSources && (
        <div className="source-list leading-relaxed mt-4">
          <ul>
            {sources.map((source, index) => (
              <li id={index + 1} key={index}>
                [{index + 1}] {source}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const TypesOfCryptoAssetsPart2 = () => {
  const articlesources = [
    "Arslanian, H., Fischer, F. 2019. „The Continuing Evolution of Crypto-assets.,” In: The Future of Finance. Palgrave Macmillan, Cham. https://doi.org/10.1007/978-3-030-14533-0_17",
    "ebd.",
    "ebd.",
    "https://www.coinbase.com/trade/asset-categories/currencies",
    "PwC. 2019. „Crypto assets under Basel IV: Capital treatment of cryptocurrencies and other tokens.,” Retrieved from https://digital.PwC-tools.de/basel-iv/crypto-assets/",
    "Europäische Zentralbank. 2023. “Digitaler Euro - European Central Bank”. Retrieved from https://www.ecb.europa.eu/paym/digital_euro/html/index.de.html",
    "https://www.coinbase.com/trade/asset-categories/stablecoins",
    "Arslanian, H., Fischer, F. 2019. „The Continuing Evolution of Crypto-assets.,” In: The Future of Finance. Palgrave Macmillan, Cham. https://doi.org/10.1007/978-3-030-14533-0_17",
    "https://www.blockchain.com/explorer/assets/sand",
    "Steidl, V., Wenz, D. 2023. “Utility Token » Bitcoin2Go Wiki”. Retrieved from https://bitcoin-2go.de/wiki/utility-token/",
    "https://www.bafin.de/DE/PublikationenDaten/Datenbanken/Kryptowertpapiere/kryptowerte_node.html",
    "Wertpapierhandelsgesetz. 2023. Retrieved from https://www.gesetze-im-intenet.de/wphg/index.html",
    "https://www.blockchain.com/explorer/nfts",
    "Boeth, C. “Krypto-Assets im Investment Management - Regulatorischer Rahmen von Krypto Assets und Anwendungsmöglichkeiten der Technologie für Investment Manager”. Retrieved from https://www2.deloitte.com/de/de/pages/financial-services/articles/krypto-assets-im-investment-management-regulatory.html ",
  ];

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Payment Token
      </h2>
      <div className="p-4 mb-12 bg-green-200 rounded-lg">
        <p className="italic text-justify">
          Unter dem Reiter “Kryptowährungen” auf einer Kryptoasset-Handelsbörse
          fällt Bernds Blick sofort auf den Namen “Bitcoin”. Er erinnert sich an
          sein Gespräch mit Simone und Tobias zurück über Satoshi Nakamoto dem
          Erfinder von Bitcoin. Unter Bitcoin findet er noch weitere Währungen
          wie “Dodgecoin”, “SHIBA INU” oder auch “Litecoin”.
        </p>
      </div>
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
              CBDC), wie den digitalen Euro, zu diskutieren. [5][6]{" "}
            </p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center mb-12">
        <p className="text-sm font-semibold">
          Handelsseite Kryptowährungen [4]
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
              erreichen. [8]
            </p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center mb-12">
        <p className="text-sm font-semibold">Handelsseite Stablecoins [7]</p>
      </div>
      <Sources sources={articlesources} />
    </div>
  );
};

export default TypesOfCryptoAssetsPart2;
