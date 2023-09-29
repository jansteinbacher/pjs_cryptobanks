import React, { useState } from 'react';

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
    'Bank Frick, “Bank Frick expands its range of crypto assets and now offers trading and custodian services for Cardano, Polkadot and Tezos,” bankfrick.li, 2022. [Online]. Available: https://www.bankfrick.li/en/news-and-insights/bank-frick-expands-its-range-crypto-assets-and-now-offers-trading-and-custodian-services-cardano. [Accessed: Sept. 22, 2023].',
    'Bank Frick, “Bank Frick bietet neu Staking als Service für digitale Vermögenswerte an,” bankfrick.li, 2023. [Online]. Available: https://www.bankfrick.li/de/news-und-insights/bank-frick-bietet-neu-staking-als-service-fuer-digitale-vermoegenswerte-an. [Accessed: Sept. 22, 2023].',
    'Bundesministerium der Justiz. (2021, Jun. 3). “Gesetz über elektronische Wertpapiere (eWpG),”  [Online]. Available: https://www.gesetze-im-internet.de/ewpg/BJNR142310021.html. [Accessed: Sept. 22, 2023].',
    'Hauck Aufhäuser Lampe, “Krypto-Wertpapierregister­führung,” hal-privatbank.com. [Online]. Available: https://www.hal-privatbank.com/asset-servicing/digitale-assets/krypto-wertpapierregisterfuehrung. [Accessed: Sept. 22, 2023].',
    'Hauck Aufhäuser Lampe, “Registrar für Kryptowertpapiere und Kryptofondsanteile,” hal-privatbank.com, 2022. [Online]. Available: https://www.hal-privatbank.com/news/2022/registrar-fuer-kryptowertpapiere-und-kryptofondsanteile. [Accessed: Sept. 22, 2023].',
    'Bundesministerium der Justiz. (2023, Febr. 22). “Gesetz über das Kreditwesen,”  [Online]. Available: https://www.gesetze-im-internet.de/kredwg/index.html. [Accessed: Sept. 22, 2023].',
    'Hauck Aufhäuser Lampe, “Hauck Aufhäuser Lampe startet Services in der vollregulierten Kryptoverwahrung,” hal-privatbank.com. [Online]. Available: https://www.hal-privatbank.com/news/2022/hauck-aufhaeuser-lampe-startet-services-in-der-vollregulierten-kryptoverwahrung. [Accessed: Sept. 22, 2023].',
    'Deutsche Bundesbank, “Digitales Geld: Welche Optionen hat Europa?,” bundesbank.de, 2022. [Online]. Available: https://www.bundesbank.de/de/presse/gastbeitraege/digitales-geld-welche-optionen-hat-europa--854026#nb5. [Accessed: Sept. 22, 2023].',
    'M. Tewes, M. Bauer, G. Holz, “Security Tokenization,” Porsche Consulting, 2023. [Online]. Available: https://www.porsche-consulting.com/sites/default/files/2023-07/digital_assets_c_porsche_consulting_2023_0.pdf. [Accessed: Sept. 22, 2023].',
    'J. Blassl and S. Seiter. Anwendungsfälle von Stablecoins. (Feb. 28, 2013). Accessed: Jun. 3, 2018. [Online Video]. Available: https://youtu.be/psQs_uEw4aA?t=289 [Abgerufen am 29.08.2023].',
    'I. Henshaw, “Was sind Krypto-Kredite und wie funktionieren sie?,” cointelegraph.com, 2022. [Online]. Available: https://de.cointelegraph.com/explained/what-are-crypto-loans-and-how-do-they-work. [Accessed: Sept. 22, 2023].',
  ];

  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course'
  );

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Stablecoins</h2>
      {isComingFromPreviousPage && (
        <div className="p-4 mb-12 bg-green-200 rounded-lg">
          <p className=" italic text-justify">
            Einen Stand weiter erfährt Simone von der Einführung eines
            Stablecoins, welcher entscheidend für die Zahlungsabwicklung in
            dezentalisierten Netzwerken in programmierbarer Form ist. Fasziniert
            lauscht sie gespannt auf die weiteren Details.
          </p>
        </div>
      )}
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
        verwendet werden <a href="#sources">[8]</a>. Ein konkretes
        Anwendungsbeispiel hierfür ist die Durchführung von On-Chain
        Delivery-versus-Payment (DvP)-Transaktionen. Dabei können Vermögenswerte
        in Form von Security Tokens in Echtzeit und automatisiert gegen
        Stablecoins ausgetauscht werden. Dies bietet den Vorteil geringerer
        Wechselkursrisiken im Vergleich zu herkömmlichen Kryptowährungen wie
        Bitcoin und Ether sowie einer Vereinfachung der Buchführungsprozesse und
        Wertanpassungen für On-Chain-Transaktionen <a href="#sources">[9]</a>.
        Ein weiteres Anwendungsbeispiel für Stablecoins ist das Bezahlen vom
        Handel von Kryptowährungen. Indem die Kryptowährungen in Stablecoins
        umgetauscht werden, kann der Betrag in Fiatwährung ausbezahlt werden{' '}
        <a href="#sources">[10]</a>.
      </p>

      <Sources sources={articlesources} />
    </div>
  );
};

export default CryptoAssetServicesPart5;
