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

const CryptoCustodyPart2 = () => {
  const articlesources = [
    "vgl. Jaroucheh, Zakwan und Baraq Ghaleb (2023). Crypto Assets Custody: Taxonomy, Components, and Open Challenges. In: 2023 IEEE International Conference on Blockchain and Cryptocurrency (ICBC), S. 1-6.",
"vgl. Lindell, Nof (2018). Fast secure multiparty ECDSA with practical distributed key generation and applications to cryptocurrency custody. In Proceedings of the 2018 ACM SIGSAC Conference on Computer and Communications Security. S. 1837–1854",
"vgl. Hsieh, Brennan (2022). Issues, risks, and challenges for auditing crypto asset transactions. In: International Journal of Accounting Information Systems, vol. 46. S. 100569.",
"vgl. Jaroucheh, Zakwan und Baraq Ghaleb (2023). Crypto Assets Custody: Taxonomy, Components, and Open Challenges. In: 2023 IEEE International Conference on Blockchain and Cryptocurrency (ICBC), S. 1-6.",
"vgl. ebd",
"vgl. Han, Jongbeen, Mansub Song; Hyeonsang Eom, Yongseok Son (2021). An efficient multi-signature wallet in blockchain using bloom filter. In: Proceedings of the 36th Annual ACM Symposium on Applied Computing, S. 273–281];",
  ]

  

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12 tracking-tight">
      Definition und Grundlagen der Kryptoverwahrung
      </h1>


      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
      Wallet
      </h2>

      <div className="flex justify-center items-center mb-8">
        <img
          src={Wallet}
          alt="Wallet"
          className="w-full md:w-1/2"
        />
      </div>
      

      

      <p className="mb-8">
      Unter einer Wallet versteht man eine Finanzanwendung, die die Verwaltung digitaler Assets ermöglicht. 
      Um eine Transaktion durchzuführen muss innerhalb der Wallet eine digitale Signatur vorgenommen werden, 
      damit die eigene Identität und folglich auch der Auftrag bestätigt werden kann. Diese Unterschrift wird 
      anhand von sogenannten “private” oder “public keys” realisiert. <a href="#sources">[6]</a> Auf die Signaturen wird in der folgenden 
      Lektion noch genauer eingegangen. 
        
      </p>

      <Sources sources={articlesources} />
    </div>
  );
};

export default CryptoCustodyPart2;
