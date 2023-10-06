import React, { useState } from 'react';
import Wallet from '../../../images/courseExpert/wallet.png';

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

const IntroductionCryptoCustodyPart2 = () => {
  const articlesources = [
    'Z. Jaroucheh and G. Baraq, “Crypto Assets Custody: Taxonomy, Components, and Open Challenges,” 2023 IEEE International Conference on Blockchain and Cryptocurrency (ICBC), Dubai, United Arab Emirates, 2023, pp. 1-6.',
    'Y. Lindell, “Fast Secure Multiparty ECDSA with Practical Distributed Key Generation and Applications to Cryptocurrency Custody,” in Proceedings of the 2018 ACM SIGSAC Conference on Computer and Communications Security, A. Nof, Ed., New York, NY, United States: Association for Computing Machinery, Oct. 2018, pp. 1837–1854.',
    'S.-F. Hsieh and G. Brennan, “Issues, risks, and challenges for auditing crypto asset transactions,” International Journal of Accounting Information Systems, p. 100569, Aug. 2022.',
    'J. Han, M. Song, H. Eom, Y. Son,  Mansub Song; Hyeonsang Eom and Yongseok Son “An efficient multi-signature wallet in blockchain using bloom filter,” Proceedings of the 36th Annual ACM Symposium on Applied Computing (SAC 21), Association for Computing Machinery, New York, NY, USA, pp. 273–281, 2021',
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
        Definition und Grundlagen der Kryptoverwahrung
      </h1>

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">Wallet</h2>

      <div className="flex justify-center items-center mb-8">
        <img src={Wallet} alt="Wallet" className="w-full md:w-1/2" />
      </div>

      <p className="mb-8">
        Unter einer Wallet versteht man eine Finanzanwendung, die die Verwaltung
        digitaler Assets ermöglicht. Um eine Transaktion durchzuführen muss
        innerhalb der Wallet eine digitale Signatur vorgenommen werden, damit
        die eigene Identität und folglich auch der Auftrag bestätigt werden
        kann. Diese Unterschrift wird anhand von sogenannten “private” oder
        “public keys” realisiert <a href="#sources">[4]</a>. Auf die Signaturen
        wird in der folgenden Lektion noch genauer eingegangen.
      </p>

      <Sources sources={articlesources} />
    </div>
  );
};

export default IntroductionCryptoCustodyPart2;
