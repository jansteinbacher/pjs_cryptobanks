import Sources from '../../Sources';

const sources = [
  {
    id: '1',
    text: 'H. Meisner, “Neue Herausforderungen in der Finanzsphäre,” in Finanzwirtschaft in der Internetökonomie. Wiesbaden: Springer Gabler, 2021, pp. 179–218.',
  },
  {
    id: '2',
    text: 'D. Kerscher, Bitcoin: Funktionsweise, Risiken und Chancen der digitalen Währung. Dingolfing: Kemacon UG, 2014',
  },
  {
    id: '3',
    text: 'I. Allison, “Divisions in Sam Bankman-Fried’s Crypto Empire Blur on His Trading Titan Alameda’s Balance Sheet,” The Atlanta Journal Constitution, Nov. 2, 2022. [Online], Available: https://www.coindesk.com/business/2022/11/02/divisions-in-sam-bankman-frieds-crypto-empire-blur-on-his-trading-titan-alamedas-balance-sheet/. [Accessed Sept. 22, 2023].',
  },
  {
    id: '4',
    text: 'G. B. Gorton and J. Zhang, Bank Runs During Crypto Winter. To be published.  [Online]. Available: http://dx.doi.org/10.2139/ssrn.4447703 Add to Citavi project by DOI. [Accessed: Sept. 22, 2023].',
  },
  {
    id: '5',
    text: 'A. de Vries, U. Gallersdörfer, L. Klaaßen, C. Stoll, “Revisiting Bitcoin’s carbon footprint,” Joule, vol. 6, pp. 498–502, 2022.',
  },
  {
    id: '6',
    text: 'M. Tewes, M. Bauer, G. Holz, “Security Tokenization,” Porsche Consulting, 2023. [Online]. Available: https://www.porsche-consulting.com/sites/default/files/2023-07/digital_assets_c_porsche_consulting_2023_0.pdf. [Accessed: Sept. 22, 2023].',
  },
];

function OpportunitiesAndChallengesCryptoAssetsSources() {
  return <Sources sources={sources} />;
}

export default OpportunitiesAndChallengesCryptoAssetsSources;
