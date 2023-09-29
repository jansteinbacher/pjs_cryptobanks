import React, { useState } from "react";
import Bernd from "../../../images/courseBeginner/charakterBernd.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";

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
const IntroductionCryptoAssetsPart3 = () => {
  const articlesources = [
    "vgl. Nakamoto (2008)",
    "Nakamoto, S. 2008. Bitcoin: A peer-to-peer electronic cash system, 9 https:// bitco in. org/ bitco in. pdf.",
    "Olbrecht, A., Pieters, G. Crypto-Currencies and Crypto-Assets: An Introduction. Eastern Econ J 49, 201–205 .2023. https://doi.org/10.1057/s41302-023-00246-1",
    "ebd.",
    "Vgl. dazu RENNING, BKR 2020, 23, 24; MAUME, in: Maume/Maute, Kryptowerte-HdB, 1 Aufl, 2020, § 12, 19 ff.; zur steuerrechtlichen Einordnung PRINZ, StuB 2019, 257, 257 ff.",
    "Nakamoto, S. 2008. Bitcoin: A peer-to-peer electronic cash system, 9 https:// bitco in. org/ bitco in. pdf.",
    "Treiblmaier, H. 2020. „Toward More Rigorous Blockchain Research: Recommendations for Writing Blockchain Case Studies,” in: Treiblmaier, H., Clohessy, T. (eds) Blockchain and Distributed Ledger Technology Use Cases. Progress in IS. Springer, Cham. https://doi.org/10.1007/978-3-030-44337-5_1",
    "Bundesamt für Sicherheit in der Informationstechnik. 2023. Blockchain und Kryptowährungen. Retrieved from https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Technologien_sicher_gestalten/Blockchain-Kryptowaehrung/blockchain-kryptowaehrung_node.html",
    "Jain, S.M. 2023. „Blockchain.,” In: A Brief Introduction to Web3. Apress, Berkeley, CA. https://doi.org/10.1007/978-1-4842-8975-4_2",
    "Baum, A. 2020. „Tokenisation–the future of real estate investment.,” The Future of Real Estate Initiative, 61.",
    "Christodoulou, K., Katelaris, L., Themistocleous, M., Christodoulou, P. und Iosif, E. 2022. „NFTs and the Metaverse Revolution: Research Perspectives and Open Challenges.,” in: Lacity, M.C.,",
    "Zheng, M., Sandner, P. 2022. „Asset Tokenization of Real Estate in Europe.,” In: Lacity, M.C., Treiblmaier, H. (eds) Blockchains and the Token Economy. Technology, Work and Globaliza-tion. Palgrave Macmillan, Cham. https://doi.org/10.1007/978-3-030-95108-5_7",
    "Christodoulou, K., Katelaris, L., Themistocleous, M., Christodoulou, P. und Iosif, E. 2022. „NFTs and the Metaverse Revolution: Research Perspectives and Open Challenges.,” in: Lacity, M.C.",
    "vgl. Gusmann A, Weisenberger F. 2018. Initial Coin Offerings, Tokens im Kontext der Shared Economy.BearingPoint",
    "Hönig, M. 2020. Funktionsweise von Coins und Token. In: ICO und Kryptowährungen. Springer Gabler, Wiesbaden. https://doi.org/10.1007/978-3-658-27688-1_4",
  ];

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Blockchain - Was ist das?
      </h2>
      <div className="p-4 mb-8 bg-green-200 rounded-lg flex items-start">
        <img src={Bernd} alt="Charakterbild" className="w-1/12 h-auto mr-4" />
        <p className="italic text-justify flex-grow">
          Während seiner Recherche stößt Bernd auf den Bergriff Blockchain. Doch
          was ist das nochmal? Als aufmerksamer Leser und Zuhörer weiß Bernd
          inzwischen, dass die Blockchain-Technologie von mutmaßlich einer oder
          mehreren Personen unter dem Pseudonym Satoshi Nakamoto in dem
          Whitepaper beschrieben wurde. Es wird darin dargestellt, wie
          Transaktionen, Hashes und Nonces zu einer blockbasierten Datenstruktur
          zusammengefasst werden können. Innerhalb dieser Datenstruktur können
          die separaten Blöcke mit Hilfe des Hashes eines vorherigen Blocks
          miteinander verknüpft werden. <a href="#sources">[6]</a>,{" "}
          <a href="#sources">[7]</a>
        </p>
      </div>
      <p className="mb-12 text-justify">
        Mittels der Blockchain-Technologie können Daten, wie beispielweise
        Transaktionen, in einer verteilten Infrastruktur ohne eine zentrale
        Instanz nachvollziehbar und manipulationssicher verwaltet werden. Sie
        basiert auf Kryptographie, um Daten zu sichern und die Identität der
        Anwendenden zu überprüfen.<a href="#sources">[8]</a>
        Die Blockchain-Technologie basiert auf einem Peer-to-Peer Netzwerk. Dies
        bedeutet, dass es nicht auf einer zentralen Behörde fundiert, welche den
        System verwaltet. Die Computer, die zu dem Peer-to-Peer Netzwerk
        gehören, sind meist dezentral verteilt und werden in der Fachliteratur
        teils auch als Full Nodes bezeichnet.<a href="#sources">[9]</a>
        Es gibt zwei verschiedene Arten der Blockchain, die Permissioned
        Blockchain und die Permissionless Blockchain. Mehr dazu in Kapitel 2.
      </p>
      <Sources sources={articlesources} />
    </div>
  );
};
export default IntroductionCryptoAssetsPart3;
