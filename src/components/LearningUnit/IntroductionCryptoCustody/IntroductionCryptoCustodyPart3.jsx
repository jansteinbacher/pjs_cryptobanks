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

const IntroductionCryptoCustodyPart3 = () => {
  const articlesources = [
    'Z. Jaroucheh and G. Baraq, “Crypto Assets Custody: Taxonomy, Components, and Open Challenges,” 2023 IEEE International Conference on Blockchain and Cryptocurrency (ICBC), Dubai, United Arab Emirates, 2023, pp. 1-6.',
    'Y. Lindell, “Fast Secure Multiparty ECDSA with Practical Distributed Key Generation and Applications to Cryptocurrency Custody,” in Proceedings of the 2018 ACM SIGSAC Conference on Computer and Communications Security, A. Nof, Ed., New York, NY, United States: Association for Computing Machinery, Oct. 2018, pp. 1837–1854.',
    'S.-F. Hsieh and G. Brennan, “Issues, risks, and challenges for auditing crypto asset transactions,” International Journal of Accounting Information Systems, p. 100569, Aug. 2022.',
    'J. Han, M. Song, H. Eom, Y. Son,  Mansub Song; Hyeonsang Eom and Yongseok Son “An efficient multi-signature wallet in blockchain using bloom filter,” Proceedings of the 36th Annual ACM Symposium on Applied Computing (SAC 21), Association for Computing Machinery, New York, NY, USA, pp. 273–281, 2021',
  ];

  const isComingFromPreviousPage =
    window.location.search.includes('from=expert-course');

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Definition und Grundlagen der Kryptoverwahrung
      </h1>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Kryptographische Schlüsse
      </h2>

      <p className="mb-8">
        Wie bereits erwähnt, kommen kryptographische Schlüssel als digitale
        Signaturen zur Durchführung von Transaktionen mit digitalen
        Vermögenswerten zum Einsatz. Es gibt zwei Hauptkategorien von
        Schlüsseln: öffentliche und private Schlüssel. Öffentliche Schlüssel
        sind, wie der Name schon sagt, öffentlich zugänglich und dienen dazu,
        Transaktionen zu empfangen. Die privaten Schlüssel hingegen sind von
        entscheidender Bedeutung für die sichere Verwahrung von Kryptoassets.
        Sie gewähren dem Nutzer Zugriff auf seine digitalen Vermögenswerte und
        dienen gleichzeitig als Verifikationsmittel für Transaktionen. Aus
        diesem Grund obliegt es sogenannten Custodians, also
        Verwahrungsunternehmen, die privaten Schlüssel sicher aufzubewahren.
      </p>

      {isComingFromPreviousPage && (
        <div className="p-4 mb-12 bg-green-200 rounded-lg">
          <p className=" italic text-justify">
            Mittels dieser grundlegenden Begriffe erhält Tobias einen initialen
            und wertvollen Einblick in die Thematik. Diese zugrundeliegenden
            Informationen haben nun sein Interesse geweckt, die vielfältigen
            Anwendungsbereiche von Kryptoverwahrungen zu erkunden und zu
            verstehen.
          </p>
        </div>
      )}

      <Sources sources={articlesources} />
    </div>
  );
};

export default IntroductionCryptoCustodyPart3;
