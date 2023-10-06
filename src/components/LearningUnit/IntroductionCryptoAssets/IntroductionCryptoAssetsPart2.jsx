import React, { useState } from 'react';
import CryptoAssetsDefinition from '../../../images/courseBeginner/CryptoAssetsDefinition.png';
import Bernd from '../../../images/courseBeginner/charakterBernd.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowDown } from '@fortawesome/free-solid-svg-icons';

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
        {showSources ? (
          <>
            Quellen einklappen <FontAwesomeIcon icon={faArrowDown} />
          </>
        ) : (
          <>
            Quellen ausklappen <FontAwesomeIcon icon={faArrowRight} />
          </>
        )}
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

const IntroductionCryptoAssetsPart2 = () => {
  const articlesources = [
    'S. Nakamoto, “A peer-to-peer electronic cash system,” bitcoin.org, 2008. [Online]. Available: https://bitcoin.org/en/bitcoin-paper. [Accessed Sept. 21, 2023].',
    'A. Olbrecht and G. Pieters, “Crypto-currencies and crypto-assets: An introduction,” Eastern Economic Journal, vol. 49, no. 2, pp. 201–205, 2023.',
    'Vgl. dazu RENNING, BKR 2020, 23, 24; MAUME, in: Maume/Maute, Kryptowerte-HdB, 1 Aufl, 2020, § 12, 19 ff.; zur steuerrechtlichen Einordnung PRINZ, StuB 2019, 257, 257 ff.',
    'H. Treiblmaier, “Toward more rigorous blockchain research: Recommendations for writing Blockchain Case Studies,” Progress in IS, vol. 2, no. 3. pp. 1–15, 2020.',
    'Bundesamt für Sicherheit in der Informationstechnik, “Blockchain Macht Daten Praktisch Unveränderbar,” Bundesamt für Sicherheit in der Informationstechnik. [Online]. Available: https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Technologien_sicher_gestalten/Blockchain-Kryptowaehrung/blockchain-kryptowaehrung_node.html. [Accessed Sept. 21, 2023].',
    'S. M. Jain, “Blockchain,” in A Brief Introduction to Web3. Berkley, CA: Apress, 2022, pp. 11–26',
    'A. Baum, “Tokenization—The Future of Real Estate Investment?,” The Journal of Portfolio Management, vol. 47, no. 10, pp. 41–61, 2021.',
    'K. Christodoulou, L. Katelaris, M. Themistocleous, P. Christodoulou, and E. Iosif, “NFTs and the Metaverse Revolution: Research Perspectives and open challenges,” in Blockchains and the Token Economy, M. C. Lacity, H. Treibmeier, Eds. Cham: Palgrave Macmillan, 2022, pp. 139–178.',
    'M. Zheng and P. Sander, “Asset Tokenization of Real Estate in Europe.,” in Blockchains and the Token Economy, M. C. Lacity, H. Treibmeier, Eds. Cham: Palgrave Macmillan, 2022, pp. 139–178.',
    'A Gussmann und F. Weisenberger, “Initial Coin Offerings, Tokens im Kontext der Shared Economy,“ BearingPoint, Frankfurt/Main, Germany, 2018. [Online]. Available: https://www.bearingpoint.com/files/Initial_Coin_Offerings.pdf?download=0&itemId=517162. [Accessed Sept. 21, 2023]',
    'M. Hönig, “Funktionsweise von Coins und token,” in ICO und Kryptowährungen. Wiesbaden: Springer Gabler, 2019, pp. 33–40.',
  ];

  const isComingFromPreviousPage = window.location.search.includes(
    'from=beginner-course'
  );

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Definition Kryptoassets
      </h2>
      {isComingFromPreviousPage && (
        <div className="p-4 mb-8 bg-green-200 rounded-lg flex items-start">
          <img src={Bernd} alt="Charakterbild" className="w-1/12 h-auto mr-4" />
          <p className="italic text-justify flex-grow">
            Nach der Pause öffnete Bernd seinen Laptop und beginnt mit einer
            simplen Google-Suche: "Was sind Kryptoassets?" Innerhalb von
            Sekunden erschienen zahlreiche Ergebnisse. Er stößt auf eine
            Definition, die ihm einen klaren Überblick verschaffte.
          </p>
        </div>
      )}
      <div className="flex justify-center items-center">
        <img
          src={CryptoAssetsDefinition}
          alt="CloudDefinition"
          className="w-full md:w-1/2 mb-8"
        />
      </div>
      <p className="mb-12 text-justify">
        Nach § 1 Abs. 11 S. 4 KWG ist ein Kryptowert ein digitaler, von keiner
        öffentlichen Stelle unterstützter Wert ohne gesetzlichen Status einer
        Währung, der gleichwohl als Tausch-, Zahlungs- oder Anlagegegenstand
        akzeptiert wird und elektronisch übertragen, gespeichert und gehandelt
        werden kann <a href="#sources">[3]</a>. Ähnlich, – nur mit Bezug zur
        Distributed-Ledger-Technologie (DLT) – definiert die EU-Verordnung über
        Märkte in Kryptowerte (sog. MiCA).
      </p>
      <Sources sources={articlesources} />
    </div>
  );
};

export default IntroductionCryptoAssetsPart2;
