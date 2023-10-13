import { useState } from 'react';
import PropTypes from 'prop-types';
import CryptoSet from '../../../images/courseAdvanced/cryptoSet.jpg';

function Sources({ sources }) {
  const [showSources, setShowSources] = useState(false);

  const toggleSources = () => {
    setShowSources(!showSources);
  };

  return (
    <div className="sources border border-gray-400 rounded p-4">
      <button
        type="button"
        className="text-lg font-semibold"
        id="sources"
        onClick={toggleSources}
      >
        Quellen:
      </button>
      {showSources && (
        <div className="source-list leading-relaxed mt-4">
          <ul>
            {sources.map((source) => (
              <li key={source.id}>
                [{source.id}] {source.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

Sources.propTypes = {
  sources: PropTypes.shape({
    map: PropTypes.func,
    length: PropTypes.number,
  }).isRequired,
};

function CryptoAssetServicesPart1() {
  const articlesources = [
    'Bank Frick, “Bank Frick expands its range of crypto assets and now offers trading and custodian services for Cardano, Polkadot and Tezos,” bankfrick.li, 2022. [Online]. Available: https://www.bankfrick.li/en/news-and-insights/bank-frick-expands-its-range-crypto-assets-and-now-offers-trading-and-custodian-services-cardano. [Accessed: Sept. 22, 2023].',
    'Bank Frick, “Bank Frick bietet neu Staking als Service für digitale Vermögenswerte an,” bankfrick.li, 2023. [Online]. Available: https://www.bankfrick.li/de/news-und-insights/bank-frick-bietet-neu-staking-als-service-fuer-digitale-vermoegenswerte-an. [Accessed: Sept. 22, 2023].',
    'Hauck Aufhäuser Lampe, “Krypto-Wertpapierregister­führung,” hal-privatbank.com. [Online]. Available: https://www.hal-privatbank.com/asset-servicing/digitale-assets/krypto-wertpapierregisterfuehrung. [Accessed: Sept. 22, 2023].',
    'Hauck Aufhäuser Lampe, “Registrar für Kryptowertpapiere und Kryptofondsanteile,” hal-privatbank.com, 2022. [Online]. Available: https://www.hal-privatbank.com/news/2022/registrar-fuer-kryptowertpapiere-und-kryptofondsanteile. [Accessed: Sept. 22, 2023].',
    'Bundesministerium der Justiz. (2023, Febr. 22). “Gesetz über das Kreditwesen,”  [Online]. Available: https://www.gesetze-im-internet.de/kredwg/index.html. [Accessed: Jan. 13, 2021].',
    'Deutsche Bundesbank, “Digitales Geld: Welche Optionen hat Europa?,” bundesbank.de, 2021. [Online]. Available: https://www.bundesbank.de/de/presse/gastbeitraege/digitales-geld-welche-optionen-hat-europa--854026#nb5. [Accessed: Sept. 22, 2023].',
    'M. Tewes, M. Bauer, G. Holz, “Security Tokenization,” Porsche Consulting, 2023. [Online]. Available: https://www.porsche-consulting.com/sites/default/files/2023-07/digital_assets_c_porsche_consulting_2023_0.pdf. [Accessed: Sept. 22, 2023].',
    'J. Blassl and S. Seiter. Anwendungsfälle von Stablecoins. (Feb. 28, 2013). Accessed: Jun. 3, 2018. [Online Video]. Available: https://youtu.be/psQs_uEw4aA?t=289 [Abgerufen am 29.08.2023].',
    'I. Henshaw, “Was sind Krypto-Kredite und wie funktionieren sie?,” cointelegraph.com, 2022. [Online]. Available: https://de.cointelegraph.com/explained/what-are-crypto-loans-and-how-do-they-work. [Accessed: Sept. 22, 2023].',
  ];

  const isComingFromPreviousPage = window.location.search.includes(
    'from=advanced-course',
  );

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Potenzielle Krypto-Dienstleistungen
      </h1>
      {isComingFromPreviousPage && (
        <div className="p-4 mb-8 bg-green-200 rounded-lg">
          <p className=" italic text-justify mb-4">
            Randvoll mit umfassendem regulatorischem Wissen stellt sich Simone
            die Frage, welche potenziellen Anwendungen von Kryptoassets im
            Bankensektor bestehen könnten. Durch eine Unterhaltung mit ihrer
            Freundin erfährt sie von der bevorstehenden Digital Asset Conference
            in Frankfurt, auf der sie hoffentlich Antworten auf ihre Frage
            finden kann. Fasziniert von dieser Idee, entschließt sich Simone
            dazu, zwei Wochen später an dieser Konferenz teilzunehmen. Nach
            ihrer Ankunft auf der Konferenz entdeckt sie zahlreiche Stände
            verschiedener Unternehmen. Mit wachsender Begeisterung nähert sich
            Simone Stand um Stand, während die Mitarbeiter der Unternehmen ihr
            ihre jeweiligen Krypto-Dienstleistungen erläutern.
          </p>
          <p>
            Nach ihrer Ankunft auf der Konferenz entdeckt sie zahlreiche Stände
            verschiedener Unternehmen. Mit wachsender Begeisterung nähert sich
            Simone Stand um Stand, während die Mitarbeiter der Unternehmen ihr
            ihre jeweiligen Krypto-Dienstleistungen erläutern.
          </p>
        </div>
      )}
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
      {isComingFromPreviousPage && (
        <div className="p-4 mb-8 bg-green-200 rounded-lg">
          <p className=" italic text-justify">
            Am ersten Stand präsentieren die Aussteller Simone den
            Krypto-Handel, die es Investoren ermöglicht, Kryptowährungen mühelos
            zu erwerben und zu veräußern. Dies erinnert Simone an ein
            vergangenes Projekt, bei dem sie aktiv an der Integration von Kauf-
            und Verkaufsoptionen für ETFs in einer Online-Banking-App beteiligt
            war. Gespannt verfolgt sie aufmerksam die Ausführungen der
            Unternehmensvertreter
          </p>
        </div>
      )}
      <p className="mb-8">
        Die Bank bietet den Handel von führenden Kryptoassets an. Neben
        klassischen Coins, wie Bitcoin (BTC) oder Ethereum (ETH) werden auch
        Token, wie Cardano (ADA) oder Polkadot (DOT). Die Kryptoassets können
        mittels Euro, US-Dollar und Schweizer Franken gekauft werden{' '}
        <a href="#sources">[1]</a>.
      </p>

      <Sources sources={articlesources} />
    </div>
  );
}

export default CryptoAssetServicesPart1;
