import Sources from '../../Sources/Sources';

const sources = [
  {
    id: '1',
    text: 'Schlatt, V., Schweizer, A., Urbach, N., & Fridgen, G. (2016). Blockchain: Grundlagen, Anwendungen und Potenziale.',
  },
  {
    id: '2',
    text: '“Blockchain Macht Daten Praktisch Unveränderbar,” Bundesamt für Sicherheit in der Informationstechnik, https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Technologien_sicher_gestalten/Blockchain-Kryptowaehrung/blockchain-kryptowaehrung_node.html (accessed Sep. 21, 2023).',
  },
  {
    id: '3',
    text: 'Helliar, C. V., Crawford, L., Rocca, L., Teodori, C., & Veneziani, M. (2020). Permissionless and permissioned blockchain diffusion. International Journal of Information Management, 54, 102136.',
  },
  {
    id: '4',
    text: 'Nair, P. R., & Dorai, D. R. (2021, February). Evaluation of performance and security of proof of work and proof of stake using blockchain. In 2021 Third International Conference on Intelligent Communication Technologies and Virtual Mobile Networks (ICICV) (pp. 279-283). IEEE.',
  },
  {
    id: '5',
    text: 'S. Ray, “The difference between Blockchains & Distributed Ledger Technology,” Medium, https://towardsdatascience.com/the-difference-between-blockchains-distributed-ledger-technology-42715a0fa92 (accessed Sep. 22, 2023).',
  },
  {
    id: '6',
    text: 'Gurtu, A., & Johny, J. (2019). Potential of blockchain technology in supply chain management: a literature review. International Journal of Physical Distribution & Logistics Management, 49(9), 881-900.',
  },
];

function IntroductionBlockchainSources() {
  return <Sources sources={sources} />;
}

export default IntroductionBlockchainSources;
