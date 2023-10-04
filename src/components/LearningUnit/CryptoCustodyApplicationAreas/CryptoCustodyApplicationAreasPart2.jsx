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

const ApplicationAreaPart2 = () => {
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

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Verantwortung
      </h2>

      {isComingFromPreviousPage && (
        <div className="p-4 mb-12 bg-green-200 rounded-lg">
          <p className=" italic text-justify">
            Tobias grübelt über die generelle Verteilung der Verantwortung
            bezüglich der Sicherung und des Managements seiner Kryptoassets. Als
            engagierter Krypto-Investor bewahrt er seine Kryptoassets in einer
            Wallet auf, die er über einen privaten Schlüssel kontrolliert.
            Hierfür setzt er ein Browser-Plugin ein, das ihm unabhängig von der
            besuchten Webseite Zugriff auf seine Kryptoassets ermöglicht. Die
            Tatsache, dass ein Bekannter aus seinem Krypto-Investorenkreis
            bereits einen solchen Schlüssel verloren hat – was zu einem Verlust
            des Zugangs zu seinen Kryptoassets führte –, wirft bei Tobias
            zusätzliche Fragen auf.
          </p>
        </div>
      )}

      <p className="mb-8">
        Innerhalb des Self-Custody liegt die gesamte Verantwortung für die
        Sicherheit und den Schutz des privaten Schlüssels beim Nutzer. Der
        Vorteil dieses Ansatzes liegt in der uneingeschränkten Kontrolle über
        die Kryptoassets, da keine dritte Partei involviert ist. Hingegen
        besteht der Nachteil darin, dass bei unsachgemäßer Verwaltung des
        privaten Schlüssels der Zugang zu den Kryptoassets unwiederbringlich
        verloren gehen kann. <a href="#sources">[2]</a>
      </p>

      <p className="mb-8">
        Im Gegensatz dazu wird bei der Full-Custody die Kontrolle über die
        Kryptoassets an eine dritte Partei abgegeben. Somit hat der Nutzer
        keinen Zugriff auf seinen eigenen privaten Schlüssel und muss
        dementsprechend Transaktionen, Geschäfte und andere Aktivitäten über
        einen Dritten abwickeln. <a href="#sources">[3]</a> Diese Form der
        Verwahrung hat den Vorteil, dass die Verwahrer klassischerweise
        reguliert sind und dadurch eine zusätzliche Sicherheit für größere
        Mengen an Kryptoassets vorhanden ist. Dem Gegenüber besteht das Risiko,
        das bei einem Hack auf Seiten des Verwahrers, die Kryptoassets verloren
        gehen können. <a href="#sources">[4]</a>
      </p>

      <p className="mb-8">
        Eine Zwischenlösung stellt die Semi-Custody dar{' '}
        <a href="#sources">[5]</a>. Diese vereint die Kontrolle und Sicherheit
        der Self-Custody mit dem Komfort sowie zusätzlichen Sicherheit der
        Full-Custody. Dabei kommen verschiedene private Schlüssel zum Einsatz –
        zum Beispiel einer für den Nutzer und einer für den Verwahrer.{' '}
        <a href="#sources">[6]</a>
      </p>

      <Sources sources={articlesources} />
    </div>
  );
};

export default ApplicationAreaPart2;
