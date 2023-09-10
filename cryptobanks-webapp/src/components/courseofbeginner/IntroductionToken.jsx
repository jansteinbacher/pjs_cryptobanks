import React, { useState } from "react";
import AssetCategories from "../../images/courseBeginner/assetcategories.png";
import CurrencyPrices from "../../images/courseBeginner/currencyprices.png";
import Ewpg from "../../images/courseBeginner/ewpg.png";
import NFT from "../../images/courseBeginner/nft.png";
import Sand from "../../images/courseBeginner/sand.png";
import Stablecoin from "../../images/courseBeginner/stablecoin.png";

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

const IntroBlockchain = () => {
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
        <img src={Sand} alt="sand" className="w-full md:w-7/8 mb-4" />

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
        <img src={Ewpg} alt="ewpg" className="w-full md:w-7/8 mb-4" />

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
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Non-Fungible Token (NFT)
      </h2>
      <div className="p-4 mb-12 bg-green-200 rounded-lg">
        <p className="italic text-justify">
          Nach Stunden der Recherche erinnert sich Bernd an ein Gespräch mit
          seinem Freund Heiko, der als Künstler sein Lebensunterhalt verdient.
          Dieser hatte ihm von digitalen Kunstwerken erzählt, die ausschließlich
          durch den Computer erschaffen werden. Zudem mache er sich Sorgen, dass
          er dadurch sein Job als Künstler an den Nagel hängen müsse. Bernd
          macht sich auf die Suche nach diesen digitalen Kunstwerken und findet
          diese auf einer Überssichtsseite unter dem Reiter “NFT”. Als ihm
          Bilder von Affenköpfen entgegenblicken, fragt er sich, was nun so
          spannend daran sein soll.
        </p>
      </div>
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
              handelbar. [14]
            </p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center mb-12">
        <p className="text-sm font-semibold">
          Übersichtsseite Non-Fungible Token [13]
        </p>
      </div>

      <Sources sources={articlesources} />
    </div>
  );
};

export default IntroBlockchain;
