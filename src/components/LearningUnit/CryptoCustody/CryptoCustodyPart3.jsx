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

const CryptoCustodyPart3 = () => {
  const articlesources = [
    "vgl. Jaroucheh, Zakwan und Baraq Ghaleb (2023). Crypto Assets Custody: Taxonomy, Components, and Open Challenges. In: 2023 IEEE International Conference on Blockchain and Cryptocurrency (ICBC), S. 1-6.",
"vgl. Lindell, Nof (2018). Fast secure multiparty ECDSA with practical distributed key generation and applications to cryptocurrency custody. In Proceedings of the 2018 ACM SIGSAC Conference on Computer and Communications Security. S. 1837–1854",
"vgl. Hsieh, Brennan (2022). Issues, risks, and challenges for auditing crypto asset transactions. In: International Journal of Accounting Information Systems, vol. 46. S. 100569.",
"vgl. Jaroucheh, Zakwan und Baraq Ghaleb (2023). Crypto Assets Custody: Taxonomy, Components, and Open Challenges. In: 2023 IEEE International Conference on Blockchain and Cryptocurrency (ICBC), S. 1-6.",
"vgl. ebd",
"vgl. Han, Jongbeen, Mansub Song; Hyeonsang Eom, Yongseok Son (2021). An efficient multi-signature wallet in blockchain using bloom filter. In: Proceedings of the 36th Annual ACM Symposium on Applied Computing, S. 273–281];",
  ]

  const isComingFromPreviousPage = window.location.search.includes(
    'from=expert-course'
  );

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
      Definition und Grundlagen der Kryptoverwahrung
      </h1>

      

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
      Kryptographische Schlüsse
      </h2>

      <p className="mb-8">
      Wie bereits erwähnt, werden kryptographische Schlüssel als digitale Signaturen verwendet, um Transaktionen mit 
      digitalen Vermögenswerten durchzuführen. Unterschieden wird zwischen öffentlichen und privaten Schlüsseln. 
      Öffentliche Schlüssel sind wie der Name beschreibt für die Öffentlichkeit einsehbar und .... Relevant sind bei der 
      Verwahrung vor allem die privaten Schlüssel. Diese ermöglichen dem Nutzer einerseits den Zugriff auf seine Kryptoassets 
      und andererseits dienen sie als Verifikation für Transaktionen. Daher ist die Aufgabe von sogenannten Custodians 
      (Verwahrungsunternehmen) diese Schlüssel sicher aufbewahrt werden.
        
      </p>

      {isComingFromPreviousPage && (
        <div className="p-4 mb-12 bg-green-200 rounded-lg">
          <p className=" italic text-justify">
          Mittels dieser grundlegenden Begriffe erhält Tobias einen initialen und wertvollen Einblick in die Thematik. 
          Diese zugrundeliegenden Informationen haben nun sein Interesse geweckt, die vielfältigen Anwendungsbereiche von 
          Kryptoverwahrungen zu erkunden und zu verstehen.
          </p>
        </div>
      )}

      <Sources sources={articlesources} />
    </div>
  );
};

export default CryptoCustodyPart3;
