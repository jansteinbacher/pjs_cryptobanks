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

const CryptoAssetServicesPart5 = () => {
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
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Stablecoins</h2>

      <div className="p-4 mb-12 bg-green-200 rounded-lg">
        <p className=" italic text-justify">
          Einen Stand weiter erfährt Simone von der Einführung eines
          Stablecoins, welcher entscheidend für die Zahlungsabwicklung in
          dezentalisierten Netzwerken in programmierbarer Form ist. Fasziniert
          lauscht sie gespannt auf die weiteren Details.
        </p>
      </div>
      <div className="flex items-center justify-center mb-12">
        <a
          className="font-semibold text-sm"
          href="https://pixabay.com/de/illustrations/recht-und-ordnung-gesetz-klausel-6311493/"
        >
          Bild folgt noch
        </a>
      </div>

      <p className="mb-8">
        Damit Distributed-Ledger-Technologie mithilfe von Smart Contracts
        Geschäftsprozesse automatisieren kann, ist programmierbares oder
        tokenisiertes Geld erforderlich. Kryptowährungen, die nicht vollständig
        gedeckt sind, eignen sich dafür nicht, da sie zu hohe Volatilität
        aufweisen. Im Gegensatz dazu können Stablecoins aufgrund ihrer
        Wertstabilität für die vollständige Abwicklung von Geschäftsprozessen
        verwendet werden. [9] Ein konkretes Anwendungsbeispiel hierfür ist die
        Durchführung von On-Chain Delivery-versus-Payment (DvP)-Transaktionen.
        Dabei können Vermögenswerte in Form von Security Tokens in Echtzeit und
        automatisiert gegen Stablecoins ausgetauscht werden. Dies bietet den
        Vorteil geringerer Wechselkursrisiken im Vergleich zu herkömmlichen
        Kryptowährungen wie Bitcoin und Ether sowie einer Vereinfachung der
        Buchführungsprozesse und Wertanpassungen für On-Chain-Transaktionen. [8]
        Ein weiteres Anwendungsbeispiel für Stablecoins ist das Bezahlen vom
        Handel von Kryptowährungen. Indem die Kryptowährungen in Stablecoins
        umgetauscht werden, kann der Betrag in Fiatwährung ausbezahlt werden
        [10]
      </p>

      <Sources sources={articlesources} />
    </div>
  );
};

export default CryptoAssetServicesPart5;
