import React, { useState } from "react";
import CryptoSecurity from "../../../images/courseBeginner/ewpg.png";

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

const TypesOfCryptoAssetsPart4 = () => {
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
        Security Token
      </h2>
      <div className="p-4 mb-12 bg-green-200 rounded-lg">
        <p className="italic text-justify">
          Auf seiner weiteren Recherche begibt sich Bernd auf die Webseite von
          der Bundesanstalt für Finanzdienstleistungsaufsicht (BaFin). Bereits
          zu traditionellen Finanzprodukten hatte er zahlreiche Informationen
          von dort bezogen, vielleicht hat er auch Glück und findet etwas zu
          Kryptoassets. Auf der Webseite entdeckt er unter anderem eine Liste
          von Kryptowertpapieren, welche bei der Bundesanstalt registriert sind.
          Mit traditionellen Wertpapieren konnte Bernd bereits viel Erfahrung
          sammeln, daher fragt er sich, inwiefern sich Kryptowertpapiere in
          Kryptoassets einordnen lassen.
        </p>
      </div>
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
                  gegenüber dem Emittenten vermittelt.{" "}
                </li>
                <li>
                  Ein Token wird als Wertpapier betrachtet, wenn das verbriefte
                  Recht übertragbar ist.{" "}
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
                einem physischen Vermögenswert [12].
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center mb-12">
        <p className="text-sm font-semibold">
          Liste der Kryptowertpapiere [11]
        </p>
      </div>
      <Sources sources={articlesources} />
    </div>
  );
};

export default TypesOfCryptoAssetsPart4;
