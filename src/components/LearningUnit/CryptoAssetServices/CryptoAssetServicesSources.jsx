import Sources from '../../Sources/Sources';

const sources = [
  {
    id: '1',
    text: 'Bank Frick, “Bank Frick expands its range of crypto assets and now offers trading and custodian services for Cardano, Polkadot and Tezos,” bankfrick.li, 2022. [Online]. Available: https://www.bankfrick.li/en/news-and-insights/bank-frick-expands-its-range-crypto-assets-and-now-offers-trading-and-custodian-services-cardano. [Accessed: Sept. 22, 2023].',
  },
  {
    id: '2',
    text: 'Bank Frick, “Bank Frick bietet neu Staking als Service für digitale Vermögenswerte an,” bankfrick.li, 2023. [Online]. Available: https://www.bankfrick.li/de/news-und-insights/bank-frick-bietet-neu-staking-als-service-fuer-digitale-vermoegenswerte-an. [Accessed: Sept. 22, 2023].',
  },
  {
    id: '3',
    text: 'Hauck Aufhäuser Lampe, “Krypto-Wertpapierregister­führung,” hal-privatbank.com. [Online]. Available: https://www.hal-privatbank.com/asset-servicing/digitale-assets/krypto-wertpapierregisterfuehrung. [Accessed: Sept. 22, 2023].',
  },
  {
    id: '4',
    text: 'Hauck Aufhäuser Lampe, “Registrar für Kryptowertpapiere und Kryptofondsanteile,” hal-privatbank.com, 2022. [Online]. Available: https://www.hal-privatbank.com/news/2022/registrar-fuer-kryptowertpapiere-und-kryptofondsanteile. [Accessed: Sept. 22, 2023].',
  },
  {
    id: '5',
    text: 'Bundesministerium der Justiz. (2023, Febr. 22). “Gesetz über das Kreditwesen,”  [Online]. Available: https://www.gesetze-im-internet.de/kredwg/index.html. [Accessed: Jan. 13, 2021].',
  },
  {
    id: '6',
    text: 'Deutsche Bundesbank, “Digitales Geld: Welche Optionen hat Europa?,” bundesbank.de, 2021. [Online]. Available: https://www.bundesbank.de/de/presse/gastbeitraege/digitales-geld-welche-optionen-hat-europa--854026#nb5. [Accessed: Sept. 22, 2023].',
  },
  {
    id: '7',
    text: 'M. Tewes, M. Bauer, G. Holz, “Security Tokenization,” Porsche Consulting, 2023. [Online]. Available: https://www.porsche-consulting.com/sites/default/files/2023-07/digital_assets_c_porsche_consulting_2023_0.pdf. [Accessed: Sept. 22, 2023].',
  },
  {
    id: '8',
    text: 'J. Blassl and S. Seiter. Anwendungsfälle von Stablecoins. (Feb. 28, 2013). Accessed: Jun. 3, 2018. [Online Video]. Available: https://youtu.be/psQs_uEw4aA?t=289 [Abgerufen am 29.08.2023].',
  },
  {
    id: '9',
    text: 'I. Henshaw, “Was sind Krypto-Kredite und wie funktionieren sie?,” cointelegraph.com, 2022. [Online]. Available: https://de.cointelegraph.com/explained/what-are-crypto-loans-and-how-do-they-work. [Accessed: Sept. 22, 2023].',
  },
];

function CryptoAssetServicesSources() {
  return <Sources sources={sources} />;
}

export default CryptoAssetServicesSources;
