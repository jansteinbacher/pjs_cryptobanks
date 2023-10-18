import Sources from '../../Sources';

const sources = [
  {
    id: '1',
    text: 'H. Arslanian and H. Fischer, “The Continuing Evolution of Crypto-assets.,” in The Future of Finance. Cham: Palgrave Macmillan, 2019, pp-217–230.',
  },
  {
    id: '2',
    text: '“Währungen,” coinbase.com. [Online]. Available: https://www.coinbase.com/trade/asset-categories/currencies. [Accessed Sept. 12, 2023].',
  },
  {
    id: '3',
    text: 'PwC, “Crypto assets under Basel IV: Capital treatment of cryptocurrencies and other tokens.,” PwC, 2019. [Online]. Available: https://digital.pwc-tools.de/basel-iv/crypto-assets/. [Accessed: Sept. 22, 2023].',
  },
  {
    id: '4',
    text: 'Europäische Zentralbank, “Digitaler Euro - European Central Bank,” PwC, 2023. [Online]. Available: https://www.ecb.europa.eu/paym/digital_euro/html/index.de.html. [Accessed: Sept. 22, 2023].',
  },
  {
    id: '5',
    text: '“Stablecoins,” coinbase.com. [Online]. Available: https://www.coinbase.com/trade/asset-categories/stablecoins. [Accessed Sept. 12, 2023].',
  },
  {
    id: '6',
    text: '“Sandbox,” blockchain.com. [Online]. Available: https://www.blockchain.com/explorer/assets/sand. [Accessed Sept. 12, 2023].',
  },
  {
    id: '7',
    text: 'V. Steidl und D. Wenz, “Utility Token,” bitcoin-2go.de, 2023. [Online]. Available: https://bitcoin-2go.de/wiki/utility-token/. [Accessed: Sept. 22, 2023].',
  },
  {
    id: '8',
    text: 'Bundesanstalt für Finanzdienstleistungsaufsicht, “Kryptowertpapierliste nach eWpG.,” Bundesanstalt für Finanzdienstleistungsaufsicht, Sept. 7, 2023. [Online]. Available: https://www.bafin.de/DE/PublikationenDaten/Datenbanken/Kryptowertpapiere/kryptowerte_node.html. [Accessed: Sept. 22, 2023].',
  },
  {
    id: '9',
    text: 'Wertpapierhandelsgesetz. 2023. Retrieved from https://www.gesetze-im-intenet.de/wphg/index.html',
  },
  {
    id: '10',
    text: '“Tops NFTs,” blockchain.com. [Online]. Available: https://www.blockchain.com/explorer/nfts. [Accessed Sept. 12, 2023].',
  },
  {
    id: '11',
    text: 'C. Boeth, “Krypto-Assets im Investment Management - Regulatorischer Rahmen von Krypto Assets und Anwendungsmöglichkeiten der Technologie für Investment Manager,” deloitte.com, 2021. [Online]. Available: https://www2.deloitte.com/de/de/pages/financial-services/articles/krypto-assets-im-investment-management-regulatory.html. [Accessed: Sept. 22, 2023].',
  },
];

function TypesOfCryptoAssetsSources() {
  return <Sources sources={sources} />;
}

export default TypesOfCryptoAssetsSources;
