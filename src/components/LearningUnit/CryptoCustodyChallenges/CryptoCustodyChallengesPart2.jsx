import { useState } from 'react';
import PropTypes from 'prop-types';
import Future from '../../../images/courseExpert/futurebitcoin.png';

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

function CryptoCustodyChallengesPart2() {
  const articlesources = [
    'Z. Jaroucheh and G. Baraq, “Crypto Assets Custody: Taxonomy, Components, and Open Challenges,” 2023 IEEE International Conference on Blockchain and Cryptocurrency (ICBC), Dubai, United Arab Emirates, 2023, pp. 1-6.',
    'T. Reindl, “Nasdaq: Kryptoverwahrung noch für dieses Jahr geplant,” BTC-ECHO, Mar. 24, 2023. [Online]. Available: https://www.btc-echo.de/schlagzeilen/nasdaq-kryptoverwahrung-noch-im-zweiten-quartal-geplant-161586/. [Accessed: Sept. 29, 2023].',
    'C. Thuo, “US-Ausschuss verabschiedet Gesetz zur Krypto-Verwahrung – Chancer-Vorverkauf beschleunigt sich,” invezz.com, Jul. 31, 2023. [Online]. Available: https://invezz.com/de/news/2023/07/31/us-ausschuss-gesetz-krypto-verwahrung-chancer-vorverkauf-beschleunigt/. [Accessed: Sept. 29, 2023]',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Herausforderungen & Zukunftsaussichten
      </h1>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Regulatorische Klarheit
      </h2>
      <ul className="list-disc ml-4">
        <li>Verbesserte Sicherheitsmaßnahmen</li>
        <li>Institutionelle Beteiligung</li>
        <li>
          Steigende Nachfrage nach Kryptoverwahrung durch zunehmende
          Tokenisierung
        </li>
        <li>
          Interoperabilität führt zu standardisierten Protokollen zwischen
          Verwahrungsanbietern
        </li>
        <li>Automatisierung/ KI</li>
        <li>Internationale Standards</li>
        <li>Integration in Mainstream </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Zukunftsaussichetn
      </h2>

      <p className="mb-8">
        Das Hauptziel bei der Kryptoverwahrung ist es die richtige Balance
        zwischen Sicherheit und Nutzerfreundlichkeit zu finden. Für die Zukunkft
        soll eine sichere Verwahrungslösung den Grundbaustein für das
        tokenisierte Wirtschaftssystem bilden. Während die Gewährleistung von
        Sicherheit garantiert werden soll, soll auch eine maximale Effizienz bei
        Kryptoabwicklungen existieren <a href="#sources">[1]</a>.
      </p>

      <div className="flex justify-center items-center">
        <img src={Future} alt="FutureBitcoin" className="w-full md:w-1/2" />
      </div>

      <p className="mb-8">
        Der Grundbaustein einer in Zukunft großen Auswahl an Dienstleistungen
        für digitale Vermögenswerte wird gelegt, indem
        Verwahrungsdienstleistungen für Bitcoin und Ethereum zur Verfügung
        gestellt wird. Das Finanzdienstleistungsunternehmen Nasdaq stellt sich
        dabei der Aufgabe die notwendigen technologischen Strukturen und
        regulatorischen Einwilligungen zu erlangen <a href="#sources">[2]</a>.
      </p>

      <p className="mb-8">
        Durch den Gesetzesentwurf “Keep Your Coins Act of 2023“ soll dem Inhaber
        von Kryptowährungen ermöglicht werden, diese in eigenen Wallets zu
        verwahren. Damit soll dem Nutzer die Macht und Privatsphäre bei der
        Verwaltung seiner eigenen digitalen Assets überlassen werden. Durch die
        Möglichkeit der eigenständigen Verwaltung soll eine breitere Akzeptanz
        in Bezug auf digitale Assets geschaffen werden{' '}
        <a href="#sources">[3]</a>.
      </p>

      <Sources sources={articlesources} />
    </div>
  );
}

export default CryptoCustodyChallengesPart2;
