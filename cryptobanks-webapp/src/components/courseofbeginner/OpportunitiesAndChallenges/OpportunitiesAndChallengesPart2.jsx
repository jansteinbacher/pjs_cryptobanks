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
    "vgl. Meisner, H. (2021). Neue Herausforderungen in der Finanzsphäre. In: Finanzwirtschaft in der Internetökonomie. Springer Gabler, Wiesbaden. https://doi.org/10.1007/978-3-658-33715-5_7",
    "vgl. Kerscher, D. (2013). Bitcoin: Funktionsweise. Risiken und Chancen der digitalen Währung. Kemacon Verlag, Leipzig",
    "vgl. https://www.coindesk.com/business/2022/11/02/divisions-in-sam-bankman-frieds-crypto-empire-blur-on-his-trading-titan-alamedas-balance-sheet/ ",
    "vgl. Meisner, H. (2021). Neue Herausforderungen in der Finanzsphäre. In: Finanzwirtschaft in der Internetökonomie. Springer Gabler, Wiesbaden. https://doi.org/10.1007/978-3-658-33715-5_7",
    "Gorton, Gary B. and Zhang, Jeffery, Bank Runs During Crypto Winter (May 12, 2023). U of Michigan Law & Econ Research Paper, Available at SSRN: https://ssrn.com/abstract=4447703 or http://dx.doi.org/10.2139/ssrn.4447703",
    "vgl. de Vries, Alex, Ulrich Gallersdörfer, Lena Klaaßen, and Christian Stoll (2022). Revisiting Bitcoin’s carbon footprint. In: Joule 6, S. 498–502.",
    "vgl. Porsche Consulting",
    "ebd.",
    "ebd.",
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
        von tokenisierten Anleihen oder Aktien. [7]
      </p>

      <p className="mb-8 text-justify">
        Tokenisierung ermöglicht die digitale Darstellung und Aufteilung von
        Vermögenswerten. Dabei können die Nennwerte der Tokens flexibel
        angepasst werden, um den Bedürfnissen der Investoren besser gerecht zu
        werden. Außerdem können die Einnahmeströme aus Vermögenswerten
        automatisch unter den Inhabern der Tokens aufgeteilt werden. [8]
      </p>

      <p className="mb-8 text-justify">
        Smart Contracts können bestimmte Aufgaben im MBO (Mid- and Back-Office)
        automatisieren und deutlich beschleunigen. Gleichzeitig kann der Bedarf
        an Intermediäre, wie zentralen Clearingstellen, reduziert werden. Des
        Weiteren führen atomare Trades zu einer erheblichen Reduzierung des
        Gegenparteirisikos. Dabei ermöglichen Smart Contracts den Austausch von
        Vermögenswerten (Security Tokens) mit Zahlungsmittel (Payment Tokens) in
        Echtzeit [9]
      </p>

      <Sources sources={articlesources} />
    </div>
  );
};

export default OpportunitiesAndChallengesPart2;
