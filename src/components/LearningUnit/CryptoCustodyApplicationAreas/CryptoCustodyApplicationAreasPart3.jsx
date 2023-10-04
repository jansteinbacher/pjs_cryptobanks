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

const CryptoCustodyApplicationAreasPart3 = () => {
  const articlesources = [
    'vgl. Jaroucheh, Zakwan und Baraq Ghaleb (2023). Crypto Assets Custody: Taxonomy, Components, and Open Challenges. In: 2023 IEEE International Conference on Blockchain and Cryptocurrency (ICBC), S. 1-6.',
    'vgl. Di Nicola, Vincenzo, Riccardo Longo, Federico Mazzone und Gaetano Russo (2020). Resilient Custody of Crypto-Assets, and Threshold Multisignatures. In: Mathematics 8.10, S. 1773.',
    'ebd.',
    'vgl. Jaroucheh, Zakwan und Baraq Ghaleb (2023). Crypto Assets Custody: Taxonomy, Components, and Open Challenges. In: 2023 IEEE International Conference on Blockchain and Cryptocurrency (ICBC), S. 1-6.',
    'vgl. Jaroucheh, Zakwan und Baraq Ghaleb (2023). Crypto Assets Custody: Taxonomy, Components, and Open Challenges. In: 2023 IEEE International Conference on Blockchain and Cryptocurrency (ICBC), S. 1-6.',
    'vgl. Di Nicola, Vincenzo, Riccardo Longo, Federico Mazzone und Gaetano Russo (2020). Resilient Custody of Crypto-Assets, and Threshold Multisignatures. In: Mathematics 8.10, S. 1773.',
    'vgl. Jaroucheh, Zakwan und Baraq Ghaleb (2023). Crypto Assets Custody: Taxonomy, Components, and Open Challenges. In: 2023 IEEE International Conference on Blockchain and Cryptocurrency (ICBC), S. 1-6.',
    'ebd.',
    'vgl. Suratkar, Saurabh, Mahesh Shirole und Sunil Bhirud (2023). Cryptocurrency Wallet: A Reviews. In: 2020 4th International Conference on Computer, Communication and Signal Processing (ICCCSP), S. 1-7.',
    'ebd.',
    'vgl. Jaroucheh, Zakwan und Baraq Ghaleb (2023). Crypto Assets Custody: Taxonomy, Components, and Open Challenges. In: 2023 IEEE International Conference on Blockchain and Cryptocurrency (ICBC), S. 1-6.',
    'vgl. Suratkar, Saurabh, Mahesh Shirole und Sunil Bhirud (2023). Cryptocurrency Wallet: A Reviews. In: 2020 4th International Conference on Computer, Communication and Signal Processing (ICCCSP), S. 1-7.',
    'vgl. Cabrera-Gutierrez, Antonio J., Encarnacion Castillo, Antonio Escobar-Molero, Jose A. Alvarez-Bermejo, Diego P. Morales und Luis Parrilla (2022). Integration of Hardware Security Modules and Permissioned Blockchain in Industrial IoT Networks. In: IEEE access, 2022 10, S. 114331-114345',
    'vgl. Rezaeighaleh, Hossein und Cliff C. Zou (2019). Integration of Hardware Security Modules and Permissioned Blockchain in Industrial IoT Networks. In: 2019 IEEE Global Communications Conference (GLOBECOM)',
    'vgl. A. Shamir (1979). How to share a secret. In: Communications of the ACM 22.11, S. 612–613',
    'vgl. Han, Jongbeen, Mansub Song; Hyeonsang Eom, Yongseok Son (2021). An efficient multi-signature wallet in blockchain using bloom filter. In: Proceedings of the 36th Annual ACM Symposium on Applied Computing, S. 273–281',
    'vgl. Ricci, S., Dzurenda, P., Casanova-Marqués, R., Cika, P. Marrella, A., ua. (2022). Threshold Signature for Privacy-Preserving Blockchain. In:  Business Process Management: Blockchain, Robotic Process Automation, and Central and Eastern Europe Forum. BPM 2022. Lecture Notes in Business Information Processing 459. Springer, Cham.',
  ];

  const isComingFromPreviousPage =
    window.location.search.includes('from=expert-course');

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Anwedungsbereiche - Arten von Verwahrlösungen
      </h1>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Verteilung</h2>

      {isComingFromPreviousPage && (
        <div className="p-4 mb-12 bg-green-200 rounded-lg">
          <p className=" italic text-justify">
            Nachdem Tobias einiges über die Verantwortung für die Sicherung und
            das Management von Kryptoassets gelernt hat, möchte er genauer die
            Art und Weise verstehen, inwiefern das Eigentum und die Kontrolle
            über die Vermögenswerte auf verschiedene Unternehmen verteilt sind.
          </p>
        </div>
      )}

      <p className="mb-8">
        Bei der zentralisierten Kryptoasset-Verwahrlösung hat eine einzelne
        Entität den vollen Zugriff auf die Kryptoassets und übernimmt die
        Sicherheit <a href="#sources">[7]</a>.
      </p>

      <p className="mb-8">
        Wiederum die dezentrale Kryptoasset-Verwahrlösung verteilt die Kontrolle
        und das Management der Kryptoassets auf verschiedene Entitäten. Hierfür
        wird unter anderem die Distributed-Ledger-Technologie genutzt, wie es
        bei Qredo der Fall ist. <a href="#sources">[8]</a>
      </p>

      <Sources sources={articlesources} />
    </div>
  );
};

export default CryptoCustodyApplicationAreasPart3;
