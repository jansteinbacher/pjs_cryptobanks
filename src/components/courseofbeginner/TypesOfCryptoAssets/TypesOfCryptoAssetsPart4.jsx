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
    "H. Arslanian and H. Fischer, “The Continuing Evolution of Crypto-assets.,” in The Future of Finance. Cham: Palgrave Macmillan, 2019, pp-217–230.",
    "“Währungen,” coinbase.com. [Online]. Available: https://www.coinbase.com/trade/asset-categories/currencies. [Accessed Sept. 12, 2023].",
    "PwC, “Crypto assets under Basel IV: Capital treatment of cryptocurrencies and other tokens.,” PwC, 2019. [Online]. Available: https://digital.pwc-tools.de/basel-iv/crypto-assets/. [Accessed: Sept. 22, 2023].",
    "Europäische Zentralbank, “Digitaler Euro - European Central Bank,” PwC, 2023. [Online]. Available: https://www.ecb.europa.eu/paym/digital_euro/html/index.de.html. [Accessed: Sept. 22, 2023].",
    "“Stablecoins,” coinbase.com. [Online]. Available: https://www.coinbase.com/trade/asset-categories/stablecoins. [Accessed Sept. 12, 2023].",
    "“Sandbox,” blockchain.com. [Online]. Available: https://www.blockchain.com/explorer/assets/sand. [Accessed Sept. 12, 2023].",
    "V. Steidl und D. Wenz, “Utility Token,” bitcoin-2go.de, 2023. [Online]. Available: https://bitcoin-2go.de/wiki/utility-token/. [Accessed: Sept. 22, 2023].",
    "Bundesanstalt für Finanzdienstleistungsaufsicht, “Kryptowertpapierliste nach eWpG.,” Bundesanstalt für Finanzdienstleistungsaufsicht, Sept. 7, 2023. [Online]. Available: https://www.bafin.de/DE/PublikationenDaten/Datenbanken/Kryptowertpapiere/kryptowerte_node.html. [Accessed: Sept. 22, 2023].",
    "Wertpapierhandelsgesetz. 2023. Retrieved from https://www.gesetze-im-intenet.de/wphg/index.html",
    "“Tops NFTs,” blockchain.com. [Online]. Available: https://www.blockchain.com/explorer/nfts. [Accessed Sept. 12, 2023].",
    "C. Boeth, “Krypto-Assets im Investment Management - Regulatorischer Rahmen von Krypto Assets und Anwendungsmöglichkeiten der Technologie für Investment Manager,” deloitte.com, 2021. [Online]. Available: https://www2.deloitte.com/de/de/pages/financial-services/articles/krypto-assets-im-investment-management-regulatory.html. [Accessed: Sept. 22, 2023].",
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
      <Sources sources={articlesources} />
    </div>
  );
};

export default TypesOfCryptoAssetsPart4;
