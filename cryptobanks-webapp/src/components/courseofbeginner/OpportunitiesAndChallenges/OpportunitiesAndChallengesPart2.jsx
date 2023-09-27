import React, { useState } from "react";

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

const OpportunitiesAndChallengesPart2 = () => {
  const articlesources = [
    "H. Meisner, “Neue Herausforderungen in der Finanzsphäre,” in Finanzwirtschaft in der Internetökonomie. Wiesbaden: Springer Gabler, 2021, pp. 179–218.",
    "D. Kerscher, Bitcoin: Funktionsweise, Risiken und Chancen der digitalen Währung. Dingolfing: Kemacon UG, 2014",
    "I. Allison, “Divisions in Sam Bankman-Fried’s Crypto Empire Blur on His Trading Titan Alameda’s Balance Sheet,” The Atlanta Journal Constitution, Nov. 2, 2022. [Online], Available: https://www.coindesk.com/business/2022/11/02/divisions-in-sam-bankman-frieds-crypto-empire-blur-on-his-trading-titan-alamedas-balance-sheet/. [Accessed Sept. 22, 2023].",
    "G. B. Gorton and J. Zhang, Bank Runs During Crypto Winter. To be published.  [Online]. Available: http://dx.doi.org/10.2139/ssrn.4447703. [Accessed: Sept. 22, 2023].",
    "A. de Vries, U. Gallersdörfer, L. Klaaßen, C. Stoll, “Revisiting Bitcoin’s carbon footprint,” Joule, vol. 6, pp. 498–502, 2022.",
    "M. Tewes, M. Bauer, G. Holz, “Security Tokenization,” Porsche Consulting, 2023. [Online]. Available: https://www.porsche-consulting.com/sites/default/files/2023-07/digital_assets_c_porsche_consulting_2023_0.pdf. [Accessed: Sept. 22, 2023].",
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Zukunftsaussichten von Kryptoassets
      </h2>
      <p className="mb-8 text-justify">
        Kryptoassets, wie Security Token Offerings (STOs) bieten die Möglichkeit
        einer neuen Art von Kapitalbeschaffung. Daneben können Non-Fungible
        Tokens (NFTs) den Handel und Investition in reale oder bisher illiquide
        Vermögenswerte ermöglichen. Zudem eröffnet es die Tür für Investitionen
        in neu gegründete kleine und mittlere Unternehmen (KMU) durch den Kauf
        von tokenisierten Anleihen oder Aktien <a href="#sources">[6]</a>.
      </p>

      <p className="mb-8 text-justify">
        Tokenisierung ermöglicht die digitale Darstellung und Aufteilung von
        Vermögenswerten. Dabei können die Nennwerte der Tokens flexibel
        angepasst werden, um den Bedürfnissen der Investoren besser gerecht zu
        werden. Außerdem können die Einnahmeströme aus Vermögenswerten
        automatisch unter den Inhabern der Tokens aufgeteilt werden{" "}
        <a href="#sources">[6]</a>.
      </p>

      <p className="mb-8 text-justify">
        Smart Contracts können bestimmte Aufgaben im MBO (Mid- and Back-Office)
        automatisieren und deutlich beschleunigen. Gleichzeitig kann der Bedarf
        an Intermediäre, wie zentralen Clearingstellen, reduziert werden. Des
        Weiteren führen atomare Trades zu einer erheblichen Reduzierung des
        Gegenparteirisikos. Dabei ermöglichen Smart Contracts den Austausch von
        Vermögenswerten (Security Tokens) mit Zahlungsmittel (Payment Tokens) in
        Echtzeit <a href="#sources">[6]</a>.
      </p>

      <Sources sources={articlesources} />
    </div>
  );
};

export default OpportunitiesAndChallengesPart2;
