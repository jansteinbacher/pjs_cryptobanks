import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Token from "../../../images/courseBeginner/token.png";
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
const IntroductionCryptoAssetsPart5 = () => {
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
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Coin vs. Token
      </h2>
      <div className="p-4 mb-8 bg-green-200 rounded-lg">
        <p className="italic text-justify">
          Bernd hat inzwischen bereits einige Informationen auf seiner
          Wissensreise durch de Welt der Kryptoassets sammeln können. Doch es
          gibt immer noch Aspekte, die ihm nicht vollständig klar sind. Ein
          solcher Aspekt ist der Unterschied zwischen "Coin" und "Token". Er
          wusste, dass es wichtig ist, diese Begriffe zu verstehen, um die
          Vielfalt der Kryptoassets zu erfassen. Bernd tippt also "Unterschied
          zwischen Coin und Token" in die Suchleiste ein. Die Suchergebnisse
          führen ihn zu einer klaren Erklärung.
        </p>
      </div>
      <div className="flex justify-center mb-8 items-center">
        <img src={Token} alt="Token" className="w-full md:w-1/2 mb-4" />
      </div>
      <p className="mb-12 italic text-justify">
        Token unterscheiden sich von Coins. Während der Coin primär als
        Zahlungsmittel verwendet wird und eine rein digitale Währung darstellt,
        habenToken breitere Anwendungsmöglichkeiten. Sie sind daher nicht als
        „klassischer“ Coin einzustufen (vgl. Gusmann und Weisenberger 2018)
        <a href="#sources">[14]</a>. Die wohl bekanntesten Coins sind der
        Bitcoin, basierend auf der Bitcoin-Blockchain, und der Ethercoin, der
        Coin der Ethereum-Blockchain. Coins, die nach der ersten Kryptowährung,
        dem Bitcoin, auf den Markt gekommen sind, bezeichnet man auch als
        Bitcoin Alternative oder Alt Coin. Token und Coin stehen in einem engen
        Zusammenhang, denn die Transaktionskosten der Token werden mit Coins
        gezahlt <a href="#sources">[15]</a>.
        <br />
        Mit einem tiefen Verständnis für den Unterschied zwischen Coins und
        Tokens setzte Bernd seinen Weg des Lernens und Entdeckens fort. Er
        wusste, dass jedes Puzzleteilchen, das er verstand, ihn näher an die
        vollständige Erkenntnis der Welt der Kryptoassets heranbrachte.
      </p>
      <Sources sources={articlesources} />
    </div>
  );
};
export default IntroductionCryptoAssetsPart5;
