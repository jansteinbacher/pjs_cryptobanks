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
    "https://www.liechtenstein.li/en/liechtenstein_news/bank-frick-erweitert-handel-mit-kryptowahrungen [Abgerufen am 29.08.2023].",
    "https://bitcoin-2go.de/bsdex-erfahrungen/ [Abgerufen am 29.08.2023].",
    "https://www.hal-privatbank.com/asset-servicing/digitale-assets/krypto-wertpapierregisterfuehrung [Abgerufen am 29.08.2023].",
    "https://www.hal-privatbank.com/news/2022/registrar-fuer-kryptowertpapiere-und-kryptofondsanteile [Abgerufen am 29.08.2023].",
    "https://www.bundesfinanzministerium.de/Content/DE/Gesetzestexte/Gesetze_Gesetzesvorhaben/ Abteilungen/Abteilung_VII/19_Legislaturperiode/2021-09-06-KryptoFAV/0-Gesetz.html [Abgerufen am 07.09.2023]",
    "https://www.metzler.com/de/metzler/bankhaus/kooperationen/artikel-kooperationen/news/Metzler/MAM/Presse/230905-MAM-Kryptofonds [Abgerufen am 07.09.2023].",
    "Blassl, J.; Seiter, S (2023): Kryptofondsanteile. In: https://youtu.be/RHy9_c8OFQw?t=259 [Abgerufen am 29.08.2023].",
    "https://www.geldinstitute.de/business/2022/Hauck-Aufhaeuser-Lampe-startet-Services-in-der-vollregulierten-Kryptoverwahrung.html [Abgerufen am 29.08.2023].",
    "https://www.bundesbank.de/de/presse/gastbeitraege/digitales-geld-welche-optionen-hat-europa--854026#nb5 [Abgerufen am 29.08.2023]",
    "Porsche Consulting Security Tokenization.",
    "https://youtu.be/psQs_uEw4aA?t=289 [Abgerufen am 29.08.2023]",
    "Henshaw, I. (2022):  Was sind Krypto-Kredite und wie funktionieren sie? In: https://de.cointelegraph.com/explained/what-are-crypto-loans-and-how-do-they-work [Abgerufen am 29.08.2023].",
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
        generieren.
      </p>

      <Sources sources={articlesources} />
    </div>
  );
};

export default CryptoAssetServicesPart2;
