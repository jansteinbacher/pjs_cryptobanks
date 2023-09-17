import React, { useState } from "react";
import AssetCategories from "../../../images/courseBeginner/assetcategories.png";

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

const TypesOfCryptoAssetsPart1 = () => {
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
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Arten von Kryptoassets und ihre Verbindung zu traditionellen
        Finanzprodukten
      </h1>
      <div className="p-4 mb-12 bg-green-200 rounded-lg">
        <p className="italic text-justify">
          Mit einem Grundverständnis für Kryptoassets begibt sich Bernd auf die
          weitere Suche nach realen Kryptoassets. Schnell gelangt er auf
          verschiedene Kryptoasset-Handelsbörsen und -Übersichtsseiten, auf der
          verschiedene Token und Coins aufgelistet sind. Er fühlt sich erstmal
          erschlagen von der großen Menge an Kryptoassets, in welche er
          investieren kann. Jedoch hat Bernd von Tobias einen schlauen Helfer in
          seinen Internetbrowser installiert bekommen. Jetzt muss er nur noch
          mit der Maus über die einzelnen Webseiteninhalte fahren und erhält
          zusätzliche Informationen. Mit Tatendrang beginnt Bernd sich durch die
          verschiedenen Reiter der Webseiten zu klicken, um mehr zu erfahren.
        </p>
      </div>

      <p className="mb-8 font-bold">
        Fahre mit deiner Maus über die Bilder und erfahre mehr!
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
              und nicht-fungibel.[2]
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
              Kryptoassets.[3]
            </p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center mb-12">
        <p className="text-sm font-semibold">Kryptoasset Taxonomie [1]</p>
      </div>
      <Sources sources={articlesources} />
    </div>
  );
};

export default TypesOfCryptoAssetsPart1;
