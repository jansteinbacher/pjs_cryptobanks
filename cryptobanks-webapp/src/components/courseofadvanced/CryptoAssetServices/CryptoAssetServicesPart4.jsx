import React, { useState } from "react";
import Safekeeping from "../../../images/courseAdvanced/cryptoassetSafekeeping.jpg";

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

const CryptoAssetServicesPart4 = () => {
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
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Kryptoasset-Verwahrung
      </h2>

      <div className="p-4 mb-12 bg-green-200 rounded-lg">
        <p className=" italic text-justify">
          Simone hat nun eine Menge Informationen über den Erwerb von Tokens und
          Coins sowie die Funktion der Registerführung bei Kryptowertpapieren
          erhalten. Auf dieser Grundlage tauchen bei ihr Fragen auf, wie genau
          eigentlich die Verwahrung von Kryptoassets abläuft. In ihrer Bank
          haben Kunden die Option, Schließfächer, Bankkonten oder
          Wertpapierdepots zu nutzen, doch wie dies für Kryptoassets
          funktioniert, stellt für sie noch ein Rätsel dar. Glücklicherweise
          stößt sie beim nächsten Stand auf eine Lösung. Die Aussteller erklären
          Simone ihre Krypto-Dienstleistung zur Verwahrung von Tokens.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={Safekeeping}
          alt="Crypto Assets Safekeeping"
          className="w-full md:w-1/2"
        />
      </div>
      <div className="flex items-center justify-center mb-12">
        <a
          className="font-semibold text-sm"
          href="https://pixabay.com/de/illustrations/tresor-safe-sicherheit-wohlstand-1904759/"
        >
          Pixabay
        </a>
      </div>

      <p className="mb-8">
        Bei der Token-Verwahrung handelt es sich genauer gesagt, um die
        Aufbewahrung des kryptographischen Schlüssel, der als Zugang zu den
        Kryptoassets dient. Dadurch kann auf die gekauften Kryptowährungen,
        Token sowie Kryptowertpapiere zugegriffen werden. Die Dienstleistung ist
        aktuell durch die im Kreditwesengesetz (KWG) geregelte Kryptoverwahrung
        reguliert. Dadurch bietet die Bank einen beaufsichtigten Zugang zu den
        Kryptoassets. Zusätzlich bietet die Bank eine Verknüpfung zu regulierten
        und lizensierten Handelspartner für Kryptowährungen. [8]
      </p>

      <Sources sources={articlesources} />
    </div>
  );
};

export default CryptoAssetServicesPart4;
