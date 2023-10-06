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

const CryptoCustodyApplicationAreasPart5 = () => {
  const articlesources = [
    'Z. Jaroucheh and G. Baraq, “Crypto Assets Custody: Taxonomy, Components, and Open Challenges,” 2023 IEEE International Conference on Blockchain and Cryptocurrency (ICBC), Dubai, United Arab Emirates, 2023, pp. 1-6.',
    'V. Di Nicola, R. Longo, M. Federico and R. Gaetano, “Resilient Custody of Crypto-Assets, and Threshold Multisignatures,” Mathematics, vol. 8, no. 10, p. 1773, 2020.',
    'S. Suratkar, M. Shirole and S. Bhirud, “Cryptocurrency Wallet: A Review,” 2020 4th International Conference on Computer, Communication and Signal Processing (ICCCSP), Chennai, India, 2020, pp. 1-7.',
    'A. J. Cabrera-Gutiérrez, E. Castillo, A. Escobar-Molero, J. A. Álvarez-Bermejo, D. P. Morales and L. Parrilla, “Integration of Hardware Security Modules and Permissioned Blockchain in Industrial IoT Networks,” in IEEE Access, vol. 10, pp. 114331-114345, 2022.',
    'H. Rezaeighaleh and C. C. Zou, “New Secure Approach to Backup Cryptocurrency Wallets,” 2019 IEEE Global Communications Conference (GLOBECOM), Waikoloa, HI, USA, 2019.',
    'A. Shamir, “How to share a secret,” Communications of the ACM, vol. 22, no. 11, pp. 612-613, 1979.',
    'J. Han, M. Song, H. Eom, Y. Son,  Mansub Song; Hyeonsang Eom and Yongseok Son “An efficient multi-signature wallet in blockchain using bloom filter,” Proceedings of the 36th Annual ACM Symposium on Applied Computing (SAC 21), Association for Computing Machinery, New York, NY, USA, pp. 273–281, 2021',
    'S. Ricci, Petr Dzurenda, Raúl Casanova-Marqués and Petr Číka, “Threshold Signature for Privacy-Preserving Blockchain,” Lecture notes in business information processing, pp. 100–115, Jan. 2022',
  ];

  const isComingFromPreviousPage =
    window.location.search.includes('from=expert-course');

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Anwedungsbereiche - Arten von Verwahrlösungen
      </h1>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Schlüssel-Lagerung
      </h2>

      {isComingFromPreviousPage && (
        <div className="p-4 mb-12 bg-green-200 rounded-lg">
          <p className=" italic text-justify">
            Tobias weiß nun, dass er seinen privaten Schlüssel bisher nur in
            einer Software Wallet gespeichert hat, die leider auch anfällig für
            Cyberangriffen sein können. Aus diesem Grund möchte er weitere
            Methoden der Lagerung des Schlüssels kennenlernen, um zukünftig
            sicherer aufgestellt zu sein.
          </p>
        </div>
      )}

      <p className="mb-8">
        Eine Hardware-Wallet bietet ein hohes Maß an Sicherheit, indem der
        private Schlüssel auf einem physischen Gerät, wie einer Festplatte
        gespeichert wird und so das Risiko von Cyberangriffen verringert wird.
        Alle Transaktionen werden hierbei im Gerät signiert, wodurch der
        Schlüssel niemals dieses verlässt <a href="#sources">[3]</a>.
      </p>

      <p className="mb-8">
        Wiederum sind Hadware Sicherheitsmodule (HSMs) besonders
        manipulationssichere physische Geräte, die zusätzlich Funktionen wie
        Verschlüsselung, Entschlüsselung und Authentifizierung bieten. Diese
        kommen in zwei Ausprägungen vor: Premise-HSMs und Cloud-HSMs. Die
        Vorteile von HSMs liegen in der Einhaltung von Sicherheitsstandards,
        starken Authentifizierung und maipulationsicheren Systemen{' '}
        <a href="#sources">[4]</a>. Dennoch haben sie auch Nachteile, wie der
        Bedarf an physischen Zugang, begrenzte Skalierbarkeit und
        Kompatibilitätsprobleme <a href="#sources">[5]</a>.
      </p>

      <Sources sources={articlesources} />
    </div>
  );
};

export default CryptoCustodyApplicationAreasPart5;
