import React, { useState } from "react";
import Staking from "../../../images/courseAdvanced/staking.jpg";

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

const CryptoAssetServicesPart2 = () => {
  const articlesources = [
    "Bank Frick, “Bank Frick expands its range of crypto assets and now offers trading and custodian services for Cardano, Polkadot and Tezos,” bankfrick.li, 2022. [Online]. Available: https://www.bankfrick.li/en/news-and-insights/bank-frick-expands-its-range-crypto-assets-and-now-offers-trading-and-custodian-services-cardano. [Accessed: Sept. 22, 2023].",
    "Bank Frick, “Bank Frick bietet neu Staking als Service für digitale Vermögenswerte an,” bankfrick.li, 2023. [Online]. Available: https://www.bankfrick.li/de/news-und-insights/bank-frick-bietet-neu-staking-als-service-fuer-digitale-vermoegenswerte-an. [Accessed: Sept. 22, 2023].",
    "Bundesministerium der Justiz. (2021, Jun. 3). “Gesetz über elektronische Wertpapiere (eWpG),”  [Online]. Available: https://www.gesetze-im-internet.de/ewpg/BJNR142310021.html. [Accessed: Sept. 22, 2023].",
    "Hauck Aufhäuser Lampe, “Krypto-Wertpapierregister­führung,” hal-privatbank.com. [Online]. Available: https://www.hal-privatbank.com/asset-servicing/digitale-assets/krypto-wertpapierregisterfuehrung. [Accessed: Sept. 22, 2023].",
    "Hauck Aufhäuser Lampe, “Registrar für Kryptowertpapiere und Kryptofondsanteile,” hal-privatbank.com, 2022. [Online]. Available: https://www.hal-privatbank.com/news/2022/registrar-fuer-kryptowertpapiere-und-kryptofondsanteile. [Accessed: Sept. 22, 2023].",
    "Bundesministerium der Justiz. (2023, Febr. 22). “Gesetz über das Kreditwesen,”  [Online]. Available: https://www.gesetze-im-internet.de/kredwg/index.html. [Accessed: Sept. 22, 2023].",
    "Deutsche Bundesbank, “Digitales Geld: Welche Optionen hat Europa?,” bundesbank.de, 2021. [Online]. Available: https://www.bundesbank.de/de/presse/gastbeitraege/digitales-geld-welche-optionen-hat-europa--854026#nb5. [Accessed: Sept. 22, 2023].",
    "M. Tewes, M. Bauer, G. Holz, “Security Tokenization,” Porsche Consulting, 2023. [Online]. Available: https://www.porsche-consulting.com/sites/default/files/2023-07/digital_assets_c_porsche_consulting_2023_0.pdf. [Accessed: Sept. 22, 2023].",
    "J. Blassl and S. Seiter. Anwendungsfälle von Stablecoins. (Feb. 28, 2013). Accessed: Jun. 3, 2018. [Online Video]. Available: https://youtu.be/psQs_uEw4aA?t=289 [Abgerufen am 29.08.2023].",
    "I. Henshaw, “Was sind Krypto-Kredite und wie funktionieren sie?,” cointelegraph.com, 2022. [Online]. Available: https://de.cointelegraph.com/explained/what-are-crypto-loans-and-how-do-they-work. [Accessed: Sept. 22, 2023].",
  ];
  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Staking</h2>

      <div className="p-4 mb-12 bg-green-200 rounded-lg">
        <p className=" italic text-justify">
          Neben dem Handel von Coins und Tokens erzählen die Aussteller Simone
          über eine weitere Dienstleistung, mit welcher die Kunden ihr zuvor
          gehandelten Kryptoassets nutzen könnne, um passives Einkommen zu
          generieren. Gespannt hört sich Simone die weitere
          Kryptoasset-Dienstleistung an
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img src={Staking} alt="Blockchain" className="w-full md:w-1/2" />
      </div>
      <div className="flex items-center justify-center mb-12">
        <a
          className="font-semibold text-sm"
          href="https://www.freepik.com/free-vector/flat-design-staking-illustration_25760032.htm#query=proof%20of%20stake&position=0&from_view=search&track=ais"
        >
          Freepik{" "}
        </a>
      </div>

      <p className="mb-8">
        Der Staking-Service ermöglicht es den Kunden der Bank, passive Einkommen
        durch das Halten von Kryptowährungen zu generieren. Dieser Service
        ermöglicht es den Kunden, Belohnungen in Form von neu generierten
        Kryptoassets zu erhalten, indem sie ihre Kryptowährungen bei der Bank
        halten. Ähnlich wie bei einem Sparkonto können Kunden passive Einkommen
        generieren <a href="#sources">[2]</a>.
      </p>

      <Sources sources={articlesources} />
    </div>
  );
};

export default CryptoAssetServicesPart2;
