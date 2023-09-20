import React, { useState } from "react";
import CryptoSet from "../../../images/courseAdvanced/cryptoSet.jpg";

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

const CryptoAssetServicesPart1 = () => {
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
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Potenzielle Krypto-Dienstleistungen
      </h1>

      <div className="p-4 mb-8 bg-green-200 rounded-lg">
        <p className=" italic text-justify mb-4">
          Randvoll mit umfassendem regulatorischem Wissen stellt sich Simone die
          Frage, welche potenziellen Anwendungen von Kryptoassets im
          Bankensektor bestehen könnten. Durch eine Unterhaltung mit ihrer
          Freundin erfährt sie von der bevorstehenden Digital Asset Conference
          in Frankfurt, auf der sie hoffentlich Antworten auf ihre Frage finden
          kann. Fasziniert von dieser Idee, entschließt sich Simone dazu, zwei
          Wochen später an dieser Konferenz teilzunehmen. Nach ihrer Ankunft auf
          der Konferenz entdeckt sie zahlreiche Stände verschiedener
          Unternehmen. Mit wachsender Begeisterung nähert sich Simone Stand um
          Stand, während die Mitarbeiter der Unternehmen ihr ihre jeweiligen
          Krypto-Dienstleistungen erläutern.
        </p>
        <p>
          Nach ihrer Ankunft auf der Konferenz entdeckt sie zahlreiche Stände
          verschiedener Unternehmen. Mit wachsender Begeisterung nähert sich
          Simone Stand um Stand, während die Mitarbeiter der Unternehmen ihr
          ihre jeweiligen Krypto-Dienstleistungen erläutern.
        </p>
      </div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-12">
        Handel mit Kryptoassets
      </h2>
      <div className="flex justify-center items-center">
        <img
          src={CryptoSet}
          alt="Verschiedene Kryptoassets"
          className="w-full md:w-1/2"
        />
      </div>
      <div className="flex items-center justify-center mb-12">
        <a
          className="font-semibold text-sm"
          href="https://www.freepik.com/free-vector/popular-cryptocurrency-logos-set_23678052.htm#query=crypto%20currencies&position=0&from_view=search&track=ais"
        >
          Bild von myriammira auf Freepik
        </a>
      </div>

      <div className="p-4 mb-8 bg-green-200 rounded-lg">
        <p className=" italic text-justify">
          Am ersten Stand präsentieren die Aussteller Simone den Krypto-Handel,
          die es Investoren ermöglicht, Kryptowährungen mühelos zu erwerben und
          zu veräußern. Dies erinnert Simone an ein vergangenes Projekt, bei dem
          sie aktiv an der Integration von Kauf- und Verkaufsoptionen für ETFs
          in einer Online-Banking-App beteiligt war. Gespannt verfolgt sie
          aufmerksam die Ausführungen der Unternehmensvertreter
        </p>
      </div>

      <p className="mb-8">
        Die Bank bietet den Handel von führenden Kryptoassets an. Neben
        klassischen Coins, wie Bitcoin (BTC) oder Ethereum (ETH) werden auch
        Token, wie Cardano (ADA) oder Polkadot (DOT). Die Kryptoassets können
        mittels Euro, US-Dollar und Schweizer Franken gekauft werden.
        https://www.liechtenstein.li/en/liechtenstein_news/bank-frick-erweitert-handel-mit-kryptowahrungen
      </p>

      <Sources sources={articlesources} />
    </div>
  );
};

export default CryptoAssetServicesPart1;
