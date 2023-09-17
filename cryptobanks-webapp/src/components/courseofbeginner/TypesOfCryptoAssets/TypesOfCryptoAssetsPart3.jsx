import React, { useState } from "react";
import UtlityToken from "../../../images/courseBeginner/sand.png";

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

const TypesOfCryptoAssetsPart3 = () => {
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
        Utility Token
      </h2>
      <div className="p-4 mb-12 bg-green-200 rounded-lg">
        <p className="italic text-justify">
          Nachdem Bernd sich mehrere Kryptowährungen (Payment Tokens) angeschaut
          hat, stößt er auf ein Kryptoasset, welches sich von denen zuvor
          unterscheidet. Er fragt sich, unter welcher Kategorie der Token
          Uniswap fällt. Laut der Beschreibung kann der Eigentümer damit an den
          Entscheidungen über den Betrieb der gleichnamigen Plattform “Uniswap”
          teilnehmen.
        </p>
      </div>
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
              schwierig diese zu kategorisieren [10].
            </p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center mb-12">
        <p className="text-sm font-semibold">
          Kursverlauf Token der Sandbox Plattform [9]
        </p>
      </div>
      <Sources sources={articlesources} />
    </div>
  );
};

export default TypesOfCryptoAssetsPart3;
