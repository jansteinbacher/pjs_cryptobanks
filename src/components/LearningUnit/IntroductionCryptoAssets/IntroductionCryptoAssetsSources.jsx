import Sources from '../../Sources/Sources';

const sources = [
  {
    id: '1',
    text: 'S. Nakamoto, “A peer-to-peer electronic cash system,” bitcoin.org, 2008. [Online]. Available: https://bitcoin.org/en/bitcoin-paper. [Accessed Sept. 21, 2023].',
  },
  {
    id: '2',
    text: 'A. Olbrecht and G. Pieters, “Crypto-currencies and crypto-assets: An introduction,” Eastern Economic Journal, vol. 49, no. 2, pp. 201–205, 2023.',
  },
  {
    id: '3',
    text: 'Vgl. dazu RENNING, BKR 2020, 23, 24; MAUME, in: Maume/Maute, Kryptowerte-HdB, 1 Aufl, 2020, § 12, 19 ff.; zur steuerrechtlichen Einordnung PRINZ, StuB 2019, 257, 257 ff.',
  },
  {
    id: '4',
    text: 'H. Treiblmaier, “Toward more rigorous blockchain research: Recommendations for writing Blockchain Case Studies,” Progress in IS, vol. 2, no. 3. pp. 1–15, 2020.',
  },
  {
    id: '5',
    text: 'Bundesamt für Sicherheit in der Informationstechnik, “Blockchain Macht Daten Praktisch Unveränderbar,” Bundesamt für Sicherheit in der Informationstechnik. [Online]. Available: https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Technologien_sicher_gestalten/Blockchain-Kryptowaehrung/blockchain-kryptowaehrung_node.html. [Accessed Sept. 21, 2023].',
  },
  {
    id: '6',
    text: 'S. M. Jain, “Blockchain,” in A Brief Introduction to Web3. Berkley, CA: Apress, 2022, pp. 11–26',
  },
  {
    id: '7',
    text: 'A. Baum, “Tokenization—The Future of Real Estate Investment?,” The Journal of Portfolio Management, vol. 47, no. 10, pp. 41–61, 2021.',
  },
  {
    id: '8',
    text: 'K. Christodoulou, L. Katelaris, M. Themistocleous, P. Christodoulou, and E. Iosif, “NFTs and the Metaverse Revolution: Research Perspectives and open challenges,” in Blockchains and the Token Economy, M. C. Lacity, H. Treibmeier, Eds. Cham: Palgrave Macmillan, 2022, pp. 139–178.',
  },
  {
    id: '9',
    text: 'M. Zheng and P. Sander, “Asset Tokenization of Real Estate in Europe.,” in Blockchains and the Token Economy, M. C. Lacity, H. Treibmeier, Eds. Cham: Palgrave Macmillan, 2022, pp. 139–178.',
  },
  {
    id: '10',
    text: 'A Gussmann und F. Weisenberger, “Initial Coin Offerings, Tokens im Kontext der Shared Economy,“ BearingPoint, Frankfurt/Main, Germany, 2018. [Online]. Available: https://www.bearingpoint.com/files/Initial_Coin_Offerings.pdf?download=0&itemId=517162. [Accessed Sept. 21, 2023]',
  },
  {
    id: '11',
    text: 'M. Hönig, “Funktionsweise von Coins und token,” in ICO und Kryptowährungen. Wiesbaden: Springer Gabler, 2019, pp. 33–40.',
  },
];

function IntroductionCryptoAssetsSources() {
  return <Sources sources={sources} />;
}

export default IntroductionCryptoAssetsSources;
