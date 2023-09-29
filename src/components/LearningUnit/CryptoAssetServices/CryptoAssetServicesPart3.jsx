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

const CryptoAssetServicesPart3 = () => {
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
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Kryptowertpapiere
      </h2>
      {isComingFromPreviousPage && (
        <div className="p-4 mb-12 bg-green-200 rounded-lg">
          <p className=" italic text-justify">
            Am benachbarten Stand erfährt Simone von den Ausstellern, dass sie
            eine digitale Infrastruktur zur Integration des Wertpapierhandels
            auf blockchainbasierten Systemen entwickelt haben. Dank ihrer
            Unterhaltung mit ihrer Freundin ist Simone bereits darüber
            informiert, dass die rechtlichen Rahmenbedingungen für elektronische
            Wertpapiere in Deutschland bereits fortgeschritten sind. Mit großer
            Neugier lauscht sie gespannt weiter.
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
        Die Bank übernimmt bei der Abwicklung von Kryptowertpapier-Transaktionen
        die Rolle des Registerführers und der Zahlstelle. Gemäß den rechtlichen
        Vorgaben für elektronische Wertpapiere <a href="#sources">[3]</a>{' '}
        erfolgt die Registrierung des Papiers in einem dezentralen
        Blockchain-Register. Im Unterschied zur Emission herkömmlicher
        Wertpapiere ist kein Zentralverwahrer oder weitere Zwischeninstanz
        erforderlich. Dies ermöglicht den Parteien den direkten bilateralen
        Handel. Darüber hinaus steht den Anlegern die Entscheidung offen, ob sie
        ihre Kryptowertpapiere als ERC-20-Token in ihrer Blockchain-Wallet
        eigenständig verwalten oder die konventionellen Wertpapierdepots der
        Bank in Anspruch nehmen möchten <a href="#sources">[4]</a>,{' '}
        <a href="#sources">[5]</a>.
      </p>

      <Sources sources={articlesources} />
    </div>
  );
};

export default CryptoAssetServicesPart3;
