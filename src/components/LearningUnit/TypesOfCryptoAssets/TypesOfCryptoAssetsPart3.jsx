import { useState } from 'react';
import PropTypes from 'prop-types';
import UtlityToken from '../../../images/courseBeginner/sand.png';

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

function TypesOfCryptoAssetsPart3() {
  const articlesources = [
    'H. Arslanian and H. Fischer, “The Continuing Evolution of Crypto-assets.,” in The Future of Finance. Cham: Palgrave Macmillan, 2019, pp-217–230.',
    '“Währungen,” coinbase.com. [Online]. Available: https://www.coinbase.com/trade/asset-categories/currencies. [Accessed Sept. 12, 2023].',
    'PwC, “Crypto assets under Basel IV: Capital treatment of cryptocurrencies and other tokens.,” PwC, 2019. [Online]. Available: https://digital.pwc-tools.de/basel-iv/crypto-assets/. [Accessed: Sept. 22, 2023].',
    'Europäische Zentralbank, “Digitaler Euro - European Central Bank,” PwC, 2023. [Online]. Available: https://www.ecb.europa.eu/paym/digital_euro/html/index.de.html. [Accessed: Sept. 22, 2023].',
    '“Stablecoins,” coinbase.com. [Online]. Available: https://www.coinbase.com/trade/asset-categories/stablecoins. [Accessed Sept. 12, 2023].',
    '“Sandbox,” blockchain.com. [Online]. Available: https://www.blockchain.com/explorer/assets/sand. [Accessed Sept. 12, 2023].',
    'V. Steidl und D. Wenz, “Utility Token,” bitcoin-2go.de, 2023. [Online]. Available: https://bitcoin-2go.de/wiki/utility-token/. [Accessed: Sept. 22, 2023].',
    'Bundesanstalt für Finanzdienstleistungsaufsicht, “Kryptowertpapierliste nach eWpG.,” Bundesanstalt für Finanzdienstleistungsaufsicht, Sept. 7, 2023. [Online]. Available: https://www.bafin.de/DE/PublikationenDaten/Datenbanken/Kryptowertpapiere/kryptowerte_node.html. [Accessed: Sept. 22, 2023].',
    'Wertpapierhandelsgesetz. 2023. Retrieved from https://www.gesetze-im-intenet.de/wphg/index.html',
    '“Tops NFTs,” blockchain.com. [Online]. Available: https://www.blockchain.com/explorer/nfts. [Accessed Sept. 12, 2023].',
    'C. Boeth, “Krypto-Assets im Investment Management - Regulatorischer Rahmen von Krypto Assets und Anwendungsmöglichkeiten der Technologie für Investment Manager,” deloitte.com, 2021. [Online]. Available: https://www2.deloitte.com/de/de/pages/financial-services/articles/krypto-assets-im-investment-management-regulatory.html. [Accessed: Sept. 22, 2023].',
  ];

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const isComingFromPreviousPage = window.location.search.includes(
    'from=beginner-course',
  );

  return (
    <div className="container mx-auto py-12 px-12 max-w-screen-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Utility Token
      </h2>
      {isComingFromPreviousPage && (
        <div className="p-4 mb-12 bg-green-200 rounded-lg">
          <p className="italic text-justify">
            Nachdem Bernd sich mehrere Kryptowährungen (Payment Tokens)
            angeschaut hat, stößt er auf ein Kryptoasset, welches sich von denen
            zuvor unterscheidet. Er fragt sich, unter welcher Kategorie der
            Token Uniswap fällt. Laut der Beschreibung kann der Eigentümer damit
            an den Entscheidungen über den Betrieb der gleichnamigen Plattform
            “Uniswap” teilnehmen.
          </p>
        </div>
      )}
      <div
        className="flex justify-center items-center relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={UtlityToken} alt="sand" className="w-full md:w-7/8 mb-4" />

        {hovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 opacity-90">
            <p className="text-justify font-semibold ml-4 mr-4 text-gray-800">
              Utility Token werden auch als “App-Token” bzw. “Nutzungstoken”
              bezeichnet. Dabei wird dem Investor ein bestimmtes Nutzungsrecht
              zur Verfügung gestellt. Er kann also mithilfe des Tokens eine
              bestimmte Blockchain-Anwendung durchführen. Ein konkretes Beispiel
              wäre der Exchange Token, der auf der Krypto-Börse für die
              permanente Reduzierung der Handelsgebühren sorgt. Aufgrund der
              vielfältigen Anwendungsmöglichkeiten von Utility Token, ist es
              schwierig diese zu kategorisieren <a href="#sources">[7]</a>.
            </p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center mb-12">
        <p className="text-sm font-semibold">
          Kursverlauf Token der Sandbox Plattform <a href="#sources">[6]</a>
        </p>
      </div>
      <Sources sources={articlesources} />
    </div>
  );
}

export default TypesOfCryptoAssetsPart3;
