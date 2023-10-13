import { useState } from 'react';
import PropTypes from 'prop-types';
import Bernd from '../../../images/courseBeginner/charakterBernd.png';
import Token from '../../../images/courseBeginner/token.png';

function Sources({ sources }) {
  const [showSources, setShowSources] = useState(false);

  const toggleSources = () => {
    setShowSources(!showSources);
  };

  return (
    <div className="sources border border-gray-400 rounded p-4">
      <button
        type="button"
        className="text-lg font-semibold"
        id="sources"
        onClick={toggleSources}
      >
        Quellen:
      </button>
      {showSources && (
        <div className="source-list leading-relaxed mt-4">
          <ul>
            {sources.map((source) => (
              <li key={source.id}>
                [{source.id}] {source.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

Sources.propTypes = {
  sources: PropTypes.shape({
    map: PropTypes.func,
    length: PropTypes.number,
  }).isRequired,
};

function IntroductionCryptoAssetsPart5() {
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
    'from=beginner-course',
  );

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Coin vs. Token
      </h2>
      {isComingFromPreviousPage && (
        <div className="p-4 mb-8 bg-green-200 rounded-lg flex items-start">
          <img src={Bernd} alt="Charakterbild" className="w-1/12 h-auto mr-4" />
          <p className="italic text-justify flex-grow">
            Bernd hat inzwischen bereits einige Informationen auf seiner
            Wissensreise durch de Welt der Kryptoassets sammeln können. Doch es
            gibt immer noch Aspekte, die ihm nicht vollständig klar sind. Ein
            solcher Aspekt ist der Unterschied zwischen &ldquo;Coin&rdquo; und
            &ldquo;Token&rdquo;. Er wusste, dass es wichtig ist, diese Begriffe
            zu verstehen, um die Vielfalt der Kryptoassets zu erfassen. Bernd
            tippt also &ldquo;Unterschied zwischen Coin und Token&rdquo; in die
            Suchleiste ein. Die Suchergebnisse führen ihn zu einer klaren
            Erklärung.
          </p>
        </div>
      )}
      <div className="flex justify-center mb-8 items-center">
        <img src={Token} alt="Token" className="w-full md:w-1/2 mb-4" />
      </div>
      <p className="mb-12 italic text-justify">
        Token unterscheiden sich von Coins. Während der Coin primär als
        Zahlungsmittel verwendet wird und eine rein digitale Währung darstellt,
        habenToken breitere Anwendungsmöglichkeiten. Sie sind daher nicht als
        „klassischer“ Coin einzustufen (vgl. Gusmann und Weisenberger 2018){' '}
        <a href="#sources">[10]</a>. Die wohl bekanntesten Coins sind der
        Bitcoin, basierend auf der Bitcoin-Blockchain, und der Ethercoin, der
        Coin der Ethereum-Blockchain. Coins, die nach der ersten Kryptowährung,
        dem Bitcoin, auf den Markt gekommen sind, bezeichnet man auch als
        Bitcoin Alternative oder Alt Coin. Token und Coin stehen in einem engen
        Zusammenhang, denn die Transaktionskosten der Token werden mit Coins
        gezahlt <a href="#sources">[11]</a>.
        <br />
        Mit einem tiefen Verständnis für den Unterschied zwischen Coins und
        Tokens setzte Bernd seinen Weg des Lernens und Entdeckens fort. Er
        wusste, dass jedes Puzzleteilchen, das er verstand, ihn näher an die
        vollständige Erkenntnis der Welt der Kryptoassets heranbrachte.
      </p>
      <Sources sources={articlesources} />
    </div>
  );
}
export default IntroductionCryptoAssetsPart5;
